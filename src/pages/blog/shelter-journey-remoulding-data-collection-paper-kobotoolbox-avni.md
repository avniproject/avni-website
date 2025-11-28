---
templateKey: blog-post
title: Our Journey of Remoulding Data Collection - From Paper to KoboToolbox to Avni
date: 2020-12-20T11:39:26.313Z
description: >-
 Smita Kale, Monitoring and Evaluation Manager at Shelter Associates, shares about their journey of moving from Paper based data collection to digital systems, first using KoboToolbox and then to Avni.
featuredpost: false
featuredimage: /img/shelter-remoulding-data-collection/SA_lokmanya_nagar_view.jpg
author: Smita Kale
tags:
  - User stories
  - Housing and Essential services for Urban Slums
---
![Lokmanya nagar slum](/img/shelter-remoulding-data-collection/SA_lokmanya_nagar_view.jpg)

<a href="http://shelter-associates.org/" target="_blank" rel="noopener noreferrer">Shelter Associates (SA)</a>, a Civil Society Organization founded in 1993, comprising architects, GIS experts, social workers, community workers and volunteers have carried extensive work in areas of cost-effective housing, basic infrastructural facilities, health, hygiene and sanitation while inspiring behavioural change in the slum dwellers. We work towards empowering communities living in informal settlements to pursue their right to dignity and sustainable life.

In this article, we talk about our approach of moving from Paper based field data collection to KoboToolbox, and then finally to Avni. We share some lessons learnt and explain the advantages we see of an offline-based Android app for form data capture.
 
## Data-Driven Approach
One of the organisation’s core competencies lies in its data-driven approach. We follow a rigorous process of collecting data through surveys and mapping efforts. The slum data collected by the team is spatially organised using GIS software and presented as an overlay on Google Earth remote sensing imagery. The collated data is used for inclusive urban planning and implementing affordable housing and sanitation schemes across the slums in Maharashtra. You can see live dashboards on our website. Our data-driven approach using technology to plan citywide strategies for social housing has impacted the Rajiv Awas Yojana (RAY) policy of GOI.

![Screenshot of a live dashboard from SA website](/img/shelter-remoulding-data-collection/SA_slum_data_dashboard_on_website.png)

In 2013 we undertook a landmark project ‘One Home One Toilet’ to deliver household toilets on a cost-sharing basis. The data-driven initiative follows a community-centric and an inclusive approach wherein it works closely with the municipal corporations right from validating data to toilet delivery. As of September 2020, SA has surveyed around 2,93,000 households for successful implementation of OHOT. It has impacted over 3,70,000 people directly & indirectly with a home toilet.
 
## From Paper-based system to a digital system using KoboToolbox
In the early years of implementing various schemes, be it affordable housing or delivery of sanitation, data was collected through pen-paper surveys. Over the years we have shifted to other, more technological driven means of data collection. In 2016, <a href="https://shelter-associates.org/blog/making-the-complex-simple-kobo-toolbox-improves-efficiency-in-data-collection/" target="_blank" rel="noopener noreferrer">we shifted our collection system to the Android-based open-source platform of KoBoToolbox.</a> Kobo is one of the most popular data collection tools in development sector. It provides an offline mobile app for data collection, a web app for designing forms and an option to extract collected data for further analysis.

Moving to Kobo certainly was a good step forward but we soon started facing limitations with it.
### Limitations with KoboToolbox
#### 1. Lack of ability to view and update records from the mobile app
KoboCollect does not support offline editing of records once submitted. It requires internet and is too complex as described in this <a href="https://community.kobotoolbox.org/t/update-an-already-submitted-record-on-a-mobile-client/1745" target="_blank" rel="noopener noreferrer">link</a>. Lack of any alternative for modifications forced us to survey the households repeatedly where data needed to be updated. With the increasing scale of interventions in different slums across cities, this was not a viable solution for long.

