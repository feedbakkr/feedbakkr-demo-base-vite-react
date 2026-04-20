import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Docs.module.css";
import { site } from "../content";

export default function DocsTroubleshooting() {
	const { troubleshooting } = site.docs;
	return (
		<Section variant="hero">
			<div className={styles.docPage}>
				<article>
					<p className={styles.breadcrumb}>
						<Link to="/docs">Docs</Link> / {troubleshooting.title}
					</p>
					<h1>{troubleshooting.title}</h1>
					<p className={ui.lede}>{troubleshooting.intro}</p>

					<ul className={styles.issueList}>
						{troubleshooting.issues.map((issue) => (
							<li key={issue.title}>
								<p className={styles.issueTitle}>{issue.title}</p>
								<p className={styles.issueBody}>{issue.resolution}</p>
							</li>
						))}
					</ul>

					<p style={{ marginTop: "1.5rem", color: "var(--text-muted)" }}>
						{troubleshooting.cta}{" "}
						<Link to="/contact">Contact us</Link>.
					</p>

					<div className={styles.docFeedback}>
						<span>{troubleshooting.feedback}</span>
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
							<Link to="/docs/sdk-setup">SDK Setup</Link>
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
