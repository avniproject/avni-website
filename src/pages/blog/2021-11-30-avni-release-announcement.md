---
templateKey: blog-post
title: Release announcement - Attendance list view, performance enhancements
date: 2021-11-30T18:39:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
  - Release announcement 
---
 

### New features

---------------------------------------------------------------------------

### Attendance list view

The attendance list view looks much better now with a listing, and check-box style view. 

---------------------------------------------------------------------------

### Improved sync and search speed

In this release we have made sync speeds better for both first-time syncs and subsequent syncs 

The primary bottleneck for sync performance for first-time syncs have been sync of metadata. These requests used to take considerable time, adding to an already slow sync. This has been improved drastically in this release. 

For subsequent syncs, we have improved sync response times for transactional data through some tweaks in the sync queries. We will have an update on the exact improvement once the data is analyzed in a few days. 

We have also made some changes to the search screen on the Data Entry app, you should see searches perform better. 

---------------------------------------------------------------------------

### Bug Fixes
- App Designer - Fix where adding maxHeight and maxWidth on image element causes the field app to break
- Data Entry App - Ensure numeric elements do not accept text
- Data Entry App - Validations on numeric elements now show in red
- Field App - Fix app breaking with message "Fatal error: null is not an object (evaluating 'this._sceneRefs[t].setNativeProps')"
- Field App - Fix icon on News