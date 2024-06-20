import {Icons} from "@site/src/constants/icons";

export type FeatureItem = {
		title: string;
		id: string;
		svg: keyof typeof Icons;
		description: string;
		path: string;
};

export const FeatureList: FeatureItem[] = [
		{
				title: 'Utilities & Functions',
				id: 'utils',
				svg: "tools",
				description: "Reusable functions and utilities to make your life easier when working with DHIS2 API",
				path: '/utils'
		},
		{
				title: 'UI Components',
				id: 'ui',
				svg: "ui",
				description: "Reusable complex DHIS2 UI components for react applications",
				path: '/ui'
		},
		{
				title: 'Apps',
				id: 'apps',
				svg: "apps",
				description: "Custom, open source DHIS2 applications",
				path: '/apps'
		},
		{
				title: 'Flutter Tools',
				id: 'flutter-tools',
				svg: "flutterTools",
				description: "UI,utilities and tools for flutter development",
				path: '/flutter-tools'
		},

];
