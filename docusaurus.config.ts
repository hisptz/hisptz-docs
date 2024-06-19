import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
		title: 'Apps & Utilities Documentation',
		tagline: 'DHIS2 related apps and utilities documentation',
		favicon: 'img/favicon.ico',

		// Set the production url of your site here
		url: 'http://localhost:3000',
		// Set the /<baseUrl>/ pathname under which your site is served
		// For GitHub pages deployment, it is often '/<projectName>/'
		baseUrl: '/',
		// GitHub pages deployment config.
		// If you aren't using GitHub pages, you don't need these.
		organizationName: 'hisptz', // Usually your GitHub org/user name.
		projectName: 'hisptz-docs', // Usually your repo name.

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
										sidebarPath: './sidebars.ts',
										editUrl:
												'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
								},
								blog: {
										showReadingTime: true,
										// Please change this to your repo.
										// Remove this to remove the "edit this page" links.
										editUrl:
												'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
								},
								theme: {
										customCss: './src/css/custom.css',
								},
						} satisfies Preset.Options,
				],
		],
		trailingSlash: false,
		themeConfig: {
				// Replace with your project's social card
				image: 'img/docusaurus-social-card.jpg',
				navbar: {
						title: '',
						logo: {
								alt: 'HISP Tanzania logo',
								src: 'img/logo.png',
						},
						items: [
								{
										type: 'docSidebar',
										sidebarId: 'tutorialSidebar',
										position: 'left',
										label: 'Tutorial',
								},
								{to: '/blog', label: 'Blog', position: 'left'},
								{
										href: 'https://github.com/hisptz',
										label: 'GitHub',
										position: 'right',
								},
						],
				},
				footer: {
						style: 'dark',
						links: [
								{
										title: 'Docs',
										items: [
												{
														label: 'DHIS2 Utilities',
														to: '/intro',
												},
												{
														label: 'UI Components',
														to: 'pathname:///ui/index.html',
												},
										],
								},
								{
										title: 'Community',
										items: [
												{
														label: 'Twitter',
														href: 'https://twitter.com/hisptanzania',
												},
												{
														label: 'LinkedIn',
														href: 'https://www.linkedin.com/company/hisptanzania',
												},
										],
								},
								{
										title: 'More',
										items: [
												// {
												//     label: 'Blog',
												//     to: '/blog',
												// },
												{
														label: 'GitHub',
														href: 'https://github.com/hisptz',
												},
										],
								},
						],
						copyright: `Copyright © ${new Date().getFullYear()} HISP Tanzania, Inc. Built with Docusaurus.`,
				},
				prism: {
						theme: prismThemes.github,
						darkTheme: prismThemes.dracula,
				},
		} satisfies Preset.ThemeConfig,
};

export default config;
