import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Home.module.css";
import { site } from "../content";

export default function Home() {
	const { hero, whatItDoes, features, howItWorks, stats, cta } = site.home;
	return (
		<>
			<Section variant="hero" className={styles.hero}>
				<span className={styles.eyebrow}>{site.product.phrases[0]}</span>
				<h1 className={styles.heroTitle}>{hero.title}</h1>
				<p className={styles.heroSubtitle}>{hero.subtitle}</p>
				<p className={styles.heroBody}>{hero.body}</p>
				<div className={styles.heroActions}>
					<Link to="/docs" className={`${ui.button} ${ui.buttonPrimary}`}>
						{hero.primaryCTA}
					</Link>
					<Link to="/contact" className={`${ui.button} ${ui.buttonSecondary}`}>
						{hero.secondaryCTA}
					</Link>
				</div>
			</Section>

			<Section>
				<div className={ui.sectionHeader}>
					<h2>{whatItDoes.title}</h2>
					<p className={ui.lede}>{whatItDoes.body}</p>
				</div>

				<div className={ui.grid2}>
					{features.map((f) => (
						<div key={f.title} className={ui.card}>
							<h3 className={ui.cardTitle}>{f.title}</h3>
							<p className={ui.cardBody}>{f.body}</p>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className={ui.sectionHeader}>
					<h2>How it works</h2>
					<p className={ui.lede}>
						A small, predictable loop — capture, structure, and route signals to where your
						team already works.
					</p>
				</div>
				<ol className={styles.howItWorks}>
					{howItWorks.map((step) => (
						<li key={step}>{step}</li>
					))}
				</ol>
			</Section>

			<Section>
				<div className={ui.sectionHeader}>
					<h2>Signals at a glance</h2>
					<p className={ui.lede}>Mock numbers used for illustrative demo purposes.</p>
				</div>
				<div className={ui.statGrid}>
					{stats.map((s) => (
						<div key={s} className={ui.statItem}>
							{s}
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className={ui.ctaBlock}>
					<h2>{cta.title}</h2>
					<p className={ui.lede} style={{ margin: "0 auto" }}>
						{cta.body}
					</p>
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
