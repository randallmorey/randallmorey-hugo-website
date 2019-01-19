+++
cover_art = true
cover_art_bg_color = "red"
cover_art_svg = ""
date = "2019-01-25T05:00:00+00:00"
draft = true
lead = "Reach a more diverse, global audience through internationalization and localization."
reverse_header = true
title = "Internationalization"

+++
Internationalized and localized applications reach more markets, help more people, and improve UX compared to single-language apps.  Moreover, i18n (as it is typically abbreviated), can serve development teams in one important way:  static content management, even if no language translation is ever performed.  Internationalization is a win-win, paying for its own development time.  But the real winners?  Happier users and a more inclusive web.

## ECMAScript Internationalization API

ECMAScript quietly introduced the [internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API") back in December 2012.  Today, [all modern browsers support it](https://caniuse.com/#feat=internationalization "Intl API browser support").  Even [Node.js supports internationalization (although only English is available by default)](https://nodejs.org/docs/latest-v11.x/api/intl.html "Node.js Internationalization").  Support is broad enough that I can recommend adopting `Intl` in all new projects.

The internationalization API provides key formatting services for numbers (including currencies), dates & times, and language-aware sorting.  It handles all of this _natively_.  Previously, such basic tasks required byte-heavy third-party libraries and their locale data files.  Though some features are not widely supported yet, such as relative times (e.g. "30s ago").

Look out for additional features such as `Intl.RelativeTimeFormat` and `Intl.ListFormat` to land in capable browsers soon.

`Intl` is a powerful tool.  [Check the docs for complete API reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl "Intl API docs").  Here are a few examples (note that these may differ slightly, since the default timezone is the current host's):

```js
const date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
console.log(new Intl.DateTimeFormat('en-GB').format(date));
// 20/12/2012
```