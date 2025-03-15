---
templateKey: blog-post
title: Release announcement - Location datatype, subject migration, sync speed improvement
date: 2021-11-04T18:39:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
---
 

### New features

### Handle Subject/Individual migration across catchments
Many Avni users have been trying to find ways to move subjects across catchments. This usually causes errors in sync that had to be manually fixed. With this new release, it is now possible to move subjects from one catchment to another. This can be done either via the browser-based Data Entry App, or the Android Field-App (with someone who has access to both the old and the new catchment).

---------------------------------------------------------------------------
### Improved sync speed
We've been trying to find ways to improve sync performance for a while now. One of the recent attempts include introducing the "Fast Sync" mechanism. This time, we are making sync faster for those who sync frequently. We are expecting that if you do not have many changes, sync times should go down to under 5 seconds. Please update your app and let us know.

In the next release, we are planning improve sync performance for first-time syncs. Stay tuned for updates.

---------------------------------------------------------------------------
### Location datatype in forms for Data Entry App
The location datatype was introduced in the Android Field-app for quite a while, but was not  supported in the browser based Data Entry App. With this release, forms that have a location datatype will be supported by the Data Entry App.

---------------------------------------------------------------------------
### Rule failure management
When rules that figure out visit schedules, decisions etc fail, they are usually logged in a table within the Avni database. In this release, this has been brought to the App Designer interface so that implementers can now look at these failures and take necessary action. 


![](/img/2021-11-04-avni-release-announcement/rulefailures.png)

---------------------------------------------------------------------------
### Bug Fixes
- Data Entry App - Voided group roles show up on subject details page
- Data Entry App -  subject search API should not return the subjects for voided subject type
- Field App - Keyboard should auto-hide when next question is answeredField App - App crashes when editing the existing member deatils and when save and add new member is pressed
