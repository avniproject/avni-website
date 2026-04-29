---
templateKey: blog-post
title: "Deterministic Rails, Agentic Judgement: Lessons from building the Avni App Configurator"
date: 2026-04-29T10:00:00.000Z
author: Himesh R
description: Three lessons from building a chat-first AI Configurator for Avni — and what we changed when our first version stopped scaling.
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

Asking the program manager to do all three jobs themselves is hard. The Avni expertise needed is uneven across the three roles, and the loop between *what we need*, *what we built* and *does it actually work* is tight enough that one person ends up wearing all three hats — which most program managers reasonably do not want to do.

But these three roles are *well-defined*. Each has a bounded job, with reasonably clear inputs and outputs. So our **chat-first AI Configurator** is essentially an attempt to replace this three-person team with three AI specialists working behind a single chat window — a Business Analyst that converses with the program manager and writes down the plan, an Implementer that turns the plan into a working Avni app, and a Quality Analyst that audits the result against the original requirements. The program manager stays on chat and walks away with a working Avni implementation in minutes, not hours.

The realisation that drove this design was that, *though the whole thing looks like an AI problem, most of it is actually predictable, repeatable plumbing* (what engineers call *deterministic*). The three lessons that follow are how we figured out which parts to leave to the AI, and which parts to nail down in plain code.

## What we built

The system is a stack of layers, each with one job.

![Tier architecture: User → Dify → Function Tool Calling service → Avni Backend → Database](/img/2026-04-29-deterministic-rails-agentic-judgement/architecture.png)

A program manager types a message in chat. From that point on, three things happen behind the scenes. <a href="https://dify.ai" target="_blank" rel="noopener noreferrer">Dify</a> is **the Brains** — it reads the message, decides what should happen next (a clarifying question? draft a form? generate a rule?), and routes the work accordingly. Whenever a human needs to approve something, it pauses there. The Brains then talks to **Avni AI**, our own service of about 60 small helpers — **the Brawn** — that do the actual work: parsing uploaded documents, drafting the plan, assembling the final app, writing rules, and checking that everything is valid. Once everything checks out, the finished Avni app is handed off to the regular Avni system, which serves it to field workers exactly the same way as any other Avni app.

Underneath sits a database — the same one any Avni installation uses — that stores the finished app and the data it collects.

A glimpse of the chat experience and the underlying tool calls flowing through:

![Avni AI Configurator chat experience](/img/2026-04-29-deterministic-rails-agentic-judgement/chat-screenshot.png)

![Tool calls flowing through the Avni AI service during configuration](/img/2026-04-29-deterministic-rails-agentic-judgement/tool-calls-screenshot.png)

The mantra we ended up with for this stack is *"Deterministic on the rails, agentic in the gaps"* — predictable code where we can write the rules down, AI judgement where we cannot. The three lessons that follow are how we arrived there.

---

## Lesson 1 — Where to use AI, and where to use plain code

Our first instinct was to throw the whole problem at the AI and see what came back. The output looked impressive in demos, but we could not verify it, and running the same input twice gave us slightly different answers — which is a problem if the result is a programme's data-collection app.

The rule we now follow is **write the rules down first**. If the work has clear, predictable rules — *turn this checklist into Avni forms, validate that all mandatory fields are filled* — we use plain code. If the input is fuzzy and we cannot pin the rules down — *like a conversation with a program manager* — we hand it to an AI specialist, with a tightly-scoped job.

In our case, the "rules written down" piece is the **spec** — a structured plan of what the app needs, capturing Subject Types, Programs, Encounter Types, Forms, Concepts and Rules. The Business Analyst specialist does the fuzzy work of turning a conversation with the program manager into this spec. From there, converting the spec into the actual Avni app is *plain code* — no AI judgement on the Avni-config side. This is what makes the resulting app reproducible and auditable.

![Spec-first flow: program requirements turn into a structured spec, which a deterministic pipeline converts into Avni configuration](/img/2026-04-29-deterministic-rails-agentic-judgement/spec-configuration.png)

**We use plain code when:**
1. The rules don't change between two runs of the same input
2. We need the same answer every time
3. There is a clear right answer, and we can describe what "right" looks like
4. Examples in our case: parsing uploaded documents, validating a form, keeping track of where we are in a conversation

**We use AI when:**
1. The input is open-ended — a conversation, a free-form document, an image
2. We need judgement, not a lookup
3. The user is asking for clarification, or going back and forth
4. The output is open-ended — drafting text, fixing a broken configuration, generating something from scratch
5. Examples in our case: deciding which path to take, figuring out what the program manager actually wants, drafting form text, auditing whether a configuration really meets the original goals

What ties the two halves together is a small set of shared notes — *where are we in the conversation, has the user approved this draft yet, how many times have we tried to fix this rule.* Both the AI side and the plain-code side read and update these notes, and that is how they stay in sync.

The takeaway in one line — *if you can write the rules down, use code; if you cannot, use AI.*

## Lesson 2 — One AI doing everything is a bad idea

We started with one big AI generalist doing everything — listening to the program manager, drafting the app, writing rules, auditing the result. The more we asked it to do, the more it forgot. Small mistakes early on snowballed into bigger ones later, and every fix tended to redo the whole app from scratch.

So we split the one big AI into a team of small AI specialists (engineers call these *agents*) — one specialist per job, each with a clear input and a clear output, and a hard limit on how long it gets to keep trying.

