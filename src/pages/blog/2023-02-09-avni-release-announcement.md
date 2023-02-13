---
templateKey: blog-post
title: Release announcement - February 2023
date: 2023-02-13T16:00:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
  - Release announcement 
---

Release 3.37 is now live. Please note that this is a major release. Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.37.11) for more information.

## Notable Changes
---------------------------------------------------------------------------

### Performance improvements
- Rendering of radio buttons and checkboxes. This in turn improves the rendering time and transition to form pages that have many radio buttons and checkboxes.
- Rendering of subject list
- Opening a subject profile from subject list
- Moving to the Summary and Recommendations page
- Sync performance by optimizing caching for addresses

Check out this [before performance improvement video](https://drive.google.com/file/d/1ROqesiF_X4RgJ2DMmBq-UQZVVwAjKYtt/view?usp=share_link) and [after performance improvement video](https://drive.google.com/file/d/1aXSQ8fQOifRMB3O22ms6Oa68-CiBA0yV/view?usp=share_link) to get a feel of the performance improvement made.

### Whatsapp integration
- Sending scheduled messages to subjects and users on filling up of registration form, encounter form or enrolment form.
- Creation of virtual groups and sending scheduled messages to the members of the group.
  - Currently only member's name is supported to be sent as dynamic parameter. In future other individual's data will also be supported.
- Viewing of scheduled and sent messages in subject profile of data entry app.

Documentation link - https://avni.readme.io/docs/whatsapp-integration#limitations

### Existing feature enhancements
- Allowing multiple enrolments of same program for a subject - https://avni.readme.io/docs/program 
- Showing options for Coded concepts in Task filters
- Support subject form element in a repeatable question group

### Bug fixes
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
- https://github.com/avniproject/avni-server/releases/tag/v3.37.11
- https://github.com/avniproject/avni-client/releases/tag/v3.37.11
- https://github.com/avniproject/avni-webapp/releases/tag/v3.37.11