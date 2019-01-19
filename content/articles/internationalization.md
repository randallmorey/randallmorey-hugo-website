+++
cover_art = true
cover_art_bg_color = "yellow"
cover_art_svg = ""
date = "2019-01-25T05:00:00+00:00"
draft = true
lead = "Reach a more diverse, global audience through internationalization and localization."
reverse_header = true
title = "Internationalization"

+++
Internationalized and localized applications reach more markets, help more people, and improve UX compared to single-language apps.  Moreover, i18n (as it is typically abbreviated), can serve development teams in one important way:  static content management, even if no language translation is ever performed.  Internationalization is a win-win, paying for its own development time.  The real winners?  Happier users and a more inclusive web.

Localized products are inclusive, reaching people who don't use the app's primary language.  Reaching more users also happens to be good business.  But there's another class of user we should care about too.  Many users may be fluent in our language, but prefer using another.  For them, a translated application can be a better experience.  [A study prepared for the European Commission by Gallop](http://ec.europa.eu/commfrontoffice/publicopinion/flash/fl_313_en.pdf "User Language Preferences Online") found that a majority of EU internet users used multiple languages to consume content, and more than a third used multiple languages to create content.  More specifically, it found that while about half of users would merely accept English if no other option is available, almost all users would prefer their own language.

## ECMAScript Internationalization API

ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API") back in December 2012.  Today, [all modern browsers support it](https://caniuse.com/#feat=internationalization "Intl API browser support").  Even [Node.js supports internationalization (although only English is available by default)](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  Support is broad enough that I can recommend adopting `Intl` in all new projects, with some caveats.

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