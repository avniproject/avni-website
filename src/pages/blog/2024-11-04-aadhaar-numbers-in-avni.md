---
templateKey: blog-post
title: Aadhaar numbers in Avni
date: 2024-11-04T19:35:00.000Z
author: Vinay Venu
description:
featuredpost: false
featuredimage: https://upload.wikimedia.org/wikipedia/commons/3/3f/A_sample_of_Aadhaar_card.jpg
tags:
---

Many have asked us if we can store Aadhaar numbers or copies of Aadhaar cards in Avni. This article gives the current state of Avni, and your available options.

PS: This article was written based on our knowledge and reading. We could be entirely wrong, of course. We have provided links at relevant points to explain our position.


tl;dr. if you are short on time. You should not store Aadhaar card numbers in Avni. You can store images of Aadhaar cards, but ensure you take consent from your beneficiary.


### Why store Aadhaar information in Avni?
There are three reasons we have heard for storing Aadhar information on Avni.

- The first is to have a natural identification of the person. It is easy to search for a person on Avni if they have their Aadhar card.
- The second is to use the Aadhaar information to provide access to a service (such as an Ayushman Bharat card)
- The third is to help people enrol for an Aadhaar card. The field worker stores an image of the card as proof of work.

All three are compelling reasons to store Aadhaar on Avni.


### Private entities and Aadhaar information?

Before knowing how to store Aadhaar, let's first dive into the basics - are private entities allowed by law to store Aadhaar information? The answer seems to be "Yes" according to [this](https://uidai.gov.in/images/resource/Circular_Reference_Key_02082017.pdf) and [this](https://induslaw.com/publications/pdf/alerts-2022/Everything_on_Collection_and_Storage_of_Aadhaar.pdf).

The articles distinguish between Aadhaar numbers and images of a physical copy of the Aadhaar card. The requirements for a system that stores the raw numbers and one that stores images of the Aadhaar card are different.

When storing Aadhaar card numbers, the number should be stored in a different database called an [Aadhaar Vault](https://uidai.gov.in/images/resource/FAQs_Aadhaar_Data_Vault_v__1_0_13122017.pdf), or one that has strict requirements about access to the information. Avni currently does not provide an Aadhaar Vault, so storing Aadhaar numbers on Avni is not legal.

When storing images of an Aadhaar card, the security requirements are lower. The image needs to be encrypted and have sufficient protection on it. Avni satisfies the requirements in this case, so if you are storing Aadhaar card images on Avni, you are in the clear. Well, mostly. There is also this thing about consent.

In summary, you can store Aadhaar card images, but the numbers themselves as a separate field. 

### Consent
The laws around consent have their roots in the Information Technology (Reasonable security practices and procedures and sensitive personal data or information)Rules, 2011 (“SPDI Rules”) along with the Aadhaar Act and the Sharing of Information Regulations. A nice article on how to obtain consent is provided in the [Aadhaar Notice and Consent Guidelines](https://uidai.gov.in/images/resource/Final_Aadhaar_Notice_and_Consent_Guidelines.pdf) document.

Avni is expected to work in an offline scenario. What this means is that the possible means of notice and consent are
1. Verbal notice from field workers - The policy of verbal notice and the version-controlled script needs to be documented, and the fact that the field worker knows about it is also documented. There could be questions in the form that ask if consent was asked and if the beneficiary agreed
2. A physical form with a short notice, and link to the privacy policy - signed by the beneficiary

### What more can be done in Avni?
There are features we can add to Avni to make the situation better. Some are outlined here.

#### Potential solution for searching by Aadhaar number
One way to use Aadhaar number to search for people is to add a field with only the last 8 digits of the beneficiary's Aadhaar card. There might be a few duplicates, but the name, gender, age and location should be good enough to verify if they are the same or different people. 

It is possible to be able to retrieve a record using an Aadhaar number without actually storing the Aadhaar number in the system. Instead of storing the actual number, we store a representation of the number. It is computationally hard to retrieve the actual number from this representation, so you cannot rebuild the Aadhaar card number from it. Such mechanisms are possible and have been used in other systems to handle sensitive information such as passwords.
We can also save the last 8 digits of the Aadhaar number in plain text to allow for easy visibility and show a masked number on the screen. Of course, features like this need someone willing to start using it in production. 

#### Consent recording
Existing organisations use different mechanisms to record consent today. Some organisations use audio form fields to record consent. Some take signatures on paper. Yet others ask for consent and record the receipt on the application. 

An SMS-based notice and consent collection through OTP can potentially improve evidence of consent provided by the beneficiary. This does not exist in Avni, but could be a cool feature to have. 

#### Aadhaar data vault
Avni can introduce a proper Aadhaar data vault based on the specifications given by UIDAI. Currently, there are no good reasons for the extra complexity that it introduces. This might not show up in the roadmap soon. 


### Summary
Many organisations have asked about the feasibility of storing Aadhaar information in Avni. Hopefully, this article explains the current capabilities of Avni and informs you of the nuances involved and how it can evolve in the future to handle use cases that are not possible today. 
