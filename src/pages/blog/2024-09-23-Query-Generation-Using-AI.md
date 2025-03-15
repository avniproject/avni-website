---
templateKey: blog-post
title: BI Reports Development Using AI
date: 2024-09-23T20:30:00.000Z
author: Vivek Singh
description:
featuredpost: false
featuredimage: /img/2024-09-23-Query-Generation-Using-AI/with-ai.png
tags:
  - Technology
---

### Context

In this blog we discuss how we are using AI to generate complex queries that go into the development of BI dashboards. This is the first blog in a series where we will share the progress we are making with using AI to make development of BI dashboards in Avni more efficient. We will also discuss our learnings on AI and how we should incorporate it in the software development process.

### What we did

Most Avni projects tend to require rich business intelligence (BI) dashboards and reports. The Samanvay team follows a standard process from requirements to delivery of these dashboards using SuperSet, Metabase, or sometimes proprietary BI platforms. The current process is somewhat as follows.

<div style="width: 70%">
    <img src="/img/2024-09-23-Query-Generation-Using-AI/current.png">
</div>
<br/>

Technically the second step above involves writing complex/large SQL queries and configuring the dashboard, dataset, chart and filters using the SuperSet web application. We have automated the process of generating SQLs from the spreadsheet/csv.

<div style="width: 90%">
    <img src="/img/2024-09-23-Query-Generation-Using-AI/with-ai.png">
</div>
<br/>

We used [Cursor](https://www.cursor.com/) which is an AI powered IDE to do this. A sample generated output is [here.](https://github.com/avniproject/avni-website/blob/master/static/code-samples/ai-aggregate-query-gen-blog/anc-details.sql) The SQL generated is to be verified and functionally tested by the engineer. More detailed instruction is present in Avni docs [here](https://avni.readme.io/docs/ai-in-reporting).

### What next?

We feel encouraged by the outcome and development effort that can be saved by this automation. We are working on automating other aspects of dashboard creation and will share in subsequent blogs the progress we are making in this direction.

<br/>
<br/>
