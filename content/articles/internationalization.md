---
cover_art: true
cover_art_bg_color: red
cover_art_svg: ''
date: 2019-01-25 05:00:00 +0000
lead: 'Internationalization benefits all stakeholders through greater language availability,
  broader market reach, and separation of content from code.  The true winners?  Happier
  users, and more of them.  It''s one more way we can build a more inclusive&nbsp;web.

'
reverse_header: true
title: Internationalization
draft: true

---
For better or worse, [English is the world's _lingua franca_](https://en.wikipedia.org/wiki/English_as_a_lingua_franca).  But it is not the world's most spoken _first_ language.  By native-speaker population, [**Chinese** is most widely spoken globally](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers "List of languages by native speakers"), followed by **Spanish**, **English**, **Hindi**, **Arabic**, and **Portuguese**.  The United States shares the world's top-three languages in reverse order: [English is the most widely-spoken language](https://en.wikipedia.org/wiki/Languages_of_the_United_States) at more than 200 million speakers.  Spanish and Chinese are second- and third-place, respectively.

<!--more-->

Though ubiquitous, English is not always preferable.  [A Gallop study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that **a majority of European internet users consume content in multiple languages**.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, users prefer their native linguas.  Only about half accept English if their preferred language is unavailable.

What about our peers in the United States?  It's tempting to imagine that multiple languages are unnecessary for a purely technical audience, especially when we focus only on a single locale.  These users are functional in some form of technical English, right?  Perhaps.  But there's more to the story.  [Within Silicon Valley, a majority of the college-educated technology workforce is foreign-born](https://qz.com/1029860/more-silicon-valley-tech-workers-were-born-outside-the-us-than-in-it/).  [Silicon Valley is also _majority multilingual_](https://siliconvalleyindicators.org/data/people/talent-flows-diversity/foreign-language/population-share-that-speaks-a-language-at-home-other-than-exclusively-english-table/).  In 2017, more than half of its households spoke a language other than English, a greater share than either California or the U.S.  Even within New York City a greater share of educated tech workers were born outside of the U.S. than within.

These data hint at another important factor of i18n.  Culture affects the ways we write and communicate information independently of language.  And not everyone--more accurately, _almost no one_--uses American systems of notation.

Language is only one component of internationalization.  Concerns like date & time formatting, numbers, and systems of measure vary by region or individual preference.  I18n addresses these challenges too.  Let's explore some cultural differences.

### Numbers

[Our modern number system including zero (](http://www.ams.org/publicoutreach/feature-column/fcarc-india-zero)`[0](http://www.ams.org/publicoutreach/feature-column/fcarc-india-zero)`[) first appeared definitively around 876 AD at a temple in Gwalior, India](http://www.ams.org/publicoutreach/feature-column/fcarc-india-zero).  The same system without a concept of zero appeared in India almost a millennium earlier, around the turn of the epoch.  Properly known as the [Hindu-Arabic system](https://www.britannica.com/science/numeral#ref797079), this indelible piece of cultural heritage is remarkable not only for surviving millennia unchanged, but for enabling modern civilization as we know it.  It is now used across all cultures, everywhere.

While the Hindu-Arabic system is universal, two conspicuous details vary greatly by locale:  numerals and formatting.  [The numerals used today with Latin scripts first appear in Europe, largely during the rise of early modernity](https://en.wikipedia.org/wiki/Arabic_numerals#Adoption_in_Europe), as an evolution of earlier styles.  They gradually become simpler and more geometric out of necessity, thanks to mechanical typography.  But several traditional styles of numerals are still in use, often side-by-side with modern Western numerals.

#### Numerals

... Add a list or table comparing numeral styles...

#### Number Formatting

Number formatting can differ dramatically by locale.  Delimiters and decimals are variously dots `.`, commas `,`, or spaces .  Some locales may prefer non-Consider these examples of the number

### Dates & Times

[Times are typically written in 24 hours almost everywhere](https://en.wikipedia.org/wiki/24-hour_clock), with regional differences in spoken time.  In the U.K. and Brazil, time is _spoken in 12 hours_, but written in 24 hours.  The United States is idiosyncratic here, [retaining the use of 12-hour time, even in writing](https://en.wikipedia.org/wiki/12-hour_clock).  Only a handful of other countries still use 12-hour time in writing.

Most extant cultures write dates in logical order of significance, with regional differences in endianness.  [In all-numeric dates and times these forms are unambiguous almost everywhere](https://en.wikipedia.org/wiki/Date_format_by_country).  [The U.S. uses an arbitrary notation that so defies logic the country is almost entirely alone in the world](https://en.wikipedia.org/wiki/Date_and_time_notation_in_the_United_States).

### Systems of Measure

When it comes to systems of measure, the world has standardized on one true system.  SI is used officially in all countries except three:  Myanmar, Liberia, and the United States.  [Myanmar, for its part, is moving toward SI](https://web.archive.org/web/20150324092305/http://elevenmyanmar.com/index.php?option=com_content&view=article&id=3684:myanmar-to-adopt-metric-system&catid=44:national&Itemid=384).

## Internationalization API

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