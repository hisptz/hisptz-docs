import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/core/lib/client/exports/useDocusaurusContext";


export default function Apps() {

		const {siteConfig} = useDocusaurusContext();
		return (
				<Layout title={`Apps | ${siteConfig.title}`} description="HISP Tanzania's open source apps">
						<main>
							App lists
						</main>
				</Layout>
		)
}
