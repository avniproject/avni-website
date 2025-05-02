---
templateKey: blog-post
title: Patch Release announcement - February 2023
date: 2023-02-22T14:36:00.000Z
author: The Avni Team
description:
featuredpost: false
tags:
---

Patch Release 3.37.15 is now live. This release includes a minor code change to make "Show total count in MyDashboard on filter by Program" a configurable functionality.

### Details about "Show total count in MyDashboard on filter by Program" a configurable functionality

We had previously removed the ability to show totals on selecting Programs or Encounters as it drastically impacts performance of MyDashboard Search Filter. But after feedback from multiple implementation on its usefulness, we have decided to release it as a configurable feature with the default behaviour being to now show total on selecting one or more programs or encounters.

In-order to show totals even when we have selected one or more programs, please inform Avni implementation team to update the configuration for your organisation.

Once done, all users in your organisation will be shown the "Total" card in "Registration Overview section", even when they apply filter on Programs. Please note that, on applying filter on any "Program Encounter" or "General Encounter", we'll not show the "Total" card.

![](/img/2023-02-22-avni-release-announcement/MyDashboardWithTotalOnSelectingProgram.png)<pre>Total shown even after applying Program filter on enabling the feature for an organisation</pre>


### Component release notes
Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.37.15) for more information.

- <a href="https://github.com/avniproject/avni-server/releases/tag/v3.37.15" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-server/releases/tag/v3.37.15</a>
- <a href="https://github.com/avniproject/avni-client/releases/tag/v3.37.15" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-client/releases/tag/v3.37.15</a>
- <a href="https://github.com/avniproject/avni-webapp/releases/tag/v3.37.15" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-webapp/releases/tag/v3.37.15</a>

Credits : <a target="_blank" href="https://icons8.com/icon/30448/whatsapp">WhatsApp</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
