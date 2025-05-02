---
templateKey: blog-post
title: Release announcement - January 2023
date: 2023-01-09T16:00:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
---

Release 3.36 is now live. Please note that this is a major release. Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.36.5) for more information.

## Notable Changes
---------------------------------------------------------------------------

### Field-app - Component upgrades
One of the major changes in this release is an internal upgrade of the Field App packages. We have been working on this upgrade for a few months now. This upgrade helps us keep abreast with the changing technology and enables us to continue delivering features. The upgraded app seems stable for live use. Please take a look and provide feedback.  
 
You might notice some changes in the styling of the app and improved stability. But other than that, there should not be any major change.

### Field-app - Background sync
We had introduced automatic sync of Avni in the background before. However, this background sync has not been working well until now. With this upgrade, we had a chance to use some newer libraries that support background sync better.

There are 2 purposes for sync 
- to fetch any changes from the server and
- to push all pending changes in the field-app to the server

Please note that the sync process in the background is not exactly the same as manually pressing the sync button.
During automatic background sync triggered once an hour, the app will push all pending changes. This will ensure that any changes made by users show up on the server even if they do not explicitly sync on the app. Additionally, if there has not been a full-sync (push and pull) in the past 12 hours, then the app fetches changes from the server as well.

Documentation link - https://avni.readme.io/docs/sync#sync-data-between-avni-client-and-server

See below for a pictorial description. ![](/img/2023-01-09-avni-release-announcement/sync_work_flows.png)

### New password policy
Earlier, we had a constant password whenever a new user was created. With this release, the password creation policy for new users has changed. The new password will be of the form <xxxxyyyy> where "xxxx" is the first four characters of your username and "yyyy" is the last four characters of the user's phone number. As usual, the user will be required to change the password when they sign in the first time.

Admins can configure their organisation to skip the password change step for new users. This will help simplify workflows when there are a huge number of users. For most organisations, we highly recommend leaving this turned off.  
![](/img/2023-01-09-avni-release-announcement/change_password_policy.png)

### Longitudinal export
A new version of longitudinal export has been created. The old version still stays, while the new one continues to evolve. 

Some issues with the old longitudinal export have been
- Inability to fetch data across different forms for the same subject. eg: Fetch data from two different encounter types on the same program
- Inability to fetch group/household information
- Inability to fetch only selected fields from different forms

The new longitudinal export fixes all the above issues. Please head over to the "Reports" section on the web application to take a closer look at the new export mechanism. 
PS: The new format does not have a graphical mechanism to build your report. Please contact us if you need help creating a configuration for an export.
![](/img/2023-01-09-avni-release-announcement/new_longitudinal_export.png)

### Modifications in the Tasks feature

Some minor enhancements on the Tasks feature are going live with this release on the field app
- Tasks can now be filtered by the scheduled date
- You can now register a subject from the Call Task details screen. Any concepts available in the task metadata will be copied over to the subject during the Quick Register process.

![](/img/2023-01-09-avni-release-announcement/register_subject.png)

### Bug fixes/minor changes
- Field app - Sync of data where there are subjects registered in different location hierarchies
- Field app - Dashboard sections are not always sorted by the display order specified during design
- Field app - More page should work without internet connectivity
- Webapp - Support Enrolment Eligibility Check rule
- Webapp - Remove display of voided subjects in the Subject Assignment screen
- Webapp - Task status screen - Ensure the task status dropdown is filled on the Actions section
- App Designer - Generic Extensions (Allow definition of Avni extensions without specifying a functionality associated with it)


### Component release notes
- https://github.com/avniproject/avni-server/releases/tag/v3.36.5
- https://github.com/avniproject/avni-client/releases/tag/v3.36.5
- https://github.com/avniproject/avni-webapp/releases/tag/v3.36.5
- https://github.com/avniproject/integration-service/releases/tag/v3.36.5
- https://github.com/avniproject/rules-server/releases/tag/v3.36.5
