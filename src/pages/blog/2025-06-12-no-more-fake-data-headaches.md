---
templateKey: blog-post
title: No More Fake Data Headaches- AI to the Rescue
date: 2025-06-12T10:00:00.000Z
author: Pooja Harmalkar
description: Manually crafting CSVs for this was pure drudgery. Then I turned to AI, stumbling from ChatGPT’s limitations to Grok’s quirks before landing on Windsurf, an AI that gets Avni like nobody’s business. This is my story of escaping comma-induced chaos.
  
featuredpost: false
featuredimage: 
tags: - Knowledge
---

## Generating Realistic Dummy Data for Avni UAT using AI

As the Lead Implementation Engineer at Avni, I’m tasked with ensuring our community health platform delivers for real-world programs. User Acceptance Testing (UAT) is where we prove it, but there’s a catch: developing Business Intelligence (BI) reports for tools like Metabase and Superset demands realistic data. Real-world data in UAT? That’s a privacy and logistics nightmare. So, we need dummy data—lots of it, and it has to look legit. Think Subject Registrations, Program Enrollments, and Encounters, all with valid locations, ages, and IDs that BI tools can slice and dice.

Manually crafting CSVs for this was pure drudgery. Then I turned to AI, stumbling from ChatGPT’s limitations to Grok’s quirks before landing on Windsurf, an AI that gets Avni like nobody’s business. This is my story of escaping comma-induced chaos, hidden validation rules, and mental blocks to generate flawless dummy data, fueling BI reports with ease. Grab a coffee—here’s how it went down.

## The BI Data Dilemma

Avni’s UAT phase is where we build and test BI reports—think dashboards in Metabase showing enrollment trends or Superset charts tracking health outcomes. These tools need data that mirrors reality: Indian names, valid districts, logical ages, and complex relationships (e.g., a mother’s age older than her child’s). Using actual patient data in UAT risks privacy breaches, and mocking up thousands of rows by hand is a soul-sucking slog. One typo in a CSV, and Avni’s Admin > Upload page would reject it, derailing our report development.

I needed a better way. Enter AI. I started with ChatGPT, hoping it could churn out 30 rows of realistic data for a Subject Registration report. Spoiler: It didn’t go well.

## The Challenge: Realism, Relationships, and CSV Headaches

For BI to deliver meaningful insights, the underlying data must feel authentic. That means:

- Indian names and locations
- Logical age relationships (e.g., a child’s guardian is older)
- Valid date formats
- Consistent identifiers

A single malformed value—like a comma in an unquoted field—can break Avni’s data importer, stalling development.

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/1.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## ChatGPT’s Comma Catastrophe

I crafted a detailed prompt for ChatGPT, based on a sample CSV with headers and descriptions (mandatory/optional fields, formats, dependencies). Here’s a snippet:

> I am working on report development and need realistic-looking, high-quality fake data for 30 individuals. I have a CSV file with two key rows: Row 1 (Header): Contains column names. Row 2: Contains a description for each column, specifying: Whether the field is Mandatory or Optional, What format, data type, or value range it should follow...

The full prompt was a beast, demanding valid Indian locations, logical ages, and proper date formats (DD-MM-YYYY). ChatGPT generated data, but uploading it to Avni was a disaster. The issue? Commas. CSVs use commas as delimiters, so an address like “Mumbai, Maharashtra” split into two columns, causing column mismatch errors. ChatGPT’s free tier limited my iterations, and manually quoting fields felt like punishment. I was stuck, and my BI reports were going nowhere.

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/2.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## Grok: Better, But Not Quite

Next, I tried Grok, hoping its flexibility would fix the comma chaos. I fed it the same prompt, expecting cleaner CSVs. Grok was smarter, generating more consistent data—like proper Indian names (“Ravi Kumar”) and valid dates. But commas still tripped me up. Addresses like “Pune, Maharashtra” broke uploads, and I spent hours wrapping fields in quotes or swapping commas for semicolons. Grok’s prompts were also verbose, and it didn’t fully grasp Avni’s backend, like how locations must match locations.csv. My Metabase dashboards were still waiting.

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/3.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## Windsurf: A Better Approach

My superior pointed me to Windsurf, an AI pre-trained on Avni’s ecosystem. Our team had shared reference projects with Windsurf, so it knew Avni’s data types—Subject Registrations, Encounters, and their quirks—inside out. I was skeptical. Could it handle commas and produce BI-ready data? Oh, it did.

Windsurf’s prompts were a breeze. Instead of a page-long saga, I wrote:

