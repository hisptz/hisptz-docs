import {Images} from "@site/src/constants/images";

export interface MigrationConfig {
		repo: string;
		tempDir: string;
		targetDir: string;
		branch?: string;
		extraFiles?: { from: string, to: string }[]
		postDownloadActions?: string[],
		docsDir?: string,
}

interface AppConfig {
		id: string;
		title: string;
		image: keyof typeof Images;
		description: string;
		version: string;
		migrationConfig: MigrationConfig;
}


export const apps: AppConfig[] = [
		{
				id: "analytics-messenger",
				title: "Analytics Messenger",
				image: "analyticsMessenger",
				description: "A DHIS2 web application that allows sending of analytics data to messaging applications.",
				version: "v1.0.0",
				migrationConfig: {
						repo: 'https://github.com/hisptz/dhis2-analytics-messenger-app.git',
						tempDir: '.messenger-repo-temp',
						targetDir: './docs/analytics-messenger',
						branch: 'develop',
						extraFiles: []
				}
		},
		{
				id: "pid",
				title: "Program Indicator Disaggregator",
				image: "pid",
				description: "A tool to automatically create disaggregation for program indicators",
				version: "v1.0.0",
				migrationConfig: {
						repo: 'https://github.com/hisptz/program-indicator-disaggregator.git',
						tempDir: '.pid-repo-temp',
						targetDir: './docs/pid',
						branch: 'develop',
						extraFiles: []
				}
		},
		{
				id: "data-generator",
				title: "Random Data Generator",
				image: "randomDataGenerator",
				description: "A tool to configure and generate a tracker program random data",
				version: "v1.0.0",
				migrationConfig: {
						repo: 'https://github.com/hisptz/tracker-data-random-generator.git',
						tempDir: '.generator-repo-temp',
						targetDir: './docs/data-generator',
						branch: 'develop',
						extraFiles: []
				}
		},
]

export const libs =  [
		{
				migrationConfig: {
						repo: 'https://github.com/hisptz/dhis2-utils.git',
						tempDir: '.messenger-repo-temp',
						targetDir: './docs/libs',
						branch: 'develop',
						extraFiles: []
				}
		},
		{
				migrationConfig: {
						repo: 'https://github.com/hisptz/dhis2-flutter-toolkit.git',
						tempDir: '.flutter-toolkit-repo-temp',
						targetDir: './docs/flutter-tools',
						branch: 'develop',
						extraFiles: []
				}
		}
]

