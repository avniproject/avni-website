---
templateKey: blog-post
title: Avni-AppSheet Comparison
date: 2021-06-22T11:39:26.313Z
author: The Avni Team
description: >-
    Avni is sometimes compared with other products available in the market and nonprofit organisations are interested in know why they should choose Avni. Hence, this is the first in series of posts where we discuss how Avni compares with these options - in the context of the frontline social/development programs done by nonprofit organisations. In this blog, we cover **Avni's comparison with AppSheet**. We have left out the virtues of open source from the scope of these posts.
featuredpost: false
featuredimage: 
tags:
 - Product Comparison
---

About AppSheet
------------------------------------------------------------

<a href="https://www.appsheet.com/" target="_blank">AppSheet</a> is a product by the Google Cloud team. It is available at subscription fees. The similarity between Avni and AppSheet is that both can be used by the frontline workers via the android app, and they both provide its complete functionality in an offline mode. Both are designed to be configurable and one can set up one's data model, forms, and rules.

AppSheet has been designed to be more configurable and is meant for a wide variety of use cases than just frontline work. e.g. you can define your complete data model to as much complexity as you like. You can also define your workflows, and have multiple UX options for each type of screen. It is a no-code or a low-code platform. AppSheet allows for flexibility in choosing your database server. But let us look a bit deeper.


Product components comparison
------------------------------------------------------------
While AppSheet and Avni both provide an android app, web-based application designer, and data management API. AppSheet doesn't have an online / web interface for managing the same data. Avni does provide a web-based data management application. It has several use cases like on-behalf data entry from paper records, data correction, frontline work supplemented by facility-based work (e.g. a lab, or a clinic being part of the community health program). It comes with configurable views which can be used to print beneficiary certificates, id cards, so on.


Service comparison
------------------------------------------------------------
It is important to contrast how AppSheet and Avni are offered as a service. AppSheet is designed to be a cloud service where the developer-user assembles other cloud services along with is, to build an end-user solution. Of these, the two commonly used infrastructure service that is most important as they are used by all Avni implementations - a database and reporting/analytics platform. Avni cloud service provides these out of the box - as Postgres and Metabase/Jasper-reports works for almost all end-customers of Avni.

(Avni also allows for choice of analytics platform like AppSheet as most platforms support PostgreSQL database used by Avni).


Configurability comparison
------------------------------------------------------------
As we have mentioned at the top, AppSheet is more configurable than Avni. On the surface, more configurability seems desirable, but this comes at a heavy price. A more configurable platform requires deeper knowledge on the part of the platform implementer to configure the same. In simple terms both Avni and AppSheet are low code platforms - but Avni requires less coding and AppSheet requires more. This essentially is a tradeoff between configurability and the extent of knowledge/work to be done. Since Avni is designed for a specific use case ane hence it is intentionally less configurable to reduce the work that needs to be done by each project.

If you are a low-code platform developer, who works for multiple domains, AppSheet is a better choice for you. But if you are a nonprofit organisation looking to digitise frontline programs, Avni is closer to your use case.


Cost comparison
------------------------------------------------------------
**Avni is an order of magnitude (10-50x) cheaper per user than AppSheet.**

Avni is comparable on the <a href="https://avniproject.org/pricing" target="_blank">sticker price</a> compared to <a href="https://solutions.appsheet.com/pricing" target="_blank">AppSheet</a>, after considering the discounted price for nonprofits. This doesn't account for full cost of ownership for the nonprofits though.

- The per-user pricing doesn't account for the subscription cost of computing infrastructure required for the database and analytics components.
- AppSheet is not offered as a managed service hence the nonprofits need to hire technology providers to do this for them. Since Avni is offered as a **shared** managed service, it has significant cost advantages.
- The configurability tradeoff (as in the section above) also implies a higher cost of implementation for the skills/time required.
- If you want a web application for data management online, then it needs to be developed.

We would like to highlight that the use AppSheet is free for up to 10 users, only for development purposes not for using it in production.

Overall we strongly believe that all things considered Avni is a better platform for you if you are nonprofit running frontline programs.

*We are not biased of course :-).*
