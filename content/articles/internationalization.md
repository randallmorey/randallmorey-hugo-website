---
cover_art: true
cover_art_bg_color: red
cover_art_svg: ''
date: 2019-01-25 05:00:00 +0000
lead: TL;DR / inclusivity introduction
reverse_header: true
title: Internationalization
draft: true

---
For better or worse, [English is the world's _lingua franca_](https://en.wikipedia.org/wiki/English_as_a_lingua_franca), at more than a billion users.  Though [**Chinese** is more widely spoken](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers "List of languages by native speakers") by native-speaker population, followed by **Spanish**, **English**, **Hindi**, **Arabic**, and **Portuguese**.  The United States shares the world's top-three (by total speakers, in reverse order): [English is the most widely-spoken language](https://en.wikipedia.org/wiki/Languages_of_the_United_States), followed by Spanish and Chinese.

<!--more-->

Though ubiquitous, English is not always the most _preferable_ language.  [A Gallop study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that **a majority of European internet users consume content in multiple languages**.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, **users prefer their native linguas**.  **Only about half accept English** if their preferred language is unavailable.

What about our STEM peers in the United States?  It's tempting to imagine that multiple languages are unnecessary for a purely technical audience.  These users are at least functional in English, right?  Not so fast.  [**Within Silicon Valley, a majority of the college-educated technology workforce is foreign-born**](https://qz.com/1029860/more-silicon-valley-tech-workers-were-born-outside-the-us-than-in-it/).  It's also notable that [**Silicon Valley is _majority multilingual_**](https://siliconvalleyindicators.org/data/people/talent-flows-diversity/foreign-language/population-share-that-speaks-a-language-at-home-other-than-exclusively-english-table/).  In 2017, more than half of its households spoke a language other than English, a greater share than California and the United States.  Even **within New York City a greater share of educated tech workers were born outside of the U.S.** than within.

These data hint at another important consideration of i18n.  **Culture affects the ways we write and communicate information independently of language**.  And not everyone--more like _almost no one_--uses American systems of notation.  Concerns like date & time formatting, numbers, and systems of measure vary by region or individual preference.  **Being more inclusive means being aware of and accommodating culture too**.  Let's explore these cultural differences.

### Numbers

An MVP of our number system first appeared in India around the turn of the epoch.  It lacked one critical feature:  a concept of zero (0).  [A fully modern system including zero appeared definitively almost a millennium later, around 876 AD at a temple in Gwalior, India](http://www.ams.org/publicoutreach/feature-column/fcarc-india-zero).  Properly known as the [Hindu-Arabic system](https://www.britannica.com/science/numeral#ref797079), this indelible piece of cultural heritage is remarkable not only for surviving millennia, but for enabling modern civilization as we know it.  It is now universal, used everywhere across all cultures.

#### Numerals

**While the Hindu-Arabic system is universal, two conspicuous details vary by locale:  numerals and formatting**.  [The numerals used today with Latin scripts first appear in Europe, largely tracking the rise of early modernity](https://en.wikipedia.org/wiki/Arabic_numerals#Adoption_in_Europe).  Simpler, more geometric forms evolve to match an already refined Latin script (incidentally, "[Latin numerals](https://en.wikipedia.org/wiki/Latin_numerals)" refers to something else; common numerals are literally referred to as "the numerals used with Latin Scripts", or sometimes "Western Arabic").  But **several traditional styles of numerals are still in use**, often side-by-side with Western numerals.  It's worth emphasizing that they are only superficially different, **the numeral styles are equivalent**, and all are used with the Hindu-Arabic number system.

<dl>
<dt>Western</dt>
<dd>1234567890</dd>

<dt>Eastern Arabic</dt>
<dd>١٢٣٤٥٦٧٨٩٠</dd>

<dt>Devanagari (Indian)</dt>
<dd>१२३४५६७८९०</dd>

<dt>Thai</dt>
<dd>๑๒๓๔๕๖๗๘๙๐<dd>
</dl>

#### Number Formatting

**Number formatting differs by locale**.  Delimiters and decimals are variously dots `.`, commas `,`, or spaces  .  **The rules of grouping may differ too**.  While most locales prefer grouping large numbers by 3 digits, **India sometimes groups by 2 digits (after the first 3)**.

... number formats example...

### Dates & Times

[**Times are written in 24 hours almost everywhere**](https://en.wikipedia.org/wiki/24-hour_clock), with regional differences in spoken time.  In many places time is _spoken in 12 hours_, but written in 24 hours.  **The United States** [**retains the use of 12-hour time, even in writing**](https://en.wikipedia.org/wiki/12-hour_clock).  Only a handful of other countries still use 12-hour time in writing.

Most extant cultures write dates in order of significance, with regional differences in endianness.  [Essentially, all-numeric dates and times are unambiguous everywhere](https://en.wikipedia.org/wiki/Date_format_by_country) (except of course the United States).  [**The U.S. uses an arbitrary all-numeric date ordering that so defies logic, it is mostly alone in the world**](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States).

... examples of date and time formats ...

### Systems of Measure

The **world is standardized on SI**.  It is used officially in all countries except three:  Myanmar, Liberia, and the United States.  [Myanmar and Liberia have made progress toward metrication in recent years](https://en.wikipedia.org/wiki/Metrication).  **Metric is probably safe to use everywhere, except for an American audience**.  While economics and history are often cited as the reason for not adopting SI in the United States, I don't buy it.  These haven't stopped [_the entire rest of the world_, with a combined GDP larger than the U.S.](https://www.visualcapitalist.com/80-trillion-world-economy-one-chart/)

The United States' idiosyncrasies taken together betray a culture of stubborn isolationism.  It's a problem that, for the foreseeable future, can only be overcome by individual choice.

<figure>
  <img alt="The United States is culturally isolated from the world." src="/uploads/cultural-map-solar-neighborhood.svg" />
<figcaption>
  <blockquote>
    <p>Cultural Map of the Solar Neighborhood.</p>
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

## Internationalization API

ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API") back in December 2012.  Today, [all modern browsers support ](https://caniuse.com/#feat=internationalization "Intl API browser support")`[Intl](https://caniuse.com/#feat=internationalization "Intl API browser support")`.  [Even Node.js supports it](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  The `Intl` API is fit for use in all new projects.

The internationalization API provides key formatting services for numbers (including currencies), dates & times, and language-aware sorting.  It handles all of this _natively_.  Previously, such tasks required byte-heavy third-party libraries and their locale data files.  Though some features are not widely supported yet, such as relative times (e.g. "30s ago").  Watch for additional features to land in capable browsers soon.

Here are a few examples.  [Check the docs for a complete API reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API docs").

{{< highlight js >}}
const date = new Date(Date.UTC(2012, 0, 1, 0, 0, 0));
console.log(new Intl.DateTimeFormat('en-US').format(date));
// 12/31/2011
// Note:  your results may vary, since the default target timezone is the current host's

const number = 123456.789;
console.log(new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(number));
// 123,000
console.log(new Intl.NumberFormat('de', { maximumSignificantDigits: 3 }).format(number));
// 123.000
console.log(new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number));
// 1,23,000
console.log(new Intl.NumberFormat('en', { style: 'currency', currency: 'JPY' }).format(number));
// ¥123,457
console.log(new Intl.NumberFormat('en', { style: 'currency', currency: 'EUR' }).format(number));
// €123,456.79
console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number));
// 123.456,79 €
{{< /highlight >}}