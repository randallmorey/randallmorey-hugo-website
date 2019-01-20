---
cover_art: true
cover_art_bg_color: "yellow"
cover_art_svg: ""
date: 2019-01-25T05:00:00+00:00
draft: true
lead: >
  Reach more people online, improve UX, and even DRY up code.  Internationalization benefits users, development teams, and business.  Users get their pick of language.  Development teams get much-overlooked static content management.  And business gets broader market reach.  <abbr title="internationalization">I18n</abbr> pays for itself even in single-language products.  But the real winners are happier users and a more inclusive&nbsp;web.
reverse_header: true
title: "Internationalization"
---

[A Gallop study for the European Commission](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that **a majority of European internet users consume content in multiple languages**.  More than a third create content in multiple languages.  Among its findings is that, unsurprisingly, users prefer their own language.  Only about a half accept English if their preferred language is unavailable.

<!--more-->

Language is just one component of internationalization.  Cultural expectations also impact UX; concerns like date and time, numbers, and systems of measure vary by region or individual preference.  I18n addresses these challenges too.

Thus, products still benefit from i18n where there is only one target language.

## ECMAScript Internationalization API

ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API") back in December 2012.  Today, [all modern browsers support `Intl`](https://caniuse.com/#feat=internationalization "Intl API browser support").  [Even Node.js supports internationalization](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  The `Intl` API is fit for use in all new projects.

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
