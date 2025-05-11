import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Yard58 Form Editor for VSCode',
    tagline: 'Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://yard58.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/form-editor-vscode-doc/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'yard58', // Usually your GitHub org/user name.
    projectName: 'form-editor-vscode-doc', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    path: 'doc',
                    routeBasePath: '/',
                    sidebarPath: './sidebars.ts',
                },
                pages: false,
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'Yard58 Form Editor for VSCode',
            logo: {
                alt: 'Yard58 Form Editor for VSCode Logo',
                src: 'img/extension-icon.png',
            },
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Yard58. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
