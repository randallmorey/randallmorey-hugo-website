---
title: "Accessibility Is for Everyone"
date: 2018-07-23T12:00:00-05:00
cover_art: true
cover_art_bg_color: purple
cover_art_svg: accessibility-is-for-everyone
reverse_header: true
lead: >
  [The U.N. defines access to information, and to the web,
  as a human right][info-access].  Yet much of the web excludes
  people despite robust technological support for accessibility.  Find out what
  gets in the way of great experiences for all and learn how to build a
  friendlier web.

  [info-access]: https://en.wikipedia.org/wiki/Right_to_Internet_access
---

Disability is traditionally understood as a personal medical condition.  This
is known as the **medical model** and views disability as a problem with
which individuals must struggle.  Instead of acknowledging the
inadequacies of the built environment, this view _blames the user_.

[The social model][social-model] views disability as the result of a mismatch
between people and interactions.  Disability is an experience rather than an
individual attribute.  It arises when a product does not accommodate a user's
mode of interaction.


## Who Experiences Disability?

Disability can happen to anyone.  This may include people with
permanent or temporary impairments.  But disability can also arise as a result
of the user's context and environment.  Indeed, even people without impairments
experience disability.

<figure>
  <img alt="Disability can happen to anyone, whether or not they have impairments." src="/art/disability-examples.svg" />
<figcaption>
  <blockquote>
    <p>Disability can happen to anyone, whether or not they have impairments.</p>
    <small><a href="https://www.microsoft.com/design/">Image credit:  Microsoft Inclusive Toolkit</a></small>
  </blockquote>
</figcaption>
</figure>

[disability-examples-image]: /images/disability-examples.svg
[microsoft-inclusive-toolkit]: https://www.microsoft.com/design/

Take _sightedness_ for example.  Designers and developers commonly assume that
users are sighted and build experiences that simply won't work outside of a
visual context.  But this assumption is wrong:

- **Blind users** have a physical impairment that prevents them from using a
  product that assumes sightedness.
- **People with eye injuries** may be temporarily impaired, preventing them from
  interacting with websites that only support a visual mode.
- **Automobile operators and those using voice-only devices** are disabled by
  products that assume sight.


## Accessibility to the Rescue

[Accessibility refers to the qualities of a product that make it useful by as
many people in as many contexts as possible][mdn-accessibility].  It can also
refer to the discipline of making products accessible to everyone.
_Accessibility is an act_.

On the web, accessibility, or <abbr title="accessibility">a11y</abbr> for short,
is primarily governed by the [W3C][w3c], which publishes the two most important
standards:
[Web Content Accessibility Guidelines 2.0][wcag] and
[Accessible Rich Internet Applications Suite][wai-aria].  Alone, they are dry
reads.  Fortunately,
[the W3C also publishes a friendlier guide][w3c-accessibility-fundementals].

Numerous companies publish their own recommendations built on WCAG.  I highly
recommend [Vox Media's Accessibility Guidelines][vox-a11y].  And [Microsoft's
Inclusivity Toolkit][ms-a11y] is full of great resources.

But you needn't memorize standards and checklists to do accessibility.  There
are some simple rules of thumb and a host of free tools available.  The cost
of building with accessibility in mind is actually quite low.


### It's Good UX

Accessibility is the foundation of good UX.  An inaccessible product is a poor
experience by definition.  This point is easy to forget as designers strive
for delightful visual experiences and developers strive for pixel perfection.
We practitioners are heavily biased toward the visual experience.
The web is more than a visual medium.  Much more.


## Design Tips

Make sure your designs remain accessible.  While these tips are organized by
discipline, both designers and developers can contribute to accessible design.
Check each other's work and celebrate opportunities to improve.

- [Ensure type size and color contrast meet the minimum
  ratios][contrast-checker].  The minimum contrast ratio for normal type sizes
  is 4.5:1 at AA rating, and 7:1 at AAA rating.
  Links should have at least a 3:1 contrast ratio with surrounding text.
