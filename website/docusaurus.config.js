// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT 技术相关播客',
  tagline: '收集 IT 技术相关播客。',
  url: 'https://tech-podcasts.github.io/',
  baseUrl: '/it-technology-podcast/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tech-podcasts', // Usually your GitHub org/user name.
  projectName: 'it-technology-podcast', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: ["@easyops-cn/docusaurus-search-local"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'IT 技术相关播客',
        logo: {
          alt: 'IT 技术相关播客',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/podcast',
            label: '🎧播客列表',
            position: 'left'
          },
          { to: '/docs/tags', label: '🏷️分类标签', },
          { to: '/blog', label: '公告', position: 'left' },
          {
            href: 'https://github.com/tech-podcasts/it-technology-podcast',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '关于本站',
            items: [
              {
                label: '关于',
                to: '/about',
              },
              {
                label: '许可证',
                to: '/licenses',
              },
              {
                label: '行为规范',
                to: '/code-of-conduct',
              },
              {
                label: '贡献者指南',
                to: '/contribution',
              },
              {
                label: '常见问题',
                to: '/common-questions',
              },
            ],
          },
          {
            title: '矩阵',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tech-podcasts/it-technology-podcast',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '技术播客月',
                href: 'https://github.com/tech-podcasts/community',
              },
            ],
          },
        ],
        copyright: `Copyright © 2022 ${new Date().getFullYear() == 2021 ? '' : '- ' + new Date().getFullYear()} IT 技术相关播客, Inc.<br />❤️ 自豪地采用 <a target="_blank" href="https://docusaurus.io/">Docusaurus</a> 构建 ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
