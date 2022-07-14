---
templateKey: blog-post
title: Release announcement - July 2022
date: 2022-07-14T11:12:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
  - Release announcement 
---

### New features

---------------------------------------------------------------------------

### Repeatable question group
Now you can mark a Question group repeatable which allows user to repeat and fill same questions again. User can add the 
same set of questions, or remove any set that is filled by mistake.

![](/img/features/repeatable-question-group.png)<pre>Repeatable question group showing Material dispatched filled two times</pre>

---------------------------------------------------------------------------

### Autocomplete in location form element if there are more than 30 elements
This is the UI change done on mobile app where user can now search for a location using it's name if location
count increases 30. This will give better user experience as user don't have to scroll and search for a location in 
long list.

![](/img/features/location-search.gif)

---------------------------------------------------------------------------

### Encounter data type
Similar to subject data type now implementers can link encounters in the form using new Encounter data type.
All the configurations related to how the encounter name should appear, and which encounter type to take 
can be done while creating the concept.

![](/img/features/encounter-data-type.png)<pre>Creating Encounter data type</pre>

---------------------------------------------------------------------------

### Documentation in Avni
Now you can create custom documentation in Avni. Documentation supports rich text and can be written in different
languages supported by an organisation. Right now you can also link a particular documentation to a form element and 
it'll show up in the mobile app. This is useful where more context is required for any question.

![](/img/features/form-element-documentation.png)<pre>Documentation linked to the form elements</pre>

---------------------------------------------------------------------------

### Timed questions
Questions can be timed in Avni. If you want user to fill some set of questions after a particular time then you can mark the 
page as timed page and specify the time when the questions in the page should be visible. You also set the stay time 
which forces user to fill all those questions in the mentioned time frame. 

![](/img/features/timed-questions.png)

---------------------------------------------------------------------------

### Colourful form element groups
Now you can make form filling more interesting by giving relevant colours to the page headers. Background and text colour 
can be chosen for a form element group and it'll show the page name in that color while filling up the form and in the observation table.

![](/img/features/colourful-groups.gif)

---------------------------------------------------------------------------

### No subject Indicators in offline dashboards
More information can be displayed on the offline dashboard cards. Till now it only supported the count based on the query written,
but now implementer can pass `primaryValue`, `secondaryValue`, and `lineListFunction` separately.

![](/img/features/offline-dashboard.png)

---------------------------------------------------------------------------

### Handling catchment and sync attribute changes
Until now user manually have to clean the data and perform a fresh sync if there are any changes made to their catchment. 
With this release this will be handled automatically by the platform.

---------------------------------------------------------------------------


### Enhancement and Bug Fixes
- DEA - Support for Encounter Eligibility Check rule.
- DEA - By default hide the voided subject in search result.
- Mobile app - Offline dashboard changes does not sync.



