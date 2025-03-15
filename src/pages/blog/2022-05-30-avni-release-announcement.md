---
templateKey: blog-post
title: Release announcement - May 2022
date: 2022-05-30T09:12:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
---

### New features

---------------------------------------------------------------------------

### Name help text for the subject
Now help text can be configured for the subject name. 
This text will be useful in case subject name accepts a particular format.

![](/img/features/Subject_type_help_text.png)<pre>Configuring subject type to display name help text</pre>

---------------------------------------------------------------------------

### Profile Picture
Profile picture can be uploaded for each subject in their registration form. 
This can be enabled by simply enabling "Allow profile picture" option in the subject type.
Profile picture is shown in the subject dashboard and search result page. 
This feature will be useful to distinguish the subjects having the same name.

![](/img/features/Profile_pic_registration.png)<pre>Uploading profile picture in registration</pre>

![](/img/features/Profile_pic.png)<pre>Subject dashboard</pre>

---------------------------------------------------------------------------

### Location edit via CSV upload
Now location upload supports the edit mode, using which admins can edit an existing location. 
Id of the existing location needs to be passed in the CSV for edit to work. 
Default mode is create and it'll continue to work as earlier.

![](/img/features/location_mode.png)

---------------------------------------------------------------------------

### OTP retries for skipping mobile number verification changed to two.
Earlier you can skip the mobile number verification after three retries. This is now changed to two retries.

---------------------------------------------------------------------------


### Bug Fixes
- Android app - Fix the app crashing if register+enrol option is enabled and there are subjects without program.
- Server - Metadata zip to include sync attributes.

