import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

export default function DocsSdkSetup() {
	const { sdkSetup } = site.docs;
	return (
		<Section variant="hero">
			<div className={styles.docPage}>
				<article>
					<p className={styles.breadcrumb}>
						<Link to="/docs">Docs</Link> / {sdkSetup.title}
					</p>
					<h1>{sdkSetup.title}</h1>
					<p className={ui.lede}>{sdkSetup.intro}</p>

					{sdkSetup.sections.map((s) => (
						<div key={s.title} className={styles.docSection}>
							<h2>{s.title}</h2>
							<p>{s.body}</p>
							{"code" in s && s.code ? (
								<pre>
									<code>{s.code}</code>
								</pre>
							) : null}
						</div>
					))}

					<div className={ui.callout} style={{ marginTop: "1.5rem" }}>
						{sdkSetup.callout}
					</div>

					<div className={styles.docFeedback}>
						<span>{sdkSetup.feedback}</span>
						<div className={styles.docFeedbackActions}>
							<button type="button" className={`${ui.button} ${ui.buttonSecondary}`} disabled>
								Yes
							</button>
							<button type="button" className={`${ui.button} ${ui.buttonSecondary}`} disabled>
								No
							</button>
						</div>
					</div>
				</article>

				<aside className={styles.sidebar} aria-label="Related">
					<h4>Related</h4>
					<ul>
						<li>
							<Link to="/docs/getting-started">Getting Started</Link>
						</li>
						<li>
							<Link to="/docs/troubleshooting">Troubleshooting</Link>
						</li>
						<li>
							<Link to="/contact">Contact support</Link>
						</li>
					</ul>
				</aside>
			</div>
		</Section>
	);
}
