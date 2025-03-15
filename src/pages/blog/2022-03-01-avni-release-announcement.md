---
templateKey: blog-post
title: Release announcement - Rule designer, Canned Analytics, Image access and CSV upload validations
date: 2022-03-01T09:12:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
---
TLDR : In February we worked on some amazing features. Rule Designer and Canned Analytics eliminate the last of the hurdles in making Avni self-serviceable, at least and definitely for the small projects and survey type usecases. Images and other media will now be accessible from Reports in a secure manner. Fixing a leakage on quality when data uploaded via CSV. They now pass through a net of validations. 

The Feb release is now out!! 🎉

Read on to know more.    

### New features

---------------------------------------------------------------------------

### Rule designer
Using rule designer one can define rules without writing any javascript code. Which means a person with no programing experience will be
able to write the rules. Simply choose the options from the drop-down menu to define different rule conditions and select appropriate actions.
Once the rule is defined, readable summary appears at the top which explains how the rule will work.

Below are some examples

![](/img/features/RD_skip_logic.gif)
<span style="display:flex;justify-content:center;">Skip logic rule</span>
<br>

![](/img/features/RD_validation_error.gif)
<span style="display:flex;justify-content:center;">Validation rule</span>
<br>


![](/img/features/RD_visit_scheduling.gif)
<span style="display:flex;justify-content:center;">Visit scheduling rule</span>
<br>
<br>

### Canned Analytics
Analytics from data captured via Avni can be derived by connecting any BI tool e.g. Metabase to either Avni database or APIs. However, this has certain limitations Setting up analytics using these BI tool requirers the know-how of these tools. Many organisations using Avni don't have these expertise and they need to depend upon software partners to set this up for them. This has time and cost implications.

So introducing Avni canned reports where it understands the domain and smartly gives out-of the box insights which can be a good starter for organisations to start reviewing and making sense of their data without any extra cost. It also gives ability to explore data based on dimensions and pre-defined filters required in the domain.

![](/img/features/avni_canned_reports.gif)
<span style="display:flex;justify-content:center;">Avni Canned Analytics</span>



### Secure Media access from Reports
Data in Avni is stored in two different data sources. The first is the postgres database, which are easily connected to the reporting servers that are being used by hosting. The second is an S3 database where media is stored.

In reporting tools, there is a mechanism to show data by connecting to a data source. However, S3 access is usually not provided. In case you need to expose media through reports, here is what you need to do.

1. Provide users access to Avni.
2. In reports, observations are usually of the form "[https://prod-user-media.s3.ap-south-1.amazonaws.com/org_name/file_name.png]()". This will be stored in observations of the form. To provide a link that shows this, change it to the form "[https://app.avniproject.org?redirect_url=https://prod-user-media.s3.ap-south-1.amazonaws.com/org_name/file_name.png]()".

Doing this will send the user to [app.avniproject.org](), which will redirect the user to the corresponding media once they have authenticated themselves on avniproject.

---------------------------------------------------------------------------

### CSV upload validations
CSV upload now supports all the form validations and runs decision and visit scheduling rules for the form. Which means that
data upload now behaves similar to data entry using web or mobile client.
CSV upload now works as follows
1. All the entries in CSV are validated before saving to the database. Suppose a field is marked mandatory in the form and value is not provided in the CSV then upload fails giving the error that the mandatory field cannot be empty.
2. All form element and form element group rules are run during CSV upload, so if there is a value for any form element which is hidden then that value is ignored. This behaves similarly to how data entry is done from the web or mobile app.
3. New visits get saved based on the visit schedule logic.
4. Decisions are saved along with the observations based on the decision rule logic.

---------------------------------------------------------------------------

### Bug Fixes
- Server - Longitudinal export ignores start date and end date while generating the exports.
