---
title: "Original Documents Are Obsolete"
slug: original-documents-obsolete
date: 2017-08-14T13:50:00-05:00
cover_art: true
cover_art_bg_color: red
cover_art_svg: original-documents-obsolete
reverse_header: true
lead: When accurate, all copies of the same information are equivalent.  Electronic records have been legal for decades.  Why do some institutions cling to the "original document" requirement?
---

[ESIGN][esign] and [UETA][ueta] laws in the United States make electronic records legal.  Implicit in these laws is the _equivalency_ of faithful copies.  While [modernized out of legal proceedings][australia-evidence-law] in many countries, the "original document" requirement is still used by some institutions, such as government agencies and universities.  This usually means presenting a paper document printed by a third party.  Some institutions may even require wet-ink signatures, [despite the legality of electronic signatures][electronic-signatures].

<!--more-->

## Thank You, England

The concept of "original document" stems from the 18<sup>th</sup>-century British legal principle known as the ["best evidence rule"][best-evidence-rule].  The rule states that if an original document exists, a copy may not be admitted into evidence (usually).  At the time, documents could only be manually reproduced:  by handwriting or typesetting.  At best, replication errors were common.  At worst, fraud was easy.  Unreliable information was thereby kept out of courts.

There's another largely unacknowledged reason for the rule.  **Original documents are proxies of authenticity**.  They remain so today.  Best evidence was created in a context of slow written communication and even slower travel.  Directly verifying the authenticity of information was not always practical.

Colonies inherited the rule, the United States and Australia included.  But original documents' continued application is deeply flawed.  To understand why, we need to explore the meaning of information and authenticity.

## Equivalency

Our understanding of information has advanced since the best evidence rule was created; [information theory][information-theory] was formalized in the 20<sup>th</sup> century.  In paper form, documents are simply physical vessels which carry information.  _Information_ is logically separate from _the medium_ that stores it.  Information can just as easily be contained in digital storage as reams of paper pages.  The medium doesn't matter, as long as it's faithful.

Say I have a digital file, my utility bill.  It happens to be the same digital file my utility company used to print a hardcopy, sent to me in the mail.  I have the same printer and the same paper as my utility company, and I print a duplicate copy.  Institutions requiring original documents won't accept the version I print myself.  This is intuitively wrong, since were the "duplicate" swapped for the "original", the reviewer _can't tell the difference_.  In this example the documents themselves are equivalent.  But more importantly, the information is equivalent.

## Authenticity

Authenticity of information is what we care about.  And it's what the British cared about too.  They invented a workable proxy in the best evidence rule.  Notably though, _authenticity was always the point_.

Today, it's easy to verify information directly.  Take a hypothetical example.  University A wants to know that my transcripts from university B are true, but won't simply take my word for it.  University A may require an "original document" of my transcripts.  Never mind that it merely accepts originality on faith.  The real problem here is that university A doesn't communicate with university B, which is a direct way to verify the contents of my transcripts.  

Communication is fast and cheap.  [Modern cryptography even provides the means to verify authorship][digital-signature] without explicitly communicating with authors.  Either through direct communication or cryptography, authenticating information has never been easier.

## Conclusion

Most new paper documents are reproductions, which usually come from electronic records.  Physical copies are indistinguishable.  Digital copies are indistinguishable.  Copies are equivalent.  Thus information provenance is not a quality of the physical artifact, but of the information itself.

Let's stop relying on a colonial proxy of authenticity.  We're centuries more advanced.  The next time an institution demands an original document, request instead that they communicate with the information author directly.


[esign]: https://en.wikipedia.org/wiki/Electronic_Signatures_in_Global_and_National_Commerce_Act
[ueta]: https://en.wikipedia.org/wiki/Uniform_Electronic_Transactions_Act
[australia-evidence-law]: http://www.naa.gov.au/information-management/information-governance/evidence/evidence-law-australia/index.aspx
[electronic-signatures]: {{< relref "articles/electronic-signature-adoption.md" >}}
[best-evidence-rule]: http://www.rotlaw.com/legal-library/what-is-the-best-evidence-rule/
[information-theory]: https://en.wikipedia.org/wiki/Information_theory
[digital-signature]: https://en.wikipedia.org/wiki/Digital_signature
