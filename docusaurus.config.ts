import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {FeatureList} from "./config/features";


export default async function createConfigAsync(): Promise<Config> {

		const navItems: NavbarItem[] = FeatureList.map(({path, title}) => {
				return {
						sidebarId: 'utils',
						position: 'left',
						label: title,
						to: path,
				}
		});

		const footerLinks = FeatureList.map(({path, title}) => {

				return {
						label: title,
						to: path
				}
		})

		navItems.push({
				href: 'https://github.com/hisptz',
				label: 'GitHub',
				position: 'right',
		})


		return {
				title: 'Apps & Utilities',
				tagline: 'DHIS2 related apps and utilities documentation',
				favicon: 'img/favicon.ico',
				url: 'http://localhost:3000',
				baseUrl: '/hisptz-docs/',
				organizationName: 'hisptz', // Usually your GitHub org/user name.
				projectName: 'hisptz-docs', // Usually your repo name.
				onBrokenLinks: 'throw',
				onBrokenMarkdownLinks: 'warn',
				i18n: {
						defaultLocale: 'en',
						locales: ['en'],
				},
				presets: [
						[
								'@docusaurus/preset-classic',
								{
										docs: {
												path: "docs",
												breadcrumbs: true,
												routeBasePath: 'docs',
												include: ['**/*.md', '**/*.mdx'],
												sidebarPath: './sidebars.ts',
										},
										blog: {
												showReadingTime: true,
												// Please change this to your repo.
												// Remove this to remove the "edit this page" links.
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
								title: 'HISP Tanzania',
								logo: {
										alt: 'HISP Tanzania logo',
										src: 'img/logo.png',
								},
								items: navItems,
						},
						footer: {
								style: 'light',
								links: [
										{
												title: 'Docs',
												items: footerLinks,
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
				plugins: []
		};
}
