---
cover_art: true
cover_art_bg_color: red
date: 2019-02-10 05:00:00 +0000
lead: >
  Internationalization / localization of web apps is a win for all stakeholders.  Users get more languages, businesses can reach more people, and even developers benefit with DRY code.  Before beginning such an effort, we must understand why i18n matters and what it entails.  Armed with knowledge and fewer assumptions, web practitioners can be champions of i18n and make the web a more inclusive place.
reverse_header: true
title: Internationalization
cover_art_svg: ''
draft: false

---
[English is the world's _lingua franca_](https://en.wikipedia.org/wiki/English_as_a_lingua_franca) at more than a billion users.  [In the United States it is the most widely-spoken language](https://en.wikipedia.org/wiki/Languages_of_the_United_States), followed by Spanish and Chinese.  [But by global native-speaker population, English takes only third place](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers "List of languages by native speakers").  Chinese is most widely spoken overall, followed by Spanish, English, Hindi, Arabic, and Portuguese.  

<!--more-->

Though ubiquitous, English is not always the most _preferable_ language.  [A Gallup study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that a majority of European internet users consume content in multiple languages.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, users prefer their native linguas.  Only about half accept English if their preferred language is unavailable.  It's easy to see why internationalization is such a big deal and why it has the power to improve UX.

What about our tech peers and the products we love?  It's tempting to imagine that multiple languages are unnecessary for a purely technical audience.  These users are at least functional in English, right?  Not so fast.  [Silicon Valley is _majority multilingual_](https://siliconvalleyindicators.org/data/people/talent-flows-diversity/foreign-language/population-share-that-speaks-a-language-at-home-other-than-exclusively-english-table/).  And [most of its college-educated technology workforce is foreign-born](https://qz.com/1029860/more-silicon-valley-tech-workers-were-born-outside-the-us-than-in-it/).  In 2017, more than half of its households spoke a language other than English, a greater share than California and the United States.  Even within New York City more educated tech workers were born outside of the U.S. than within.

These data hint at another important consideration of i18n.  Culture affects the ways we write and communicate information independently of language.  Concerns like date & time formatting, numbers, and systems of measure vary by region or individual preference.  Being more inclusive means being aware of and accommodating culture too.  Let's explore these cultural differences.

### Numbers

[A fully modern number system first appeared definitively at a temple in Gwalior, India around 876 AD](http://www.ams.org/publicoutreach/feature-column/fcarc-india-zero).  It is the same system we use today:  a positional base-10 system with a built-in concept of zero (0).  Individually, the innovations were nothing new, but their combination proved explosive.  Properly known as the [Hindu-Arabic system](https://www.britannica.com/science/numeral#ref797079), this indelible piece of cultural heritage is remarkable not only for surviving millennia, but for enabling modern civilization as we know it.  It is now universally used---everywhere---across all cultures.

While the Hindu-Arabic system is universal, two conspicuous details vary by locale:  numerals and formatting.  [The numerals used with Latin scripts first appeared in Europe, tracking the rise of modernity](https://en.wikipedia.org/wiki/Arabic_numerals#Adoption_in_Europe) (incidentally, "[Latin numerals](https://en.wikipedia.org/wiki/Latin_numerals)" refers to something different).  Several traditional styles of numerals are still in use, often side-by-side with Western numerals.  It's worth emphasizing that _they are only superficially different_:  the styles are equivalent in usage and meaning and all are used with the Hindu-Arabic number system.

<figure>

<dl>
<dt>Western</dt>
<dd class="text-lg">1234567890</dd>

<dt>Eastern Arabic</dt>
<dd class="text-lg">١٢٣٤٥٦٧٨٩٠</dd>

<dt>Devanagari</dt>
<dd class="text-lg">१२३४५६७८९०</dd>

<dt>Thai</dt>
<dd class="text-lg">๑๒๓๔๕๖๗๘๙๐<dd>
</dl>

<figcaption>
<blockquote>
<p>Examples of numerals used around the world.</p>
</blockquote>
</figcaption>
</figure>

Number formatting differs by locale.  [Decimal markers](https://en.wikipedia.org/wiki/Decimal_separator) and group delimiters are variously full stops (periods), commas, apostrophes, or spaces.  In most locales the decimal marker and group delimiter are different characters.  [In places that use Eastern Arabic numerals the separators are nearly indistinguishable](https://en.wikipedia.org/wiki/Decimal_separator#Other_numeral_systems) (**٬** and **٫** are technically separate characters from a comma in Unicode but identical in appearance to one).  The rules of grouping may differ too.  While most locales express large numbers by groups of 3 digits, the [Indian numbering system groups by 2 digits](https://en.wikipedia.org/wiki/Indian_numbering_system) (but only after the first 3).

<figure>

<dl>
<dt>Western</dt>
<dd class="text-lg">1,500,000.48</dd>

<dt>Eastern Arabic</dt>
<dd class="text-lg">١٬٥٠٠٬٠٠٠٫٤٨</dd>

<dt>Indian</dt>
<dd class="text-lg">१५,००,०००.४८</dd>

<dt>Thai</dt>
<dd class="text-lg">๑,๕๐๐,๐๐๐.๔๘<dd>
</dl>

<figcaption>
<blockquote>
<p>Examples of number formatting differences.</p>
</blockquote>
</figcaption>
</figure>

### Dates & Times

[Times are written in 24 hours almost everywhere](https://en.wikipedia.org/wiki/24-hour_clock), with regional differences in spoken time.  In many places time is _spoken in 12 hours_, but written in 24 hours.  The United States [retains the use of 12-hour time, even in writing](https://en.wikipedia.org/wiki/12-hour_clock).  Only a handful of other countries still use 12-hour time in writing, including India.

Most extant cultures write dates in order of significance, with regional differences in endianness.  [Essentially, all-numeric dates and times are unambiguous everywhere](https://en.wikipedia.org/wiki/Date_format_by_country) (except, of course, the United States).  [The U.S. uses an arbitrary all-numeric date ordering that so defies logic, it is mostly alone in the world](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States).  For example, in most of the world **11-01-2019** refers to 11 January 2019.  In the U.S. it refers to 1 November 2019.  Long-form dates, however, can vary greatly by locale.

<figure>

<dl>
<dt>French (Canada)</dt>
<dd>1 janvier 2019 13 h 30 min 00 s</dd>

<dt>French (France)</dt>
<dd>1 janvier 2019 à 13:30:00</dd>

<dt>Portuguese (Brazil)</dt>
<dd>1 de janeiro de 2019 13:30:00</dd>

<dt>Portuguese (Portugal)</dt>
<dd>1 de janeiro de 2019, 13:30:00</dd>

<dt>English (United States)</dt>
<dd>January 1, 2019, 1:30:00 PM</dd>

<dt>English (Great Britain)</dt>
<dd>1 January 2019, 13:30:00</dd>
</dl>

<figcaption>
<blockquote>
<p>Long-form date formatting can differ among locales, even within the same language.</p>
</blockquote>
</figcaption>
</figure>

### Systems of Measure

The world is standardized on SI.  It is used officially in all countries except three:  Myanmar, Liberia, and the United States.  [Myanmar and Liberia have made progress toward metrication in recent years](https://en.wikipedia.org/wiki/Metrication).  **Metric is safe to use everywhere**, including technical audiences in the U.S., though general audiences may not understand it.  While economics and history are often cited as the reason for not adopting SI in the United States, I don't buy it.  These reasons haven't stopped [_the entire rest of the world_, with a combined GDP larger than the U.S.](https://www.visualcapitalist.com/80-trillion-world-economy-one-chart/)  But I digress.

<figure>
<img alt="The United States is culturally isolated from the world." src="/art/map-measurement-systems-earth.svg" />
<figcaption>
<blockquote>
<p>Map of the Measurement Systems of Earth</p>
<small>
Composition by Randall Morey.
<small>
Earth doodle by Creative Stall, Noun Project.
Moon doodle by Prettycons, Noun Project.
Arrow doodle by Alex Muravev, RU, Noun Project.
</small>
</small>
</blockquote>
</figcaption>
</figure>

## Personal Names

The presentation of information is just the beginning.  Internationalization
affects the _collection_ of information as well.
[Personal names come in every conceivable shape, size, and
character set](https://www.w3.org/International/questions/qa-personal-names).
Conventional web forms fall short and simply don't accommodate the diversity of
names and cultural conventions the world has to offer.  This can be a poor
experience for users and can lead to incorrect data entry.  Fortunately,
designers and engineers have the power to do better.

The problem begins with the implicit assumptions Westerners often make about
naming conventions: people have at most 3 names, only 2 of which matter, and
order is conventional (a name that comes first is a given name and a
name that comes last is a surname).  Let's look at some examples that invalidate
these assumptions.

<figure>
<div class="figure-content">
  <span class="h1">张英</span>
</div>

<figcaption>
<blockquote>
<p>Zhang Ying.  In this Chinese name, Zhang is the surname and comes first.  Ying is the given name and comes last.  A woman with this name may prefer to be referred to as 张英女士, &ldquo;Zhang Ying Nǚshì&rdquo;.  Among friends, she may go by 英.  Or <a href="https://theculturetrip.com/asia/china/articles/chinese-people-western-names/">like many Chinese, she may choose to adopt a name or names that are easier for Westerners to use</a>.</p>
</blockquote>
</figcaption>
</figure>

<figure>
<div class="figure-content">
  <span class="h1">João Francisco Peçanha Dias da Silva</span>
</div>

<figcaption>
<blockquote>
<p>
Brazilian names often include multiple surnames.  In this case, &ldquo;Peçanha Dias da Silva&rdquo; consists of three separate surnames (likely one from each parent and one an inherited ancestral name).  There is no concept of "last name" in Portuguese.  &#x2053;  This Brazilian has two given names, &ldquo;João&rdquo; and &ldquo;Francisco&rdquo;.  Brazilians often use given names, even among strangers.  <b>This man could go by either of his given names, or both</b>.  And while Portuguese has formal titles, they are not commonly used with names.  Formally, this man is simply addressed by his full&nbsp;name.
</p>
</blockquote>
</figcaption>
</figure>

### Make No Assumptions

How do we accommodate all possible variation in personal names?  Easy.
Provide just one name field:  "Full Name".  And don't validate length,
only that it is filled, because one-character names are possible.  An
additional "What should we call you" field is also recommended, since full names
aren't always appropriate or practical.  Let your users tell you about their
name(s) with as few assumptions as possible.
[The W3C provides more in-depth information and recommendations for designing
web forms](https://www.w3.org/International/questions/qa-personal-names).

## Start With Engineering

Improved user experience and greater inclusivity are excellent reasons to
internationalize web apps.  But broad team buy-in isn't necessary just to get started.
Engineers are perfectly positioned to be prime-movers because i18n solves
a novel problem: separation of static content from code.  Even if only one
language is supported, it's worth the extra thought for development teams.

Content consistency can be hard to maintain over time.
The text in all of those form labels, action buttons, page titles, and
navigations can and do fall out of sync.  Simple content changes are
often an exciting game of search/replace (just pray that you caught every
variation). We can count on arbitrary change-requests from customers and
managers to exacerbate the issue.  So we ought to make it as easy on ourselves
as possible.

Proactive internationalization is a great platform from which to advocate to a
broader team and organization.  Once the groundwork is in place, additional
localization is straightforward.  Engineers can help themselves _and_ users by
implementing i18n today.  But who's in charge of translations?

## It's a Process

The choice to internationalize is an engineering one.  The choice to
localize---or rather, the choice to _use_ localizations---is a business decision.
That requires buy-in from multiple stakeholders, sometimes including customers.
Getting buy-in may depend on the cost.  So what does it take to get an
app translated?

There are a number of approaches to content localization.  For complex
projects with a lot of content, it may make sense to hire a firm.  Any number
of companies offer this service.  For smaller well-defined projects, individual
translators can be hired as-needed, with machine translation filling the gaps.

You might be fortunate enough to have eager translators on your own team.
Ask around.  Chances are a number of developers you work with are
proficient in another language (native speakers are best, because of
the importance of culture).  They may even be willing to
translate some strings.  On smaller projects, looking inward for translations is
a perfectly viable approach.  I am personally privileged to have worked with
native speakers of other languages on every team of which I've been apart.

## Technology

The choice of frontend i18n tools depends on the project and preferences of the
development team.  Since so many JavaScript tools exist, there's room to
experiment and to learn.  In an effort to be non-prescriptive, we'll briefly
cover only common patterns, at a high-level.

Typical tools will separate static content into language files, e.g.:

<figure>

{{< highlight json >}}

{
  "titles": {
    "auth": {
      "login": "Login"
    }
  },
  "subtitles": {
    "auth": {
      "login": "Login to access your account."
    }
  },
  "actions": {
    "auth": {
      "login-submit": "Login now"
    }
  }
}

{{< /highlight >}}

<figcaption>
<blockquote>
<p><code>/en-us/translations.json</code></p>
</blockquote>
</figcaption>
</figure>

Instead of embedding content directly into code, content is named by referenced.
This makes content updates across the entire application fast and consistent.
Adding languages is as easy as copying the translations file and changing
its values.

<figure>

{{< highlight handlebars >}}

<h1>{{t "titles.auth.login"}}</h1>
<p>{{t "subtitles.auth.login"}}</h1>

<form>
  <button type="submit">{{t "actions.auth.login-submit"}}</button>
</form>

{{< /highlight >}}

<figcaption>
<blockquote>
<p><code>template.html</code></p>
</blockquote>
</figcaption>
</figure>

## Intl API

Back in December 2012, ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API").  Today, [all modern browsers support Intl](https://caniuse.com/#feat=internationalization "Intl API browser support").  [Even Node.js supports it](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  The `Intl` API is fit for use in all new projects.

The internationalization API provides cultural formatting services for numbers (including currencies), dates & times, and language-aware sorting.  It handles all of this _natively_.  Previously, such tasks required byte-heavy third-party libraries and their locale data files.  Though some features are not widely supported yet, such as relative times (e.g. "30s ago").  Watch for additional features to land in capable browsers soon.  [Check the docs for a complete API reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API docs").

## Intlnow.com

To raise awareness about the Intl API, I created a simple tool.  [Visit **intlnow.com** to visually explore examples of the API and get code](http://www.intlnow.com/) that works in all modern browsers.  Start experimenting, have fun, and make the web more inclusive!
