import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import { site } from "../content";

export default function Features() {
	const { title, intro, items, cta } = site.featuresPage;
	return (
		<>
			<Section variant="hero">
				<h1>{title}</h1>
				<p className={ui.lede}>{intro}</p>
			</Section>

			<Section>
				<div className={ui.grid3}>
					{items.map((item) => (
						<div key={item.title} className={ui.card}>
							<h3 className={ui.cardTitle}>{item.title}</h3>
							<p className={ui.cardBody}>{item.body}</p>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className={ui.ctaBlock}>
					<h2>{cta.title}</h2>
					<div className={ui.ctaBlockActions}>
						<Link to="/docs" className={`${ui.button} ${ui.buttonPrimary}`}>
							{cta.action}
						</Link>
					</div>
				</div>
			</Section>
		</>
	);
}
