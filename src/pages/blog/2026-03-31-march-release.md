---
templateKey: blog-post
title: Avni March Release
date: 2026-03-31T12:15:00.000Z
author: Avni Team
featuredpost: false
description:
featuredimage:
tags:
---

Here's what's new in the Avni March release — covering minor enhancements, bug fixes, infrastructure maintenance, and a look at what's coming next.

## 1) Minor Enhancements

### 1.1) File questions now supported inside Repeatable Question Groups

File-type questions inside Repeatable Question Groups were already supported on the webapp (Data Entry App), but were not visible on the Android mobile app. This has been fixed — file-type questions now render correctly within repeatable groups on the mobile app as well, and form navigation works as expected.

For more details, refer to [avni-client#1859](https://github.com/avniproject/avni-client/issues/1859).

### 1.2) Faster Select/Unselect All on Attendance forms

The Select All and Unselect All actions on the Attendance form element were noticeably slow when dealing with a large number of subjects. This has been optimised — the operation now completes quickly, even with many entries.

For more details, refer to [avni-client#1870](https://github.com/avniproject/avni-client/issues/1870).

### 1.3) Track Glific flow requests from Avni

Avni now tracks flow creation requests sent to Glific. This includes maintaining a history of when flows were initiated for a user, as well as tracking any failures. This makes it easier to monitor and debug integrations with Glific without having to dig through logs.

For more details, refer to [avni-server#961](https://github.com/avniproject/avni-server/issues/961) and [avni-server#964](https://github.com/avniproject/avni-server/issues/964).

### 1.4) Personalised home screen title

The mobile app now greets users with a personalised welcome message — showing "Hi {first name}, Welcome!" in the top navigation bar instead of the generic "Home" text. This also supports translations and gracefully handles lengthy usernames by displaying only the first name.

<div style="width: 100%; max-width: 400px; padding: 20px; margin: 0 auto;">
    <img src="/img/2026-03-31-march-release/hello.gif"
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

To learn more, refer to the [Personalised Home Screen Title documentation](https://avni.readme.io/docs/guide-user-towards-register-button).

## 2) Maintenance Work

### 2.1) Support for 16KB page size on Android devices

Starting May 2026, Google Play requires apps to support 16KB memory page sizes on Android. To meet this requirement, we updated the NDK, did minor upgrades to React Native and the react-native-keychain library, and applied a small patch to Realm. These changes ensure the app remains compatible and available on the Play Store.

For more details, refer to [avni-client#1730](https://github.com/avniproject/avni-client/issues/1730).

### 2.2) AWS Disaster Recovery for production database and storage

We've set up disaster recovery for our production RDS database and S3 storage on AWS. This protects against data loss from human error and provides geo-redundancy for added resilience.

For more details, refer to [avni-infra#79](https://github.com/avniproject/avni-infra/issues/79).

### 2.3) Analytics to track mobile app performance

We've added performance monitoring to the Android app to track screen load times and identify slowness issues. This helps us pinpoint which screens and scenarios are slow, making it easier to debug and improve the app experience for users in the field.

For more details, refer to [avni-client#1051](https://github.com/avniproject/avni-client/issues/1051).

## 3) What's Upcoming

### 3.1) AI-assisted app setup to reduce costs and time-to-field

We're working on using AI to streamline the process of setting up a new Avni app from field workflow specifications. The goal is to significantly reduce the time and effort needed to go from requirements to a working app — making implementations faster and more affordable.

For more details, refer to [avni-webapp#1702](https://github.com/avniproject/avni-webapp/issues/1702).

### 3.2) Mobile database migration

The current mobile database library (Realm) is being deprecated, and we're actively migrating to SQLite. This is a large, multi-phase effort — we've completed the repository layer foundation, database schema and migration framework, SQLite backend implementation, and service migration phases. We're currently in Phase 5 (Performance Optimizations), with rules engine support, rollout infrastructure, testing, and staged rollout still ahead.

For more details, refer to [avni-client#1848](https://github.com/avniproject/avni-client/issues/1848).

### 3.3) Addressing mobile app slowness

We have identified and fixed performance bottlenecks across multiple screens in the mobile app. Field users should notice a smoother and more responsive experience going forward.

For more details, refer to [avni-client#1883](https://github.com/avniproject/avni-client/issues/1883).

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
