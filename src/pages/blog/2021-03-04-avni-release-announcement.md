---
templateKey: blog-post
title: Release announcement - Draft save, Approval workflow, Phone number
date: 2021-03-04T11:39:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
  - Release announcement 
  - Draft save 
  - Approval workflow 
  - Phone number
---

A new release of Avni field app and Avni admin app is available.

The latest version of the field app available on playstore is  **3.11.2.**


**What's new:**

The release brings you the following big features and enhancements
The first two features are to improve the data quality from the field. The next three feature help improve the usability of the app and efficiency of field workers 

**Approval Workflow**

This feature allows projects to enable a workflow where a supervisor needs to approve the form before it gets considered for reports and analytics. The supervisor can either approve the form or reject it with comments for the primary user to make changes and submit again.

![](/img/2021-03-04-avni-release-announcement/approval.png)  

![](/img/2021-03-04-avni-release-announcement/approval2.png)  


**Phone Number Verification**

This feature allows projects to enable an OTP based verification when the phone number is recorded in the app. While it was already possible to put validations like it should be 10 digits, this feature now helps ensure that the number actually exists.  

![](/img/2021-03-04-avni-release-announcement/otp.png)  
  
**Draft Save**

This feature is especially useful when there are long forms and there are interruptions in between. When enabled, forms keep getting saved as drafts on the press of next button unless the form is actually saved by the user. The drafts are not synced with the server and stay on the device for 30 days after which they are automatically removed. 
Currently this feature is only supported for subject registration but if required can be extended to other forms. 

![](/img/2021-03-04-avni-release-announcement/draft.png)  


**Custom Dashboards**

Avni now allows implementers to design their dashboards with custom sections and cards like the one in the Approval screenshot above and set one of them as the "Home" dashboard. 

**Validations across subjects**

Avni now allows implementers to write rules such that validations can be done across subjects. For e.g. do not allow endline to be done for Mother unless endline is done for Child. 

**Metabase Upgrade**

We have upgraded Metabase to the latest version. You may see some changes in the user interface. Metabase now supports pivot tables, waterfall charts, etc. Detailed notes can be found [here](https://github.com/metabase/metabase/releases/tag/v0.38.0).


The release also includes some minor enhancements and bug fixes.
More notes can be found [here](https://github.com/avniproject/avni-client/releases/tag/v3.11.0).  
