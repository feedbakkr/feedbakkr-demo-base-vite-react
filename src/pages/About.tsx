import Section from "../components/Section";
import ui from "../components/ui.module.css";
import { site } from "../content";

export default function About() {
	const { title, intro, sections, closing } = site.about;
	return (
		<>
			<Section variant="hero">
				<h1>{title}</h1>
				<p className={ui.lede}>{intro}</p>
			</Section>

			<Section>
				<div className={ui.grid3}>
					{sections.map((s) => (
						<div key={s.title} className={ui.card}>
							<h3 className={ui.cardTitle}>{s.title}</h3>
							<p className={ui.cardBody}>{s.body}</p>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className={ui.ctaBlock}>
					<h2>{closing}</h2>
				</div>
			</Section>
		</>
	);
}
