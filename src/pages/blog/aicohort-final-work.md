---
templateKey: blog-post
title: "AI in Action: Wrapping Up Our Journey in the AI Cohort"
date: 2025-12-17T16:50:00.000Z
author: Om Bhardwaj
description: Reflecting on four months of progress in bringing AI to Avni – from an assistant chatbot to making visit scheduling far easier for users.
featuredpost: false
featuredimage: /img/aicohort-final-work/cover.png
tags:
  - AI
  - Chatbot
  - Data Collection
  - Social Impact
  - Open Source
---

Four months ago, we got into something quite exciting \- the [AI Cohort](https://projecttech4dev.org/building-with-responsible-ai-for-the-social-sector-introducing-the-ai-cohort-program/) with a goal to use AI to make Avni much easier for new organisations that want to use it.

**For those unfamiliar with Avni**:  
Avni is a data collection platform that allows organisations to sign up, create forms, and collect data offline. One of Avni’s key features is visit scheduling. This enables field workers to receive reminders to visit individuals or households either on a regular schedule or based on specific conditions or rules, ensuring timely and consistent follow-ups.

When someone signs up for a trial, going through the Avni interface can feel complex and a little overwhelming, especially if they haven’t yet read the documentation.    
Our goal was simple: let them just talk to an AI chatbot, ask anything, and get things done right away without waiting for support or getting stuck.

Two other features, suggestions while creating data collection forms, and AI-generated rules for scheduling visits were sitting quietly on our longer-term roadmap, things we hoped to get to someday but not during the course of AI Cohort.

Yet, thanks to the momentum on the AI front whenever our mentor [Vinodh](https://in.linkedin.com/in/vinodhvenkatesan) for the AI Cohort, visited the office, we ended up building and shipping them too. All three are now live and being used.

**The Early Days: Finding the Right Path**

We started with weekly online meetings with our mentors. Initially, we tried building the chatbot ourselves. A guide that helps program managers set up their programs. But soon we realised the cost of building the infrastructure to manage chat history, creating a polished user interface, and maintaining it all. That felt like a detour from our real goal.

We explored a few options. One tool, [LibreChat](https://www.librechat.ai/), looked promising but fell short of being a complete solution. After more searching, we landed on [Dify](https://dify.ai/) – an open source platform that allowed us to move fast without reinventing the wheel.

The real progress happened during the first in-person workshop of the cohort – two focused and productive days where we crafted and tested prompts for a LLM. These prompts enabled the AI to guide users step-by-step on configuring programs in Avni. It was rigorous, but by the end, we had something useful and impressive.

Within two weeks, we rolled out the first version of the chatbot built on Dify. It could answer questions and guide users through basic setup.

Online catch-ups became fewer after this phase, but our mentor made up for it with several in-person visits to our office, spending long, focused days working closely with the team. That hands-on collaboration proved invaluable.

**Taking It Further: From Guidance to Action**

Now we wanted the chatbot not just to advise, but to act i.e. to perform operations in Avni on the user's request, securely and reliably.

We first tried using Dify’s built-in features to let the AI take actions in Avni. While it looked good in theory, it didn’t work reliably in practice. The AI couldn’t consistently act on behalf of different users, and small errors kept creeping in every time.

It quickly became clear that this approach wasn’t stable enough for real users, especially for something as important as setting things up correctly. Eventually, we shifted the action-handling logic to [our own backend code](https://github.com/avniproject/avni-ai/blob/main/src/services/config_processor.py#L176). This kept things secure (the AI never sees sensitive information), reduced delays, and gave us more control.

**The Final Sprint: Surprising Breakthroughs**

The two features that came together towards the end had very different journeys. Suggestions while creating forms came together smoothly and naturally as we worked on the chatbot itself.

![AI form suggestions feature](/img/aicohort-final-work/first.png)
Visit scheduling rules, however, was a different story. We had tried solving this with AI before, and once again, even during the cohort, we found ourselves stuck at the same familiar roadblock.  
![AI visit scheduling rules feature](/img/aicohort-final-work/second.png)


This is when [Himesh](https://www.linkedin.com/in/himeshr/) (Part of the Platform Team at Avni) suggested we look at how the implementation team had been approaching this problem. They were using real examples from existing organisations as reference points. We decided to try the same idea. We gathered real visit scheduling data, shared it with the AI, and this time, it worked.

With a few refinements, the rules started coming out accurately. What followed was an incredibly productive final week, where both features came together and were ready to be shared with users.

**What We’re Seeing So Far**

Today, the chatbot has been used by more than 30 organisations, with over 400 conversations logged. Surprisingly, it's not just trial users benefiting – production users are actively engaging with it. From the conversations so far, we’re beginning to see clear patterns in how people are using the chatbot. Most questions have been around system administration and data upload (about 42%), followed by help with complex rule setup and form constraints (around 33%). Another 20% of conversations were simply about exploring the platform and understanding what’s possible.

We recently held an Avni Launchpad event, and the feedback was heartening. Participants particularly appreciated the AI-generated visit scheduling rules. Configurations that previously required coding expertise and hours of manual effort could now be created by non-technical users in minutes.

**Closing Thoughts**

Looking back, with mentorship, the right tools, and a willingness to iterate, we delivered practical solutions that are already making a difference.

I'm grateful to our mentors  for the guidance and to Tech4Dev and The Agency Fund (cohort organisers) for creating a space where ideas could turn into reality so swiftly.

As we move forward, these AI capabilities will continue to evolve within Avni, always with the same goal: making Avni accessible for those driving social change.