---
templateKey: blog-post
title: Major Release announcement - April 2023
date: 2023-04-12T16:51:00.000Z
author: The Avni Team
description:
featuredpost: false
tags:
- Release announcement
---
Major Release 3.38.00 is now live, it includes following modifications to Avni application.

### Major enhancements to Glific integration
##### Web-app
We have introduced support in Avni webapp to "View", "Send" whatsapp messages through Glific.<br>
An organisation admin user can now search for the intended recipient, which could be either a

  * **User**
    ![](/img/2023-04-12-avni-release-announcement/userViewOrSendMsgs.gif)<br>
  * **Subject / Individual OR**
    ![](/img/2023-04-12-avni-release-announcement/subjectViewOrSendMsgs.gif)<br>
  * **Group**
    ![](/img/2023-04-12-avni-release-announcement/groupsViewOrSendMsgs.gif)<br>

and then "View" the messages "Sent" Or "Scheduled to be sent" to the recipient.<br>
In-addition to being able to "Send" whatsapp messages to them.


##### Android-client
We have also introduced functionality in Avni client to "View" "Sent and Received" messages for a "Subject / Individual".
<img src="/img/2023-04-12-avni-release-announcement/clientSubjectViewMsgs.gif" width="500px"/><pre>View messages to Subject on Client</pre>
### Sync performance improvements for Approval workflow
Earlier in Avni, we used to sync Approvals to all users of an organisation, irrespective of whether they have access to its related Subject / Individual. This could potentially lead to severe performance bottlenecks during sync for all Users of that organisation and also slow down the system for any user on that system.

To overcome this, we have now introduced Scope-aware sync for Approvals, resulting in reduced load on system during sync and also improved sync experience for users of organisations with Approval workflow enabled for an Entity Type.

### Bulk assignment of Subjects to User
Last year, we had introduced "Direct Assignment" as a mechanism to assign subjects to a user. This allows sync of subjects based on the user it is assigned to, instead of the older mechanisms of catchments. With this release, subjects can be assigned or unassigned in bulk. See video below for more information

![](/img/2023-04-12-avni-release-announcement/BulkAssignment.gif)<pre>Bulk assignment of subjects to User</pre>

### Immutable encounter support on web-app
Immutable encounters is another feature that was introduced last year. It allows encounters that can be edited, and preserve the edit history over time. This history can be accessed in reports, but for the Android app user, it feels like editing an existing form/encounter. Last year, the feature was only available on the Field App. With this release, immutable encounters are available on the Data Entry Application (web)
as well.

### In addition, we also made several minor bug fixes and UI / UX improvements.

### What's next?

There are some big features that we have been working for a while that will be released in 3.39. Notable ones include

#### Dashboard Filters
While the regular dashboard of Avni has default filters, custom dashboards did not have the ability to attach filters. With this release, we will be providing options to add filters to the custom dashboards.

#### Removal of dependence on Amazon Web Services
There were some components that were being used by Avni that made it work only on Amazon Web Services infrastructure. With the next release, Avni will provide options to plugin other open-source software replacements for these AWS specific components. Avni will now be ready to be installed on any on-premise servers.

#### Performance testing
In the last release, we had introduced a performance testing suite to Avni to see how far the app will scale. We will be running the test in this release to figure out the next bottlenecks and fix them so as to improve user experience and increase the scale at which Avni can perform satisfactorily.

#### Access control on the web application
We are working on introducing fine-grained data based access control on the browser based apps - the App Designer, Admin and Data Entry Applications. Non-catchment based access control (access control to programs, subject types, encounter types etc) along with fine-grained access control to parts of the Admin section will be introduced in this release.

### Component release notes
Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.38.0) for more information.

- <a href="https://github.com/avniproject/avni-server/releases/tag/v3.38.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-server/releases/tag/v3.38.0</a>
- <a href="https://github.com/avniproject/avni-client/releases/tag/v3.38.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-client/releases/tag/v3.38.0</a>
- <a href="https://github.com/avniproject/avni-webapp/releases/tag/v3.38.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-webapp/releases/tag/v3.38.0</a>

Credits : <a target="_blank" href="https://icons8.com/icon/30448/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>