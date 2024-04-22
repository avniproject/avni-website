---
templateKey: case-study
title: Case Study - Classroom Observation Tool for Andhra Pradesh
date: 2021-02-08T07:24:00.000Z
description: >-
  
author: Vinay Venu
tags:
  - Education
  - Scale
  - Government
  - Andhra Pradesh
---


The [Teach](https://www.worldbank.org/en/topic/education/brief/teach-related-blogs) tool, developed by the World Bank, serves as an observation tool aimed at measuring the quality of teaching practices. It is a key component of the [Supporting Andhra's Learning Transformation (SALT) program](https://schooledu.ap.gov.in/samagrashiksha/?page_id=209), spearheaded by [Leadership for Equity](https://www.leadershipforequity.org).

The implementation of the Teach AP program marked several significant milestones for Avni. Notably, it necessitated the development of a whitelabeled app tailored specifically for classroom observations in Andhra Pradesh, accompanied by dedicated infrastructure and rigorous third-party security testing. Furthermore, transitioning the app to government infrastructure posed additional challenges, requiring careful consideration and strategic adaptations.


### Building Trust

Ensuring trust and reliability in the Teach AP app was paramount, particularly given its distribution to a wide user base through the PlayStore. To instill confidence among users, meticulous attention was paid to the app's name, description, and logo, aligning them closely with the program's objectives. Leveraging Avni's capability to swiftly create [whitelabeled apps](https://avni.readme.io/docs/flavouring-avni) helped, resulting in an app listing that resonated with its intended purpose of classroom observations.

### Knowledge and Training

Central to the success of the Teach AP program was the rigorous training and assessment of observers. By standardizing benchmarks and providing comprehensive training material, Avni facilitated uniformity in evaluation criteria and equipped observers with the necessary resources to carry out their tasks effectively. The [Documentation feature](https://avni.readme.io/docs/documentation) in Avni proved invaluable, offering quick access to training materials and reference guides, ensuring consistency and competence among observers.


### Operational Support

To run a program of this size requires several pieces to come together. Technology can help in some of them.

- Regular reports help those running the programme information on both the regularity of the program as well as the quality of data coming in. This helps them make any necessary corrections at the right time.

- [Offline reports and custom dashboards](https://avni.readme.io/docs/offline-reports) on the Android app allow observers to understand their own work and ensure they are performing observations at the right time.

- Bulk uploads of observers and teachers help quickly add data into the system to scale up as needed. Administrators of the system use the csv upload functionality to add new observers and teachers. Observers get a notification

- Support channels are required to assist users in case of any trouble on the ground. Avni can help in two different ways. First, the Application Menu allows addition of [custom links](https://avni.readme.io/docs/application-menu). This has been used in many implementations to connect to a Google Form or a Whatsapp channel where support can be provided. In another implementation, users are automatically added to a Whatsapp chatbot through Glific. This provides some support for regular questions and allows administrators to contact them when human support is required.


### Government Handover

Handing over to the government requires the ability to deploy Avni in a data center that is not AWS. This means we need to move out of all infrastructure that is dependent on AWS. There are two components of Avni that are being used in the Avni SaaS cloud - Cognito (for identity management) and S3 (for media/documents).

Cognito can be swapped with [Keycloak](https://www.keycloak.org/), a popular open source identify management system. Avni supports both out of the box. Similarly, there is a drop-in replacement for S3 - [Minio](https://min.io/).

Additionally, since a government deployment will be for a specific use case, features of Avni that are not used for this use case were disabled.

After swapping out the different systems, a security audit was performed before handing over the system.


### Future Outlook

The success of the Teach AP program has garnered interest from other state governments, indicating the potential for broader replication and adoption. As similar initiatives gain traction, the lessons learned from the Teach AP program will serve as a valuable blueprint for future implementations, driving continued innovation and improvement in teacher effectiveness across regions.

By addressing implementation challenges, fostering trust, and providing robust support mechanisms, the Teach AP program has emerged as a testament to the transformative power of technology in education. As it paves the way for future endeavors, its legacy of impact and innovation will continue to shape the landscape of educational reform in Andhra Pradesh and beyond.