#### 2. Form-based data model as against Case-based
If we have to submit 50 responses for a slum, same slum name is to be entered 50 times. This slows down the work. Moreover, there was no way to validate to ensure the name entered is correct. Ideally, we would want a way to be able to pick from an available list or a dropdown. There are <a href="https://community.kobotoolbox.org/t/case-management-in-kobo/8944" target="_blank" rel="noopener noreferrer">workarounds but no native case management support in KoboToolbox.</a>
 
#### 3. Redployment required to change form design 
We could not add a question to the existing form and if we do, we <a href="https://community.kobotoolbox.org/t/updating-redeploying-survey-form-while-data-collection-is-on-going/6088" target="_blank" rel="noopener noreferrer">have to redeploy it and redeployment means losing existing data.</a>

## From KoboToolbox to Avni
While exploring solutions for these problems we came across the Avni application in a workshop organised by <a href="https://chintugudiya.org/tech4dev/" target="_blank" rel="noopener noreferrer">Tech4Dev platform</a> in Pune. This open-source platform, with a rich data modelling approach, an offline app for data recording, web app for admin & form designing and different options to extract data, promised to solve the problems we were facing.
 
Initially, we started with the city of Kolhapur as a pilot. We first migrated our data from Kobo to Avni which turned out to be simple. Kobo provides a way to export data in excel and Avni provides a way to upload/import using CSV files. After importing the existing data, we soon initiated the data collection using Avni. To carry out the modifications accurately we trained our surveyors to use the application, fill in different types of forms and update any filled in data as per the required changes. <span style="color:#ff470f">The users found it easy and the pilot worked out really well. Thus we decided to adopt Avni for all our work and started using it for the Pune region as well.</span>

![SA surveyors using android technology for data collection](/img/shelter-remoulding-data-collection/SA_surveyors_using_android_technology_for_data_collection.jpg)

### Benefits of moving to Avni from Kobo Collect
Below are the key differences and benefits we are noticing of using Avni over Kobo. We are listing these down for the benefit of those considering both these options for field work.
 
#### 1. Ability to design a custom app using locations, subject, programs and forms from Avni data model
The most important difference between the two softwares is that Avni provided us with the ability to create app as per our data model and data collection process. We created our location hierarchy of City, Ward and Slums using locations; households are created as subjects and separate forms for different vertical services like property tax, solid waste management, metered water connection, etc. 

![SA Avni app data model](/img/shelter-remoulding-data-collection/Shelter_data_model.png)

This provided us with 2 benefits
##### a. Avoid repetitive data collection
We register the household once and whenever a new service is provided, we record a new form by choosing an already registered household. This was not possible in Kobo and saves time and is very convenient to get real-time data.
##### b. Well modelled and segregated data enabling easy access to a subset of the entire data of a particular house
In the near future, household-level data collected can be shared and accessed with various departments of the Municipal Corporation to ensure work is carried out effectively. Data for sanitation, property tax, solid waste management, metered water connection, etc. once shared to the Municipal Corporation can be accessed for service delivery. For example, once a particular service like a metered water connection is provided to a household, the filled-in data can be retrieved and updated from a shared water connection to a metered water connection. As we collect and share data on different sectors, we can disintegrate it as per requirement and send it across various departments of the Municipal Corporation to link and use the collected data simultaneously. Once services are delivered the household data will be updated by our surveyors or the Municipal Corporation (if shared/access provided) and used further for monitoring tax collection, solid waste management, etc.

#### 2. Ability to search, view and update records anytime in the mobile app
As described earlier, in Kobo Collect once the data is submitted it is not possible to view and edit them. In Avni, the records always stay in the device even after submitting to the server. They can be modified and synchronized again with the server. This is really helpful in the field!

![Screenshots from SA Avni App ](/img/shelter-remoulding-data-collection/Shelter_avni_app_screenshot.png)
#### 3. Ability to control access of data to surveyors based on their work areas
Another useful feature is the assignment of the catchment. The administrator can give access or remove access of any particular catchment to any surveyor. This has enabled us to maintain the privacy of the information as well. 
#### 4. Hassle free modification of forms
Avni supported easy modification of app design including forms without having to redeploy or losing data.

This customized, editable solution for data collection has made our work effective and greatly reduced the efforts to maintain updated household-level data. 
