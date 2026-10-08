---
templateKey: blog-post
title: "Godowns, Hot Rain, and the Silence Between Two Questions"
date: 2026-09-28T10:00:00.000Z
author: Mohammed Taqi
description: Ten days with CCDT's Project Suraksha team in Bhiwandi.
featuredpost: false
featuredimage: /img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/team-selfie@2x.jpg
tags:
  - Data Collection
  - Training
  - Social Impact
---

![The CCDT Project Suraksha team in Bhiwandi](/img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/team-selfie@2x.jpg)

I landed in Mumbai on the 6th of September and took a cab out to Bhiwandi the same evening.

I should say upfront that this trip is different from my last few. Usually I visit one organisation, spend a week, and fly home. This time all three of the organisations I've been building for — CCDT here in Bhiwandi, Apnalaya in Mumbai, and AROEHAN up in Palghar — happen to sit within a couple of hours of each other. So instead of three trips I'm doing one long one: a month on the road, ten days at each. Which also means I'm writing this at the end of each day rather than reconstructing it from memory three weeks later. You'll be able to tell.

Bhiwandi announces itself before you've properly arrived. After doing a little homework, I found out it's known as the powerloom town, and that is what you get, but the word "town" undersells the scale of it. It is a working place. Godowns shoulder up against each other for kilometres, trucks reverse into lanes that were never designed for trucks, and everything — the air, the parked bikes, the leaves — carries the same fine grey coating of dust. There is noise from every direction, and none of it is in a hurry to stop. I'm staying at a place called Hotel Food Plaza, which is a strange name for a hotel, and a five-minute walk from CCDT's office.

And then there's the weather, which I genuinely could not get my head around.

I live in Bangalore. In Bangalore, rain is a negotiation that ends well: it rains, the temperature drops, everyone feels pleasant about it. In Bhiwandi it rains and then it is *hot*. Not hot afterwards — hot during. You stand in the rain and you sweat. I kept waiting for the cool part to arrive and it simply never did. Ten days in, I've stopped waiting.

## The room

![Community Mobilisers practising on the app during training](/img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/training-room@2x.jpg)

CCDT has been working in Maharashtra for around three decades. In Bhiwandi, the office I was working out of isn't primarily a health office at all — it's the home of AAROHAN, a programme where kids and teenagers come in to learn computers from the ground up. Typing, Excel, beginner to advanced. So my training venue for the week was a room full of desktops, normally occupied by teenagers learning to type, temporarily occupied by twenty-two adults learning an app.

There were eighteen Community Mobilisers, two supervisors, and two people from the M&E team. Mostly women. Mostly local to the areas they work in.

One thing I'd braced for and didn't need to: comfort with devices. Every one of them was fluent on a smartphone. What was new was the tablet. CCDT had procured tablets specifically for this programme, and most of the CMs had theirs in hand for the first time about a day into the training. Hold that fact. It comes back later.

Qasim picked me up from the hotel every single morning. It is a five-minute walk. I told him this. He kept picking me up.

## Before there was Suraksha

One fact reframes a lot of what follows, and I only pieced it together partway through the week: Project Suraksha itself is new for CCDT. It isn't a digitisation of something they've run for years. Before this, nobody was systematically capturing this maternal-and-child-health data on the ground at all — no paper register living in a drawer, no Excel someone updates at 11pm, nothing.

I mention this now because it changes how you should read the next section. A lot of the "what do we do when—" questions that came up in training weren't gaps in our build so much as decisions CCDT itself had never had occasion to make, because the programme had never run long enough — on paper or on a screen — to hit that scenario before. In a very real sense, some of that institutional memory was being written in that training room, live, one edge case at a time.

## Monday to Wednesday

Three days of training. We went through the Suraksha model roughly the way a CM would meet it on the ground: register a household, then the individuals inside it, then the programmes that sit on a person — Pregnancy with its ANC follow-ups, delivery and mother PNC; Child with its PNC visits and vaccination checklist; NCD screening and follow-up; referrals and referral follow-ups. Then the community-level forms — awareness activities, entitlement camps, engagement with the public health system.

