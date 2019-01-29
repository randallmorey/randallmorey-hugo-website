---
cover_art: true
cover_art_bg_color: red
cover_art_svg: ''
date: 2019-01-25 05:00:00 +0000
lead: 'Internationalization benefits all stakeholders through greater language availability,
  broader market reach, and separation of content from code.  The true winners?  Happier
  users, and more of them.  It''s one more way we can build an inclusive&nbsp;web.

'
reverse_header: true
title: Internationalization
draft: true

---
For better or worse, [English is the world's _lingua franca_](https://en.wikipedia.org/wiki/English_as_a_lingua_franca), particularly in business and technology.  But English is not the world's most spoken _first_ language.  By native-speaker population, [**Chinese** is most widely spoken globally](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers "List of languages by native speakers"), followed by **Spanish**, **English**, **Hindi**, **Arabic**, and **Portuguese**.  The United States shares the world's top-three languages in reverse order: [English is the most widely-spoken language](https://en.wikipedia.org/wiki/Languages_of_the_United_States) at more than 200 million speakers.  Spanish and Chinese are second- and third-place, respectively.

<!--more-->

English, however, may not be as preferable as it is ubiquitous.  [A Gallop study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that **a majority of European internet users consume content in multiple languages**.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, users prefer their native linguas.  Only about a half accept English if their preferred language is unavailable.

What about software developers, engineers, and other technology workers?  It's tempting to imagine that internationalization is unnecessary for a purely technical audience.  These users are proficient in some pseudo-standardized technical English, right?  And does it even matter if our clients don't explicitly demand i18n?

[Within Silicon Valley, a majority of the college-educated technology workforce is foreign-born](https://qz.com/1029860/more-silicon-valley-tech-workers-were-born-outside-the-us-than-in-it/).  Even within New York City a greater share of educated tech workers were born outside of the U.S. than within.  [Silicon Valley is also _majority multilingual_](https://siliconvalleyindicators.org/data/people/talent-flows-diversity/foreign-language/population-share-that-speaks-a-language-at-home-other-than-exclusively-english-table/).  In 2017, more than half of its households spoke a language other than English, a greater share than either California or the U.S.

These data hint at another important factor of i18n.  Culture affects the ways we write and communicate information independently of language.  And not everyone--more accurately, _almost no one_--uses American systems of notation.

## Culture

Language is only one component of internationalization.  Concerns like date & time formatting, numbers, and systems of measure vary by region or individual preference.  I18n addresses these challenges.  Let's explore some examples of cultural formatting differences.  While some may be familiar, they're worth reviewing.

Most extant cultures write dates in logical order of significance, with regional differences in endianness.  [In all-numeric dates and times these forms are unambiguous almost everywhere](https://en.wikipedia.org/wiki/Date_format_by_country).  [Times are typically written in 24 hours almost everywhere](https://en.wikipedia.org/wiki/24-hour_clock) too, with regional differences in spoken time.

Among the many kinds of American obstinance is [the use of 12-hour time, even in writing](https://en.wikipedia.org/wiki/12-hour_clock).  Other countries still using 12-hour time typically do so only colloquially, preferring 24-hour time in writing.  For dates, [the U.S. uses an arbitrary notation that so defies logic the country is almost entirely alone in the world](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States).  Finally, the U.S. is one of only three countries still using non-SI systems of measure, along with Myanmar and Liberia.  It's a distinguished list.  [Myanmar, for its part, is moving toward SI](https://web.archive.org/web/20150324092305/http://elevenmyanmar.com/index.php?option=com_content&view=article&id=3684:myanmar-to-adopt-metric-system&catid=44:national&Itemid=384).

### i18n

Let's clarify some basic terminology.  [Internationalization](https://en.wikipedia.org/wiki/Internationalization_and_localization) is the process of adding support to a product for multiple locales (languages and regions), such that it can be translated without additional engineering effort.

### L10n

The choice to **localize** is ultimately a business decision.  The choice to **internationalize** is an engineering decision, which may be justified even if only one locale is supported.

## It Takes a Team

It's a process that takes a team.  Business decision.  Human translators are better.  Engineers can enable localization to happen.  But they can also be the prime-movers...

## Static Content Management

Building with i18n in mind benefits engineering too:  static content management.  Separate content from templates and functional code.  DRY.  Consistency.  Yay.

## ECMAScript Internationalization API

ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API") back in December 2012.  Today, [all modern browsers support ](https://caniuse.com/#feat=internationalization "Intl API browser support")`[Intl](https://caniuse.com/#feat=internationalization "Intl API browser support")`.  [Even Node.js supports internationalization](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  The `Intl` API is fit for use in all new projects.

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