---
templateKey: blog-post
title: Major Release announcement - May 2024
date: 2024-05-14T20:30:00.000Z
author: The Avni Team
description:
featuredpost: false
featuredimage:
tags:
- Release announcement
---
Major Release 8.0.0 is now live, it includes the following modifications to the Avni application

## What's new?

Here in this section, Newly added features are covered which are part of release 8.0.0.

### Secondary Dashboard on the bottom drawer of the Avni mobile app
With the secondary dashboard configured for user groups in the Avni web app, users who are part of that group will see an option to navigate to the secondary dashboard on the bottom drawer of the mobile app. With this change, users can now see the primary dashboard on the home page and the secondary dashboard as a separate section.


<img src="/img/2024-05-14-ReleaseBlogpost/secondary-dashboard.gif" width="400px"/><pre>Secondary dashboard in Avni</pre>


### Ability to select multiple media files in one go!
Currently, users can only select and upload one media file at a time. With this new feature, users can select multiple media files from their local drive and upload them all at once. This allows users to avoid repeating the same process multiple times.

<img src="/img/2024-05-14-ReleaseBlogpost/multiple-media-import.gif" width="400px"/><pre>Ability to select multiple media</pre>


### Form level edit rule to allow/restrict edits
This feature, "Edit form rule," allows configuring rules for editing respective forms. Once configured in the Avni web app, this feature can allow or restrict the edit function for any form. This restriction can also be dynamic, where based on specific details provided in the form, edits will be allowed or restricted. If a form is configured to be restricted for editing, users will receive a validation stating this function is not allowed. Additionally, there is a provision to set custom validation if editing is restricted.

<img src="/img/2024-05-14-ReleaseBlogpost/form-level-edit.gif" width="400px"/><pre>Form level edit rule</pre>


### Option to copy errors in all error scenarios from the mobile app
This feature introduced by the Avni team will help mobile app users to copy the entire error message, which can then be shared with the Avni support team. Users will be allowed to copy any type of error message from any crash or failure occurring on the login page, while syncing, or while using any features of the mobile app. In some crashes or failures where a restart is required, a restart button will be included with the error message to perform a restart without closing the app.

<img src="/img/2024-05-14-ReleaseBlogpost/copy-error-message.png" height="400" width="250" align='middle'/><pre>Option to copy errors in all error scenarios</pre>


### User audit fields like filled by, created by in the completed encounters
This feature allows users to see details like "filled by" and "created by" once the encounter is filled. This helps identify the user who filled or created the encounter in cases where multiple users have access to perform any visit for any entity. These fields will not require sync to update the details in the mobile app.

<img src="/img/2024-05-14-ReleaseBlogpost/user-audit-fields.gif" width="400px"/><pre>User audit fields in completed encounters</pre>


### Ability to hide registration details and planned encounters in the Avni mobile app
With this new feature, subject-wise configuration can be done to restrict users from seeing the registration details, planned encounters, or both on the subject dashboard. By default, all users would be able to see the registration and planned encounter details; this change can be made from the Avni web app for any given subject (entity).

<img src="/img/2024-05-14-ReleaseBlogpost/hide-registration-details.gif" width="400px"/><pre>Ability to hide registration details in Avni</pre>


## Enhancements or changes

### Report card name to be displayed on the listing page when users open report card to see the subject list
Currently, after opening any report card, on the listing page users can see the title as "subject list." As part of this release, we have changed this to display the report card name that is opened.

<img src="/img/2024-05-14-ReleaseBlogpost/report-card-name.gif" width="400px"/><pre>Report card name to be displayed instead of subject list</pre>


## Minor Bug fixes

### Editing general encounter will not schedule duplicate encounter
If there is a provision to schedule a visit based on a general encounter, editing the general encounter would previously schedule another visit, considering it as a fresh general encounter. This has been fixed, and going forward, editing a general encounter will not schedule a duplicate visit.



