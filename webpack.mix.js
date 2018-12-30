const cssnano = require('cssnano')
const mix = require('laravel-mix')
const postCssImport = require('postcss-import')
const purgeCss = require('@fullhuman/postcss-purgecss')
const postCssFontMagician = require('postcss-font-magician')

mix
  .postCss('index.css', './public/css/app.min.css', [
    postCssImport(),
    postCssFontMagician({ display: 'swap' }),
    purgeCss({ content: ['public/**/*.html'] }),
    cssnano()
  ])
  .disableNotifications()
