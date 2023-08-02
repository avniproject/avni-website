---
templateKey: blog-post
title: Avni Sprint, Udaipur, July 2023 - Day 2
date: 2023-07-14T09:45:00.000Z
author: Himesh R
description: In this blog, I have covered the happenings of the second day of the Avni sprint at Udaipur, July 2023.

featuredpost: false
featuredimage: /img/2023-07-14-avni-sprint-udaipur-day-2/fateh-sagar.jpg
tags:
- Udaipur Sprint
---

The Tech4Dev sponsored, Avni sprint in Udaipur was conducted from 9th - 14th July 2023. After a hectic start to the sprint on the first day, on day 2, we set out to achieve few of the team objectives for the sprint:
 - Group discussions 
 - Knowledge sharing and 
 - Field visits / NGO Founder talks

Read on to know more about how the day unfolded.

----------------------------

## Early start to the day

We got up early, at around 6 AM, to go out for a walk in and around Sajjangarh, as planned on the previous day. Vedant and Sachin and I left for the walk, at around 7 am.

We initially though of taking a stroll inside the Sajjangarh Wildlife sanctuary, but since the gates were close, we decided to walk around its perimeter. The walk wasn't pleasant initially, due to pot-hole ridden roads. We then came across another friend of ours, Vinay, who was coming from the opposite direction heading back to the hotel. He told us about his walk and how he had seen the Fateh Sagar lake on his way back.

At this point, we decided to change course and head towards the Fateh Sagar lake. So we set up GoggleMaps navigation, and it took us through a village and fields to reach the lake. The early morning sun was shining brightly and the view of the lake was a refreshing sight. We rested at one of the view-points at the lake, for a while.

![](/img/2023-07-14-avni-sprint-udaipur-day-2/fateh-sagar.jpg)

We then hailed an auto back to the hotel as we were running late for the Tech4Dev session for the day.  We reached the hotel at 8 am, we freshened up quickly. We then had breakfast with rest of our team-mates, sharing information on what early-morning activity each one of had done till then. Few of our team-mates had enjoyed swimming at the hotel pool, while others had gone out for walk elsewhere.

----------------------------

## Start of the Official work day

Our workday started with a Tech4Dev session, conducted at the Hotel's conference room. The agenda fo which was:
1. An introduction to Social Bytes NGO and an overview of their Convene Platform
2. An overview of the process adopted by "Agency Fund" to vet future investment opportunities

#### Social Bytes 

![](/img/2023-07-14-avni-sprint-udaipur-day-2/t4d-11-july-first-session.jpg)

