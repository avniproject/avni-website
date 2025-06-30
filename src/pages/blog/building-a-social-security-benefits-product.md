---
templateKey: blog-post
title: Building a social security benefits product - A developer's perspective
date: 2025-06-14T10:00:00.000Z
author: Vinay Venu
description: >-
featuredpost: true
featuredimage: 
tags: 
	- Social security
---


When Avni first launched (back then as OpenCHS), we had a grand vision: bake every community medicine protocol into our system so that every health program in India could use it. Supported by experts, we charged ahead—only to realize how naive we were.

## The one-size-fits-all dilemma

Field feedback hit us hard: "Almost every program follows the national protocol, but no two implement it the same way." Small, on-the-ground adjustments—natural to field workers—required endless custom coding. Templates? Useless. Configurations? Never enough.

So we pivoted. Hard.

Now, each project gets its own tailored solution—built from scratch, designed for real-world chaos. We embraced flexibility, moved to a generic platform, and even started dabbling in AI. But today’s story isn’t about tech—it’s about how we tackled the wild world of social security benefits.

**Spoiler: One-size-fits-all failed here too.**

## The landscape of Social Security

Social security isn’t new to Avni. We’ve worked with NGOs across India, and no two operate alike. Here’s what we found:

### Model 1 - The community-oriented approach

This approach is found in non-profits that are deeply invested in a community. They try to ensure that the schemes announced by the government work for their beneficiaries.

These organisations often help beneficiaries to access hard-to-get benefits such as ration cards. Field workers in such organisations do much more than just secure social security benefits. They work on multiple objectives depending on the needs of their community.

### Model 2 - The semi-community approach

Some organisations work only in securing social security benefits, are capable of delivering multiple benefits, and choose to scale out in geography when an area is saturated. These organisations believe in bringing financial benefits to as many eligible citizens as possible.

### Model 3 - Mission mode

Here, the organisation typically works to get one specific benefit in the hands of as many people as possible. These organisations treat the benefit in mission mode and have a structured process that works like a factory.

### Model 4 - The scaled approach

Organisations here work at a population scale, often in partnership with the government. The idea is to enable a large vulnerable population to access one or a basket of schemes. Beneficiaries are given details of schemes and encouraged to apply.

NGOs often work on lists provided by the government to identify potential beneficiaries. Frequently, call centres and mass communication tools such as flyers and advertisements are used for outreach.

---

## The Need

Now we look at the requirements of a software product that helps with delivering social security.

We will ignore model 4 in our discussion because it is a completely different beast. What we build for them will not be relevant for any of the other models. On to the components.

### Program flow

The program flow across all three models is different. However, they have a few essential components - a beneficiary, a benefit, a status, and a follow-up date. As long as we can structure these easily, building a solution should benefit from it.

### Scheme Model

Modeling the different schemes, their benefits and prerequisites is the most complex part of the system.

Each benefit has a specific beneficiary in mind. The basic prerequisites to claim a benefit could be

1. Demographics (home address, age, gender, financial status, marital status, religion/caste group, occupation)
2. Proof for any of the above

It might seem possible to build a system based on the above information, but this is just the documented part. Even here, new schemes could be added, old ones removed or new conditions added to existing schemes.

---

## The undocumented realities

Then comes the undocumented part.

- **Effort spent** - Schemes that take time can affect the willingness of the beneficiary, the NGO, and the funder. Such schemes are typically put on the back burner.
- **Priorities** - Every stakeholder in this ecosystem can have their own priorities. Govt might want to promote certain schemes, funders might prefer some schemes because they match their goals. NGOs might have their ideas based on assessing the community's needs or through their own "theory of change"
- **NGO Capability** - The NGO typically has experience working with a few benefit schemes, not necessarily all of them. What they offer will be a reflection of their knowledge and capability

---

## Other challenges

- **Time** - Many schemes are related to specific times of the year (eg: RTE, scholarship schemes), based on a life event (eg: maternity). These schemes are mostly irrelevant at any other time.
- **Changes** - There is no one place to look for changes in schemes. Schemes are announced by multiple departments of the state and central government. Some small schemes are also announced by independent organizations (such as scholarships). Maintaining an active list of schemes is quite a bit of work.

---

## The Avni solution

Instead of overengineering, we built a system that:

- Lets NGOs enumerate benefits they can facilitate
- Filters schemes by state, age and gender - removing as much clutter as possible
- Keeps workflows simple-tracking applications, follow-ups, and status updates

The rest? Trust the field workers. They know best.

---

## Saaras - A case study

Saaras is a model 2 organisation that works across 5 states. They provide access to around 45 schemes (capability and priorities of the NGO).

### Eligibility check

12 of the 45 Saaras' basket of benefits are national schemes. 15 are for women only, 4 are for children, 2 for old people. For any beneficiary, there would be about 10-15 schemes available after the state, age, and gender filters are applied. This makes it a strong and practical filter the system can apply before the user verifies eligibility.

The beneficiary and the community worker then decide on the best possible scheme to apply for.

### Process

Saaras prefers a lightweight process on the app, leaving the complications of applying for a scheme to the users and the beneficiary. These users are knowledgeable in handling situations. All necessary actions are performed outside the app. Avni helps with maintaining status and gives reminders to follow-up where necessary.

### Extending the system

The application needs space to grow primarily in two dimensions - the schemes that get added, and the geographical areas where Saaras wants to expand.

Avni allows both these dimensions to be managed through its web interface.

Relevant parameters of a scheme - the state, gender and age - are maintained in what we call "concepts". Schemes added automatically flow into the mobile app.

Users and locations can be added directly through admin options on the web application.

---

## Conclusion

Social security is a hard domain. There are quick wins though. Don’t let being “perfect” prevent you from doing what is “possible”.