![Sub-agent archetypes: Classifier, Planner, Synthesizer, Patcher, Inspector](/img/2026-04-29-deterministic-rails-agentic-judgement/subagent-archetypes.png)

Four things changed for the better:
1. **Less to confuse it** — each specialist sees only the slice of the world it needs.
2. **Cheaper** — small inputs cost less than one big input. And because each specialist's setup looks the same on every call, we get a discount on the repeated parts.
3. **One job, done well** — clear inputs, clear outputs, and a fixed number of tries before it stops and asks for help.
4. **Edit, don't redo** — when something needs fixing, change one form or one rule, not the whole app.

Five kinds of specialist recur often enough that we now name them:
1. **Classifier** — route input to the right path.
2. **Planner** — break a task into ordered steps.
3. **Synthesizer** — produce the artifact as per the plan.
4. **Patcher** — edit one part, not regenerate.
5. **Inspector** — audits the work as a read-only critic, doesn't change anything itself.

The takeaway in one line — *small brain, clear job, surgical edits.*

## Lesson 3 — Design the helpers for an AI, not a human

The surprise here was that **the helpers we build are themselves part of the AI's prompt**. Every byte a helper sends back sits in the AI's working memory the next turn, and the AI pays per word for it. If the Brawn hands the AI the entire configuration every time it asks a question, the AI runs out of room within three calls and cannot go any deeper into the actual work.

So the rule we now follow is: **design every helper assuming an AI will be using it, and hand back only what is needed for the next step.**

![Tool-design principles: sectional retrieval, response truncation, surgical edits, stateless, handles-not-payloads, defensive guards](/img/2026-04-29-deterministic-rails-agentic-judgement/tool-principles.png)

Six principles came out of this exercise:
1. **Hand over the section, not the book** — when the AI asks about a particular form, return just that one form, not the whole configuration.
2. **Cap the answer** — if there are 500 matches, send the top 20 and a count, not all 500.
3. **Edit, don't rewrite** — let the AI change one rule in one form, instead of regenerating the form.
4. **Don't carry the world around** — helpers don't keep their own memory. Anything that needs to persist lives in one shared notebook, with separate helpers to save, modify or read from it.
5. **Use a bookmark, not the page** — when state is bulky (a 30-page document, a large Avni configuration), the AI gets a bookmark and a one-line summary, not the whole thing.
6. **Check the door, both directions** — every helper validates what comes in and what goes out, rejects oversized or malformed requests, and fails clearly when it cannot help.

Before we did this, the AI was burnt out within the first three steps and could not go any deeper into the work. After, it uses **about a tenth of the words it used to per step** — so it can keep going for much longer, and the work it produces is more thorough.

The takeaway here — *design the helper for the AI that will be using it.*

---

## What we are shipping next, and what is in the way

What we are shipping next:
1. Better support for the more complex parts of an Avni configuration
2. Multi-turn conversations — letting program managers refine the configuration after the first draft, not start from scratch
3. Reading scoping documents (PDFs, images) directly, instead of asking the program manager to retype them
4. Letting real organisations use the configurator on their live setup — today it is trial-only, sandboxed
5. Safety rails — preventing the AI from going off-rails on sensitive prompts
6. Measuring how much faster the AI route is than the manual one

What has been getting in the way is the workflow tool we built on top of (Dify). It is good for simple, linear chats, but the configurator is not that. A QA specialist needs to send the Implementer back with a fix; the Business Analyst sometimes needs to re-engage the program manager halfway through. We hit Dify's edges hard enough on each of these that we are switching tools.

<details>
<summary><strong>For the technically curious — what didn't work in Dify</strong></summary>
<br/>
<ul>
<li><strong>Doc extractor misses content</strong> — we moved parsing into our own parser inside Avni AI.</li>
<li><strong>Agent nodes cannot call authenticated tools using perishable tokens</strong> — the auth token has to live in a conversation-scoped in-memory store.</li>
<li><strong>No sub-workflow imports</strong> — either HTTP-call ourselves (200–500 ms overhead) or copy-paste flows.</li>
<li><strong>Prompt-length UI limits</strong> — long prompts injected as variables.</li>
<li><strong>YAML / visual-flow config</strong> — adoption curve for developers used to plain code files.</li>
</ul>
</details>

More fundamentally, orchestrating **open-ended, long-horizon tasks** — the kind where the AI needs to loop back, change its mind, or hand work between specialists — using <a href="https://www.langchain.com" target="_blank" rel="noopener noreferrer">LangChain</a>, <a href="https://www.langchain.com/langgraph" target="_blank" rel="noopener noreferrer">LangGraph</a> or Dify was a lost cause for us. These tools ask you to draw the whole workflow as a flowchart upfront, before you know what is going to happen. That works for simple, linear flows. The configurator is not that. We ended up with workarounds piled on workarounds.

So we are switching the brains of the system to **Claude managed agents** — a different kind of AI runtime where the AI plans its own steps as it goes, instead of being routed through a fixed flowchart. Same lessons, same shape — different conductor.

_**"The Devil is in the Details."**_

---

The code is at <a href="https://github.com/avniproject/avni-ai/tree/app-configurator-dev" target="_blank" rel="noopener noreferrer">github.com/avniproject/avni-ai/tree/app-configurator-dev</a>.
