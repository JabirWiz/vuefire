import { defineConfig } from 'vitepress'
import { version } from '../../package.json'
import {
  twitter,
  headTitle,
  headDescription,
  ogImage,
  ogUrl,
  contributing,
  github,
  releases,
} from './meta'

export default defineConfig({
  lang: 'en-US',
  title: headTitle,
  description: headDescription,
  head: [
    ['meta', { name: 'theme-color', content: '#ffe183' }],
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
      },
    ],
    [
      'meta',
      {
        name: 'author',
        content: `Eduardo San Martin Morote (@posva) and contributors`,
      },
    ],
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Vue.js, Vue, Firebase, Firestore, Realtime Database, VueFire, pinia, authentication',
      },
    ],
    ['meta', { property: 'og:title', content: headTitle }],
    ['meta', { property: 'og:description', content: headDescription }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: headTitle }],
    ['meta', { name: 'twitter:description', content: headDescription }],
    ['link', { rel: 'mask-icon', href: '/logo.svg', color: '#ffffff' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180',
      },
    ],
  ],

  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/vuejs/vuefire/edit/main/docs/:path',
      text: 'Suggest changes to this page',
    },

    socialLinks: [
      { icon: 'twitter', link: twitter },
      { icon: 'github', link: github },
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2016-PRESENT Eduardo San Martin Morote and VueFire contributors',
    },

    // carbonAds: {
    //   code: 'CK7DL23N',
    //   placement: 'vuefirevuejsorg',
    // },

    // algolia: {
    //   apiKey: '0d5c32429ddf401270cbc9b4e24c4532',
    //   indexName: 'vuefire',
    //   // algoliaOptions: { facetFilters: ['tags:guide,api'] },
    // },

    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'Config', link: '/config/' },
      {
        text: `v${version}`,
        items: [
          {
            text: 'Release Notes ',
            link: releases,
          },
          {
            text: 'Contributing ',
            link: contributing,
          },
        ],
      },
    ],

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            {
              text: 'Why VueFire',
              link: '/guide/',
            },
            {
              text: 'Getting Started',
              link: '/guide/getting-started',
            },
            // {
            //   text: 'Realtime data',
            //   link: '/guide/binding-subscriptions',
            // },
            // {
            //   text: 'Querying the database',
            //   link: '/guide/querying',
            // },
            // {
            //   text: 'Writing to the database',
            //   link: '/guide/writing-data',
            // },
          ],
        },
        {
          text: 'API',
          items: [
            {
              text: 'API Reference',
              link: '/api/',
            },
          ],
        },
        {
          text: 'Cookbook',
          items: [
            {
              text: 'Cookbook',
              link: '/cookbook/',
            },
          ],
        },
      ],
    },
  },
})