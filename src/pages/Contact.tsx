import Section from "../components/Section";
import ui from "../components/ui.module.css";
import styles from "./Contact.module.css";
import { site } from "../content";

export default function Contact() {
	const { title, intro, form, notes } = site.contact;
	return (
		<Section variant="hero">
			<h1>{title}</h1>
			<p className={ui.lede}>{intro}</p>

			<form
				className={styles.formCard}
				style={{ marginTop: "1.5rem" }}
				onSubmit={(e) => {
					e.preventDefault();
					// Demo only — no submission logic.
				}}
			>
				<div className={styles.formGrid}>
					<div className={styles.row2}>
						<div className={styles.field}>
							<label htmlFor="name">Name</label>
							<input id="name" name="name" type="text" placeholder={form.fields.name} required />
						</div>
						<div className={styles.field}>
							<label htmlFor="email">Email</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder={form.fields.email}
								required
							/>
						</div>
					</div>

					<div className={styles.field}>
						<label htmlFor="topic">Topic</label>
						<select id="topic" name="topic" defaultValue="">
							<option value="" disabled>
								Select a topic
							</option>
							{form.fields.topic.map((t) => (
								<option key={t} value={t}>
									{t}
								</option>
							))}
						</select>
					</div>

					<div className={styles.field}>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder={form.fields.message}
							rows={6}
							required
						/>
					</div>

					<div>
						<button type="submit" className={`${ui.button} ${ui.buttonPrimary}`}>
							Send message
						</button>
					</div>
				</div>

				<div className={styles.notes}>
					<p style={{ margin: 0 }}>{notes.response}</p>
					<p style={{ margin: 0 }}>{notes.tip}</p>
				</div>
			</form>
		</Section>
	);
}
