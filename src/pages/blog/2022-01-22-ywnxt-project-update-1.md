---
templateKey: blog-post
title: The Avni implementation that never was!
date: 2022-01-22T11:39:26.313Z
author: Utkarsh Hathi
description: >-
    This is the story of an Avni implementation that eventually became something entirely different. 
featuredpost: false
featuredimage: /img/ywnxt/ywnxt-final-solution.png
tags:
 - Project Updates
 - YWNXT
 - Skill development and employment
---

Young Warrior NXT
------------------------
Generation Unlimited is a global multi-sector partnership developed by UNICEF to increase opportunities for education, training and employment available to the young population in the age group of 10 to 24. YuWaah! is its Indian chapter which focuses on engagement, learning, skill development and employment of young people and for that purpose they aim to identify high impact scalable initiatives developed with collaboration of different partner organisations. The initiative <a href="https://www.yuwaah.org/youngwarrior" target="_blank" rel="noopener noreferrer">Young Warrior NXT (YWNXT)</a> was conceptualised by a coalition of UNICEF, Udhayam Learning Foundation, Dell Foundation and other partners to identify and pilot 16 interventions. These interventions are currently being tested for engagement modes used as well as impact on life skills outcome.

The project puts emphasis on delivering life skills to the learners in the age group of 14-18. The skills include self-awareness, communication, achievement orientation, problem-solving and collaboration. The engagements for this purpose are delivered through multiple delivery channels (online-offline), facilitation modes (self driven/facilitator based) and varying content.

To generate evidence on impact created by different models, data is being collected on reach, enrollment and engagement.

The problem
--------------------------
<a href="https://www.samagragovernance.in/" target="_blank" rel="noopener noreferrer">Samagra governance</a> is doing program management for YW NXT (PMU). They realised the need for a central data repository in order to streamline the process of data collection, storage and processing for analysis of all multiple interventions.

Some implementation partners already had their Learning Management System (LMS) to collect data. Some did not. For those partners that did not have easy data collection mechanisms, a simple and easy to use mechanism was required.

This dual requirement of the need to collect data easily, and the ability to analyse this data once it was collected was the technical problem <a href="https://www.samanvayfoundation.org/" target="_blank" rel="noopener noreferrer">Samanvay</a> set out to solve.
 
The solution
---------------------------
At first, we thought of using Avni for this purpose. Each partner would have its own organisation, and the Avni data model suits well for the modelling of Students, Batches, Facilitators, Sessions and Participation. Initial data would be uploaded into the system, and data entry requirements would be kept at a minimum.

![](/img/ywnxt/ywnxt-original-idea.png)
 
Field restrictions, time crunch and other factors led to a situation where most partners opted out of using a phone-based data entry mechanism. Eventually, only one partner would end up using Avni. The others agreed to provide data in the form of spreadsheets to PMU.

The problem of analysing data still remained. Towards this, we hosted a central repository where all spreadsheets would be uploaded. This could be analysed through Metabase - the same analytics tool that is used in Avni.

The final architecture looks like the diagram below. Partner NGOs provide excel spreadsheets created either manually, or through their LMSes to PMU. This gets uploaded to a central data repository, and is available for analytics through dashboards and reports provided by Metabase.


![](/img/ywnxt/ywnxt-final-solution.png)

As of this writing,  one partner NGO who decided to use Avni is live and using the system. Their program/intervention is going on despite challenges posed by the closing down of schools due to Covid. The data from Avni will be exported in CSV format using its longitudinal export feature and imported into the central data repository.

Working with the NGOs in the development sector pushes us to design and redesign to accommodate the constraints and come up with pragmatic solutions that actually work. This has been another such interesting case.
