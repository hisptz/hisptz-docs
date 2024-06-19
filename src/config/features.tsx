export type FeatureItem = {
		title: string;
		id: string;
		Svg: React.ComponentType<React.ComponentProps<'svg'>>;
		description: JSX.Element;
		path: string;
};

export const FeatureList: FeatureItem[] = [
		{
				title: 'Utilities & Functions',
				id: 'utils',
				Svg: require('@site/static/img/tools.svg').default,
				description: (
						<>
								Reusable functions and utilities to make your life easier when working with DHIS2 API
						</>
				),
				path: '/utils'
		},
		{
				title: 'UI Components',
				id: 'ui',
				Svg: require('@site/static/img/ui.svg').default,
				description: (
						<>
								Reusable complex DHIS2 UI components for react applications
						</>
				),
				path: '/ui'
		},
		{
				title: 'Analytics UI & Utilities',
				id: 'analytics-tools',
				Svg: require('@site/static/img/analytics.svg').default,
				description: (
						<>
								Reusable analytics tools and UI components for visualizing DHIS2 analytics
						</>
				),
				path: '/analytics-tools'
		},
		{
				title: 'Apps',
				id: 'apps',
				Svg: require('@site/static/img/apps.svg').default,
				description: (
						<>
								Custom, open source DHIS2 applications
						</>
				),
				path: '/apps'
		},
		{
				title: 'Flutter Tools',
				id: 'flutter-tools',
				Svg: require('@site/static/img/flutter.svg').default,
				description: (
						<>
								UI,utilities and tools for flutter development
						</>
				),
				path: '/flutter-tools'
		},

];
