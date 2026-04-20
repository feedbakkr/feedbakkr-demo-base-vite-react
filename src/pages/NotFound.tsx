import { Link } from "react-router-dom";
import Section from "../components/Section";
import ui from "../components/ui.module.css";
import { site } from "../content";

export default function NotFound() {
	const { title, body, cta } = site.error404;
	return (
		<Section variant="hero">
			<div style={{ textAlign: "center" }}>
				<p style={{ color: "var(--accent)", letterSpacing: "0.09em", fontWeight: 600 }}>404</p>
				<h1>{title}</h1>
				<p className={ui.lede} style={{ margin: "0 auto 1.25rem" }}>
					{body}
				</p>
				<Link to="/" className={`${ui.button} ${ui.buttonPrimary}`}>
					{cta}
				</Link>
			</div>
		</Section>
	);
}
