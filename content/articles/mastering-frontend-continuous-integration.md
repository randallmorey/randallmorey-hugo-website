---
title: "Mastering Frontend: CI"
slug: mastering-frontend-continuous-integration
date: 2018-01-20T18:05:00-05:00
lead: >
  Welcome to _Mastering Frontend_, an ongoing series of cookbook-style posts for
  advanced frontend engineering.  You will learn modern best practices, advanced
  features, and ways to write, measure, and maintain high quality code for
  ambitious frontend&nbsp;applications.  Presented using Ember.js, the tools
  and techniques you'll learn apply to most frontend frameworks.
cover_art: true
cover_art_bg_color: orange
reverse_header: true
---

[![Travis][travis-badge]][travis-link]
[travis-badge]: https://travis-ci.org/randallmorey/mastering-frontend-continuous-integration.svg?branch=master
[travis-link]: https://travis-ci.org/randallmorey/mastering-frontend-continuous-integration

[Continuous integration][ci] is an approach to software engineering that
works equally well for backend and frontend.  In a CI approach,
changes are built and tested _continuously_, every time they're made.  Breaking
changes are thus detected early and issues may be resolved before compounding.
CI can also include related concerns like continuous deployment, which we'll
learn about later on.  CI is so helpful, it's one of the first things I set up
when beginning new projects.

The platform we'll use is [Travis CI][travis] because it's free for open source
and it's supported out-of-the-box by Ember.  It's really easy to get started
with Travis:  all you need is a [`.travis.yml`][custom-builds] file present in
your repo, which Ember adds automatically.  Many frontend frameworks have
similar support.

The [demo repository][github-repo] for this post shows step-by-step commits used
to produce the [build results on Travis][travis-builds], roughly following
this walkthrough.

[github-repo]: https://github.com/randallmorey/mastering-frontend-continuous-integration
[travis-builds]: https://travis-ci.org/randallmorey/mastering-frontend-continuous-integration


## Setting Up GitHub & Travis

Create a new empty repository on [GitHub][github].  Before we commit
anything, let's link up this repo with CI.  [Head on over to Travis CI and click
"Sign in with GitHub"][travis].  Enable the newly-created repo. You may need
first to navigate to the "Profile" page to toggle repos.


## Push a New Ember App

Ember supports Travis CI by default.  All newly created apps include the a
`.travis.yml` file, which configures Travis to build and test your app.  Because
the repository is enabled, every push to GitHub should kick off a build.  Let's
create a new Ember app and push it up to GitHub from the command line:

{{< highlight base >}}
ember new my-new-app
{{< /highlight >}}

One thing before we push:  a recent reversion in Travis broke Chrome unless
`sudo` is required.  Edit the appropriate line in the app's `.travis.yml`
file to `sudo: required`.  Commit the change locally.  Then push the new repo up
to GitHub:

{{< highlight base >}}
git remote add origin https://github.com/user/my-new-app.git
git push -u origin master
{{< /highlight >}}

With minimal effort you've triggered a build.  Navigate
to the builds page of your new repo in Travis.  You should see an item "master".
Click to expand the build details.  After a minute or two, the build should exit
successfully, having executed the default tests included in new Ember apps.


## Add Firefox Support

Enabling Firefox support is simple, since it recently introduced true _headless_
mode.  [Install the latest Firefox locally][firefox].  Then edit
the `testem.js` file generated into your Ember app and add `'Firefox'` to both
`launch_in_ci` and `launch_in_dev`.  Add the following item to `browser_args`:

{{< highlight javascript >}}
Firefox: [
  '-headless',
  '--window-size=1440,900'
]
{{< / highlight >}}

Edit `.travis.yml` and add `firefox: latest` to the `addons` key.  Commit the
changes and push to GitHub.  If all goes well, you should see successful test
output from both Chrome and Firefox in the Travis logs.


## Expand the Matrix

By default, Ember builds run in Node 6.  This is a little outdated, but we can
easily create a [build matrix][custom-builds].  Edit `.travis.yml` and add two
more items to `node_js`:  `- "7"` and `- "8"`.  Commit, push, and view the build
on Travis.  The app now tests against 3 different versions of
Node.  This is most useful in a team setting.  Though ideally all team members
share identical environments, in practice they often do not.  They may have
varying versions of Node installed.  A build matrix lets everyone immediately
see if the app stops building under a particular version.

Travis CI is a free service and build matrices are resource intensive.  Let's
revert back to a single Node version because we're conscientious developers.  My
local version of Node (`node -v`) is `v9.3.0`.  So in my case, I replaced all
items under `node_js` with just one: `- "9"`.  Commit and push.


## Multiple Operating Systems

[Travis supports both Linux and OS X][multi-os].  The default OS is Linux.  A
typical engineering group probably develops on Mac while deploying on
Linux-based cloud services.  In this case, it's helpful to build against both
platforms.  Developers who use Windows, well, maybe it's time to reconsider.
Add the following to your `.travis.yml` file to add OS X to the build matrix:

{{< highlight yaml >}}
os:
  - linux
  - osx
{{< / highlight >}}


## You've Earned a Badge

Paste the code snippet below into your `README.md` file, just below the title.  
To get the badge image URL:  navigate to the builds page for your repo in Travis
and click the status badge. Replace `BADGE_IMAGE_URL` in the below snippet with
the URL you just discovered.  Replace `WEBSITE_URL` with the link to your repo
on Travis.  Commit and push.

{{< highlight markdown >}}
[![Travis](BADGE_IMAGE_URL)](WEBSITE_URL)
{{< / highlight >}}

Congratulations, you've just announced to the world that your
project builds and tests pass.  In later posts we'll build on this with more
sophisticated quality&nbsp;guarantees.


[ci]: https://docs.travis-ci.com/user/for-beginners/
[ember-cli]: https://ember-cli.com/
[travis]: https://travis-ci.org/
[github]: https://github.com
[firefox]: https://www.mozilla.org/firefox/new/
[custom-builds]: https://docs.travis-ci.com/user/customizing-the-build/
[multi-os]: https://docs.travis-ci.com/user/multi-os/
