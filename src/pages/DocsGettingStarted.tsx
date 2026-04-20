import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

export default function DocsGettingStarted() {
	const { gettingStarted } = site.docs;
	return (
		<Section variant="hero">
			<div className={styles.docPage}>
				<article>
					<p className={styles.breadcrumb}>
						<Link to="/docs">Docs</Link> / {gettingStarted.title}
					</p>
					<h1>{gettingStarted.title}</h1>
					<p className={ui.lede}>{gettingStarted.intro}</p>

					{gettingStarted.sections.map((s) => (
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
						{gettingStarted.callout}
					</div>

					<div className={styles.docFeedback}>
						<span>{gettingStarted.feedback}</span>
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
							<Link to="/docs/sdk-setup">SDK Setup</Link>
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
