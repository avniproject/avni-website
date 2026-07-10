---
templateKey: blog-post
title: "AI in Samanvay : How we actually build and run the Avni platform now"
date: 2026-07-10T10:00:00.000Z
author: Himesh R
description: Story of a small team leveraging AI to amplify results
featuredpost: false
featuredimage: /img/2026-07-10-ai-across-the-avni-lifecycle/lifecycle.png
tags:
  - AI
  - Software Engineering
  - Tech4Dev
  - Social Impact
---

A year ago, if you'd asked us to imagine "usage of AI in software development", we'd not have come up with anything more than "a coding assistant that converts pseudo-code into a syntactically accurate program". That's being done now, but it's the least interesting thing we use AI for.

We're a small team building and running Avni, an open-source platform that reaches over a million beneficiaries across 70-plus organisations. We can't hire people every time we take on a new organisation, so over the last year we've pushed AI into nearly every stage of the work — not just writing code, but working out what a new organisation needs before any code is written, checking a design against the real codebase, running release QA, and pulling a scattered stream of requests into one prioritised list. Here's the whole arc, and where a human still steps in.

## Before any code : scoping and estimates

When a new organisation comes to us, someone has to work out what their field programme needs and how much of it Avni already does — what to track, the forms to capture it, the workflows, the rules and the reports. AI now does a first pass at that mapping and sorts each requirement into "just configuration" or "real development", and then a person refines it. Our estimates lean on the same habit: instead of guessing, we calibrate against a running record of how long comparable features actually took. And when we honestly don't know whether something is feasible, we build a quick prototype before we put a number in front of anyone.

## Design that starts from the code, not from memory

Once a feature is worth building, we don't write the spec from imagination. AI reads the live codebase first: does the data model really behave the way we assume, does data sync between the field app and the server the way similar features already do, what have we forgotten. That feeds a spec we refine section by section, then cut into stories detailed enough that an engineer who's never touched Avni can pick one up and get it right. A separate pass then checks each spec against a fixed list — including the thing that's easiest to skip under deadline: does this still hold up at the scale of a large, real deployment.

## Building it : two teams, one habit

On the platform side, the hard thinking is already done: we deliberately frontload design and spec, so by the time a story reaches a developer the big decisions are settled. From there it moves fast. The developer plans the change, has AI generate the code against that plan along with its tests, runs an AI code review over the result, and tries it out themselves. A second engineer then runs their own AI-assisted review of the change. We work straight onto master or the release branch — no pull requests — so the safeguard isn't a merge gate: it's the design agreed up front, plus an AI review and a peer review on every change.

The implementation team — the folks who configure Avni for a single organisation — feel the same pressure from a different angle. Their job is turning requirements into forms, workflows and rules, and generating that organisation's configuration. We've built tooling that gets a first pass at that config from a structured spec, drawing on a knowledge base of roughly fifty past setups. The harder half — taking loosely structured input like a PDF, a spreadsheet or a call transcript and reliably generating the conditional rules behind each form — is in pilot, still being improved. A person reviews everything before it goes live.

## Finally : QA and a release sanity check

With per-change review already behind us and the tests written alongside the code, QA spends its time where it matters most — on the release as a whole, not on re-checking every change by hand. We generate a focused, risk-ranked test plan that reads what changed across a release (a data-sync or database change matters far more than a cosmetic tweak) and points testers at the hours that actually count. Underneath it, a library of real-world test cases grows release over release, so a case we fought for once doesn't quietly get forgotten.

Then a last sanity check before it ships. We confirm every story marked for the release is really done, that its code actually landed on the release branch, and that nothing meant for a later release slipped in early — the kind of gap that used to surface only when someone hit a bug in the field.

## Running it, and staying on top of it

When something breaks, a rough note — often a sentence and a screenshot — becomes a proper bug report: steps to reproduce it, a suggested severity, a check against issues we already have open, and a first guess at which recent change caused it. A person reads it before it's filed. When the cause isn't obvious, the same evidence-first approach traces it through the system instead of jumping to a fix, and every incident we close leaves behind a short written runbook — what broke, why, and how we fixed it — so the next person doesn't start from scratch.

Under all of it is the quieter problem a small team across ten codebases lives with every day: requests landing on a board, in an inbox, in a chat thread, with no easy way to tell what's urgent from what merely feels urgent. Pulling that into one prioritised view used to eat a real chunk of the week. It's now mostly automatic — though it still stops and asks whenever it can't tell whose call something is.

## What's still hard

None of this is free, and a few things still bite:

- **AI output gets believed too easily.** A spec or a bug report reads well, so it's tempting to wave it through — and a fluent, confident artifact is not the same as a correct one. The human review gates exist precisely because AI work gets trusted on easy belief.
- **It's strongest on pattern-replication.** When a feature has clear analogs already in the codebase, AI is quick and reliable. Genuinely novel design — and the estimates that ride on it — still need human judgement, and we've learned not to over-trust either.
- **Grounding it in the real code is everything.** Working "from memory" produced specs that were confident and wrong; having AI read the live codebase before it writes anything was the single biggest change in whether we can trust what comes out.

![Four terminal sessions, each doing a different kind of AI-assisted work across the lifecycle — scoping a new deployment, building a feature, release QA, and triaging a support ticket](/img/2026-07-10-ai-across-the-avni-lifecycle/lifecycle.png)

*A normal afternoon: AI doing a different kind of work in each pane — scoping, building, testing, triaging — with a person on the end of every one.*

## Under the hood : the tooling

For the technically curious, the stack behind the above:

- **The codebase.** Avni is open source across roughly ten repositories at [github.com/avniproject](https://github.com/avniproject) — the Android field app (`avni-client`), the server (`avni-server`), the web console (`avni-webapp`), the shared data models (`avni-models`), the reporting pipeline (`avni-etl`), the rules configuration (`rules-config`) and the infrastructure (`avni-infra`), among others.
- **Where the day-to-day happens.** A lot of this lives outside the product code, in operational repositories — `avni-product-ops` (release readiness, risk-ranked test plans, cross-repo triage, and the prioritised view of what to work on next), `avni-support-ops` (turning support tickets into fixes), a shared `avni-skills` library the rest of the team draws on, and `data-fixes` (scripted, reviewed corrections to live data at scale). Several of these are private, but the working style is identical to the code: written down, versioned, and reviewed before it runs.
- **The agent.** Most of this runs through Claude Code (Anthropic), on Claude Opus and Sonnet, working directly against those repositories.
- **Our process, written down.** The pipeline above — scope, spec, break into stories, implement, diagnose, turn a rough note into a bug report, generate a test plan, review, verify a release — lives as reusable *skills* and multi-agent *workflows* (packaged instructions and multi-step scripts anyone on the team can invoke by name), so the same discipline is a single command away. For the core engineering habits (think before building, test-first, debug systematically, verify before calling it done) we build on the open-source *superpowers* toolkit from Anthropic's official Claude Code marketplace rather than reinventing them.
- **Connected tools (MCP).** The agent reaches GitHub (issues, commits and project boards), Google Workspace (docs and sheets), and a real browser through Playwright for exercising the web console during testing.
- **Supporting pieces.** A local mirror of every open issue for fast triage; scripts that check a release is genuinely ready to ship; a knowledge base of past setups that seeds new configuration.

The platform itself is fully open source on public GitHub; the day-to-day operational tooling is a mix of public and private. If any of it is useful to your team, get in touch — we're glad to share how it works.
