---
templateKey: blog-post
title: How We Delivered Offline Health Videos in Remote Areas Using Avni and a PWA
date: 2025-07-08T10:00:00.000Z
author: Kannan JK, ASHWINI Gudalur
description: In this blog, Kannan from ASHWINI Gudalur shares how their team solved the challenge of delivering offline health videos in remote areas using Avni and a Progressive Web App. A hands-on story of innovation, field realities, and building scalable tech for impact.
featuredpost: true
featuredimage:
tags: 
	- Health
---


In our ongoing efforts to make community health outreach more effective, we recently faced a very real challenge on the ground: how do we make educational content available offline to our Health Animators (HAs), especially in places where the internet is not available?

This is the story of how we struggled, hacked, failed, and eventually triumphed—with the help of Avni, a local server, some bugs, and a sprinkle of Progressive Web App magic.

## The Problem: Offline Learning in Remote Areas

We use **Avni** for our community data collection, and it's been instrumental for our Health Animators in the field. But we had a new requirement.

Let’s say a Health Animator wants to explain breastfeeding techniques to an ANC mother in a remote village. How do they show a video or a visual aid without the internet?

We needed a way to:

- Store videos locally on the device
- Show the right video at the right time during the form-filling process in Avni

The idea? Embed context-specific video links inside the **Avni documentation** feature.

## The Experiment: Local Server on Mobile

Our first idea was a bit unconventional, but surprisingly, it almost did the trick.

We thought: what if we host a local web server directly on the mobile device? That way, all our videos and HTML content could live right there, offline. Then, from Avni, we could redirect to a local web address.

We used a simple tool like **Simple HTTP Server PLUS** to host the content. And boom—when we opened it in the mobile browser, it worked like a charm. Videos played, pages loaded. It looked like we cracked it!

But... Avni said, **"Domain undefined."**

## The Bug(s): It Worked in the Browser... But Not in Avni

This was when the real adventure began.

Avni kept throwing errors like:

- “Domain not defined”
- Links not opening at all
- Even when using the device’s IP address

We took the issue to the Avni team, and the response was heartening. People jumped in with suggestions, helped us investigate, and worked toward resolving the issue.

We learned that:

- **Android WebViews** (which Avni uses) don’t allow `localhost` or non-HTTPS links easily.

Frustrating. Promising idea, half-baked execution.

## The Breakthrough: Enter Progressive Web App (PWA)

That’s when **Vinay from the Avni team** suggested a better approach: why not use a **Progressive Web App**?

Here’s what made it the perfect fit:

- No need for a server on each device
- Once opened online, all videos and pages are **cached and available offline**
- Maintenance becomes centralised—just update the web app and ask users to open it once when online

It was like turning a clunky diesel tractor into an electric scooter.

## The Result: One Tap. Many Videos. Offline.

Now, our Health Animators just:

1. Open the PWA website once when they have internet
2. All the content is cached
3. In Avni, documentation links point to PWA pages
4. Even offline, the videos play flawlessly

We’re able to update content without touching every device. Life is good.

## What We Learned

- Don’t fight the mobile platform restrictions—**understand them**
- Sometimes the best solution is a **pivot**, not a patch
- **PWAs** are incredibly powerful for low-connectivity use cases
- The **Avni community is awesome**

## Final Thoughts

What started as a simple idea to serve offline videos turned into a lesson in web architecture, mobile security, and human perseverance.

From “domain not defined” to **context-rich health education at the fingertips** of our HAs—this was a journey worth documenting.

And the best part?  
Next time someone in the team asks,  
**“Can we show a video offline?”**  
We’ll just smile and say,  
**“Already done.”**