Gurukiran, one of the Co-Founders of [Social Bytes](https://thesocialbytes.com/), started off with an introduction about their organisation. Their goal as stated by him, is to "Work with Change Makers at Scale in the Social Development sector". They have been working in the development sector for more than 20 years. 

Few of their notable achievements have been with following initiatives:
 - CRY Meal system : "Provide underprivileged children access to proper food and nutrition"
     - Has 90+ forms
     - Provides Data Visualization using BI tools
     - Integration with Active Directory
 - Cuddles Foundation : "Help underprivileged children recover from Cancer by providing proper nutrition"
   Their approach to solve this problem is as follows
     - Nutritionist uses platform to specify the meal-plan for the child
     - Meal-plan is then translated into Groceries list needed for a month
     - The Groceries list is sent to a Kirana shop that has tie-up with the organisation
     - Parent of the child then collects the Groceries from the Kirana shop by specifying an OTP sent by the organisation
   
   Earlier the OTP used to be sent via SMS, the organisation is now switching to Glific Whatsapp messaging for their out-reach and engagement.
     
 He then wrapped up the talk by listing out in brief a few other projects they have worked on, which included:
1. Svetana
2. Mera Aspathal
3. HelpAge

After this, Girish, another Co-founder from [Social Bytes](https://thesocialbytes.com/) gave an overview of their platform.
"Convene" platform, is a collection of libraries that provides following capabilities:
 - Data collection with skip-logic, reports and Dashboards
 - Mobile Based Android application 
 - BI and Analytics
 - Secure and Scalable
 - Customizable 3rd party integration
 
![](/img/2023-07-14-avni-sprint-udaipur-day-2/convene-platform.jpg)
 
#### The Agency Fund

Robert, from [The Agency Fund](https://www.agency.fund/), gave us insights into the Data-driven approach they take in evaluating the impact of a project. These insights are then fed into their decision-making process to determine projects to provide funding for.

![](/img/2023-07-14-avni-sprint-udaipur-day-2/taf-data-playbook.jpg)

Data in the Development sector can be used for:
 - Obtain Metrics / Visualization for specific use-cases
 - Constructing Funnel to categorize beneficiaries
 - Predicting outcomes of a specific type of intervention
 - After an intervention, evaluating its impact

This talk and the Q&A afterwards, made me realize that there are several advantages to integrating DataAnalytics within our project and products. They aid in evaluating impact and making appropriate course corrections in the current mode of working. They also ease understanding of our work for people from outside the organisation.

![](/img/2023-07-14-avni-sprint-udaipur-day-2/taf-development-data-stack.jpg)

----------------------------

## Overview of Avni Models 

After the Tech4Dev session, we returned to the Boardroom of the hotel to resume Avni Knowledge sharing sessions.

Vinay gave us an overview of Avni models module, which is a major dependency for 3 other components : Webapp, Rules-server and Client. He explained in-detail its 
 - overall purpose
 - design and critical functionality within the client module and
 - its usage while defining rules for an implementation

## Deep-dive into the Synchronization process in Avni application

![](/img/2023-07-14-avni-sprint-udaipur-day-2/avni-sync-walkthrough.jpg)

One of the critical components of Avni application is the Sync process between the Backend server and the Client application. Since we have  a few new joinees to the Avni team, it was critical for them to have an understanding of how this process works. This would aid in :
 - debugging Sync related issues reported by the user and 
 - also help while performing data modifications related to sync for an implementation.

Major topics covered as part of this walk-through by me were as follows:
 - Pull Mechanism employed by Avni-client to sync data
 - SyncDetails API call
 - Different types of data synced to and from the client (Metadata, Transactional data, Media)
 - Order of Data-sync to the client
 - SubjectMigration
 - Sync reset on change in User sync configuration
 - Different sync strategies
 - Association errors
 - Access control
 - Automatic Background sync
 - Fast-sync and the issues caused by stale MobileDB backups

----------------------------

## Lunch and regular work

After the two tech sessions, we took a lunch break at around 1:30 pm. We then resumed regular work till 4:30 pm to catch up on some pending tasks.
 
----------------------------

## Basic Healthcare Services 

Arjun had invited Dr.Pavitra Mohan, on of the Co-founders of Basic Healthcare Services to our Sprint, to give a talk about the development work done by BHS in rural villages of India. He spoke to us at length and gave us invaluable insights into the growth of BHS and also the evolution of Primary Healthcare in India. He also answered questions related to use of technology to improve PHC in remote villages.

![](/img/2023-07-14-avni-sprint-udaipur-day-2/bhs-session.jpg)

#### Challenges with Primary Healthcare in remote villages of India
 - Villages are in-accessible and very far away from any sort of Healthcare center
 - Absentee Head of Household, resulting in women / children feeling apprehensive and delaying / not availing healthcare
 - Restrained mobility of beneficiary, some women spend their whole life within a 50km radius
 - State provides services only to people residing within a specific geographical location
 - Financial constraints leading to severe malnutrition in adults as well as children

#### Common mortality causes in remote villages of India
- Earlier, detection of specific illness took a long time, ranging from a week to a month. This would result in significant delay in initiation of medications, sometimes resulting in death of the patient. Ex: Confirmation for TB, specific type of Malaria, etc.. 
- Non-availability of Delivery and Neo-natal care, resulting in delivery time deaths

#### Model adopted by BHS to provide Primary Healthcare(PHC)
Aim is to provide , good quality preventive, promotive and curative care with Humility in "Amrit" clinics. These clinics are setup on land leased out to BHS by the community, to ensure they have significant stake in the implementation of the program. Nurses are the primary work-force in the clinic. These Nurses are qualified and receive additional training on how to handle major PHC scenarios that occur in those regions. Also, these nurses are usually native to that region and are able to better adjust to the vagaries of life in the remote village and also empathise with its local population.

A typical "Amrit" clinic is setup in the following manner:
 - Has 3 resident nurses 
 - A doctor visits the clinic once every week 
 - Basic EMR system
 - Simplified Medical protocols
 - Rapid Diagnostic kits
 - Antidotes for snake bites
 - Medication for seasonal / prevalent infections
 - Network connectivity
 - Reliable solar solutions
 - Functioning Maternity care infrastructure

#### Phulwari Initiative by BHS
BHS has also setup Phulwari, which are Day-care centers for infants, in-order to provide
 - Nutrition for kids
 - Relief to the working mother
They currently run 15 to 16 Phulwaris with about 20 kids in each one of them.

#### Observed impact of BHS interventions
Rural Sensitization program has improved awareness about PHC amongst the village population. BHS has observed following changes after their interventions / programs:
- Improved adoption of family planning practices by women
- More enrolments for Pregnancy programs
- Phulwaris have eliminated Severe Malnutrition
- Increase in care-seeking and availing of weekly check-ups
- Improvement in elderly care
- Most of the beneficiaries achieve 100% immunization

#### Role of Telemedicine for Primary Healthcare in remote villages of India

Dr.Pavitra was of the opinion that, Telemedicine cannot effectively replace real live consultations with doctor, when it comes to Primary Healthcare in remote villages. Few of the reasons for which are as follows: 
 - Lower engagement felt by the patient when sharing their medical concerns
 - Doctor might not be cognizant of the local scenario
 - even the best telemedicine tool has technical issues due to poor connectivity in the villages
 - capabilities of the app not being flexible to switch to alternate applications due to technical problems
 - Restrictive for the doctors to confidently provide accurate diagnosis when there are complications

----------------------------
## Ajeevika Bureau Field visit

![Avni team-members Sachin(4th from right), Vedant(3rd from right) and Nupoor(2nd from right) in the middle with the "Labour line" support team](/img/2023-07-14-avni-sprint-udaipur-day-2/ajeevika-field-visit.jpg)

Simultaneously while the BHS talk was ongoing, few of the participants from the Tech4Dev conference, including a few of my Samanvay teammates visited one of the Ajeevika "Labour line" call centers, to understand their functioning.

## Wrap up

Finally, wrapped up the day by putting in some coding effort to resolve a Bug in Avni application.
After which, we had a sumptuous buffet dinner at the hotel. We then went to the lawn at the hotel premises and had hearty laughs sharing stories of our youth.

It was a great end to a very memorable day, in which we had atleast partially accomplished few of the team objectives set for the sprint.!

----------------------------

#### Reference Links

[Social Bytes](https://thesocialbytes.com/about-us/team/)
[The Agency Fund](https://www.agency.fund/)
[Basic Health Services](https://bhs.org.in/)
[Aajeevika Bureau](https://www.aajeevika.org/)
[ProjectTech4Dev](https://projecttech4dev.org/)
[Samanvay Foundation](https://www.samanvayfoundation.org/)

----------------------------

![](/img/2023-07-14-avni-sprint-udaipur-day-2/avni-team-group-photo-udaipur-sprint.jpg)

----------------------------
### Samanvay Foundation is Hiring for multiple roles

Samanvay is looking for people who are passionate about their craft and want to work for social development.
You can find all the open positions [here](https://www.samanvayfoundation.org/join-us)
