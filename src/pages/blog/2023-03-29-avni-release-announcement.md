---
templateKey: blog-post
title: Patch Release announcement - March 2023
date: 2023-03-29T08:39:00.000Z
author: The Avni Team
description:
featuredpost: false
tags:
---

Patch Release 3.37.17 is now live. This release includes minor code changes to fix the performance issue on individual search.

### Performance issue fix when custom filters are applied
Sometimes the app was breaking when more number of subjects/individuals satisfied the custom filters on search in the mobile app. Now the fix is made to prevent the app breaking for this case and to get the search results within a reasonable time period.

### Component release notes
For field app: https://github.com/avniproject/avni-client/releases/tag/v3.37.17
