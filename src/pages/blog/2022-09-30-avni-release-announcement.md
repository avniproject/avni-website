---
templateKey: blog-post
title: Release announcement - September-end 2022
date: 2022-09-30T16:00:26.313Z
author: The Avni Team
description: >-
featuredpost: false
tags:
  - Release announcement 
---


Release 3.34 is now live. This release includes minor changes and bug fixes to the application. Notable changes are given below. Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v3.34.0) for more information. 


## Notable Changes
---------------------------------------------------------------------------

### Web Application
- The landing page for the Data Entry Application has been shifted to the search screen
- Hierarchical address selection on the Data Entry Application when registering a subject, or when filling form elements of type "Location"

### Field App
- Group information will now be available when adding new members
- Include auth support on custom application menus. Auth credentials of the user can now be added when adding a new custom application menu, so that extensions configured on Avni can be triggered using this feature


### Bug fixes
- There was an issue with deletion of visits/encounters on the subject dashboard. This has been fixed



## Next priorities in Avni
---------------------------------------------------------------------------

Here are the primary objectives that the Avni team is working on right now. 

- Glific message integration. This will allow creation of rules for sending automated messages to beneficiaries through Whatsapp
- Improved Longitudinal exports. This will allow flexibility in creating longitudinal exports. There will be options to have multiple programs and forms together in the same export, and the ability to choose only columns that matter
- Upgrade of the Android field app packages. Components of the field app (react native, and other packages) have not been upgraded for about 3 years now. This is making development slower, and making it hard to fix some long-standing stability issues. This activity is ongoing, and will be released when complete

The next release (3.35) will include Glific integration and the improved longitudinal exports. React Native upgrade is expected to be released in release 3.36. 