---
templateKey: blog-post
title: Avni July Release
date: 2026-07-31T12:00:00.000Z
author: Avni Team
featuredpost: false
description: AI model updates without app releases, attendance improvements, faster form filling, and smarter form building. Here's what changed.
featuredimage:
tags:
  - release
---

## AI Models Update Without an App Release

<div style="display: flex; gap: 40px; align-items: center; padding: 40px; margin-bottom: 20px; background: #ffffff;">
    <div style="flex: 1; min-width: 250px;">
        <p style="margin: 12px 0; line-height: 1.8;">Organizations using on-device AI models can now receive updates through regular sync — <strong>no app release needed</strong>. Models are delivered securely, encrypted both in transit and on the device, keeping field operations running smoothly without waiting for new app versions.</p>
        <p style="margin: 12px 0; line-height: 1.8;">Perfect for teams iterating on AI-powered workflows or fixing model behavior without coordinating app updates.</p>
        <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-server/issues/1019" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
    </div>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Attendance That Remembers

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Two important fixes to the attendance flow ensure data stays accurate:</p>
    <ul style="margin: 12px 0; margin-left: 20px; line-height: 1.8;">
        <li><strong>Fixed: Reopening old attendance forms</strong> — When reopening a form from the past, the system now checks if a student was eligible *on that date*, not today. This prevents accidentally erasing attendance history for students who have since left the program. (<a href="https://github.com/avniproject/avni-server/issues/1015" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1015</a>)</li>
        <li><strong>Better absence tracking</strong> — When marking a student absent for "Other" reasons, you can now add a written note specific to that student, making it easier to understand the full context of an absence. (<a href="https://github.com/avniproject/avni-server/issues/1016" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1016</a>)</li>
    </ul>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Faster Form Filling

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Two enhancements that save time when working with larger datasets:</p>
    <ul style="margin: 12px 0; margin-left: 20px; line-height: 1.8;">
        <li><strong>Search inside dropdowns</strong> — Coded answer lists now include a search box, just like address fields already did. When a dropdown has many options, field workers can now type to filter instead of scrolling. (<a href="https://github.com/avniproject/avni-client/issues/1940" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#1940</a>)</li>
        <li><strong>File uploads in Question Groups</strong> — Multi-select file upload now works correctly inside a Question Group on the mobile app, enabling more flexible form structures. (<a href="https://github.com/avniproject/avni-client/issues/1941" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#1941</a>)</li>
    </ul>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Quicker Form Building

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Form design just got more intuitive in App Designer:</p>
        <ul style="margin: 12px 0; margin-left: 20px; line-height: 1.8;">
            <li><strong>Drag-and-drop reordering</strong> — Rearrange questions within a Question Group by dragging, no need to delete and recreate</li>
            <li><strong>Bulk decision uploads</strong> — Import multiple decisions at once instead of entering them one by one</li>
        </ul>
        <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-webapp/issues/1750" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Safer Setup and Reporting

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Infrastructure improvements that make configuration more robust and reporting faster:</p>
    <ul style="margin: 12px 0; margin-left: 20px; line-height: 1.8;">
        <li><strong>Move address levels between organizations</strong> — An organization's "lowest address level" setting can now be transferred without breaking references, making it safe to reorganize. (<a href="https://github.com/avniproject/avni-server/issues/1020" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1020</a>)</li>
        <li><strong>Metabase setup no longer slows down the main database</strong> — Initial configuration of Metabase now runs independently, making it faster and safer to spin up analytics. (<a href="https://github.com/avniproject/avni-server/issues/1021" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1021</a>)</li>
    </ul>
</div>

---

## Minor enhancements

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Improvements to Full custom cards</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Full custom cards are now more flexible and performant. (<a href="https://github.com/avniproject/avni-webapp/issues/1751" target="_blank" style="color: #0066cc; font-weight: 500;">avni-webapp#1751</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Faster saving of coded concepts</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Saving a coded concept with many answer options is now significantly faster. (<a href="https://github.com/avniproject/avni-server/issues/1022" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1022</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Smoother self-signup for trials</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">New trial organizations now experience a streamlined signup flow. (<a href="https://github.com/avniproject/avni-product/issues/1875" target="_blank" style="color: #0066cc; font-weight: 500;">avni-product#1875</a>)</p>
</div>

</div>

---

## What's coming in August

- **Mobile app database migration** — Moving to a faster, more efficient local database schema
- **Guided-camera capture** — Enhanced camera workflows for screening and diagnostic forms
- **De-identified data sync** — New privacy option for syncing data without personal identifiers

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
