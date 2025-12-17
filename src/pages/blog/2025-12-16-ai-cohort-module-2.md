---
templateKey: blog-post
title: "AI Cohort Module 2: Exploring AI for Social Impact"
date: 2025-12-16T10:00:00.000Z
author: Himesh R
description: >-
    Reflections from the Tech4Dev AI Cohort closing module—learning from AI practitioners, presenting our work, and exploring the possibilities and challenges of AI in the social development sector.
featuredpost: false
featuredimage: /img/2025-12-16-ai-cohort-module-2/ai-cohort-cover.png
tags:
  - AI
  - Tech4Dev
  - Social Impact
  - Machine Learning
---

The AI Cohort closing module was conducted at [Quest Learning Observatory](https://www.questalliance.net/), Bengaluru on December 4-5, 2025. 

---

## Day 1: Learning from AI Practitioners

### Digital Green

The day began with a talk by [Digital Green's](https://digitalgreen.org/) founder on their initiative to provide advice to farmers about crop quality improvement and pest control. Their approach uses AI as a replacement for in-person engagement to solve the problem of scale and cost.

I was curious about how they would sustain engagement on their app for an extended duration, when there are so many alternatives for people to get the requisite information in the traditional sense via peers, suppliers, etc.

![](/img/2025-12-16-ai-cohort-module-2/FarmerChat.jpeg)<pre>Digital Green's [FarmerChat](https://farmerchat.digitalgreen.org/)</pre>

### Kaapi's Evaluation Framework

Akhilesh and Pragya from the Kaapi team demonstrated their evaluation framework for AI features built using an [LLM-as-Judge](https://www.confident-ai.com/blog/why-llm-as-a-judge-is-the-best-llm-evaluation-method) approach. Key steps involved are:
- Building ["Golden sets"](https://innodata.com/what-are-golden-datasets-in-ai/) for evaluating AI request and response
- Configuring the 
    - AI Prompt
    - AI Model and
    - [Vector database](https://www.ibm.com/think/topics/vector-database) for knowledge base
- Tracking the batch-processed AI responses for up to 2 primary indicators using the LLM-as-Judge approach

They are close to productizing the capability for other social development organizations to use. This would be particularly relevant for anyone building AI features that need consistent quality assurance as prompts and models evolve over time.

![](/img/2025-12-16-ai-cohort-module-2/KaapiEvaluationReport.jpeg)<pre>Kaapi's Evaluation Framework</pre>

### World Bank's AI Initiatives

Jerome from the [World Bank](https://www.worldbank.org/en/about/unit/unit-dec/impactevaluation/ai) presented three compelling projects:

- **[ImpactAI](https://impactai.worldbank.org/)**: Identifying optimal policies for regions based on available data

![](/img/2025-12-16-ai-cohort-module-2/ImpactAI.jpeg)<pre>ImpactAI</pre>

- **SocialAI**: Detecting hate speech in local languages and dialects—a nuanced challenge. Their intervention of showing positive affirmation messages in hate speech hotspots reduced online abuse by 2.3%, though the effect was short-lived

![](/img/2025-12-16-ai-cohort-module-2/socialAI.jpeg)<pre>SocialAI</pre>

- **ZeroHungerAI**: A program sponsored by Google to identify factors leading to food crises across developing countries, enabling preventive interventions

![](/img/2025-12-16-ai-cohort-module-2/zeroHungerAI.jpeg)<pre>ZeroHungerAI</pre>

The session sparked extensive discussion around technical nuances of processing large-scale and/or multi-modal data. It also left me reflecting on the dual-use nature of such powerful tools in the hands of large corporate organizations.

---

## Day 2: Cohort Presentations

The second day featured presentations from all AI Cohort participants, each tackling unique problems:

- **[Avanti Fellows](https://avantifellows.org/)**: AI-generated performance summaries of key trends can enable personalized mentorship with less effort spent on preparation.
- **[InquiLab Foundation](https://inquilabfoundation.org/)**: Evaluating student ideas using AI to solve for scale, where lakhs of ideas need to be graded systematically with limited human resources.
- **[Quest](https://www.questalliance.net/)**: An AI chatbot for students to learn more by themselves to bridge the gap of limited availability of teachers/trainers.
- **[IPE Global](https://www.ipeglobal.com/)**: Statistical modeling to identify women at risk for low birth weight infant delivery.
- **[Simple Education Foundation](https://www.simpleeducationfoundation.org/)**: A WhatsApp chatbot with AI to act as a Teacher Buddy, helping them with pedagogy for teaching a particular topic to students. 
- **[Sneha](https://www.snehamumbai.org/)**: Statistical modeling to predict at-risk pregnancies.

There was a lot to learn from each of these presentations. Some of the key takeaways were:
- Solving for scale is key
- Custom personas for AI models trump generic models
- AI can be leveraged at different stages of the project lifecycle, providing a compounded impact on the final outcome geared towards the well-being of beneficiaries.

### Our Presentation

We presented our work on AI-assisted features for [Avni](https://avniproject.org/).

**Problem**: Avni has extensive capabilities, but the flip side is that it can be complex to configure and maintain.

**Solution**: Introduce an AI assistant that helps users understand Avni and build solutions independently.

**Demonstration**: We showcased the AI assistant's capabilities:
- Chatbot that answers questions about Avni and its features
- Simple configuration tasks like setting up LocationTypes and catchments
- Assistance with Form configuration
- Writing complex Visit Schedule rules

**Avni AI Assistant Pilot**:
![](/img/2025-12-16-ai-cohort-module-2/AvniAiCohortPilot.png)<pre>Avni AI Assistant Pilot Results</pre>

**Future Work**:
- Further improve AI integration to make it easier for non-technical users to configure and maintain Avni
- Leverage AI for Speech to Text, Translation and Smart Image Processing
- Adopt AI for thematic analysis of media content collected at scale
- Apply AI to generate insights from reports
- Build Field Worker Capacity by providing organisations an AI-powered LMS

**The feedback received was constructive:**

1. **Quantify impact**: Indicate the impact of using AI with specific numeric targets
2. **Simplify Understanding**: Use simple language to explain Avni and AI features
3. **Speed up Demonstration**: Make use of pre-recorded videos to demonstrate AI features
4. **Address security**: Ensure that any AI-generated content is screened for malicious intent before persisting it
5. **Build in Monitoring**: Ensure that any complex rules written in the app are monitored for functionality and performance

---
### Knowledge Management using AI

We then had a session by Manohar from [Sattva](https://www.sattva.co.in/) on leveraging Google Docs AI integrations for organizational knowledge management. The challenge: how do team members quickly find information about past projects—who was involved, what was learned, and what should be carried forward?

Their solution uses [Google Gemini AI's](https://workspace.google.com/solutions/ai/) chatbot to navigate and infer insights from their documentation, making institutional knowledge accessible and searchable across the organization.

---

## Conclusion

The T4D AI Cohort program provided much-needed impetus for our organisation to explore AI in a structured manner and adopt it within our Avni Platform. It also provided an arena to learn from peers and mentors and to get invaluable feedback on various approaches possible and the challenges that come with it.

AI has lowered the barriers of time, effort, and cost—making capabilities accessible today that seemed out of reach for most social development organizations, even just a few months ago.

---

*Thanks to [Project Tech4Dev](https://projecttech4dev.org/) for organizing the cohort and [Quest Learning Observatory](https://www.questalliance.net/) for hosting us.*

