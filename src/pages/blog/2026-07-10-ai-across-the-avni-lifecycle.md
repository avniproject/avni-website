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

Every few weeks someone asks how a team our size ships this much. The lazy answer is "AI." The honest answer is longer, funnier, and has a lot more humans in it than you'd think.

We build and run Avni — open-source software 70+ organisations use to reach over a million people. We can't hire an engineer when a bunch of NGOs show up. So this year we handed AI the boring 80% of every job and kept the 20% that actually needs to be owned by a human.

Here's the whole thing on one screen. Then the receipts.

## The whole thing : on one screen

| Stage | The command | What AI does | Who decides |
|---|---|---|---|
| **Scope** | `/analyse` | maps what the NGO needs, splits config vs code, estimates | a person |
| **Design** | `/spec` · `/spec-review` | reads the live code, drafts the spec, checks it against reality | a person |
| **Build** | `/implement` · `/code-review` | plans, writes the code + tests, reviews the diff | a person |
| **Release & QA** | `/test-charter` · `/capture-bug` | ranks what's risky, writes and fixes the tests, files the bug | QA |
| **Support** | `/triage` · `/datafix` | reads the ticket, drafts the reply, writes the fix | a person |
| **Orchestrate** | `conductor` | pulls every open thread into one prioritised list | a person |

Every row ends the same way: **AI drafts, a human decides.** That last column never changes. That's the whole trick.

## Scope : what does this NGO even need

An NGO turns up wanting Avni for, say, a maternal-health programme. Before anyone writes a line of code, `/analyse` maps what they need onto what Avni already does — who gets tracked, the forms, the workflows, the rules — and sorts each piece into "just configuration" or "actually needs code." `/impl-scope` turns that into a scoped estimate, calibrated against the fifty-odd setups we've already done instead of a number pulled from the sky.

If we're not sure something's even possible, we build a throwaway prototype before we promise anyone a date. **We decide what's in.**

## Design : read the code, then write the spec

Here's the unglamorous secret: the spec is written *from the code*, not from memory. `/spec` has AI read the live codebase first — does the data model actually work the way we assume, does it sync the way similar features already do, what are we forgetting — and only then drafts the spec. `/spec-review` checks that draft back against real code across our repos: invented endpoints, missing pieces, will-it-survive-a-big-org. `/story` cuts it into work small enough that someone who's never seen Avni could pick it up.

Boring? Extremely. It's also exactly why the next stage is fast. **We sign it off.**

## Build : straight to master, no ceremony

A story lands. `/implement` plans the change, writes the code and the tests against that plan, and the developer runs the thing to confirm it actually works — revolutionary, I know.

Then the part people get weird about: **we stopped reading diffs line by line.** Every change gets an AI `/code-review` pass — the author runs it, a peer runs it again — and we argue with what it flags. We didn't fire the reviewers. We fired the ritual where a human squints at 400 lines at 6pm pretending to catch a race condition. Straight to `master`, no pull requests. The seatbelt isn't a merge gate — it's a design we agreed up front, plus a few reviews on every change after a compulsive shake-up, and finally a dummy test the developer runs themselves. **A person still owns what lands.**

## Release & QA : test what's scary, skip what's not

In our QA repo, AI *wrote* the tests — Maestro flows for the Android app, Playwright for the web console — and, more usefully, it *validates them against the live app and fixes them when they break*, telling a real regression apart from a flaky script. One of those harnesses drove the real web console against production, tailed the server log (read-only) alongside, and caught a template action that blew up with an HTTP 500 nobody had managed to reproduce. When something breaks in the field, `/capture-bug` turns "sync spins forever, here's a screenshot" into a proper report with the suspect commit already named, and `/diagnose` chases the root cause. `verify_release.py` then does the unglamorous border check: is every story really done, did the code actually land on the release branch, did anything sneak in that belongs to next month. **QA calls what ships.**

## Support : a ticket, minus the busywork

A support ticket lands. `/triage` reads it, works out whether it's a settings mix-up, a data problem, or a real bug, and drafts the reply in plain language — no jargon, no internal IDs, no personal data. This is where the guardrails get strict, because it's the one stage that touches real people's data.

