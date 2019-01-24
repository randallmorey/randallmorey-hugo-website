---
cover_art: true
cover_art_bg_color: yellow
cover_art_svg: ''
date: 2019-01-25 05:00:00 +0000
lead: 'Reach more people online, improve UX, and even DRY up code.  Internationalization
  benefits users, development teams, and business.  Users get their pick of language.  Developers
  get static content management.  And business gets broader market reach.  <abbr title="internationalization">I18n</abbr>
  can pay for itself even in single-language apps.  But the real winners are happier
  users and a more inclusive&nbsp;web.

'
reverse_header: true
title: Internationalization
draft: true

---
For better or worse, [English is the world's _lingua franca_](https://en.wikipedia.org/wiki/English_as_a_lingua_franca), particularly in business and technology.  But English is not the world's most spoken _first_ language.  By native-speaker population, [**Chinese** is the most widely spoken language globally](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers "List of languages by native speakers"), followed by **Spanish**, **English**, **Hindi**, **Arabic**, and **Portuguese**.  The United States shares the world's top-three languages in reverse order: [English is the most widely-spoken language](https://en.wikipedia.org/wiki/Languages_of_the_United_States) at more than 200 million speakers.  Spanish and Chinese are second- and third-place, respectively.

<!--more-->

Despite the ubiquity of English, it's not as widely _preferred_.  [A Gallop study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that **a majority of European internet users consume content in multiple languages**.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, users prefer their native languages.  Only about a half accept English if their preferred language is unavailable.

## Culture

Language is just one component of internationalization.  Cultural expectations play a roll:  concerns like date & time formatting, numbers, and systems of measure vary by region or individual preference.  I18n addresses these challenges too.  Thus, products with only one target language still benefit.

... maybe illustrate with examples ...

## Language in Technology Circles

It's tempting to imagine that internationalization is unnecessary for software products intended for a technical audience.  These users are proficient in some form of standardized technical English, right?  And does it even matter if clients don't ask for i18n support?

[Within Silicon Valley, a majority of the college-educated technology workforce is foreign-born](https://qz.com/1029860/more-silicon-valley-tech-workers-were-born-outside-the-us-than-in-it/).  Even within New York City, a greater share of educated tech workers were born outside of the US than within.  Since U.S. formatting conventions are unique, we already know that a significant share of technology workers _within Silicon Valley_ prefers _non-U.S. formatting_ for dates & times, numbers, and measures.

What about language?  [Silicon Valley is _majority multilingual_](https://siliconvalleyindicators.org/data/people/talent-flows-diversity/foreign-language/population-share-that-speaks-a-language-at-home-other-than-exclusively-english-table/), according to data collected from the U.S. Census and American Community Survey by Silicon Valley Institute for Regional Studies.  In 2017, more than half of Silicon Valley households spoke a language at home other than English, a greater percentage than either California or the U.S.

## i18n

[Internationalization](https://en.wikipedia.org/wiki/Internationalization_and_localization) is the process of adding support to a product for multiple locales (languages and regions), such that it can be translated without additional engineering effort.

## L10n

The choice to **localize** is ultimately a business decision.  The choice to **internationalize** is an engineering decision, which may be justified even if only one locale is supported.

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