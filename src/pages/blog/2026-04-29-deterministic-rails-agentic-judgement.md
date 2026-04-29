---
templateKey: blog-post
title: "Deterministic Rails, Agentic Judgement: Lessons from building the Avni App Configurator"
date: 2026-04-29T10:00:00.000Z
author: Himesh R
description: A reflection from the T4D AI Cohort 2 midpoint showcase — where to put the LLM, how to shape sub-agents, and how to design tools that an LLM will call.
featuredpost: false
featuredimage: /img/2026-04-29-deterministic-rails-agentic-judgement/cover-agents.png
tags:
  - AI
  - Tech4Dev
  - Architecture
  - LLM
  - Avni
---

I recently presented our Avni App Configurator work at the T4D AI Cohort 2 midpoint showcase. The aim of this post is to put down on paper the same content, with a little more room than slides allow.

We at <a href="https://samanvayfoundation.org" target="_blank" rel="noopener noreferrer">Samanvay Foundation</a> have been building a chat-first AI Configurator for <a href="https://avniproject.org" target="_blank" rel="noopener noreferrer">Avni</a> for some months now. Along the way, we had to course-correct a few times. This post isn't really about the configurator itself — it is about three major things we learnt along the way.

---

## The problem we are trying to solve

Setting up Avni for a new programme is not a one-person job today. At Samanvay, it takes three personas:

1. **Business Analyst** — sits with the program manager, draws out workflows, entities, indicators and reports, and writes a scoping document.
2. **Implementer** — turns the scoping document into Avni configuration: Subject Types, Programs, Forms, Concepts, Rules and role-based access.
3. **Quality Analyst** — walks through the field app and dashboards, checks the rules fire correctly, and flags gaps.

Asking the program manager to do all three in self-service mode is hard — the expertise is uneven, and the requirement → configuration → validation loop is tight.

But these three personas are *well-scoped*. So the **chat-first AI Configurator** is essentially an attempt to automate the three-person team — a BA agent that produces the spec, an Implementer agent that turns the spec into a deployable bundle, and a QA agent that audits the bundle against the requirements. The program manager stays on chat and walks away with a working Avni implementation in minutes, not hours.

The realisation that drove this design was that *though it looks like an LLM problem, most of it is deterministic*. The three lessons below are how we figured out which parts to leave to the LLM and which parts to nail down in code.

## What we built

The system is a stack of tiers, where each layer has a single responsibility.

![Tier architecture: User → Dify → Function Tool Calling service → Avni Backend → Database](/img/2026-04-29-deterministic-rails-agentic-judgement/architecture.png)

A program manager talks to the system in chat. <a href="https://dify.ai" target="_blank" rel="noopener noreferrer">Dify</a> is **the Brains** — it orchestrates the conversation through agent nodes for the fuzzy parts and human gates wherever someone needs to approve. Dify in turn makes HTTP calls to **Avni AI**, our function-tool-calling service — **the Brawn** — a stateless backend with 60+ endpoints handling parsing, spec generation, bundle assembly, rules and validation. Once the bundle is ready, it is uploaded as a ZIP to the Avni backend, which imports it and serves the resulting field app and webapp. PostgreSQL underneath holds config, observations and the audit trail.

A glimpse of the chat experience and the underlying tool calls flowing through:

![Avni AI Configurator chat experience](/img/2026-04-29-deterministic-rails-agentic-judgement/chat-screenshot.png)

![Tool calls flowing through the Avni AI service during configuration](/img/2026-04-29-deterministic-rails-agentic-judgement/tool-calls-screenshot.png)

The mantra we ended up with for this stack is *"Deterministic on the rails, agentic in the gaps."* The three lessons that follow are how we arrived there.

---

## Lesson 1 — Where to put the LLM

The first mistake we made was reaching for the LLM first and writing the contract second. We ended up with non-deterministic outputs that we could not verify or reproduce, and a lot of time spent debugging the model's choices.

The rule we now follow is to **write the contract first**. If the work has a writable schema, we send it down the deterministic path. If the input shape is fuzzy and we cannot pin a contract, we scope an LLM agent to that gap.

In our case, the contract is the **spec** — a structured YAML representation of the program's requirements that captures Subject Types, Programs, Encounter Types, Forms, Concepts and Rules. The Business Analyst agent does the fuzzy work of turning a conversation with the program manager into this spec. From there, converting the spec into Avni configuration is *purely deterministic* — a code pipeline emits the bundle ZIP, with no LLM judgement on the Avni-config side. This is what makes the resulting bundle reproducible and auditable.

![Spec-first flow: program requirements turn into a structured spec, which a deterministic pipeline converts into Avni configuration](/img/2026-04-29-deterministic-rails-agentic-judgement/spec-configuration.png)

We go deterministic when:
1. The schema is writable
2. Reproducibility matters
3. Validation can be expressed in logic
4. LLM cost is not justified — examples here are parsing, validation and state management

