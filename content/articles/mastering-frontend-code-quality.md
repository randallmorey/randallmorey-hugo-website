---
title: "Mastering Frontend: Code Quality"
slug: mastering-frontend-code-quality
date: 2018-02-22T18:00:00-05:00
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

[![Maintainability](https://api.codeclimate.com/v1/badges/82fd8fc0f289f1f04eb1/maintainability)](https://codeclimate.com/github/randallmorey/mastering-frontend-code-quality/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/82fd8fc0f289f1f04eb1/test_coverage)](https://codeclimate.com/github/randallmorey/mastering-frontend-code-quality/test_coverage)

There are many ways to measure "code quality", and no single one is "right".
Tools, techniques, and opinions are always evolving.  It's a good idea to
instrument for several quality metrics to get a well-rounded view of
your code.  Use them as guides without optimizing for them too religiously.

This post's recommendations are exemplified in its
[repository][repo].  Builds for maintainability and test coverage may be
[viewed on Code Climate][code-climate-repo].


## Linting

[ESLint][eslint] is a linting tool for JavaScript that detects code errors,
common faux pas, and can enforce some stylistic guidelines.  Ember apps ship
with ESLint:  each JavaScript file is linted automatically as a separate test
case.  Linting is a first line of defense in the maintenance of quality code.
While some sensible default linting rules are applied for you, it's worth
learning more about the capabilities of ESLint.

Many modern frontend frameworks come with linting enabled by default.  When it's
not the default, it's easy to setup.  I recommend linting even the smallest
of projects.


## Test Coverage

I'll assume you already write tests as a habit.  But how do you know that
you have enough of the right tests?  Fortunately, it's easy to measure
_the amount of code tested_.  This is called [*test coverage*][test-coverage].
It's a simple accounting of the code that executes when tests run.  Anything
less than 100% coverage means that some code isn't executed during tests.

To get started in Ember, install the [coverage add-on][ember-cli-code-coverage]:

{{< highlight bash >}}
ember install ember-cli-code-coverage
{{< /highlight >}}

Update the `test` task in `package.json` to  enable coverage:<br>
`"test": "COVERAGE=true ember test"`.

Create a `config/coverage.js` file:

{{< highlight js >}}
'use strict';

module.exports = {
  reporters: ['lcov', 'html', 'text-summary']
};
{{< /highlight >}}

That's it!  When tests run, you should see a summary report similar to
the following:

{{< highlight text >}}
======== Coverage summary ========
Statements   : 100% ( 4/4 )
Branches     : 100% ( 0/0 )
Functions    : 0% ( 0/1 )
Lines        : 100% ( 4/4 )
==================================
{{< /highlight >}}

You also get a convenient **HTML** report in `coverage/lcov-report/index.html`.
This breaks down coverage line-by-line, file-by-file, and highlights code
that was missed.


## Test Parallelization &amp; Randomization

[Ember Exam][ember-exam] is an add-on that enhances test execution with
parallelization and order randomization.  Parallelization is useful for running
tests more quickly.  Test order randomization helps to prevent subtle errors
from slipping through unnoticed, which can happen if tests inadvertently become
order-dependent.

To get started, install the add-on:

{{< highlight bash >}}
ember install ember-exam
{{< /highlight >}}

Now update the `test` task in `package.json` to use Ember Exam:<br>
`"test": "COVERAGE=true ember exam --split 2 --parallel --random"`


## Code Climate

[Code Climate][code-climate] is a service that monitors code quality.  By
default, it asses _structure_ and _duplication_.  Many other options are
available.

To get started, login to GitHub and then visit [Code Climate][code-climate] to
login with one click via GitHub.  Once you're in, enable the desired repo(s).
The first run of Code Climate may take a few seconds or minutes, depending on
your code.  When it's done its evaluation, you'll get letter scores for your
repo and individual files.

Code Climate is also great for monitoring code coverage.  The test coverage we
setup earlier can be sent to Code Climate:

- Navigate to the settings page for your repo in Code Climate.
- Copy the "test reporter ID".
- Add the value to the CC_TEST_REPORTER_ID environment variable in Travis.
- Add coverage reporting steps to `.travis.yml`:

{{< highlight yml >}}
before_script:
  - curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
  - chmod +x ./cc-test-reporter
  - ./cc-test-reporter before-build
after_success:
  - ./cc-test-reporter after-build --exit-code $TRAVIS_TEST_RESULT
{{< /highlight >}}

Commit and push.


## More Badges

Congratulations.  You've earned two new badges:  one for _maintainability_ and
one for _test coverage_ (the badges for this post's example repo are shown
above).  You can find code for these badges on the settings page for your repo
in Code Climate.  Drop them into your readme, commit, and push.


Previous post:  [Mastering Frontend: CD][mastering-cd]


[repo]: https://github.com/randallmorey/mastering-frontend-code-quality
[code-climate-repo]: https://codeclimate.com/github/randallmorey/mastering-frontend-code-quality
[eslint]: https://eslint.org
[test-coverage]: https://en.wikipedia.org/wiki/Code_coverage
[ember-cli-code-coverage]: https://github.com/kategengler/ember-cli-code-coverage
[ember-exam]: https://github.com/trentmwillis/ember-exam
[code-climate]: https://codeclimate.com/

[mastering-cd]: {{< relref "mastering-frontend-continuous-deployment.md" >}}
