---
templateKey: blog-post
title: Release announcement - February 2023
date: 2023-02-13T16:00:26.313Z
author: The Avni Team
description: 
featuredpost: false
featuredimage: /img/2023-02-13-avni-release-announcement/whatsapp-480.png
tags:
---

Release 3.37 is now live. This release includes App Stability, Whatsapp (Glific) Integration, Feature Enhancements and Bug fixes. 
 
Please note that this is a major release.


## Notable Changes
---------------------------------------------------------------------------

### Performance bug fixes
One of the major changes that we had done in [last release](https://avniproject.org/blog/2023-01-13-avni-release-announcement/) was packages upgrade in the field app. Even though we had done a lot of testing and stabilisation, after the release rollout users started reporting performance issues. So, one of the major priorities for us in this release was to stabilise the application and bring back the experience of the users to pre-package upgrade levels. With significant efforts we have been able to make good progress. Slowness reported in various areas have been fixed. There is still scope for improvement and fine tuning and we would continue to do that in subsequent releases.

Check this [before performance improvement video](https://drive.google.com/file/d/1ROqesiF_X4RgJ2DMmBq-UQZVVwAjKYtt/view?usp=share_link) and [after performance improvement video](https://drive.google.com/file/d/1aXSQ8fQOifRMB3O22ms6Oa68-CiBA0yV/view?usp=share_link) to get an idea of the performance improvement made.

### <i style="background-color: #25d366; color: white;" class="fab fa-whatsapp"></i> Whatsapp (Glific) integration
This is one of the most looked forward feature that we have been working on. In this release we made further strides in completing this feature and following functions are now ready to use in production
- Sending scheduled messages to subjects and users on filling up of registration form, encounter form or enrolment form.
- Creation of virtual groups and sending scheduled messages to the members of the group.
- Viewing of scheduled and sent messages in subject profile of data entry app.

![](/img/2023-02-13-avni-release-announcement/glific_sending_message.png)<pre>Screen for scheduling message to groups</pre>
----------------------------

<a href="https://avni.readme.io/docs/whatsapp-integration" target="_blank" rel="noopener noreferrer">Refer to the documentation here to learn more about the Whatsapp (Glific) integration feature</a> 

### 🚀 Feature enhancements
- Allowing multiple simultaneous enrolments of same program for a subject. You can read more about the feature <a href="https://avni.readme.io/docs/program" target="_blank" rel="noopener noreferrer">here</a>  
- Showing options for Coded concepts in <a href="https://avni.readme.io/docs/tasks" target="_blank" rel="noopener noreferrer">Task</a> filters
- Support subject form element in a <a href="https://avni.readme.io/docs/repeatable-question-group" target="_blank" rel="noopener noreferrer">repeatable question group</a>

### 🐞 Bug fixes
- Field app - Fix for search with custom filters not working
- Field app - Fix for unable to apply filters on Task List screen
- Field app - Fix for unable to update task status
- Field app - Fix for unable to reschedule a task
- Field app - Fix for create / edit of DraftSubject not retaining the entered values
- Field app - Fix for rule failure error messages blocking the usage of the app
- Field app - Fix for subject form element with displayAllGroupMembers enabled not showing the selected members
- Field app - Fix for overlapping of screens when editing forms
- Data Entry App - Fix for unable to add decimal numbers in the numeric field
- Webapp - Fix for issues with updating of task status
- Webapp - Fix for unable to open form wise approval settings
- App Designer - Fix for supporting both skip answers and value in form element
- App Designer - Fix for unable to open registration form for some organisations
- App Designer - Fix for unable to open Advanced settings


### Component release notes
Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.37.11) for more information.

- <a href="https://github.com/avniproject/avni-server/releases/tag/v3.37.11" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-server/releases/tag/v3.37.11</a>
- <a href="https://github.com/avniproject/avni-client/releases/tag/v3.37.11" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-client/releases/tag/v3.37.11</a>
- <a href="https://github.com/avniproject/avni-webapp/releases/tag/v3.37.11" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-webapp/releases/tag/v3.37.11</a>

Credits : <a target="_blank" href="https://icons8.com/icon/30448/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
