---
templateKey: blog-post
title: Release announcement - October 2022
date: 2022-10-20T16:00:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
---


Happy Diwali to you !!!

Release 3.35 is now live. This release includes minor changes and bug fixes to the application. Notable changes are given below. Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.35.0) for more information. 


## Notable Changes
---------------------------------------------------------------------------

### Web Application
- Add flags for Glific messaging (WIP)
- Auto populate is not working if all form elements are read only
- Adding middle name without a regex fails the app designer

### Field App
- Support ids in custom links
- Allow refresh of cards on custom dashboard
- Unable to add member to a household in staging
- App does not parse some valid ISO8601 formats

### Server
Additions for the new Glific message integration feature (WIP)
Fix user csv upload to ensure blank sync settings are added
Unable to set group role to concept of type GroupAffiliation in form (Deployed as part of 3.34.1)
Voided form mappings should not fail the app
Include location types in metadata zip

### Component release notes
- https://github.com/avniproject/avni-server/releases/tag/v3.35.0
- https://github.com/avniproject/avni-client/releases/tag/v3.35.0
- https://github.com/avniproject/avni-webapp/releases/tag/v3.35.0
- https://github.com/avniproject/integration-service/releases/tag/v3.35.0
- https://github.com/avniproject/rules-server/releases/tag/v3.35.0



## What are we focussed on
---------------------------------------------------------------------------

The priorities on Avni are still the same as we discussed in release [3.35](/blog/2022-09-30-avni-release-announcement/). However, the work involved in upgrading the Android field app is taking time. We believe that the most important pieces of the puzzle have been solved, and it is mostly a matter of driving this to completion. 

As a result, we have put a brake on the other two objectives, and are going full-steam on the upgrade. 

We will continue to have minor bug fixes that help in solving immediate problems, or are essential for implementations. 
