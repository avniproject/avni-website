---
templateKey: blog-post
title: Store and Use of Aadhaar in a community service data collection platform - What you need to know
date: 2024-11-27T13:00:00.000Z
author: Arjun Khandelwal & Vinay Venu
description: 

featuredpost: false
featuredimage: /img/2024-11-27-Aadhaar-what-you-need-to-know/Aadhaar_blog.png
tags: 
    - Knowledge
---

## Context

In recent years, the question of storing Aadhaar numbers has come up frequently from our customers. Given the **sensitive nature** of Aadhaar data and the **legal implications** of storing it, we took this as an opportunity to learn more about the topic to guide our approach. We share our learnings with you.

![](/img/2024-11-27-Aadhaar-what-you-need-to-know/Aadhaar_blog.png)

## What is Aadhaar

An Aadhaar number is a 12-digit unique identification number that is issued to Indian residents by the Unique Identification Authority of India (UIDAI) after satisfying the verification process laid down by the Authority. It serves as a proof of identity and a proof of address for residents of India.

The UIDAI was created to issue Aadhaar numbers that are:

- Robust enough to prevent duplicate or fake identities  
- Easy and cost-effective to verify and authenticate

Any resident of India may voluntarily enrol to obtain an Aadhaar number. The UIDAI issues an Aadhaar number to each resident after verifying their **uniqueness** and associating their demographic data with the number.

This is governed under the Aadhaar Act 2016\.

## Why do NGOs need client Aadhaar numbers

There are three situations we have come across for store and use of Aadhaar information in field applications like Avni.

1. **Identification of duplicates:** NGOs want to store Aadhaar numbers of their clients/beneficiaries so that they can use it to easily find the individual again and prevent duplicate registration

2. **Provide access to other services :** NGOs working on providing citizens (usually marginalised and under-privileged) access to government welfare schemes sometimes need the Aadhaar number or copy of Aadhaar card to help the client/beneficiaries enrol or avail the benefits of certain government schemes

3. **Proof of completion of work**: NGOs helping individuals get Aadhaar numbers want their field worker to store an image of the card as proof of work

## What do the guidelines say about using and storing Aadhaar

As per the Aadhaar Act, any agency doing lawful activities can collect Aadhaar number for knowing their customer.

However, there are regulations on the manner of collection, use, ciculations, transfer or publication of Aadhaar numbers or scanned images of Aadhaar card.  

- **Consent:** Obtaining prior consent of the Holder.   
- **Purpose Limitation:** Prohibiting use of the Aadhaar Number for any purpose other than that specified to the Holder at the time of collection  
- **Alternatives:** Providing alternate options to the submission of the Aadhaar Number, if any, provided that the submission of Aadhaar Number is not mandated by law.

### Consent

UIDAI has published detailed guidelines on how to collect consent in different scenarios. For a data collection system like Avni where users us an offline mobile application to collect and manage data, the possible means of notice and consent are

1. Verbal notice from field workers \- The policy of verbal notice and the version-controlled script needs to be documented, and the fact that the field worker knows about it is also documented. There could be questions in the form that ask if consent was asked and if the beneficiary agreed  
2. A physical form with a short notice, and link to the privacy policy \- signed by the beneficiary  
3. An SMS-based notice and consent collection through OTP

### Storing Aadhaar Numbers : Aadhaar Data Vault

The Aadhaar Data Vault is a secure and centralized storage system mandated by UIDAI for storing Aadhaar numbers and associated data. Its primary purpose is to minimize the presence of Aadhaar numbers across an organization’s systems, thereby **reducing the risk of unauthorized access or misuse.** Each Aadhaar number is replaced with a unique reference key for operational use, ensuring that Aadhaar numbers remain inaccessible outside the vault. The vault must comply with strict encryption standards (e.g., AES 256\) and be logically separated from other systems. Additionally, all access to the Aadhaar Data Vault must be highly restricted and on a need-to-know basis, with robust access controls in place.

### Storing Scanned copies

When storing images of an Aadhaar card, the security requirements are lower. The image needs to be encrypted at rest and in transit and have sufficient protection on it.

## Where does Avni stand

- Avni does not provide an Aadhaar vault. We would consider building it if a real strong need emerges  
- Avni stores the data in data storage that is encrypted and password-protected  
- Avni does not provide OTP based or any special feature for consent recording. However it provides the ability to configure questions with audio or image data types which can be used to record verbal or written consents

## Recommendations to NGOs and Implementers

Based on the regulatory requirements and features Avni provides, we recommend the following :

- **Do not store full Aadhaar Numbers**. We advise against storing full Aadhaar numbers in data collection systems that do not have an Aadhaar vault.  
- **Explore creative ways** like storing only the last 4 digits   
- When possible, **use alternative identifiers**, such as program-specific IDs, to avoid the need for Aadhaar  
- Feel free to store images of the Aadhaar card if you have taken consent based on the guidelines prescribed. A more secure way would be to store images of **masked Aadhaar** where the first 8 digits are hidden or replaced by xxxx-xxxx. UIDAI provides an option to choose masked Aadhaar when downloading it.

![](/img/2024-11-27-Aadhaar-what-you-need-to-know/masked_aadhaar.jpeg)


## Summary

Many organisations have asked about the feasibility of storing Aadhaar information in Avni. Hopefully, this article introduces you to the regulations around use and storage of Aadhaar in data collection systems, the current capabilities of Avni and the nuances involved. 

This article is for informational purposes only and is not intended as legal advice. Please consult a legal professional before acting on any information or views expressed here. While we strive for accuracy, we make no warranties, express or implied, regarding the content of this article. 

As data security and compliance needs evolve, Avni remains committed to adapting its capabilities to support NGOs in managing sensitive information responsibly.

## Reference Reading 

1. [Aadhar Act 2016](https://uidai.gov.in/images/Aadhaar_Act_2016_as_amended.pdf)   
2. [The Aadhaar (Sharing of Information) Regulations, 2016](https://uidai.gov.in/images/6_The_Aadhaar_Sharing_of_Information_Regulations_2016.pdf)   
3. [UIDAI FAQs on Aadhar Data Vault](https://uidai.gov.in/images/resource/FAQs_Aadhaar_Data_Vault_v__1_0_13122017.pdf)   
4. [UIDAI Circular 11020/205/2017 Authentication Division](https://uidai.gov.in/images/resource/Circular_Reference_Key_02082017.pdf)  
5. [Consent Guideline published by UIDAI](https://uidai.gov.in/images/resource/Final_Aadhaar_Notice_and_Consent_Guidelines.pdf)

<br/>