> Generate 30 rows of Subject Registration data using the sample CSV. Use locations from locations.csv, ensure unique Subject IDs, and quote address fields to escape commas.

Windsurf wrapped fields like “Mumbai, Maharashtra” in quotes, nailed valid districts from locations.csv (exported via Admin > Locations), and produced realistic data—think “Priya Sharma, 32, Pune District.” Uploads to Avni worked on the first try, and my Metabase reports started coming to life, showing enrollment patterns and health metrics without a hitch.

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/4.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## Uploading Data via the Avni Web Console

So why the obsession with CSVs? Avni’s web console is built for bulk data imports, and it only accepts CSVs with precise formatting—headers matching the data type’s schema, values in the right format, and commas as delimiters. This is how we got the data into Avni:

1. Log into the Avni web console and navigate to Admin > Upload.
2. Select the data type from the dropdown (e.g., Subject Registration, Program Enrollment, Program Encounter, General Encounter).
3. Upload the generated CSV file, ensuring it matches the sample template’s headers and formats.
4. Monitor the upload status. If errors occur (like those dreaded comma mismatches), download the error file, fix the issues (often with Windsurf’s help), and re-upload.
5. Repeat until the status shows Completed without errors.

The CSV requirement comes from Avni’s need for structured, machine-readable data. Each row represents a record, and columns must align perfectly with the data type’s fields—think Subject ID, Name, Location. A single unquoted comma in an address field could shift columns, breaking the upload. This is why Windsurf’s ability to quote fields was a lifesaver, ensuring my CSVs played nice with Avni’s web console and kept my BI reports on track.

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/5.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## Scaling for BI with Limitless Credits

Windsurf’s free tier had limits, and with UAT deadlines pressing, I needed speed. I bought limitless credits—a no-brainer. With unrestricted access, I generated thousands of rows across data types, from Subject Registrations to Program Encounters, each feeding BI reports. Windsurf handled dependencies like a pro, reusing Subject IDs for encounters (crucial for Superset’s relational charts) and ensuring logical consistency (e.g., guardian names only when parents weren’t registered).

The process was seamless: export locations.csv, grab sample templates from Admin > Upload, feed them to Windsurf, and upload via the web console. Errors? Download Avni’s error file, tweak the prompt, and retry. I was building report-ready datasets in under an hour, and my BI dashboards were singing.

---

<div style="width: 100%; max-width: 800px; padding: 24px 0;">  
    <img src="/img/2025-06-12-no-more-fake-data-headaches/6.png" 
         alt="" 
         style="width: 100%; height: auto; max-width: 600px; display: block;">
</div>

## What I Learned (So You Don’t Have To)

**CSV Gotchas**  
- Always quote fields with commas  
- Validate using Avni’s error file—download it and let Windsurf fix it  

**Watch for Hidden Validation Rules**  
- “Father’s age > child’s age”  
- “EDD = LMP + 9 months 9 days”  
- “If ‘Other’ is selected, description field is mandatory”  

**AI Superpowers**  
- Diverse, realistic personas at scale  
- Accurate relationship modeling (families, pregnancy timelines)  
- Data tailored to BI chart expectations  

**Why Windsurf worked best**  
- Knows Avni’s data model  
- Reduces prompt verbosity  
- Minimizes upload errors  
- Lets you focus on reports, not data cleanup  

---

## FAQs

**Q: Why do commas break CSVs?**  
A: Commas are CSV delimiters, so unquoted commas in fields like “Mumbai, Maharashtra” split data incorrectly. Windsurf quotes them automatically if prompted, ensuring smooth web console uploads.

**Q: Why does Avni require CSVs?**  
A: Avni’s web console uses CSVs for bulk imports, expecting structured data with specific headers and comma-separated values to match data type schemas.

**Q: How did Windsurf help BI reports?**  
A: It generated realistic, Avni-compliant data with diverse scenarios for Metabase and Superset, enabling robust report testing in UAT without real-world data.

**Q: What if uploads fail?**  
A: Download the error file from the web console, check for formatting or dependency issues (e.g., missing validation rules), and update your Windsurf prompt.

---

## Conclusion

No more manual data drudgery for me. From ChatGPT’s comma catastrophes to Grok’s near-misses, Windsurf delivered realistic dummy data that powered Metabase and Superset reports. With concise prompts, limitless credits, and a knack for Avni’s quirks—plus a lot of trial and error with hidden rules, diverse scenarios, and web console uploads—I’m building BI dashboards faster. If you’re wrestling with dummy data generation on Avni, grab Windsurf, export locations.csv, and master that web console.