So the rules are hard, not vibes. `/investigate` runs pre-vetted, read-only queries against a production *replica* — the connection is read-only by construction, and the AI will refuse to so much as write an `UPDATE`. Every query is scoped to a single organisation and can't reach across into anyone else's data; who ran what, and when, gets logged — the results never do. `/report` drafts read-only analytics and never touches a live dashboard. And `/datafix`, the one place data actually gets corrected, only ever *writes a SQL file* for a human to review and run — there is no write connection to any database in that workspace at all.

AI does the reading and the drafting. **A human hits send, and a human runs the fix.**

## Orchestrate : the part that runs the humans

This is the one that surprises people, and honestly the heaviest AI use of the lot. Running a platform across ten repos means work arrives everywhere at once — a board, an inbox, a chat thread, an SOP nobody's opened in a month. `conductor` fans a small squad of agents across all of it, notices the same thing showing up in four places, and folds it into one prioritised list of what's actually urgent versus what merely feels it. `conductor-execute` then takes the parts that are just drafting — an estimate, an analysis, a reply — and fans *those* out to parallel agents too, one writing while another checks its work.

It's turtles all the way down: agents coordinating the agents. But it stops and asks the second it can't tell whose call something is. **The human is the only thing that actually decides.**

## What it looks like : a normal afternoon

![Four terminal sessions, each doing a different kind of AI-assisted work across the lifecycle — scoping a new deployment, building a feature, release QA, and triaging a support ticket](/img/2026-07-10-ai-across-the-avni-lifecycle/lifecycle.png)

*Four kinds of work at once — scoping, building, testing, triaging — a person on the end of every one.*

## The honest part : what's still hard

None of this comes for free, and the failure we watch for hardest is our own. AI writes a spec that reads beautifully and is quietly wrong, and a confident, fluent answer is the easiest kind to wave through. The review gates exist for exactly that — us trusting good writing too fast.

It's also brilliant where there's a pattern to copy and merely okay where there isn't. Give it a feature with close cousins already in the codebase and it flies; ask for something genuinely new, or the estimate that rides on it, and the judgement is still ours. And the lesson we paid for: it has to work from the real code, not from memory. Left to recall how the system behaves, it will tell you confidently, and be wrong.

## The Q&A : what people actually ask

**Did you fire everyone and let a robot do it?**
No. We fired the boring parts. The people are all still here, doing the 20% that needed them the whole time.

**Isn't this just AI hype with a nonprofit logo on it?**
Fair suspicion. The tell is the "who decides" column above — it's a person in every row. If AI were really running the show, we'd have shipped something catastrophic by now. Ask us again in a year.

**When does it screw up?**
Constantly, confidently. It'll write a spec that reads great and is wrong, or a fix that's subtly off. That's the entire reason nothing ships on the AI's say-so.

**We're a smaller team than you. Can we do this?**
Probably, and cheaper than you'd think — most of the above is open source plus an off-the-shelf coding agent. The hard part isn't the tools, it's the discipline of not believing them. Come talk to us.

**Honestly, how much of this is you and how much is the AI?**
The typing is mostly AI. The judgement is mostly us. Turns out the second one was the actual job all along.

## Under the hood : the tooling

For the people who scrolled straight here — the stack:

- **The code** is open source across roughly ten repos at [github.com/avniproject](https://github.com/avniproject): the Android app, the server, the web console, the reporting pipeline, the rules and the infra.
- **The agent** is Claude Code (Anthropic), on Opus and Sonnet, working straight against those repos.
- **The commands** above — `/analyse`, `/implement`, `/triage`, `conductor` and friends — are our own reusable *skills* and multi-agent *workflows*: the pipeline, written down, so anyone on the team is one word away from it. For the engineering habits underneath, we lean on the open-source *superpowers* toolkit rather than reinventing them.
- **The reach** is via MCP — the agent talks to GitHub, Google Workspace, a real browser for testing, and read-only production data. Never a write connection where it shouldn't have one.

Most of it is public. The ops repos that run our day-to-day (`avni-product-ops`, `avni-support-ops`, `avni-qa`) are a mix of public and private, but the working style is identical: written down, versioned, reviewed before it runs. If any of it's useful to your team, get in touch — we're glad to share how it works.

---

*This blog was written using AI, inspired by Kevin Hart. If you got any problems with that, you know where to find me.*
