import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from "@docusaurus/Link"
import styles from './styles.module.css';
import {FeatureItem, FeatureList} from "@site/src/config/features";


function Feature({title, Svg, description, path}: FeatureItem) {
		return (
				<Link to={path} className={clsx('col col--4', `${styles.featureContainer}`)}>
						<div className="text--center ">
								<Svg className={styles.featureSvg} role="img"/>
						</div>
						<div className="text--center padding-horiz--md">
								<Heading as="h3">{title}</Heading>
								<p>{description}</p>
						</div>
				</Link>
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