Here's the thing I did not expect to be the defining feature of the week: the questions.

I have never been asked so many questions about so many individual fields in my life. Not "where do I tap" questions — I could have answered those in my sleep. These were questions from people who were sitting in that room visualising themselves standing in someone's doorway.

> *If she says she's had the injection but she doesn't have the card, what do I put?*
>
> *What if the household has three families living in it, who's the head?*
>
> *If we refer her to the hospital and she never goes, do we keep following up forever, or is there a point where we stop?*

Over and over. Every section of every page. And frequently the honest answer was not "tap here" but "that's a programme decision, not an app decision" — and then the room would work it out among themselves, in Marathi and Hindi, with me standing there listening to perspectives I had no way of anticipating from a desk in Bangalore.

I want to be careful about how I say the next part, because I don't think it reflects badly on anybody in that room — and now that I know how new Suraksha is, I don't think it reflects badly on CCDT either.

On an older programme, a lot of these questions would have been settled long before training day — decided during UAT, or simply inherited from years of doing this on paper. Suraksha had neither. The app had gone to CCDT for testing at every stage of the build MCH, NCD, all of it — but testing an app in the abstract is different from actually living a scenario. Some of what surfaced in that room was arriving for the first time in front of twenty-two people and a projector, for the CMs and the M&E team alike. So we started a list — *this one needs a discussion* — and moved on.

Those conversations are the quiet time-eater in any training. Collectively, they are half a day. That's a lesson for us on how we sequence UAT for a brand-new programme, not a complaint about the questions.

Because honestly, the questions were the best thing about the week. You can tell a lot about a team from what they ask. This team wasn't trying to learn an app. They were stress-testing a model against every difficult household they'd ever walked into, out loud, in real time. I found that genuinely inspiring, and I say that as the person whose work was being stress-tested.

## What broke

Plenty, and most of it was mine.

The big one: in the model we'd built, the "Other" option had been marked as *unique* in basically every question that had one. Which meant you couldn't select "Other" alongside anything else — the moment a CM picked it, every other option on that question turned red and refused to be selected. Which is, when you say it out loud, obviously wrong. Someone can be taking two medicines and one more that isn't on your list. There was no reason for that rule to exist anywhere, and it existed nearly everywhere.

It broke in front of the room, repeatedly, on day one.

There was also skip logic missing in a few places, and a handful of other rules misfiring. So I did what you do: kept a running list through the day, and fixed it in the evening. Training ended at 5:30 sharp. I'd walk back to the hotel and work until dinner. By the next morning the list was usually shorter than it had been the previous night.

## The translation I didn't get to do

Last time I wrote about a training — at [BHS in Udaipur](/blog/Visiting%20BHS,%20Udaipur:%20Phulwaris,%20Peacocks,%20and%20the%20Live%20Growth%20Chart/) — one of the honest low points was language. Missing Hindi translations, users switching keyboards mid-form, me watching a workaround become a habit. I ended that blog saying that next time I'd make sure none of that got in the way.

So this time I pushed hard for the Marathi and Hindi translations, early and repeatedly. They got delayed. And eventually I made an offer I wasn't really supposed to make: that I'd just translate the entire app into Hindi and Marathi myself, with AI doing the heavy lifting, and they could review it.

CCDT said no, they'd handle it. Which is the correct answer! Translation is the partner organisation's call — their M&E team knows the vocabulary their field staff actually use, and a term I get subtly wrong is a term eighteen people will read wrong every day for years. I overstepped, politely, because of a lesson from Udaipur, and I got politely told no.

In the end it mattered less than I'd feared. Vishal had told me the team would be comfortable in English, and that even with translations available they'd want the demo in English — and he was right. But there were one or two voices in that room who said, quietly, that it would have been nicer in Marathi. I noted those down. They're the ones I'd design for.

The other thing that saved me was the supervisors. Vishal, Rina, Kiran, Iram and Qasim sat in on the whole training, and every time my Hindi ran out mid-explanation — which was often — one of them picked up the sentence and finished it properly. Training without that is a much lonelier job.

