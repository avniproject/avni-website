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

<div style="display: flex; gap: 40px; align-items: center; padding: 40px 0;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-05-31-may-release/share-feature.png" 
             style="width: 100%; height: auto; display: block; border-radius: 8px;">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p>Field workers can now <strong>share a completed form directly from their device</strong> — no more re-entering information somewhere else. Forms can be sent as a neatly formatted <strong>PDF</strong> or as a <strong>WhatsApp message</strong>, making it easy to hand off information to colleagues, supervisors, or community members on the spot.</p>
        <p style="margin-top: 16px;">Administrators can also set up <strong>automatic sharing</strong> so a form gets sent the moment it's saved, cutting out a manual step entirely. This is done through a new <code>WorkListUpdation</code> rule that triggers form sharing automatically, eliminating the need for field workers to manually share each completed form.</p>
    </div>
</div>

---

## Smarter attendance tracking for education programs

<div style="display: flex; gap: 40px; align-items: center; padding: 40px 0;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-05-31-may-release/attendance-feature.png" 
             style="width: 100%; height: auto; display: block; border-radius: 8px;">
    </div>
    <div style="flex: 1; min-width: 250px;">

        <p>Attendance is now a <strong>first-class feature for group-based programs</strong> like learning centres. Instead of cobbling together workarounds, you can now:</p>
        <ul style="margin-top: 12px; margin-left: 20px;">
            <li>Define <strong>different types of attendance</strong> (present, absent, late — or whatever makes sense for your program)</li>
            <li>Set up <strong>calendars reflecting your working days and local public holidays</strong> so absences are logged against actual scheduled days</li>
            <li>Link an absence to a <strong>follow-up visit</strong> so supervisors know which students need a check-in</li>
            <li>Get clean reports that distinguish between <strong>"form not filled today"</strong> and <strong>"no session was scheduled"</strong></li>
        </ul>
        <p style="margin-top: 16px;">Field workers receive <strong>native attendance flows on Android dashboards</strong>, making it fast and intuitive to mark attendance during daily sessions. Learn more in the <a href="https://avni.readme.io/docs/attendance" target="_blank">Attendance documentation</a> and <a href="https://avni.readme.io/docs/calendars" target="_blank">Calendars documentation</a>.</p>
    </div>
</div>

---

## Find a person by date of birth — faster identity matching

<div style="display: flex; gap: 40px; align-items: flex-start; padding: 40px 0;">
    <div style="flex: 1; min-width: 250px;">
        <div style="display: flex; flex-direction: column; gap: 12px;">
            <div>
                <p style="font-weight: bold; text-align: center; margin-bottom: 8px; font-size: 13px;">Configure DOB filter</p>
                <img src="/img/2026-05-31-may-release/dob-filter-search.png" 
                     style="width: 100%; height: auto; display: block; border-radius: 8px;">
            </div>
            <div>
                <p style="font-weight: bold; text-align: center; margin-bottom: 8px; font-size: 13px;">Search with DOB filter</p>
                <img src="/img/2026-05-31-may-release/dob-filter-results.png" 
                     style="width: 100%; height: auto; display: block; border-radius: 8px;">
            </div>
        </div>
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p>When a field worker has a physical ID card or paper register in hand, they can now <strong>search for a beneficiary using their exact date of birth</strong>. This makes it much faster to pull up the right person in areas with common names — a real problem in communities where naming patterns are limited.</p>
        <p style="margin-top: 16px;">The filter can be turned on or off by your system administrator from the existing <strong>Search Filters panel</strong>, keeping things flexible for different field scenarios. No more scrolling through dozens of "Ravi" or "Priya" to find the right one.</p>
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

<div style="display: flex; gap: 40px; align-items: flex-start; padding: 40px 0;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-05-31-may-release/tanuh-dashboard.png" 
             style="width: 100%; height: auto; display: block; border-radius: 8px;">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p>We're excited to announce that the <strong>first phase of our partnership with Tanuh</strong> is now live. This includes:</p>
        <ul style="margin-top: 12px; margin-left: 20px;">
            <li>A <strong>Tanuh-branded mobile app</strong> for field teams</li>
            <li>A <strong>dedicated web portal</strong> for physician review workflows</li>
            <li>A <strong>reporting dashboard</strong> (whitelabeled Metabase instance) — all hosted in India to meet local data requirements</li>
        </ul>
        <p style="margin-top: 16px;">It's a great example of how Avni can be tailored to a specific organisation's needs from the ground up.</p>
    </div>
</div>

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
