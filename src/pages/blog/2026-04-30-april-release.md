---
templateKey: blog-post
title: Avni April Release
date: 2026-04-30T12:15:00.000Z
author: Avni Team
featuredpost: false
description:
featuredimage:
tags:
---

Here's what's new across the Avni April releases (v16.10.0 through v16.12.0) — a big step forward on custom dashboards, several performance wins, deeper integrations, and a number of important bug fixes.

## 1) Minor Enhancements

### 1.1) Custom cards with configurable actions

Custom cards can now trigger actions directly from a dashboard, so users can act on a card without first navigating into a subject. The supported actions are **Do Visit** and **View Subject Profile**, and bundle upload supports the new action configuration end-to-end.

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 20px 0;">
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">One subject registered and Do Visit action configured</p>
        <img src="/img/2026-04-30-april-release/a1.gif"
             style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">Multiple subjects registered and Do Visit action configured</p>
        <img src="/img/2026-04-30-april-release/a2.gif"
             style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">One subject registered and View Subject Profile action configured</p>
        <img src="/img/2026-04-30-april-release/a3.gif"
             style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">Multiple subjects registered and View Subject Profile action configured</p>
        <img src="/img/2026-04-30-april-release/a4.gif"
             style="width: 100%; height: auto; display: block;">
    </div>
</div>

