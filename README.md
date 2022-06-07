# Website for ASM Microbe 2022 Workshop

## CW06. Mining Microbiomes: Analysis of Complex Microbiome Studies Using only a Laptop and Free Web Tools

## Site development

This repo is forked from https://raw.githubusercontent.com/zerostaticthemes/jekyll-serif-theme

### Installing Ruby & Jekyll
 
If this is your first time using Jekyll, please follow the [Jekyll docs](https://jekyllrb.com/docs/installation/) and make sure your local environment (including Ruby) is setup correctly.

### Build the site

Download or clone the repo.

To run the site locally, navigate to the repo directory and run (only have to do once):

```
bundle install
``` 

To start the Jekyll local development server. This will open page in browser, so you can test and iterate.

```
bundle exec jekyll serve
``` 

To build the theme.  This will build all the site pages including your changes.
 
```
bundle exec jekyll build
```

## Deployment

### Github Pages
We use GitHub Pages to host the site.  So, if you push to the main branch, then it will run a GitHub Action and redeploy any changes you make.  This theme has been tested to work with Github Pages (and Github Project Pages). When using Github Pages you will need to update the `baseurl` in the `_config.yml` otherwise all the css, images and paths will be broken.


