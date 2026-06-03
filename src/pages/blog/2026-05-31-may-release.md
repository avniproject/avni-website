---
templateKey: blog-post
title: Avni May Release
date: 2026-05-31T12:15:00.000Z
author: Avni Team
featuredpost: false
description:
featuredimage:
tags:
---

The Avni May releases (v16.13.0 through v16.14.0) bring features that save field workers time, smarter attendance tracking for education programs, and enhanced data handling. Here's what's new.

## Share completed forms instantly with field teams

Field workers can now **share a completed form directly from their device** — no more re-entering information somewhere else. Forms can be sent as a neatly formatted **PDF** or as a **WhatsApp message**, making it easy to hand off information to colleagues, supervisors, or community members on the spot. 

Administrators can also set up **automatic sharing** so a form gets sent the moment it's saved, cutting out a manual step entirely. This is done through a new `WorkListUpdation` rule that triggers form sharing automatically, eliminating the need for field workers to manually share each completed form.

<div style="display: flex; justify-content: center; padding: 20px 0;">
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">Complete share workflow</p>
        <img src="/img/2026-05-31-may-release/share-button.gif" 
             style="width: 100%; height: auto; display: block; border-radius: 8px;">
    </div>
</div>

---

## Smarter attendance tracking for education programs

Attendance is now a **first-class feature for group-based programs** like learning centres. Instead of cobbling together workarounds, you can now:

- Define **different types of attendance** (present, absent, late — or whatever makes sense for your program)
- Set up **calendars reflecting your working days and local public holidays** so absences are logged against actual scheduled days
- Link an absence to a **follow-up visit** so supervisors know which students need a check-in
- Get clean reports that distinguish between **"form not filled today"** and **"no session was scheduled"** — a small but meaningful difference that keeps your data accurate and your team accountable

Field workers receive **native attendance flows on Android dashboards**, making it fast and intuitive to mark attendance during daily sessions. Administrators can configure attendance types with custom reason concepts (like "sick", "traveling", "holiday") and even trigger automatic follow-up encounters when certain conditions are met.

<div style="display: flex; justify-content: center; padding: 20px 0;">
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">Attendance workflow with calendar and types</p>
        <p style="text-align: center; font-size: 14px; color: #999; font-style: italic;">Video coming soon</p>
    </div>
</div>

---

## Find a person by date of birth — faster identity matching

When a field worker has a physical ID card or paper register in hand, they can now **search for a beneficiary using their exact date of birth**. This makes it much faster to pull up the right person in areas with common names — a real problem in communities where naming patterns are limited.

The filter can be turned on or off by your system administrator from the existing **Search Filters panel**, keeping things flexible for different field scenarios.

<div style="display: flex; justify-content: center; padding: 20px 0;">
    <div style="flex: 1 1 300px; max-width: 400px;">
        <p style="font-weight: bold; text-align: center; margin-bottom: 10px;">Search by date of birth filter</p>
        <p style="text-align: center; font-size: 14px; color: #999; font-style: italic;">Video coming soon</p>
    </div>
</div>

---

## Enhanced Data Entry App and Mobile parity

**DEA (Data Entry App) got stronger:**
- Registration concepts now display as **radio buttons** aligned with user sync attributes
- The `user` and `myUserGroup` variables are now accessible across all DEA rules, giving you more control
- Edit form rules now execute within DEA, with blocked edits shown as clear notifications

**Mobile and web are now closer in feature parity:**
- Sync settings, user group access controls, and edit form rules are now fully available on the mobile app
- The `showAnswers` and `hideAnswers` functions now support coded and subject concept types everywhere, eliminating the need to duplicate option lists in your rules

---

## Richer bulk data uploads

CSV bulk uploads now support:
- **File attachments** (shared via Google Drive links) — no more manual file uploads
- **Audio recordings** — so you're no longer limited to text-only fields when importing data in bulk

This is especially helpful when migrating from paper or legacy systems where you have historical files and media that need to come into Avni.

---

## Tanuh partnership goes live

We're excited to announce that the **first phase of our partnership with Tanuh** is now live. This includes:

- A **Tanuh-branded mobile app** for field teams
- A **dedicated web portal** for physician review workflows
- A **reporting dashboard** (whitelabeled Metabase instance) — all hosted in India to meet local data requirements

It's a great example of how Avni can be tailored to a specific organisation's needs from the ground up.

---

## What's coming next

- **Platform performance improvements** to make the app faster and more reliable on slow networks
- **Phase 2 of AI-assisted setup** — moving closer to automatic configuration from a simple requirements document
- **Continued education domain development** with new features for learning programmes

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

For the complete technical details, see the [v16.13 release notes](https://github.com/avniproject/avni-product/releases/tag/v16.13.0) and [v16.14 release notes](https://github.com/avniproject/avni-product/releases/tag/v16.14.0) on GitHub.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
