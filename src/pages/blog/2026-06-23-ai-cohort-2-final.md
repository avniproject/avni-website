---
templateKey: blog-post
title: "From Few Weeks to Few Days: How AI Is Changing the Way NGO Field Apps Are Built"
date: 2026-06-23T12:00:00.000Z
author: Maha Lakshme S
featuredpost: false
description:
featuredimage:
tags:
- AI
- AI cohort
---

*Samanvay Foundation | AI Cohort 2 | June 2026*

---

## The Platform: Avni

[Avni](https://avniproject.org) is an open-source, mobile-first field data collection platform. It works offline, syncs when there is a signal — even days later — and is sector-agnostic: health, education, sanitation, livelihoods. It is a recognised Digital Public Good (DPG), stewarded by [Samanvay Foundation](https://samanvayfoundation.org) since 2016.

Today, Avni powers:
- **11M+ beneficiaries** tracked across communities
- **70+ organisations** — NGOs, social enterprises, government programmes
- **100M+ field visits** recorded

But there has always been a bottleneck: **getting an NGO from programme plan to working app takes 2 to 3 weeks of expert engineering time.** That cost, paid by every new partner, is what we set out to reduce.

---

## The Problem We Decided to Solve

Meet Priya, an implementation engineer at Samanvay. When an NGO comes to Avni, she translates their programme requirements into a working app — by hand.

Her typical process:
- **Week 1** — turn messy notes, calls, and emails into a structured specification workbook
- **Weeks 1–2** — build out 32+ forms by hand
- **Weeks 2–3** — write every validation rule and other rules(to make the mobile app work as expected) in JavaScript, one by one

That last part is the most repetitive. A single spec line like *"Last Menstrual Period — cannot be a future date"* becomes:

```javascript
if (lmp > today)
  return "LMP can't be in the future";
```

Multiply that by ~300 rules per app. Priya writes each one from scratch.

The question we brought to the AI cohort was simple: **What if the specification just got converted to a working app automatically — and Priya reviewed instead of typing everything from scratch?**

---

## The Cohort: Three Months of Learning, Pivoting, and Building

Samanvay was selected for **Tech4Dev's AI Cohort 2**, which began in March 2026. We entered with a clear bottleneck identified and an ambitious goal: automate the journey from programme specification to deployable Avni app using AI.

The path was not straight.

**We started with Dify** for orchestration. It gave us speed to prototype, but not the flexibility we needed for the nuanced, multi-step generation process Avni apps require. The cohort's midpoint check-in — a structured pause to reflect on progress — became a turning point. We stepped back, acknowledged what was not working, and explored two parallel approaches:

1. **A Claude-based agentic approach** with skills as the backend — promising, but the outputs were not deterministic enough for production use.
2. **A LangGraph-based orchestration pipeline** — more engineering effort upfront, but the control flow gave us the consistency we needed.

We chose LangGraph. In a month of focused work after that pivot, we had a working pipeline going from specification to app and had started an internal pilot.

**The key technical learnings from the journey:**

- **Spec-driven development compounds.** Writing a clear specification first, then generating from it, consistently outperformed iterative prompt-by-prompt development.
- **What Actually Made RAG Work.**  Flat JSON + cosine similarity, Voyage AI for code-aware embeddings, hash-based lazy caching, and ruthless curation — together these made RAG reliable over a small domain corpus.
- **Balance LLM and deterministic logic.** Not everything should be LLM-generated. LLM for intelligent deduction.
  Deterministic coding when the path is clear. Never give the LLM counting tasks. Always validate LLM output.


**And one soft skill that turned out to matter just as much:**

The final presentation was in front of funders and ecosystem partners — many of them non-technical.  The ability to translate the depth of the problem and the complexity of a solution into a story a non-technical listener can feel — and care about — is something I learnt and improvised based on inputs and feedback.

---
## The Numbers:
 
**For Ekam's maternal health programme** — 8 visit types, 4 programmes, 32 forms, ~300 rules — the only thing that changed was time:

| | Without Avni AI | With Avni AI |
|---|---|---|
| **Time to first version** | **2–3 weeks** | **~1 day** |

The ~300 rules Priya once hand-wrote over weeks are drafted on day one. She reviews and refines instead of typing from scratch. Overall effort reduction: **30–50% per implementation.**

---
## What This Unlocks for the Social Sector

The impact of faster implementation is not just about Samanvay's efficiency. It compounds.

- **Faster** — programmes go live in days, not weeks since Priya need not setup/type everything from scratch.
- **Cheaper** — lower cost per implementation means smaller NGOs that could not previously afford custom apps can now access them.
- **Sustainable** — the same implementation team can serve significantly more partners without proportional growth in headcount.

And because Avni is open-source infrastructure — a shared digital public good — every improvement to Avni AI benefits every NGO on the platform, for free. Built once, compounded everywhere.

---

## AI at the Edge — Beyond App Generation

The cohort also surfaced another dimension of Avni's AI story: inference at the point of care.

Avni now embeds an oral cancer screening model (developed by TANUH at IISc) directly into the field app. A community health worker photographs a patient's oral cavity. The AI — running entirely on-device, offline — returns a verdict: Suspicious or Non-Suspicious. Suspicious cases get referred immediately, without waiting for network connectivity or a specialist visit.

India sees 140,000+ new oral cancer cases every year. Most are caught too late. Running AI at the edge, inside the same app field workers already carry, changes that equation without requiring new hardware or internet access.

---

## Learning from Peers

The cohort was as much about community as it was about technology. The sessions and peer exchanges were genuinely inspiring.

Watching **Pinky's Promise** tackle women's health challenges through AI, or seeing how **Dalberg** is enabling BRAC to deliver skilling to unemployed youth in Bangladesh — these were not just interesting use cases. They were reminders of why this work matters and how different the entry points into social-sector AI can be.

Technical sessions on guardrails and evals gave the cohort vocabulary and practice to build reliably and responsibly.

Each NGO team were assigned external mentors for periodic guidance.

<div style="width:500px;max-width:100%;margin:0 auto;text-align:center;">
<img src="/img/2026-06-23-ai-cohort-2-final/team_pic_with_mentor.jpeg" />
<p><i>Team with mentor, Vinay Sudhakaran on left</i></p>
</div>

---

## Get in Touch

If you run an NGO and are looking for an offline-capable, open-source field data platform — or if you are building in the social sector and want to explore what Avni AI can do — reach out.

**Avni:** [avniproject.org](https://avniproject.org) · [github.com/avniproject](https://github.com/avniproject)

**Samanvay Foundation:** [samanvayfoundation.org](https://samanvayfoundation.org)

---

*Samanvay Foundation builds open-source digital public goods for the social sector. Avni is used by 70+ organisations to track 11M+ beneficiaries across 100M+ field visits.*
