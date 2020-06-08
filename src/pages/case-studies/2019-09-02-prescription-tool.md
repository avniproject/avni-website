---
templateKey: case-study
title: "Prescription tool for community health workers - A simple use of\_Avni"
date: 2019-09-02T06:33:06.442Z
description: >-
  Avni used for generating prescription, for common health complaints, based on
  a few data inputs provided by the village health worker - to fill some gaps
  caused by extreme remoteness of some villages.
featuredstudy: false
featuredimage: /img/products-grid1.jpg
tags:
  - Health
  - Prescription
---
There are parts of India where the road connectivity from the villages to the nearest block headquarter is quite poor. One such place (tehsil, i.e. block or sub-district) is <a href="https://www.mapsofindia.com/villages/maharashtra/gadchiroli/bhamragad/" target="_blank" rel="noopener noreferrer">Bhamraghad</a>. <a href="http://www.lokbiradariprakalp.org/" target="_blank" rel="noopener noreferrer">Lokbiradari Prakalp</a> (LBP), in village Hemalkasa, is the literal lifeline of this and neighbouring blocks, because it has a hospital (do go to the home page of Lokbiradari Prakalp and see the photos to get the feel of the place and the hospital).

For many months of the year, getting to the hospital from the villages in the same block can be quite difficult. One may need to wade through knee/waist height water for a couple of hours, to reach the hospital. For certain illnesses seeing the doctor is the only option. But in many conditions like fever, headache, diarrhoea, vomiting, acidity, scabies, etc - going or taking someone to the hospital, losing one day of employment is not feasible. Ordinarily, in the public health system, there is nearby <a href="http://nrhmmeghalaya.nic.in/sub-centres-scs" target="_blank" rel="noopener noreferrer">subcenter</a> with a trained nurse whom one can go to. But these subcenters are only partially operational - leaving people with fewer options.

To resolve this problem LBP along with the village representatives, decided to run health centres for every 6 villages. These health centres to have medicines, and a few other basic facilities like weighing machine, BP machine, etc. These pharmacies were to be run by a selected person from one of these villages - called arogyadoots or community health workers (CHWs).

Overall the CHWs were responsible for:

1. categorise the complaint into one or more of 16 types
2. compute the quantity, form and number of doses of the medicine based on age, weight, gender & complaints
3. making referral in some cases instead of dispensing the medicines
4. note down the details for monitoring purpose

2 & 3 above are error-prone and monitoring of the work from the paper records was difficult. There was a need for a solution that could do 2,3 & 4; from a mobile device, offline. Also, consolidate all this data in a central place for analysis.

- - -

While many data collection products allow for forms with user-defined fields, skip logic etc. We wanted to allow for the insertion of programmable logic in various parts of the workflow. This programmable logic being specific only to that implementation. This ability differentiates Avni from other products. Avni allows for JavaScript-based rules, a language that has the most number of programmers - hence it is easy to find them.

This was the first use-case of Avni (then called OpenCHS). Avni provided a simple mobile form which on completion did 2 & 3 based on rules configured for this implementation. On every interaction with the patient, the CHW would fill one form with 8–10 questions (there were other form questions like BP, Temperature, Pallor, Pedal Edema, Skin Condition, etc for later analysis).

This field app has been in use for the last three years now, by 6 health workers covering 30 villages of a total of 15,000 population. The health workers have almost no connectivity in the field. They travel to LBP once a month, for monthly discussions and at this point, they sync the data with the server. (This is an extremely low resource setup where in the villages the Internet has not reached, in most villages in India now, the Internet is of low quality but present. In such cases the data can be synchronised regularly.) At the time of writing, this is the only implementation of Avni that runs on the server on-premise. We made that decision because the Internet connectivity even from the hospital is not reliable.

![](/img/lbp-case-study-1-.png "Deployment of Avni at Lok Biradari Prakalp")

- - -

The software-based approach allowed LBP to change the prescription logic, medicines, for some of the complaints.

Currently, LBP plans to roll out another program, for maternal and child health - which has been configured and tested, as of now.

_ps: the health program has been described in more detail on LBP's website here._

- - -

**Credit for icons**

"designed by - https://www.flaticon.com/authors/roundicons, https://www.flaticon.com/authors/pixel-buddha, https://www.flaticon.com/authors/freepik, https://www.flaticon.com/authors/eucalyp- from Flaticon"
