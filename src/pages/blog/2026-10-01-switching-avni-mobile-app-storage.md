---
templateKey: blog-post
title: "Switching the Avni Mobile App storage"
date: 2026-10-01T10:00:00.000Z
author: Himesh R
description: Avni 18.0 replaces the database inside the mobile app. Here is why, and what it means for your organisation.
featuredpost: false
tags:
  - Avni
  - release
  - Software Engineering
---

A field worker in a village with no signal can still register a child, record a visit and sync it all a week later. That works because every Avni phone carries its own database. In 18.0, we start moving to a new one. It takes time, but it leaves us with a more stable app that we can keep making faster.

Picture a relay. The old runner has carried our data for years and is tiring. The new runner is alongside, hand out. The handover is the only moment the baton can drop, and we have to make it thousands of times, phone by phone, one organisation per leg. So we run each handover slowly, and we watch every one.

## The race : on one screen

| On the track | What it means |
|---|---|
| The race | Hand every phone's data from the old database to the new one |
| 18.0 | The new runner is on the track. No baton has changed hands yet |
| The legs | One organisation at a time, smallest first |
| Your part | Finish drafts and move to a custom dashboard. We check the rest |
| Is it over? | Moving data across is done and tested. Speed work for large organisations continues |

## Why : the old runner is tiring

The old database is no longer actively maintained. By February it had gone six months without a release. Each time Android moves forward, the database must keep pace, and with nobody coaching it, every upgrade became a coin toss. One security flaw with no fix, and our runner would have stopped mid-lap.

So we brought in a new runner: one of the most widely used databases in the world, with plenty of people keeping it fit. Data on the phone stays encrypted, as before.

## On your marks : 18.0 hands over nothing

18.0 puts the new runner on the track. Nobody crosses yet.

Update the app and every user stays exactly where they are. A handover starts only when an administrator adds a user to the **SQLite Migration** user group, and they sync. We do that together with each organisation, on a date agreed with it.

There is nothing to do yet. Avni's delivery and support team will contact your organisation with the details, including the date, before any of your users move.

That group sits in every organisation's admin screen. Please don't use it yourself. A baton passed before both runners are ready is how it gets dropped. A user can be handed back, but only with the platform team, and their phone downloads all its data again.

## Before the handover : what your organisation does

- **Unfinished drafts are lost.** A draft is a note in the old runner's pocket. It does not cross, and the app gives no warning. Ask field users to finish or discard drafts before their move date. Why not carry them over? The app already deletes any draft left untouched for 30 days, and building that bridge for a one-time move cost more than it saved. So the warning comes from us, in the briefing before your move.
- **My Dashboard is being retired.** If your users still land on it, we set up a custom dashboard with you first and check its numbers match.
- **Some report cards and rules get rewritten.** A few rule styles run slowly on the new database. We scan yours and fix what needs it.
- **Sync first.** The handover waits until the phone has nothing left to upload, and it only happens on a sync the user starts.

## The handover : one organisation per leg

The first leg is a small organisation with two users. Before the real thing, we rehearse it on a test copy of its data. Then one user crosses. Then the second. Only then does the next organisation step up.

Each organisation gets one visit, and everything happens in it:

1. Scan its rules and fix anything flagged as must-fix.
2. Set up a custom dashboard if it still uses My Dashboard.
3. Check its report cards, and rewrite any that count slowly.
4. Check the numbers match on the old and new databases.
5. Sign off, and hand over the first one or two users, during the field visit where we can.

Then the rest of its users cross in batches, and we keep watching that leg for a month after.

We start at two or three organisations a week, then pick up the pace. Large organisations run the last legs, once the handover has become boring. Boring is the goal.

## Track notes : for the technically curious

Out goes Realm. In comes SQLite, through op-sqlite, with SQLCipher for encryption. We didn't rewrite the app. We built a layer on SQLite that behaves like Realm, and it translates rules written in Realm's query language to SQL as they run.

Shapes like `SUBQUERY` and `@count` often can't be translated, and some rules filter in plain JavaScript. Either way the app loads every matching record. Realm made that nearly free. SQLite builds a full object from every row. In August, one dashboard card on a 32,000-subject organisation took 3 milliseconds on Realm and 34 seconds on SQLite. Almost none of that was the query itself. Nearly all of it was building objects and filtering them.

So we wrote a scanner. It read 68,826 rules across all 697 organisations on our server, old trial ones included. 207 had at least one rule worth checking. The best news was in the zeros. The two patterns that could have given wrong answers, `@links` and `ALL`/`NONE`, appear in no rule anywhere. Everything else it found is a speed risk, which is what the visit fixes.

The design notes are public, starting with the [technical overview](https://github.com/avniproject/avni-client/blob/18.0/docs/RealmToSqliteOverview.md).

---

If we run this right, the baton changes hands on every phone, and nobody in the field breaks stride.
