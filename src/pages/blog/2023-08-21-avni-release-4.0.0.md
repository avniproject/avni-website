---
templateKey: blog-post
title: Major Release Announcement - August 2023
date: 2023-08-21T20:30:00.000Z
author: The Avni Team
description:
featuredpost: false
tags:
- Release announcement
---
Major Release 4.0.0 is now live, it includes the following modifications to the Avni application


## Notable Changes

---------------------------------------------------------------------------

### Fine-grained access control in the Avni application
We have always wanted to have fine-grained controls in the Avni application. This would enable organisations to grant users privileges for specific functionalities without exposing other critical operations. Ex: Allow a user to upload a transactional data file without providing him access to the "App Designer" capabilities.
Read more about "Access Control" [here](https://avni.readme.io/docs/access-control#privileges).

### Major enhancements to the integration-service module
We have added support for the following capabilities in integration-service
- Multi-tenancy for every organisation-specific module
- Meta-data migration for an organisation across different tenants of the same module

### Major enhancements in the ETL application
We have added support to process data of the following types in our ETL application:
- GroupSubjects (Household as well as Generic GroupSubjects)
- RepeatableQuestionGroups
- SyncTelemetry
- Users

### Minor bug fixes
There have also been minor bug fixes and UI/UX improvements. Please see the component release notes linked at the end for more information.

---------------------------------------------------------------------------
### What's next?

There are some major security and core-plugin upgrades on which we have been working for a while that will be released next. Notable ones include:

 - Enhanced Security of Avni Web End-Points
 - Encryption of the Avni-client Database
 - Upgrade of the React-Native version

---------------------------------------------------------------------------
### Product release notes
Please see the [detailed release notes](https://github.com/avniproject/avni-product/releases/tag/v4.0.0) for more information.

---------------------------------------------------------------------------
### Component release notes
- <a href="https://github.com/avniproject/avni-server/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-server/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-webapp/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-webapp/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-client/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-client/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/rules-server/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/rules-server/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/integration-service/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/integration-service/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/integration-admin-app/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/integration-admin-app/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-infra/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-infra/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-etl/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-etl/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-media/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-media/releases/tag/v4.0.0</a>
- <a href="https://github.com/avniproject/avni-infra/releases/tag/v4.0.0" target="_blank" rel="noopener noreferrer">https://github.com/avniproject/avni-infra/releases/tag/v4.0.0</a>