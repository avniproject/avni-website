---
templateKey: blog-post
title: Avni Release 13.0.0 -  Empowering Community-Level Work with Enhanced Dashboards, Bulk User Management, and More!
date: 2025-06-02T10:00:00.000Z
author: Avni Team
description:
featuredpost: false
featuredimage: /img/2025-06-02-avni-release-announcement/hero.webp
tags:
---
<div style="width: 100%; padding: 48px;">  
    <img src="/img/2025-06-02-avni-release-announcement/generated-image.webp" 
         style="width: 100%; height: auto; display: block;">
</div>

We are thrilled to announce the release of Avni 13.0.0! This is a significant milestone for the Avni community, packed with powerful new features and critical enhancements that make our open-source platform more flexible, insightful, and easier to manage. 

This release focuses on providing better data visualization at the program level, simplifying administrative tasks, and improving the user experience on both web and mobile. Let's dive into the key highlights of version 13.0.0.

### 1. Introducing Automatic Program-Level Dashboards

One of the most requested features is here! Until now, program aggregate dashboards had to be coded by hand. Creating new users required a support ticket to the Metabase admin. Setting up Metabase for an organisation either required a support ticket on the Avni cloud (because it was all manual) or was provided along with an implementation. With Release 13.0.0, all of this is history.  

With the new feature, an organisation administrator can start the process of creating reports. Some default reports will be automatically available on the Metabase reporting system. Users can be created right on the Admin section of Avni. Existing users can be given permission to reports from here. Additional reports can be created if you choose on Metabase. 

<div>
    <div style="width: 48%; padding-right: 2vw; float: left">  
        <img src="/img/2025-06-02-avni-release-announcement/metabase.png">
    </div>
    <div style="width: 48%; float: left">  
        <img src="/img/2025-06-02-avni-release-announcement/metabase2.png">
    </div>
    <div style="clear: both; display: table"></div>
</div>

### 2. Streamlined Administration with Bulk Import

Bulk import through CSV files has been a critical step during the initial go-live phase for many organisations using our platform. Often, existing data is maintained in spreadsheets and needs to be uploaded into the system. However, this process has traditionally been a pain point due to challenges such as unclear error messages, difficulty in understanding required column formats, and other structural inconsistencies. These issues made data uploads cumbersome and often required expert support to resolve.

We’re excited to share that the bulk import functionality has now been completely rewritten to be more efficient, accurate, and user-friendly. The new system significantly improves the overall experience by simplifying error handling, clarifying formatting requirements, and supporting better data validation.

This enhancement not only reduces friction during onboarding but also opens the door to faster rollouts for organisations needing to migrate existing program data into the system. Read more [here](https://avni.readme.io/docs/bulk-data-upload-v2). 

<div style="width: 100%; max-width: 800px; padding: 48px;">  
    <img src="/img/2025-06-02-avni-release-announcement/spreadsheet.jpg" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

### 3. Other Notable Improvements
- **Verification of bundle uploads**: Production deployments through bundle uploads can now be verified through the bundle diff checker tool. This will be available whenever you upload a new bundle file
- **Growth chart support for multiple programs**: Growth charts are now supported for more than one program where there are children below 5 years involved
- **Performance and Security**: As with every release, v13.0.0 includes several under-the-hood performance optimizations and security enhancements to ensure Avni remains robust, fast, and secure.

This release is a testament to the collaborative spirit of the Avni community. A big thank you to all our partners and contributors for their valuable feedback and contributions.

To learn more about these features in detail, please visit the [official release notes](https://github.com/avniproject/avni-product/releases/tag/v13.0.0).

We are excited for you to upgrade to Avni 13.0.0 and leverage these new capabilities to amplify your impact in the field!

<br><br>
