import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Geovisto',
  tagline: 'Open-source mapping library for generic geospatial data visualization.',

  // Set the production url of your site here
  url: 'https://geovisto.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  favicon: 'img/geovisto-logo3.png',
  organizationName: 'geovisto', // Usually your GitHub org/user name.
  projectName: 'geovisto.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'docusaurus-plugin-sass',
     ['@docusaurus/plugin-content-docs',
       {
         id: 'docs-geovisto',
         path: 'docs-geovisto',
         routeBasePath: 'docs-geovisto',
         sidebarPath: require.resolve('./sidebars.js'),
       }, 
     ],
 ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Geovisto',
        hideOnScroll: true,
        logo: {
          alt: 'Site Logo',
          src: 'img/geovisto-logo3.png',
          srcDark: 'img/geovisto-logo3.png',
          href: '/',
          target: '_self',
          width: 35,
          height: 35
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'playground#playground-hook',
            label: 'Playground',
            position: 'left',
          },
          {
            to: '/docs-geovisto',
            position: 'left',
            label: 'Documentation',
            activeBaseRegex: `/docs-geovisto/`,
          },
          {
            to: 'blog',
            position: 'left',
            label: 'Community',
          },
          {
            href: 'https://github.com/geovisto',
            position: 'right',
            className: 'toggle',
          },
          {
            href: 'https://github.com/geovisto',
            position: 'right',
            className: 'github',
          },
          {
            href: 'https://www.npmjs.com/package/geovisto',
            position: 'right',
            className: 'npm',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Documentation',
                to: '/docs-geovisto/',
              }
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'Playground',
                to: '/playground#playground-hook',
              },
              {
                label: 'Community',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/geovisto',
              },
              {
                label: 'NPM',
                href: 'https://www.npmjs.com/package/geovisto',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Geovisto | VUT FIT Brno. Built with Docusaurus.`,
      },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
