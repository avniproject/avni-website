---
templateKey: case-study 
title: How Goonj Uses Avni to Digitise Offline Data Collection and Inventory Flow
date: 2025-09-03T10:00:00.000Z 
author: Avni Team
description: For over twenty-five years, Goonj has reshaped how India thinks about giving. Founded in 1999 with a single computer, it has grown into a nationwide movement working across thirty-one states and union territories. In the last ten years alone, more than sixty-three million kilograms of urban surplus have been channelled to rural communities, addressing disaster relief, rural development, and overlooked humanitarian challenges, while reducing the burden on urban landfills.
featuredpost: false 
featuredimage:
tags:
- 
---


## Introduction
For over twenty-five years, Goonj has reshaped how India thinks about giving. Founded in 1999 with a single computer, it has grown into a nationwide movement working across thirty-one states and union territories. In the last ten years alone, more than sixty-three million kilograms of urban surplus have been channelled to rural communities, addressing disaster relief, rural development, and overlooked humanitarian challenges, while reducing the burden on urban landfills.

Goonj’s work is guided by the principle of **dignity over charity**. Material is never simply given away; it is received as recognition of a community’s effort in addressing its own needs. This philosophy influences every stage — from collecting surplus in cities to its meaningful use in villages.

## Ground Operations
At Goonj's dropping centers across the country, materials arrive daily from schools, corporates, and community drives — clothes, utensils, books, furniture, even partly used stationery.  

> “We even take a pencil that’s seventy percent used,” says a team member.  

Everything is sorted, repaired, or repurposed — damaged goods become parts, scrap cloth turns into sanitary pads or bags — ensuring nothing goes to waste.

In villages, Goonj enables communities to take charge. People come together to fix ponds, paths, or public spaces. Once the work is done, kits are distributed **as rewards, not charity**. This turns urban surplus into a resource that builds ownership in rural communities while giving every donation renewed purpose.

<div style="width: 80%; margin: auto; ">
    <img src="/img/2025-09-03-how-goonj-uses-avni/goonj_1.png">
</div>


## Why Digitisation Became Necessary
For years, data collection was paper-based. Field teams submitted records to state offices and eventually to headquarters. At small scale, this worked, but as operations grew, delays of up to two months, duplication, and inconsistencies became common.  

With expansion to thirty-one states and hundreds of partners, **real-time visibility and uniform processes became essential**.

## The Digital Transformation
Salesforce was adopted in 2021 for inventory tracking, streamlining central operations. However, capturing field data remained a challenge.  

In 2022, Goonj selected **Avni**, an open-source, mobile-first, offline-capable platform built for NGOs. Avni’s offline functionality, easy interface, and ability to integrate with Salesforce were decisive.

The rollout began in 2023 in Maharashtra and Rajasthan before expanding to sixteen states. Field staff now record activities, distributions, photos, and location codes directly in Avni. Entries are validated at state level and monitored centrally in Delhi. Integration with Salesforce ensures seamless data flow, reducing errors and duplication.

## Integrating Offline Field Data with Inventory
Managing millions of kilograms of donated materials requires a seamless integration between field realities and central systems. Salesforce tracks demands and dispatches at headquarters, while Avni captures on-ground activities in rural communities.

Avni’s **offline-first capability** ensures field teams can record data without internet. Once connectivity is restored, the data syncs automatically, giving Salesforce near real-time visibility.

<div style="width: 80%; margin: auto; ">
    <img src="/img/2025-09-03-how-goonj-uses-avni/goonj_2.png">
</div>

### How It Works
A periodic batch process connects Salesforce and Avni through an integration job:

- **Salesforce → Avni:** New demands and dispatches are pulled via API and saved in Avni so field teams always have updated information offline.  
- **Avni → Salesforce:** Reports of activities and distributions recorded offline sync back to Salesforce, closing the loop between fieldwork and inventory.

The integration is built with:
- **Idempotency** (to avoid duplicates)  
- **Failure handling** (auto-retries and clear error reporting)  
- **Re-runnability** (manual fixes when needed)  

ensuring reliability.

## Impact of Digitisation
Digitisation has transformed operations:
- Reporting time has dropped from **weeks to near real-time**  
- Errors have reduced through **standardised fields**  
- Duplication is eliminated  
- Staff can focus more on **communities**  
- Leadership now monitors activities **live**, and dashboards highlight trends instantly  
- Planning is more **responsive**


<div style="width: 80%; margin: auto; ">
    <img src="/img/2025-09-03-how-goonj-uses-avni/goonj_3.png">
</div>
## Lessons Learned
Goonj’s journey highlighted the value of:
- **Phased rollout**, both by geography and program type, to allow teams to adapt  
- **Flexible platform design**, given shifting NGO priorities  
- **Change management**, involving field staff early to encourage adoption  
- **Redefining cost evaluation**, factoring in time saved, accuracy, and value created

## Conclusion
By blending **community-led action with thoughtful digitisation**, Goonj has built a scalable model that strengthens its mission. From small quantities of used stationery to truckloads of clothing, every item is tracked and channelled with purpose — supported by a versatile digital system so the impact truly reaches the people who need it most.
