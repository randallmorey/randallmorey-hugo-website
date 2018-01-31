---
title: "Mastering Frontend: CD"
slug: mastering-frontend-continuous-deployment
date: 2018-01-30T19:15:00-05:00
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

[Continuous deployment][cd] is the practice of deploying software as soon as
features are completed and merged, rather than all-at-once at arbitrary
milestones.  In an _automated_ CD approach, code is deployed without direct
intervention. Automated CD is a huge timesaver for any frontend team.
[Travis CI makes it really easy to setup continuous deployment][travis-cd].

Let's pause for a moment.  Deploying code without intervention can only be
successful if we have guarantees not only of code quality, but of code
readiness.  The latter is highly subjective and requires a solid strategy.  One
such strategy is [gitflow][gitflow], which rationalizes the use and
meaning of mainline branches in a repository.  With gitflow, the `master` branch
is elevated to mean "ready to go at all times" and _contains only
production-ready code_. The `develop` branch means "complete and will eventually
be released", but may not be production-ready yet.  This walkthrough assumes a
gitflow-like strategy.


## Repo Setup

This walkthrough is a continuation of my previous post about
[continuous integration][mastering-ci] and assumes your repository is already
setup to build on Travis.  View this post's [repository][repo] and its
[builds on Travis][travis-repo].


## Deployment Targets

In a real-world project, I usually create deployments for `develop`, `release`,
and `master` branches.  Some projects may have even more.  For this walkthrough,
we'll create two named deployments:

<dl>
  <dt>development</dt>
  <dd>A build only for developer review, from the <code>develop</code> branch.</dd>
  <dt>production</dt>
  <dd>A full production build, from the <code>master</code> branch.</dd>
</dl>

We'll use Amazon [S3][aws-s3] and [CloudFront][aws-cloudfront] for our
deployments.  [AWS][aws] is among the best options to serve a serious production
application.  It's particularly suited to static frontends
for two reasons:  it's cheap, and for most purposes it's infinitely
scalable.  While it is a slightly more complex setup than many frontend
developers may be comfortable with, the effort is well worth it.  A working
static frontend deployed to S3 and CloudFront is at very low risk of downtime or
erosion (barring external dependencies of course).


## S3 Deployments

On [S3][aws-s3], create one new bucket for each deployment (in our example,
there are two).  The names should match the domain names to which you plan to
point,
e.g. `dev.example.com` or `www.example.com`.  My example deployments won't have
their own domains and will be served directly from AWS, in which case any names
will work.  I'll use the verbose but meaningful bucket names:

* `mastering-frontend-continuous-deployment-development`
* `mastering-frontend-continuous-deployment-production`

Enable [static website hosting][s3-static-hosting] on both buckets and be sure
index and error pages both point to `index.html`.


## Travis Configuration

Before we can begin deploying with abandon, we need to add our AWS credentials
to Travis.  This is accomplished securely using environment variables,
which are _hidden by default_, invisible even on open-source projects.
Navigate to the Travis build page for your repo, then:  Settings >
Environment Variables.  Create new variables and add your AWS keys to
`AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`.  Then add the names of your S3
buckets to variables `AWS_S3_BUCKET_DEV` and `AWS_S3_BUCKET_PROD`.  I usually
keep bucket names secret as well.

Switch to the `develop` branch of your repo locally (or create if it doesn't
exist yet). Ember adds a default build task to `package.json`, invoked with
`npm run build`.  This task builds for a development environment.
Let's add another task to build for production:

{{< highlight json >}}
"build:production": "ember build --environment production --output-path dist-prod/",
{{< /highlight >}}

Now we can easily invoke two types of builds for our two different deployments.
Let's add the deployments to `.travis.yml` now.  The relevant code is
declarative and self explanatory:

{{< highlight yml >}}
before_deploy:
  - npm run build
  - npm run build:production

deploy:
  - provider: s3
    access_key_id: $AWS_ACCESS_KEY_ID
    secret_access_key: $AWS_SECRET_ACCESS_KEY
    bucket: $AWS_S3_BUCKET_DEV
    skip_cleanup: true
    local-dir: dist
    acl: public_read
    on:
      branch: develop
  - provider: s3
    access_key_id: $AWS_ACCESS_KEY_ID
    secret_access_key: $AWS_SECRET_ACCESS_KEY
    bucket: $AWS_S3_BUCKET_PROD
    skip_cleanup: true
    local-dir: dist-prod
    acl: public_read
    on:
      branch: master
{{< /highlight >}}


## Invoke the Deployments

Add your changes and push to GitHub.  If all goes well, your application will be
deployed automatically to [development][deployment-dev].  Now the fun part.  To
prove the production deployment also works, lets create a
[pull request][github-pr] _from `develop`_ branch of the repository
_to `master`_ branch in GitHub.  Why a "PR" instead of merging branches on the
command line?  Mainline branches are hallowed.  In gitflow, no commits should
ever be made directly to mainline branches.  Only pull requests are allowed.  We
broke this rule for demonstration purposes, but we'll honor it starting now.
Once the pull request is created, merge it via GitHub.

In a few moments, your [production deployment][deployment-prod] should be
complete.  In the case of this walkthrough, the app is empty except for the page
title, since the Ember welcome page only appears in a development environment.
Congratulations, you're halfway there.


## CloudFront

While S3 is purpose-built to _store_ assets reliably, CloudFront is a CDN
designed to _serve_ assets globally, from the edge.  Production-ready
applications should always be served from a CDN.  Let's dive in.

We'll create a distribution only for production, since CDN-level service isn't
necessary for a development environment.  If you were to create a third
"staging" environment, consider using CloudFront too, since staging should
mirror production as closely as possible.

