# randallmorey.com - Personal Website

[![Travis](https://img.shields.io/travis/randallmorey/randallmorey-hugo-website.svg?style=flat-square)](https://travis-ci.org/randallmorey/randallmorey-hugo-website)


## Requirements

- [Hugo](https://gohugo.io/)
- [Node](https://nodejs.org/en/)
- [NPM](https://nodejs.org/en/)
- [Gulp](https://gulpjs.com)


## Install Dependencies

```bash
npm install
```


## Local Development

Run the following commands in separate terminals to start the local server and
watch files for changes:

```bash
hugo server -D
# in another terminal:
gulp
```


## Build

Build site into `public/`:
```bash
gulp sass && hugo
```


## Copyright

The content and visual design of this project are copyrighted and may not be
duplicated or distributed.  Source code that is unrelate to content and
visual design may be copied freely.
