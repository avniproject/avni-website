---
templateKey: blog-post
title: "AI in Samanvay : How we actually build and run the Avni platform now"
date: 2026-07-10T10:00:00.000Z
author: Himesh R
description: A tour through where a small team now leans on AI — scoping, design, build, QA, release, support — and where we still keep a person on every call that matters.
featuredpost: false
tags:
  - AI
  - Software Engineering
  - Tech4Dev
  - Social Impact
---

A year ago, if you'd asked us to imagine "usage of AI in software development", we'd not have come up with anything more than "a coding assistant that converts pseudo-code into a syntactically accurate program". That's being done now, but it's the least interesting thing we use AI for.

We're a small team building and running Avni, an open-source platform that reaches over a million beneficiaries across 70-plus organisations. We can't hire people every time we take on a new implementation, so over the last year we've pushed AI into nearly every stage of the work — not just writing code, but scoping an implementation before any code exists, checking a design against the real codebase, running release QA, and keeping ten repositories' worth of requests in one place. Here's the whole arc, and where a human still steps in.

## Before any code : scoping and estimates

When a new organisation comes to us, someone has to work out what their field programme needs and how much of it Avni already does — subject types, forms, programmes, rules, reports. AI now does a first pass at that mapping and sorts each requirement into "just configuration" or "real development", and then a person refines it. Our estimates lean on the same habit: instead of guessing, we calibrate against a running record of how long comparable features actually took. And when we honestly don't know whether something is feasible, we build a quick prototype before we put a number in front of anyone.

## Design that starts from the code, not from memory

Once a feature is worth building, we don't write the spec from imagination. AI reads the live codebase first: does the data model really behave the way we assume, does the sync match how similar features already work, what have we forgotten. That feeds a spec we refine section by section, then cut into stories detailed enough that an engineer who's never touched Avni can pick one up and get it right. A separate pass then checks each spec against a fixed list — including the thing that's easiest to skip under deadline: does this still hold up at the scale of a large, real deployment.

## Building it : two teams, one habit

On the platform side, an approved story runs in its own workspace. We plan the change together with its tests, write both, show they pass, then run an AI review-and-simplify pass before calling it done. Nothing merges until a person has approved the plan and read the pull request.

The implementation team — the folks who configure Avni for a single organisation's programme — feel the same pressure from a different angle. Their job is turning requirements into forms, subject types, programmes and rules, and generating that organisation's configuration. We've built tooling that gets a first pass at that config from a structured spec, drawing on a knowledge base of roughly fifty past implementations. The harder half — taking loosely structured input like a PDF, a spreadsheet or a call transcript and getting reliable rule logic out the other end — is in pilot, being improved. A person reviews everything before it goes live.

## Making sure it's right

Every change gets an AI-assisted review, and a second engineer reads the diff before it merges; the tests are written alongside the code, not bolted on later. That buys back time for the one thing AI can't do for us — release-level testing. Rather than re-test everything by hand, we generate a test charter that reads what changed across a release, ranks it by risk (a sync or database change matters far more than a cosmetic tweak), and points QA at the hours that actually count. Underneath it, a library of real regression scenarios grows release over release, so a test case we fought for once doesn't quietly get forgotten.

Shipping has its own check. Before a release goes out, we confirm every story marked for it is really done, that its code actually landed on the release branch, and that nothing meant for a later release slipped in early — the kind of gap that used to surface only when someone hit a bug in the field.

## Running it, and staying on top of it

When something breaks, a rough note — often a sentence and a screenshot — becomes a proper bug report: repro steps, a suggested severity, a check against issues we already have open, and a first guess at which recent change caused it. A person reads it before it's filed. When the cause isn't obvious, the same evidence-first approach traces it through the system instead of guessing at a fix, and every incident we close leaves behind a written runbook so the next person doesn't start from scratch.

Under all of it is the quieter problem a small team across ten codebases lives with every day: requests landing on a board, in an inbox, in a chat thread, with no easy way to tell what's urgent from what merely feels urgent. Pulling that into one prioritised view used to eat a real chunk of the week. It's now mostly automatic — though it still stops and asks whenever it can't tell whose call something is.

## Under the hood : the tooling

For the technically curious, the stack behind the above:

- **The codebase.** Avni is open source across roughly ten repositories at [github.com/avniproject](https://github.com/avniproject) — the Android field app (`avni-client`), the server (`avni-server`), the web console (`avni-webapp`), the shared data models (`avni-models`), the reporting pipeline (`avni-etl`), the rules configuration (`rules-config`) and the infrastructure (`avni-infra`), among others.
- **Where the day-to-day happens.** A lot of this lives outside the product code, in operational repositories — `avni-product-ops` (release readiness, QA charters, cross-repo triage, and the prioritised matrix that decides what to work on next), `avni-support-ops` (turning support tickets into fixes), a shared `avni-skills` library the rest of the team draws on, and `data-fixes` (scripted, reviewed corrections to live data at scale). Several of these are private, but the working style is identical to the code: written down, versioned, and reviewed before it runs.
- **The agent.** Most of this runs through Claude Code (Anthropic), on Claude Opus and Sonnet, working directly against those repositories.
- **Our process, written down.** The pipeline above — scope, spec, break into stories, implement, diagnose, turn a rough note into a bug report, generate a test charter, review, verify a release — lives as reusable *skills* and multi-agent *workflows*, so the same discipline is a single command away for anyone on the team. For the core engineering habits (think before building, test-first, debug systematically, verify before calling it done) we build on the open-source *superpowers* toolkit from Anthropic's official Claude Code marketplace rather than reinventing them.
- **Connected tools (MCP).** The agent reaches GitHub (issues, pull requests, project boards), Google Workspace (docs and sheets), and a real browser through Playwright for exercising the web console during QA.
- **Supporting pieces.** A local mirror of every open issue for fast triage; scripts that check a release is genuinely ready to ship; a knowledge base of past implementations that seeds new configuration; and, for field apps that must run offline, small vision and language models doing inference on the device itself.

The platform itself is fully open source on public GitHub; the day-to-day operational tooling is a mix of public and private. If any of it is useful to your team, get in touch — we're glad to share how it works.