We use an LLM agent when:
1. The input shape varies
2. Judgement or reasoning is needed
3. The user is in dialog or asking for clarification
4. The output is open-ended synthesis or correction — examples here are classification, dialog, generation and auditing

What threads the two halves together is **variables** — session ids, phase flags, approvals, retry counters, pause signals. Variables are the glue. They keep the deterministic side stateful and the agent side scoped.

The takeaway in one line — *if you can write the contract, go deterministic; if you cannot, use an agent.*

## Lesson 2 — How to shape the agents

We started with one big agent that did everything — parsed the spec, drafted the bundle, wrote rules, audited the output. The context grew, errors compounded, and edits regenerated whole files. It was unsustainable.

We then split it into **specialist sub-agents** — one agent, one job, with a clear I/O contract and bounded iterations.

![Sub-agent archetypes: Classifier, Planner, Synthesizer, Patcher, Inspector](/img/2026-04-29-deterministic-rails-agentic-judgement/subagent-archetypes.png)

Four things changed for the better:
1. **Small context** — each agent sees only its slice of the world, with less to confuse it.
2. **Low tokens** — small contexts across many agents is cheap, and prompt caching wins.
3. **One specialist, one job** — a clear I/O contract with bounded iterations.
4. **Surgical edits** — edit one file or one rule, and never regenerate the whole.

Five archetypes recur often enough that we now name them:
1. **Classifier** — route input to the right path.
2. **Planner** — break a task into ordered steps.
3. **Synthesizer** — produce the artifact as per the spec.
4. **Patcher** — edit one part, not regenerate.
5. **Inspector** — audit the output as a read-only critic.

The takeaway in one line — *small brain, clear job, surgical edits.*

## Lesson 3 — How to design the tools

The thing that surprised us most in this exercise was that **the tool surface is part of the prompt**. Every byte a tool returns shows up in context the next turn. Sloppy tools exhaust the LLM on the first three calls and leave nothing for going deeper.

So the rule we now follow is to **design every tool assuming an LLM will call it, and return only what is needed.**

![Tool-design principles: sectional retrieval, response truncation, surgical edits, stateless, handles-not-payloads, defensive guards](/img/2026-04-29-deterministic-rails-agentic-judgement/tool-principles.png)

Seven principles came out of this exercise:
1. **Sectional retrieval** — return only what *this* turn needs, not the whole base.
2. **Response truncation** — cap outputs, send "top 20 + count" instead of the full set.
3. **Surgical edits** — target plus patch, not full rewrite.
4. **Diff / merge** — preserve prior edits on regen with a three-way merge.
5. **Stateless** — individual tools do not hold state within themselves. State that needs to persist lives in dedicated tools that save, modify or retrieve it.
6. **Handles, not payloads** — heavy state lives in a store, the agent sees a handle and a summary.
7. **Defensive guards** — validate in, validate out, bound depth, fail clean.

Before we put these in place, the LLM was exhausted on the initial entities and could not go any deeper. After, we use **10× fewer tokens per turn** and depth has become routine.

The takeaway here — *design the tool for the agent that will call it.*

---

## What we are shipping next, and what is in the way

What we are shipping next:
1. Complete the bundle — better support for complex configuration
2. Multi-turn refinement of the configuration after the first draft
3. Unstructured scoping documents (PDF, image) → spec
4. Production-org safety — today the configurator is trial-only
5. Cohort guardrails — regex + small-LLM guards
6. Benchmark setup time against manual webapp configuration

What has been getting in the way is the Dify workflow itself. The pain points we keep hitting:
1. **Doc extractor misses content** — we moved parsing into our own parser inside Avni AI.
2. **Agent nodes cannot call authenticated tools using perishable tokens** — the auth token has to live in a conversation-scoped in-memory store.
3. **No sub-workflow imports** — either HTTP-call ourselves (200–500 ms overhead) or copy-paste flows.
4. **Prompt-length UI limits** — long prompts injected as variables.
5. **YAML / visual-flow config** — adoption curve for developers used to plain code files.

More fundamentally, graph-based orchestration tools — Dify, <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer">LangChain</a>, <a href="https://www.langchain.com/langgraph" target="_blank" rel="noopener noreferrer">LangGraph</a> — force you to spell out control flow as nodes, edges and state variables upfront. That works when the flow is linear, but for long-horizon open-ended tasks, the graph fights you OR the flow gets tangled within itself.

So we are moving the orchestration layer to **Claude managed agents**. The bet is that a runtime that handles its own orchestration — sub-agents, tool use, planning, retries — fits the three-persona problem better than a graph we have to draw by hand. Same lessons, same tier shape — different conductor.

_**"The Devil is in the Details."**_

---

The code is at <a href="https://github.com/avniproject/avni-ai/tree/app-configurator-dev" target="_blank" rel="noopener noreferrer">github.com/avniproject/avni-ai/tree/app-configurator-dev</a>.