- Don't rely on color alone.  For example, ensure links have underlines or
  other visual separation from body text.  Form validation states should include
  text, and possibly iconography, to indicate state.
- [Design color blind safe palettes][color-blind-safety] if you can.
  [Inspect your designs with a color blind simulation
  tool][color-blinding-chrome-extension] to ensure contrast.
- Link text should make sense in isolation.  Some users may not read or be able
  to read all surrounding text.  **"Click here"** and **"Learn more"**
  are not sufficiently descriptive.


## Development Tips

- [Valid, semantic HTML is accessible by default][valid-html].  HTML 5 contains
  a wealth of tags for expressing structure and semantic meaning.
  And [use landmark elements][landmark-html] where appropriate.
- Indicate _links_ among pages or views with `<a>`.  Indicate _actions_ with
  `<button>`.  These are often used inconsistently.
- [Author accessible forms][accessible-forms] by ensuring all fields have
  associated form labels that are always visible (don't rely on placeholders
  alone) and that keyboard accessibility is fully supported. Avoid
  custom-designed form elements, as they are usually inaccessible.  A light
  touch on valid HTML form markup is the best approach.  **Let forms be forms**:
  don't fret if they appear slightly different in different browsers.
  Remember, the web is more than a visual medium.
- [Don't rely on `display: none;` to visually hide
  meaningful information][a11y-visual-hiding].  This mistake is common with
  custom-designed form elements where the underlying form element is hidden.
  Screen readers may ignore this content, which may not be desirable.
- [Ensure useability with keyboard alone][accessible-keyboard].  Ensure proper
  navigation and form functionality.  Notably, <kbd>tab</kbd> navigates among
  actionable elements, <kbd>space</kbd> toggles form elements such as selects
  and boolean fields, and <kbd>return</kbd> may activate links or trigger submit
  from anywhere within a form.
- [Use ARIA attributes][aria-mdn] where appropriate.  ARIA attributes add an
  extra layer of meaning to HTML, making products more useful.  All websites may
  benefit, but ARIA is especially useful in web apps where page content
  is dynamic.
- Be sure to [install the WAVE extension for Chrome][wave-chrome-extension],
  which simplifies accessibility evaluations.  Depending on your frontend stack,
  some aspects of accessibility testing can even be automated.


## Accessibility Is for Everyone

Whatever your role, you can help make the web more accessible.  Being aware of
accessibility concerns and following best practices gets us 80% there without a
lot of extra effort.  No matter the size of your project or the target market,
it's easy to get started.  When the web is friendlier and more accessible,
everyone benefits.


[w3c]:  https://www.w3.org/
[wcag]:  https://www.w3.org/WAI/standards-guidelines/wcag/
[wai-aria]:  https://www.w3.org/WAI/standards-guidelines/aria/
[wai]:  https://www.w3.org/WAI/
[w3c-accessibility-fundementals]:  https://www.w3.org/WAI/fundamentals/accessibility-intro/
[wcag-law]:  https://www.w3.org/WAI/policies/
[mdn-accessibility]:  https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility
[vox-a11y]:  http://accessibility.voxmedia.com/?_ga=2.37572064.1586203020.1532100782-561699024.1532100782
[ms-a11y]:  https://medium.com/microsoft-design/a-crack-at-the-edges-bfe9fa3db78c
[social-model]:  https://www.scope.org.uk/about-us/our-brand/social-model-of-disability
[contrast-checker]:  https://webaim.org/resources/contrastchecker/
[color-blind-safety]:  https://usabilla.com/blog/how-to-design-for-color-blindness/
[color-blinding-chrome-extension]:  https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en
[valid-html]:  https://validator.w3.org/
[landmark-html]:  https://alistapart.com/column/wai-finding-with-aria-landmark-roles
[accessible-forms]:  https://webaim.org/techniques/forms/
[a11y-visual-hiding]:  https://a11yproject.com/posts/how-to-hide-content/
[accessible-keyboard]:  https://webaim.org/techniques/keyboard/
[aria-mdn]:  https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
[wave-chrome-extension]:  https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US