From the [AWS console][aws-console], navigate to CloudFront.  Create a new
web distribution.  You'll be presented with a long form.  Just fill out the
basics:

* Paste the S3 static hosting URL of your app into the "origin domain name"
field.  Do not select the bucket from the list; the S3 static hosting URL is
required for proper browser support.
* Under "viewer protocol policy", choose "redirect HTTP to HTTPS".  The best
practice is to serve all sites--simple, static, and otherwise--from HTTPS for
maximum security.
* For "compress objects automatically", choose yes.
* Under "price class", choose the breadth of your distribution.  All locations
is the most expensive.
* If you plan to serve your app from your own domain name, add the domain to
"alternate domain names (CNAMEs)" and then request a custom SSL certificate.
* Click "create distribution".

Your dsitribution is now being created.  This initial setup may take some time.
Once it's complete, navigate to the distribution page and locate the
"domain name".  This is the unique CloudFront URL to your app.  This walkthrough
is [published on CloudFront][deployment-cloudfront-prod].


## Cache Invalidation

CloudFront caches assets.  This means that updates to your app on S3 won't
necessarily show up on the CloudFront side.  To ensure users get the latest,
you'll need to [invalidate the cache][invalidation].  Doing this manually is
simple enough:  navigate to the "invalidations" tab of your distribution in AWS
console and create a new invalidation with the content `/*`, meaning "all".

Manually invalidating cache every time deployment occurs is a pain, and defeats
the purpose of automated deployment.  Lets include cache invalidation in the
Travis deployment process.  Since Travis doesn't have native support for this,
we'll have to add some non-declarative code to `.travis.yml`.

First, add a new environment variable to your Travis build
`AWS_CLOUDFRONT_ID_PROD`.  Set the value to the distribution ID, located on the
distribution detail page in the AWS console.

If your app uses `language: node_js`, you can add the following line under
`before_install`:

{{< highlight yml >}}
- npm install -g travis-ci-cloudfront-invalidation
{{< /highlight >}}

If your app doesn't use Node, you may need to install it.  Make sure the
following lines appear first under `before_install`:

{{< highlight yml >}}
- sudo apt-get update
- sudo apt-get install node -y
{{< /highlight >}}

Now the magic part.  Add an `after_deploy` declaration with a shell script to
the end of `.travis.yml`:

{{< highlight yml >}}
after_deploy:
  - if [[ $TRAVIS_BRANCH = "master" ]]; then travis-ci-cloudfront-invalidation -a $AWS_ACCESS_KEY_ID -s $AWS_SECRET_ACCESS_KEY -c $AWS_CLOUDFRONT_ID_PROD -i '/*' -b 'master' -p $TRAVIS_PULL_REQUEST; fi
{{< /highlight >}}

If you have additional CloudFront deployments, add additional lines and tweak
as necessary to invalidate them too.  Remember to add the distribution IDs to
the build as environment variables and update the `if` conditional with the
branch name.  Leave the `-b 'master'` option unchanged for other branches,
because the invalidation tool will only invalidate if the value "master" is
passed here.


## Wrapping Up

Commit your changes to a new branch off `develop` and push.  Create and merge
PRs in GitHub from your new branch into `develop`, and then from `develop` into
`master`.  Once your production deployment completes, you should see that its
CloudFront cache was invalidated.  Visit the "invalidations" tab of the
distribution to confirm that one was created.


## Extra Credit:  Branch Protection

We briefly explored gitflow and the benefits of disciplined branching.
In gitflow, commits should never be made directly to mainline branches.  Without
a technological solution, this could mean imposing discipline on your whole
team, which isn't necessarily a bad thing.  Fortunately, GitHub provides
safeguards that make this easier.

GitHub has a concept of "branch protection", which can enforce a number of rules
on mainline branches.  To prevent pushes directly to mainline branches, navigate
to your GitHub repo > Settings > Branches > Protected Branches > `develop` >
then click "protect this branch".  This ensures the only way to update `develop`
is via pull requests.  Repeat this step for `master`.

In addition to basic branch protection, I also like to enforce status checks.
This is enabled on the same branch protection settings page.  Enable this option
and then enable the "travis" option that appears.  GitHub will now require
Travis builds to pass before a pull request may be merged.

If you work on a team, consider enforcing the rules for administrators and
requiring code reviews on PRs.  Altogether, branch protection along with Travis
CI add up to greater confidence in quality and readiness and help teams avoid
common mishaps.

Previous post:  [Mastering Frontend: CI][mastering-ci]


[cd]: https://www.atlassian.com/blog/continuous-delivery/practical-continuous-deployment
[travis-cd]: https://docs.travis-ci.com/user/deployment
[gitflow]: http://nvie.com/posts/a-successful-git-branching-model/
[mastering-ci]: {{< relref "mastering-frontend-continuous-integration.md" >}}
[repo]: https://github.com/randallmorey/mastering-frontend-continuous-deployment
[travis-repo]: https://travis-ci.org/randallmorey/mastering-frontend-continuous-deployment
[aws-s3]: https://aws.amazon.com/s3/
[aws-cloudfront]: https://aws.amazon.com/cloudfront/
[aws]: https://aws.amazon.com/
[aws-console]: https://aws.amazon.com/console/
[s3-static-hosting]: https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html
[github-pr]: https://help.github.com/articles/about-pull-requests/
[invalidation]: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html

[deployment-dev]: http://mastering-frontend-continuous-deployment-development.s3-website-us-east-1.amazonaws.com
[deployment-prod]: http://mastering-frontend-continuous-deployment-production.s3-website-us-east-1.amazonaws.com
[deployment-cloudfront-prod]: https://d4ywr74sq634p.cloudfront.net
