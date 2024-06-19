import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";

type FeatureItem = {
		title: string;
		Svg: React.ComponentType<React.ComponentProps<'svg'>>;
		description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
		{
				title: 'Utilities & Functions',
				Svg: require('@site/static/img/tools.svg').default,
				description: (
						<>
								Reusable functions and utilities to make your life easier when working with DHIS2 API
						</>
				),
		},
		{
				title: 'UI Components',
				Svg: require('@site/static/img/ui.svg').default,
				description: (
						<>
								Reusable complex DHIS2 UI components for react applications
						</>
				),
		},
		{
				title: 'Analytics Tools',
				Svg: require('@site/static/img/analytics.svg').default,
				description: (
						<>
								Reusable analytics tools and UI components for visualizing DHIS2 analytics
						</>
				),
		},
		{
				title: 'Apps',
				Svg: require('@site/static/img/apps.svg').default,
				description: (
						<>
								Custom, open source DHIS2 applications
						</>
				),
		},
		{
				title: 'Flutter Tools',
				Svg: require('@site/static/img/flutter.svg').default,
				description: (
						<>
								UI,utilities and tools for flutter development
						</>
				),
		},

];

function Feature({title, Svg, description}: FeatureItem) {
		return (
				<button className={clsx('col col--4', `${styles.featureContainer}`)}>
						<div className="text--center ">
								<Svg className={styles.featureSvg} role="img"/>
						</div>
						<div className="text--center padding-horiz--md">
								<Heading as="h3">{title}</Heading>
								<p>{description}</p>
						</div>
				</button>
		);
}

export default function HomepageFeatures(): JSX.Element {
		return (
				<section className={styles.features}>
						<div className="container">
								<div style={{justifyContent: "center", gap: 16}} className="row">
										{FeatureList.map((props, idx) => (
												<Feature key={idx} {...props} />
										))}
								</div>
						</div>
				</section>
		);
}
