import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

const DOC_PATHS = [
	{ title: "Getting Started", path: "/docs/getting-started" },
	{ title: "SDK Setup", path: "/docs/sdk-setup" },
	{ title: "Troubleshooting", path: "/docs/troubleshooting" },
];

export default function DocsIndex() {
	const { index } = site.docs;
	return (
		<Section variant="hero">
			<h1>{index.title}</h1>
			<p className={ui.lede}>{index.intro}</p>

			<div className={styles.docCardRow} style={{ marginTop: "1.75rem" }}>
				{index.pages.map((p) => {
					const target = DOC_PATHS.find((d) => d.title === p.title)?.path ?? "/docs";
					return (
						<Link key={p.title} to={target} className={`${ui.card} ${ui.cardLink}`}>
							<h3 className={ui.cardTitle}>{p.title}</h3>
							<p className={ui.cardBody}>{p.description}</p>
						</Link>
					);
				})}
			</div>

			<div className={ui.callout} style={{ marginTop: "1.5rem" }}>
				{index.note}
			</div>
		</Section>
	);
}