Vishal also taught me something I've been thinking about since. There's a question in the delivery form: *who conducted the delivery* — trained TBA, untrained TBA, nurse, doctor, and so on. I had built that field. I did not really understand it. Vishal explained that an untrained TBA (Traditional Birth Attendant) is often someone who worked for years as a compounder, absorbed a great deal of practical knowledge, then went home and opened a clinic and began calling himself a doctor. No degree, real experience, genuine standing in the community. He told me to watch *Gram Chikitsalay* if I wanted to see it drawn accurately. It's on my list now.

That's a dropdown I'd been treating as a dropdown.

## Thursday: outside

![A Community Mobiliser and a health official talking to a family in a lane in Bhiwandi](/img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/field-visit-lane@2x.jpg)

On Thursday morning Vishal and Qasim ran a session on Kobo Toolbox, which the team will use for the baseline survey, and then we all went out into the field. First time the app was going to be used live, with real households, by people who had been trained on it three days earlier.

I went with Nida, Rinkal, and Roshni, a health official.

And this is the part of the trip I keep coming back to.

Nida and Rinkal were excellent. They opened the conversation confidently, moved into the registration questions without fumbling, asked them in the right order and the right tone. No hesitation at all.

![Recording a household visit on the tablet](/img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/household-visit@2x.jpg)

Then the beneficiary answered. And Nida looked down at the tablet to record it.

And the room went quiet.

Not for long. A few seconds, maybe. But it was a strange few seconds, and it repeated after every single answer. A question, an answer, and then a silence with a woman looking at a screen in the middle of it, while the person she'd asked stood there with nothing to do.

Nobody complained. It wasn't dramatic. But the silence was awkward, and I don't think I'm being precious about it. Between a field worker and a beneficiary, that conversation *is* the programme. It's the thing being delivered. And we'd just inserted a pause into it.

I think there were two reasons, and only one of them is about the app.

The first is simply that the tablet was one day old. Nobody is fast on a device they got yesterday. That fixes itself in a fortnight.

The second is more interesting: I don't think anyone had ever had to hold a conversation and record it at the same time. There was no technique for it yet — no habit of asking the next question while your thumb is still finishing the last answer, no sense of which fields you can fill from memory afterwards on the walk to the next house. Paper would have had the same problem, if paper had been there. It isn't a tablet problem. It's a choreography problem, and nobody had taught it because nobody had needed it before.

I gave that back to the group as feedback the next day — carefully, because I was very aware I'd been on the ground for one afternoon and they'd been doing this for years. Every single one of them agreed immediately, and several of them had already felt it themselves. That silence, left alone, would eventually cost them something in the relationship.

## Why that relationship is not a soft metric

Later that day Nida told me about something that happened to her on a normal survey round.

A drunk man approached her and started harassing her. She stood her ground and told him to leave her alone. He went away — and came back a minute later, holding a stick.

What happened next is the part I want you to sit with. The locals stepped in. People from that basti who knew Nida — who knew her from years of door-to-door follow-ups on other CCDT programmes, long before Suraksha existed — put themselves between them and got rid of him.

Her safety, in that moment, was made of accumulated visits.

Qasim told me that in summer the temperature here climbs to 48 degrees, and that a number of the CMs get sick — diarrhoea, mostly — from being out in it. And they keep going out in it. They also get interrogated on doorsteps fairly regularly: who are you, who sent you, why do you want to know this. Every day, from scratch, they have to re-earn the right to ask a question.

I live in a city and I work on a laptop. I cannot pretend to know what that costs.

So when I say a three-second pause in a doorway conversation bothered me, this is why. That conversation isn't the packaging around the data. It's the whole asset. It's what makes the programme work and it is, on a bad day, what keeps the worker safe.

## The tea

The best thing I heard all week had nothing to do with software.

Vishal and Kiran were coaching the CMs on how to handle a follow-up where the advice from last time has clearly been ignored. Say you've told a beneficiary not to drink tea on an empty stomach, and you come back two weeks later and she's drinking tea on an empty stomach.

