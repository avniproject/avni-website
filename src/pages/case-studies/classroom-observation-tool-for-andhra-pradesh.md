---
templateKey: case-study
title: Case Study - Classroom Observation Tool for Andhra Pradesh
date: 2024-05-13T07:24:00.000Z
description: >-
  
author: Vinay Venu
tags:
  - Education
  - Scale
  - Government
  - Andhra Pradesh
---

![](/img/classroom-observation-tool-for-andhra-pradesh/classroom.jpg)


### Introduction
The [Teach](https://www.worldbank.org/en/topic/education/brief/teach-related-blogs) tool, developed by the World Bank, serves as an observation tool aimed at measuring the quality of teaching practices. It is a key component of the [Supporting Andhra's Learning Transformation (SALT) program](https://schooledu.ap.gov.in/samagrashiksha/?page_id=209). [Leadership for Equity](https://www.leadershipforequity.org) is the technical partner in the project in charge of observing teachers and implementing need-based learning courses for teachers (among other things). 

The project involved usage of the Teach tool among around 10,000 observers, each of whom will observe around 15 teachers once in two months. Observations happen in a classroom setting where they are scored on multiple criteria. There are a total of around 250 questions around classroom culture, instruction effectiveness and socioemotional skills. The project covers all government schools in Andhra Pradesh. Below are a few images of how the Teach tool was implemented in Avni. 

![](/img/classroom-observation-tool-for-andhra-pradesh/app_images.png)


The implementation of the Teach AP program marked several significant milestones for Avni. Notably, it necessitated the development of a whitelabeled app tailored specifically for classroom observations in Andhra Pradesh, accompanied by dedicated infrastructure and rigorous third-party security testing. Furthermore, transitioning the app to government infrastructure posed additional challenges, requiring careful consideration and strategic adaptations.


### Building Trust

Ensuring trust and reliability in the Teach AP app was paramount, particularly given its distribution to a wide user base through the PlayStore. To instill confidence among users, meticulous attention was paid to the app's name, description, and logo, aligning them closely with the program's objectives. Leveraging Avni's capability to swiftly create [whitelabeled apps](https://avni.readme.io/docs/flavouring-avni) helped, resulting in an app listing that resonated with its intended purpose of classroom observations.

![](/img/classroom-observation-tool-for-andhra-pradesh/whitelabeled_avni_apps.jpeg "Different flavors of Avni")

### Knowledge and Training

Central to the success of the Teach AP program was the rigorous training and assessment of observers. By standardizing benchmarks and providing comprehensive training material, Avni facilitated uniformity in evaluation criteria and equipped observers with the necessary resources to carry out their tasks effectively. The [Documentation feature](https://avni.readme.io/docs/documentation) in Avni proved invaluable, offering quick access to training materials and reference guides, ensuring consistency and competence among observers.


### Operational Support

To run a program of this size requires several pieces to come together. Technology can help in some of them.

- Regular reports provide information to people running the program on both the regularity of the program as well as the quality of data coming in. This helps them make any necessary corrections at the right time.

![](/img/classroom-observation-tool-for-andhra-pradesh/reports.png)

- [Offline reports and custom dashboards](https://avni.readme.io/docs/offline-reports) on the Android app allow observers to understand their own work and ensure they are performing observations at the right time.

![](/img/classroom-observation-tool-for-andhra-pradesh/offline_dashboard.png)

- Bulk uploads of observers and teachers help quickly add data into the system to scale up as needed. Administrators of the system use the csv upload functionality to add new observers and teachers. 

- Support channels are required to assist users in case of any trouble on the ground. Avni can help in two different ways. First, the Application Menu allows addition of [custom links](https://avni.readme.io/docs/application-menu). This has been used in many implementations to connect to a Google Form or a Whatsapp channel where support can be provided. In another implementation, users are automatically added to a Whatsapp chatbot through Glific. This provides some support for regular questions and allows administrators to contact them when human support is required.


### Government Handover

Handing over to the government requires the ability to deploy Avni in a data center that is not AWS. This means we need to move out of all infrastructure that is dependent on AWS. There are two components of Avni that are being used in the Avni SaaS cloud - Cognito (for identity management) and S3 (for media/documents).

Cognito can be swapped with [Keycloak](https://www.keycloak.org/), a popular open source identify management system. Avni supports both out of the box. Similarly, there is a drop-in replacement for S3 - [Minio](https://min.io/).

Additionally, since a government deployment will be for a specific use case, features of Avni that are not used for this use case needed to be disabled.

After swapping out the different systems, a security audit was performed before handing over the system. 

### Future Outlook

The Teach implementation for AP and subsequent deployment at a govermnent data center has helped unearth and solve problems that show up only at this scale and complexity. Many enhancements in the product would not have been possible without this implementation. While many of the existing features proved invaluable to quickly start running observations, the new features that were built because of this implementation left Avni a much more mature product from where it started. This is a testament to the power of open source technology and its ability to use existing technology for a quick start, building over it to solve a unique problem and enriching the entire ecosystem in the process. 

Other state governments have expressed interest in implementing similar programs. At the time of this writing, Nagaland has completed a pilot and is on its way to a complete rollout. We hope the work done in Andhra Pradesh will benefit many others in the days to come.
