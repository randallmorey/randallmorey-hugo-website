---
title: "Rethinking Password Strength"
date: 2017-10-20T11:00:00-05:00
cover_art: false
reverse_header: false
lead: 'New research, best practices, and technology change the way we think about password strength.  We now know that commonly used heuristics thought to improve passwords actually break down for failing to consider one simple variable:  people.'
---

The <abbr title="lowercase, uppercase, digit, symbol">LUDS</abbr> requirement (lowercase, uppercase, digit, symbol), ostensibly to increase password complexity, [provides little to no benefit][mashable-on-nist-password-strength], and may actually weaken passwords.  This is because it wasn't designed for people.  Somehow, users need to remember their passwords.  To make passwords memorable and still fulfill LUDS, they use simple, predictable transformations.  For example `P@ssw0rd` is only slightly more secure than `password`, but still among the most easy-to-guess.  [xkcd][xkcd] illustrates the point succinctly:

<!--more-->

[![Through 20 years of effort, we've successfully trained everyone to use passwords that are hard for humans to remember, but easy for computers to guess.][xkcd-password-strength-image]][xkcd-password-strength]

Outdated thinking also supposes that mandatory password resets are good for security.  But [users apply the same simple transformations when forced to change their passwords][ftc-rethink-password-resets].  For example `P@ssw0rd` may become `P@$$w0rd`.  It turns out that attackers are actually _more likely_ to be able to guess future passwords if they compromise older, expired ones in such a system.

[Even Bill Burr, author of the original password strength rules, has reversed himself][bill-burr-recommendation-reversal].  Though contrary to decades of previous thought, the _new_ thinking is simple.

1. Impose a minimum password length.
2. Suggest, but don't require, long, plain-language phrases.
3. Implement two-factor authentication when possible.
4. Don't impose LUDS or other arbitrary complexity rules.
5. And don't require frequent password resets.  The only time passwords should be expired is in the event of a suspected or known compromise.

Developers can implement more objective password strength testing with little effort.  The handy tool [zxcvbn][zxcvbn] scores password strength on a scale of 0&nbsp;&ndash;&nbsp;4, taking into account common passwords, dictionary words, transformations, and complexity as a whole, without imposing specific rules.  It also estimates the amount of time that would be required for attackers to guess a given password under various conditions.  Implementers then have a simple choice:  what is the minimum acceptable strength?

[mashable-on-nist-password-strength]: http://mashable.com/2017/05/11/nist-password-strength-requirements-draft/

[xkcd]: https://xkcd.com/
[xkcd-password-strength]: https://xkcd.com/936/
[xkcd-password-strength-image]: https://imgs.xkcd.com/comics/password_strength.png "xkcd:  easy-to-guess and hard-to-remember passwords"

[ftc-rethink-password-resets]: https://www.ftc.gov/news-events/blogs/techftc/2016/03/time-rethink-mandatory-password-changes

[bill-burr-recommendation-reversal]: http://fortune.com/2017/08/07/password-recommendation-special-characters/

[zxcvbn]: https://github.com/dropbox/zxcvbn