The instinct is: *I told you last time. Why are you still doing this?*

Don't, they said. Not because it's rude, but because of what it produces. Use that tone once and she won't stop drinking the tea — she'll stop telling you about the tea. You'll have traded a true answer for a comfortable one, and now you're following up on fiction. The job is to keep counselling until the habit changes, not to win the exchange.

I wrote that down. It's the best description of data quality I've heard, and nobody in the conversation thought they were talking about data quality.

## What they gave me

None of that — the heat, the doorstep interrogations, the three days of relentless questions — fully prepared me for how this team treated me once the training hours ended.

![Ganesh Chaturthi, home-cooked meals, and the team](/img/2026-09-28-godowns-hot-rain-and-the-silence-between-two-questions/ganesh-chaturthi-and-meals.jpg)

One of the CMs invited me to her home for Ganesh Chaturthi. I went, sat through the pooja, ate more than I should have. Mariam (another CM) and her mother had prepared me breakfast one morning, dinner on another. On one of those evenings she and Saima (another CM) found out I hadn't bought anything to take home for my sister, and more or less marched me to a shop to fix that. Vishal also turned out to be a wonderful cook. He hosted me one evening — he and his wife had put together three kinds of seafood: two fried fish (Bombay duck and sardines) and a prawn curry. Honestly, after being a little overwhelmed by eating out every day, that food reminded me of home.

I don't think that's unrelated to everything else in this piece. The same women who spent three days finding every crack in a form, who walk into forty-eight-degree heat and doorsteps that ask them who sent them — they're also the ones who make sure a stranger passing through their week eats properly and doesn't go home without a gift for his sister. It's the same generosity. It just doesn't show up on a dashboard.

## Where things stand

By the end of day three, across the training accounts, the team had put through roughly 400 registrations and around 800 visits — pregnancy, child, NCD, referral and community forms, all of it. That's practice data, not programme data, and I want to be clear about that. But as a measure of whether eighteen people can pick this up and move at pace in three days, it's a good number.

The plan from here isn't simply "practice for a month and then switch." CCDT is running its baseline for Suraksha first, using Kobo Toolbox — the same tool Vishal and Qasim trained everyone on that Thursday morning. Only once the baseline is done does the switch to Avni for ongoing tracking begin. That's not hesitation about the app; it's the right order to do things in — you establish where a population stands before you start tracking how it changes. Given that Suraksha has no data history at all to fall back on, that baseline is arguably the more consequential of the two apps this team is learning this month.

Which is really the one-sentence version of what's different now: for the first time since Suraksha existed, this data is going to exist somewhere other than inside a conversation between a CM and a household.

## What I'm taking with me

In Udaipur, the moment that made that blog was the growth chart drawing itself — the second the arithmetic stopped being a nurse's job. I came to Bhiwandi half-expecting to find a moment like that here. A BMI status filling itself in. An EDD appearing out of an LMP date. A vaccination checklist laying out a child's due list before anyone asked for it.

I didn't find one. It's all in there, and it all works, but nothing in three days made a room go quiet in a good way.

What made a room go quiet was a pause in a doorway.

I'm not disappointed by that, which surprises me a bit. Udaipur taught me what good software gives you. Bhiwandi is teaching me what it costs, and who pays that cost first — which is always the person standing in front of the beneficiary, holding the device, trying to be warm and accurate at the same time.

But I've already got the more useful lesson, and it didn't come from the app at all. It came from Vishal explaining why an untrained TBA is respected. From Kiran explaining why you never scold someone about tea. From Nida, standing in a lane, protected by nothing but the fact that she keeps coming back. From a CM inviting a visiting stranger to her Ganesh Chaturthi, and from Mariam and Saima refusing to let that stranger fly home without a gift for his sister.

The app was never the hard part.

---

*Thank you to Vishal, Qasim, Rina, Iram and Kiran, to Mariam and her mother, to Vishal's wife, and to all eighteen Community Mobilisers who asked me better questions than I was ready for. And to Nida, for letting me tell her story here.*
