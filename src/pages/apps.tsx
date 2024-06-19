import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";
import {apps} from "@site/config/apps";
import {AppCard} from "@site/src/components/AppCard/AppCard";


export default function Apps() {

		const {siteConfig} = useDocusaurusContext();
		return (
				<Layout title={`Apps | ${siteConfig.title}`} description="HISP Tanzania's open source apps">
						<main style={{
								padding: 16
						}}>
								<h1>
										Applications
								</h1>
								<div>
										Our open source applications available for public use.
								</div>

								<div style={{
										display: "grid",
										gridTemplateColumns: "auto auto auto",
										gap: 16,
										padding: "32px 0"
								}}>
										{
												apps.map(app => (
														<AppCard key={`${app.id}`} {...app}/>
												))
										}
								</div>
						</main>
				</Layout>
		)
}
