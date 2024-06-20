import Link from "@docusaurus/Link";
import {Images} from "@site/src/constants/images";
import styles from "./styles.module.css";

export interface AppCardProps {
		title: string;
		image: keyof typeof Images;
		description: string;
		version: string;
		id: string;
}

export function AppCard({title, image, description, version, id}: AppCardProps): JSX.Element {

		return (
				<Link className={styles.appCard} to={`/docs/${id}/intro`}>
						<div style={{
								display: "flex",
								flexDirection: "row",
								gap: 16,
								padding: 16
						}}>
								<img height={100} width={100} alt={title} src={Images[image]}/>
								<div style={{
										display: "flex",
										alignItems: "left",
										flexDirection: "column",
										gap: 8,
										flexGrow: 1
								}}>
										<div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
												<h4 className={styles.title}>{title}</h4>
												<span className={styles.version}>{version}</span>
										</div>
										<span className={styles.description}>{description}</span>
								</div>
						</div>
				</Link>
		)
}
