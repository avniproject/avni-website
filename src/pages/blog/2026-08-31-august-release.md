---
templateKey: blog-post
title: Avni August Release
date: 2026-08-31T12:00:00.000Z
author: Avni Team
featuredpost: false
description: Build an app from a spec with AI Autopilot, configurable Visit Date visibility, and a fix for the bulk upload job that could stall your whole queue. Here's what changed.
featuredimage:
tags:
  - release
---

## AI Autopilot: set up an Avni app from a field-workflow specification

<a href="https://github.com/avniproject/avni-webapp/issues/1702" target="_blank" style="text-decoration: none; color: inherit; display: block; transition: all 0.3s ease;" onmouseover="this.style.opacity='0.95'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 24px rgba(0,102,204,0.15)';" onmouseout="this.style.opacity='1'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
<div style="display: flex; gap: 40px; align-items: center; padding: 40px; margin-bottom: 20px; cursor: pointer; background: #ffffff; transition: all 0.3s ease;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-08-31-august-release/avni-autopilot.png"
             alt="Avni Autopilot panel with a drop zone to upload the scoping/modelling specification document"
             style="width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p style="font-size: 14px; color: #0066cc; font-weight: 600; margin: 0 0 8px 0;">From specification to working app</p>
        <p style="margin: 12px 0; line-height: 1.8;">Upload a specification document and Autopilot builds the app configuration for you — entities (subject types, programs, encounter types), forms, visit-schedule rules, form-element rules from the values in the document, and all form-level rules from the specification or via chat.</p>
        <p style="margin: 12px 0; line-height: 1.8;">Conversational follow-ups fill in the gaps — and Autopilot is now your single assistant for everything, answering general questions about Avni that the older chat assistant used to handle.</p>
        <p style="margin-top: 16px; font-size: 13px; color: #0066cc; font-weight: 600; display: flex; align-items: center; gap: 6px;">→ View technical details</p>
    </div>
</div>
</a>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Configurable visibility for the auto-populated Visit Date

<a href="https://github.com/avniproject/avni-client/issues/1971" target="_blank" style="text-decoration: none; color: inherit; display: block; transition: all 0.3s ease;" onmouseover="this.style.opacity='0.95'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 24px rgba(0,102,204,0.15)';" onmouseout="this.style.opacity='1'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
<div style="display: flex; gap: 40px; align-items: center; padding: 40px; margin-bottom: 20px; cursor: pointer; background: #ffffff; transition: all 0.3s ease;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-08-31-august-release/visitdate-visibility.png"
             alt="Settings screen with the Hide Visit Date toggle turned on"
             style="width: 100%; height: auto; display: block; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p style="font-size: 14px; color: #0066cc; font-weight: 600; margin: 0 0 8px 0;">Hide or lock the Visit Date</p>
        <p style="margin: 12px 0; line-height: 1.8;">The Visit Date field, auto-populated on encounters, can now be configured per Encounter Type in App Designer — <strong>hideVisitDate</strong> to hide it from the form, and <strong>visitDateNonEditable</strong> to keep it read-only. In both cases, the date is still captured and saved in the background.</p>
        <p style="margin-top: 16px; font-size: 13px; color: #0066cc; font-weight: 600; display: flex; align-items: center; gap: 6px;">→ View technical details</p>
    </div>
</div>
</a>

---

## Minor enhancements

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Group member selection respects form element rules</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">"Display all group members" now respects the form element rule when selecting many subjects at once, on both the mobile app and the Data Entry App. (<a href="https://github.com/avniproject/avni-client/issues/2003" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#2003</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Target Android 16</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">The app now targets Android 16 (API level 36), meeting the Play Store's target API level mandate. (<a href="https://github.com/avniproject/avni-client/issues/2017" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#2017</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Flash forced on during photo capture</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Photo capture now forces the flash on, blocking capture if the flash is unavailable or fails.</p>
</div>

</div>

---

## Performance improvements

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="font-weight: 700; margin: 12px 0 8px 0;">Bulk location uploads no longer stall the job queue</p>
    <p style="margin: 12px 0; line-height: 1.8;">A locations bulk upload could wedge the shared background job worker for hours, stalling every queued CSV import, bundle upload, and export behind it. A 200-empty-column file that previously took 79 seconds now completes in 2.1 seconds. (<a href="https://github.com/avniproject/avni-product/issues/1897" target="_blank" style="color: #0066cc; font-weight: 500;">avni-product#1897</a>)</p>
</div>

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
