---
templateKey: blog-post
title: Major Release 3.39.0 - June 2023
date: 2023-06-06T10:50:00.000Z
author: The Avni Team
description:
featuredpost: false
tags:
- Release announcement
---
Major Release 3.39.0 is now live, it includes following modifications to Avni application.


## Notable Changes
---------------------------------------------------------------------------

### Support for Filters on Custom Dashboards
While the regular dashboard of Avni has default filters, custom dashboards did not have the ability to attach filters. With this release, we are providing options to add filters to the custom dashboards.
[Read more](https://avni.readme.io/docs/offline-reports#dashboard-filters) about how to use this feature.

### External API support for media
External API users can now POST media for Subject, Task, Encounter, ProgramEnrolment and ProgramEncounter entities.
[Read more](https://avni.readme.io/docs/api-guide#media-observations).

### Sync Performance improvements
We have improved performance of sync when media needs to be uploaded to Avni. 

### White-labeling of Avni Android Field App
Different implementations of the Avni field app can now be packaged and released from the same codebase. 

### Removal of dependence on Amazon Web Services
There were some components that were being used by Avni that made it work only on Amazon Web Services infrastructure. With this release, Avni provides options to plugin other open-source software replacements for these AWS specific components. Avni is now ready to be installed on any on-premise servers.

There have also been other minor bug fixes and UI/UX improvements. Please see the Component release notes linked at the end for more information. 

---------------------------------------------------------------------------
### What's next?

There are some big features that we have been working for a while that will be released next. Notable ones include

#### Access control on the web application
We are working on introducing fine-grained data based access control on the browser based apps - the App Designer, Admin and Data Entry Applications. Non-catchment based access control (access control to programs, subject types, encounter types etc) along with fine-grained access control to parts of the Admin section will be introduced in this release.

#### Improvements to ETL
We are working on making the ETL processing more robust for organisations that have analytics enabled. 

---------------------------------------------------------------------------
### Component release notes
- <a href="https://github.com/avniproject/avni-server/releases/tag/v3.39.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-server/releases/tag/v3.39.0</a>
- <a href="https://github.com/avniproject/rules-server/releases/tag/v3.39.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/rules-server/releases/tag/v3.39.0</a>
- <a href="https://github.com/avniproject/avni-client/releases/tag/v3.39.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-client/releases/tag/v3.39.0</a>
- <a href="https://github.com/avniproject/avni-webapp/releases/tag/v3.39.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-webapp/releases/tag/v3.39.0</a>