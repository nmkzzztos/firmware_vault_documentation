import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation',
  favicon: 'img/logo.png',

  url: 'https://gitlab.informatik.hs-augsburg.de',
  baseUrl: '/firmware_vault_documentation',

  organizationName: 'gitlab.informatik.hs-augsburg.de',
  projectName: 'firmware_vault_docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de'],
  // },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/nmkzzztos/firmware_vault_documentation/tree/main',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/logo.png',
    navbar: {
      logo: {
        src: 'img/logo.png',
        className: 'header-logo',
        href: 'https://gitlab.informatik.hs-augsburg.de/firmware-analysis/firmware_vault/blob',
      },
      items: [
        {
          className: 'button button--lg home',
          position: 'left',
          label: 'Home',
          to: '/',
        },
        {
          type: 'dropdown',
          label: 'Docs',
          position: 'left',
          items: [
            {
              label: 'Introduction',
              to: '/docs/introduction',
            },
            {
              label: 'Getting Started',
              to: '/docs/Getting%20Started/installation',
            },
            {
              label: 'Frontend',
              to: '/docs/Frontend/introduction',
            },
            {
              label: 'Backend',
              to: '/docs/Backend/introduction',
            },
          ],
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        {
          href: "https://gitlab.informatik.hs-augsburg.de/firmware-analysis/firmware_vault",
          position: "right",
          className: "header-github-link header-gitlab-link",
          "aria-label": "GitLab repository",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'App',
              href: 'https://gitlab.informatik.hs-augsburg.de/firmware-analysis',
            },
            {
              label: 'GitLab',
              href: 'https://gitlab.informatik.hs-augsburg.de/firmware-analysis',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'THA',
              href: 'https://www.tha.de/',
            },
            {
              label: 'X',
              href: 'https://x.com/TH_Augsburg',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/hochschuleaugsburg/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/user/HochschuleAugsburg',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/THAugsburg/',
            }
          ],
        },
      ],
      logo: {
        className: 'footer-logo',
        alt: 'Firmware-Analyse logo',
        src: 'img/tha.svg',
        width: 150,
        href: 'https://www.tha.de/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Technische Hochschule Augsburg`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
