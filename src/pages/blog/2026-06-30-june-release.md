---
templateKey: blog-post
title: Avni June Release
date: 2026-06-30T12:00:00.000Z
author: Avni Team
featuredpost: false
description: On-device AI for field workers, attendance flow improvements, and a faster data pipeline. Here's what changed and what it means for you.
featuredimage:
tags:
  - release
---

## On-device AI, fully offline

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">The Android app can now run AI models directly on the phone, with no internet needed. A form can trigger a model on a photo a field worker just took and <strong>automatically fill in the result</strong> — even inside repeating sections of a form.</p>
    <p style="margin: 12px 0; line-height: 1.8;">Less manual entry, fewer errors, in places where connectivity can't be relied on.</p>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-client/pull/1929" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Mark attendance directly from the dashboard

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">App Designer now lets you add a <strong>"Mark attendance" card</strong> to any dashboard. Tapping it takes a field worker straight into the attendance sheet — no extra navigation needed.</p>
    <p style="margin: 12px 0; line-height: 1.8;">Administrators pick the Group Subject Type and Attendance Type when setting up the card, keeping it flexible for different programs.</p>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-client/issues/1936" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Attendance refinements

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Several smaller improvements to the attendance flow have landed:</p>
    <ul style="margin: 12px 0; margin-left: 20px; line-height: 1.8;">
        <li><strong>Multiple absence reasons</strong> can now be selected at once</li>
        <li>A separate <strong>"needs follow-up" checkbox</strong>, independent of the absence reason</li>
        <li>A clearer reason shown when <strong>someone is removed from a group</strong></li>
        <li><strong>Student names sorted alphabetically</strong> in the attendance view</li>
        <li>A tidier attendance list overall</li>
    </ul>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-server/issues/1002" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Import cancelled visits and exited enrolments

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Two new import modes let you bring <strong>historical visit cancellations</strong> and <strong>enrolment exits</strong> into Avni through bulk upload, instead of entering them one by one. Particularly useful when migrating from paper or a legacy system.</p>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-server/issues/988" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Pull in read-only photos and files from earlier forms

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">A form can now <strong>display a photo or document uploaded in an earlier form</strong> — the same way it already surfaces other read-only data. Useful when a later step in a workflow needs to reference something captured earlier.</p>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-product/issues/1866" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

<div style="border: none; height: 2px; background: linear-gradient(90deg, transparent, #e0e0e0, transparent); margin: 40px 0;"></div>

## Group-level permission cascading

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="margin: 12px 0; line-height: 1.8;">Permissions set at a group level now <strong>cascade down automatically</strong>. Admins no longer need to configure access for every sub-group individually — saving significant setup time for large deployments.</p>
    <p style="margin-top: 16px; font-size: 13px; font-weight: 600;"><a href="https://github.com/avniproject/avni-webapp/issues/1764" target="_blank" style="color: #0066cc; text-decoration: none;">→ View technical details</a></p>
</div>

---

## Minor enhancements

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Do visit card shows multiple enrolments</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Individuals enrolled in more than one program now appear correctly in the Do visit card. (<a href="https://github.com/avniproject/avni-client/issues/1937" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#1937</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Registration decisions visible on web</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Admins can now see registration decisions directly in the Data Entry App. (<a href="https://github.com/avniproject/avni-webapp/issues/1554" target="_blank" style="color: #0066cc; font-weight: 500;">avni-webapp#1554</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Duplicate syncs prevented</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Tapping sync multiple times no longer triggers duplicate manual sync operations. (<a href="https://github.com/avniproject/avni-client/issues/1792" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#1792</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">CSV error files easier to download</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Analytics permission is no longer needed to download error files from a bulk upload. (<a href="https://github.com/avniproject/avni-server/issues/999" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#999</a>)</p>
</div>

</div>

---

## Performance improvements

<div style="padding: 0 0 20px 0; background: #ffffff;">

### Subject search is fast again
A slow database query was causing subject searches with filters to take 50–70 seconds — the root cause behind the response-time slowdown some teams noticed in May. It's now fixed. (<a href="https://github.com/avniproject/avni-server/issues/1005" target="_blank" style="color: #0066cc; font-weight: 500;">avni-server#1005</a>)

### One less filter, one faster tap
The individual filter on the "Do visit" action card has been removed, making that flow quicker to use. (<a href="https://github.com/avniproject/avni-client/issues/1911" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#1911</a>)

</div>

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

For the complete technical details, see the release notes on GitHub.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
