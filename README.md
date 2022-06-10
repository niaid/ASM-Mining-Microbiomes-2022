# Website for ASM Microbe 2022 Workshop

## CW06. Mining Microbiomes: Analysis of Complex Microbiome Studies Using only a Laptop and Free Web Tools

## Site development

This repo is forked from https://raw.githubusercontent.com/zerostaticthemes/jekyll-serif-theme

### Pages

Since this is a fork there are some files that we don't use (I deleted the ones that seemed to interfere and just left the others).  Here is what we do use:

- [index.md] is the home page
- [faq.md] is the Info/FAQ page
- [contact.md] is the [Contact page](https://niaid.github.io/ASM-Mining-Microbiomes-2022/contact/) with our names
- [_info] is the directory that houses the pages linked at the bottom of the home page
  - [_info/account.md] - [how to make an account](https://niaid.github.io/ASM-Mining-Microbiomes-2022/info/account/)
  - [_info/materials.md] - [materials page](https://niaid.github.io/ASM-Mining-Microbiomes-2022/info/materials/)
  - [_info/survey.md] - [survey page](https://niaid.github.io/ASM-Mining-Microbiomes-2022/info/survey/)
  - subpages that are linked from the materials page
    - [_info/pipeline_outputs.md] - Nephele [pipeline outputs notes](https://niaid.github.io/ASM-Mining-Microbiomes-2022/info/pipeline_outputs)
    - [_info/submit_job.md] - Nephele [job submit notes](https://niaid.github.io/ASM-Mining-Microbiomes-2022/info/submit_job/)
- [download] - has the files hosted on the website for download (mapping file, poster)
- [images/illustrations] - pngs 
- [images/logo] - logo which is what is in top left of website
- [_data] directory
  - [menus.yml] - top right menu
  - [contact.yml] - links to contact info and other links that are used in multiple parts of the site (so you can change them in one place)
- [_config.yml] - main configuration file for the site
  - **collections:** true only for the directories we used which is info
  - **exclude:** exclude all the files and directories we didn't use

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

