---
templateKey: blog-post
title: Avni September Release
date: 2026-09-30T12:00:00.000Z
author: Avni Team
featuredpost: false
description: Structured Approval and Rejection forms, a fix for hidden buttons on Android 16, clearer media sync errors, and an attendance report that refreshes in about a minute instead of hours. Here's what changed.
featuredimage:
tags:
  - release
---

## Approval and Rejection forms

<a href="https://github.com/avniproject/avni-product/issues/1901" target="_blank" style="text-decoration: none; color: inherit; display: block; transition: all 0.3s ease;" onmouseover="this.style.opacity='0.95'; this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 24px rgba(0,102,204,0.15)';" onmouseout="this.style.opacity='1'; this.style.transform='translateY(0)'; this.style.boxShadow='none';">
<div style="display: flex; gap: 40px; align-items: center; padding: 40px; margin-bottom: 20px; cursor: pointer; background: #ffffff; transition: all 0.3s ease;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-09-30-september-release/approval-rejection-form-demo.gif"
             alt="An approver opens a pending record, taps Reject, ticks a reason on the Rejection form, and the reason then appears as a Rejection Note at the top of the record"
             style="max-height: 420px; width: auto; display: block; margin: 0 auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p style="font-size: 14px; color: #0066cc; font-weight: 600; margin: 0 0 8px 0;">Turn approval decisions into data you can count</p>
        <p style="margin: 12px 0; line-height: 1.8;">Rejecting a record used to mean typing a sentence into a comment box. The field worker knew what to fix, but nobody could count those sentences.</p>
        <p style="margin: 12px 0; line-height: 1.8;">Now an organisation can build an <strong>Approval form</strong> or a <strong>Rejection form</strong> in App Designer. In the mobile app, tapping Approve or Reject opens that form instead of the comment box. The field worker whose record was sent back sees the approver's answers where the comment used to appear.</p>
        <p style="margin-top: 16px; font-size: 13px; color: #0066cc; font-weight: 600; display: flex; align-items: center; gap: 6px;">→ View technical details</p>
    </div>
</div>
</a>

<div style="display: flex; gap: 40px; align-items: center; padding: 40px; margin-bottom: 20px; background: #ffffff;">
    <div style="flex: 1; min-width: 250px;">
        <img src="/img/2026-09-30-september-release/rejection-reasons-summary@2x.jpg"
             alt="A summary screen listing submissions as Approved or Rejected, with the reasons for each rejection shown beside it">
    </div>
    <div style="flex: 1; min-width: 250px;">
        <p style="font-size: 14px; color: #0066cc; font-weight: 600; margin: 0 0 8px 0;">See why records are sent back</p>
        <p style="margin: 12px 0; line-height: 1.8;">The answers flow into reports and integrations like any other form data. If the Rejection form asks for the reason as a list of options, a program manager can count how often each reason comes up.</p>
    </div>
</div>

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 20px;">

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Set it up in App Designer</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Build the form, then attach it to anything that already has approval switched on. Follow the steps in <a href="https://avni.readme.io/docs/approval-workflow#approval-and-rejection-forms" target="_blank" style="color: #0066cc; font-weight: 500;">Approval and rejection forms</a> in the Avni docs.</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Rules work here too</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">The rule builder in App Designer works on Approval and Rejection forms, so you can hide or validate questions without writing code.</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Optional and backward compatible</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">Either form can be attached on its own. Where no form is attached, approving and rejecting work exactly as before.</p>
</div>

</div>

---

## Minor enhancements

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Buttons no longer hidden on Android 16</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">On Android 16 phones, buttons at the bottom of the screen, such as Apply on the Filter screen, were drawn underneath the phone's navigation bar and couldn't be pressed. They now sit above it and work again. (<a href="https://github.com/avniproject/avni-client/issues/2114" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#2114</a>)</p>
</div>

<div style="padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
<p style="font-weight: 700; margin: 0 0 8px 0;">Clearer media sync errors</p>
<p style="margin: 0; line-height: 1.7; color: #374151; font-size: 14px;">When a photo or other media file stopped a sync, field workers saw only an error code. They now see a readable message, and the sync is recorded as failed rather than incomplete, so it's clearer what went wrong. (<a href="https://github.com/avniproject/avni-client/issues/2097" target="_blank" style="color: #0066cc; font-weight: 500;">avni-client#2097</a>)</p>
</div>

</div>

---

## Performance improvements

<div style="padding: 0 0 20px 0; background: #ffffff;">
    <p style="font-weight: 700; margin: 12px 0 8px 0;">Attendance report refreshes in about a minute, not hours</p>
    <p style="margin: 12px 0; line-height: 1.8;">For organisations that track attendance, refreshing the attendance report used to take one to two hours. It now takes under a minute and a half. The report's contents are unchanged. (<a href="https://github.com/avniproject/avni-etl/issues/175" target="_blank" style="color: #0066cc; font-weight: 500;">avni-etl#175</a>)</p>
</div>

---

### Share Feedback and Stay Updated!

Join our [Avni community on Discord](https://discord.gg/VRZQYdcyuG) to share your thoughts, ask questions, and get the latest updates.

Need a walkthrough or have questions? Feel free to [schedule a demo call here](https://avniproject.org/).