For more details, refer to [avni-client#1874](https://github.com/avniproject/avni-client/issues/1874), [avni-client#1887](https://github.com/avniproject/avni-client/issues/1887), [avni-client#1889](https://github.com/avniproject/avni-client/issues/1889), and [avni-webapp#1744](https://github.com/avniproject/avni-webapp/issues/1744).

### 1.2) Custom design cards

A new "Custom design card" type lets implementers upload an HTML template paired with a JS data rule. The rule receives dashboard filters and returns dynamic data and translations, which the HTML can reference via `data.*` and `translations.*` to render fully org-specific layouts — tables, sections, styling, and local-language support. Tapping the card opens a dedicated rendered page. Bundle upload supports the new card type end-to-end.

This was built for partner organisations needing custom UI to display past form data with month-based filters and local-language support.

<div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 20px 0;">
    <div style="flex: 1 1 300px; max-width: 400px;">
        <img src="/img/2026-04-30-april-release/cd0.png"
             style="width: 100%; height: auto; display: block;">
    </div>
    <div style="flex: 1 1 300px; max-width: 400px;">
        <img src="/img/2026-04-30-april-release/cd1.gif"
             style="width: 100%; height: auto; display: block;">
    </div>
</div>

For more details, refer to [avni-product#1849](https://github.com/avniproject/avni-product/issues/1849), [avni-product#1850](https://github.com/avniproject/avni-product/issues/1850), and [avni-product#1853](https://github.com/avniproject/avni-product/issues/1853).

### 1.3) Configurable destination after action completion

Action cards now have an "On Action completion" dropdown with two options: **Subject profile page** (existing behaviour) and **Source page** (returns the user to the dashboard or listing they came from). This reduces screen-hopping for partners who want dashboard-centric workflows.

For more details, refer to [avni-client#1903](https://github.com/avniproject/avni-client/issues/1903).

### 1.4) Open the Avni app via a WhatsApp link

Tapping `https://app.avniproject.org/open/` from WhatsApp now opens the Avni app directly — landing on the login screen if signed-out, or the home page otherwise. If the app isn't installed, the link falls through to the Play Store. The Gramin flavour is supported via its own domain.

This was built for the DIL pump-operator nudge flow.

For more details, refer to [avni-client#1899](https://github.com/avniproject/avni-client/issues/1899).

### 1.5) Reorder form elements within a question group

Form designers can now change the order of form elements inside a question group directly in the form designer, instead of having to delete and recreate them.

For more details, refer to [avni-webapp#1676](https://github.com/avniproject/avni-webapp/issues/1676).

### 1.6) See all addresses at the next level

Users can now view all addresses at the next level without having to first select a specific address level — useful when scanning across catchments.

For more details, refer to [avni-client#1906](https://github.com/avniproject/avni-client/issues/1906).

### 1.7) Restrict media upload from gallery on the Android app

Media upload from the Android gallery can now be restricted, so that users capture media via the camera at the time of data entry rather than uploading older or unrelated files from their device.

For more details, refer to [avni-product#1360](https://github.com/avniproject/avni-product/issues/1360).

### 1.8) Disable background auto-sync

Background auto-sync has been disabled to prevent it from interfering with foreground sync. This avoids race conditions and the user-visible glitches that came with overlapping sync runs.

For more details, refer to [avni-client#1888](https://github.com/avniproject/avni-client/issues/1888).

## 2) Performance Improvements

### 2.1) Significantly faster media search

Media search has been substantially sped up by eliminating ~200 per-page S3 existence checks and migrating `media.address_id` from numeric to integer so that hash joins with the address table become possible.

For more details, refer to [avni-webapp#1754](https://github.com/avniproject/avni-webapp/issues/1754).

### 2.2) Mobile app slowness — multiple fixes

Several performance bottlenecks in the mobile app were addressed: network calls are now safer, individual lists are paginated, and slow cache lookups are skipped where they were not adding value. Field users should notice a smoother and more responsive experience.

For more details, refer to [avni-client#1855](https://github.com/avniproject/avni-client/issues/1855) and [avni-client#1883](https://github.com/avniproject/avni-client/issues/1883).

### 2.3) Optimise `title_lineage_locations_function` to reduce DB load

This function was a known hot spot on the server. It's been optimised to reduce database load, which improves response times for any flow that relies on location lineage.

For more details, refer to [avni-server#973](https://github.com/avniproject/avni-server/issues/973).

## 3) Bug Fixes

### 3.1) Offline Dashboard "Total" Standard Report showing incorrect count

The "Total" Standard Report on the offline dashboard was including incomplete visits in its count. It now includes only completed visits, giving an accurate total.

For more details, refer to [avni-client#1871](https://github.com/avniproject/avni-client/issues/1871).

### 3.2) Concept suggestions not appearing for short search terms

Existing concepts were not being suggested when the search term was under 2 letters, and validation errors were displayed in the wrong location. Both have been fixed.

For more details, refer to [avni-webapp#1735](https://github.com/avniproject/avni-webapp/issues/1735).

### 3.3) ETL failure for orgs with a Group subject type

ETL was failing for organisations that had a subject type of type Group. This has been fixed.

For more details, refer to [avni-etl#163](https://github.com/avniproject/avni-etl/issues/163).

### 3.4) "Object error" on saving a new Standard Report Card

Saving a brand-new Standard Report Card from App Designer no longer throws an "Object error" on the first attempt.

For more details, refer to [avni-webapp#1750](https://github.com/avniproject/avni-webapp/issues/1750).

### 3.5) Voided user-subject-type still creating individuals

When a user-subject-type was voided, individuals of that type were still being created during user creation. This has been fixed and removes a confusing setup state hit by orgs preparing bundles for production (e.g. DIL).

For more details, refer to [avni-server#980](https://github.com/avniproject/avni-server/issues/980).

### 3.6) App crash on device back press after opening filter

Pressing the hardware back button from the home-page filter no longer crashes the app. This was a regression first observed in the 16.x line and traced via Bugsnag.

For more details, refer to [avni-client#1902](https://github.com/avniproject/avni-client/issues/1902).

### 3.7) Pending Approval card redirecting to subject screen

With the approval workflow enabled for a general encounter, tapping the "Pending" card now correctly opens the list of encounters pending approval with Approve/Reject buttons, instead of redirecting to the subject screen.

For more details, refer to [avni-client#1912](https://github.com/avniproject/avni-client/issues/1912).

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
