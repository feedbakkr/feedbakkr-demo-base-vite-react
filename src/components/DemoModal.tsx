import { useEffect, useRef, useState } from "react";
import styles from "./DemoModal.module.css";

/**
 * First-run modal for the demo family. Show once per browser, store the
 * acknowledgement in local storage so repeat visits skip it. The key and copy
 * are shared across every feedbakkr-demo-base-* repo.
 */
const ACK_KEY = "feedbakkr-demo-ack";

export default function DemoModal() {
	const [open, setOpen] = useState(false);
	const dialogRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		try {
			if (localStorage.getItem(ACK_KEY) !== "1") setOpen(true);
		} catch {
			// SSR / storage disabled — show once per session.
			setOpen(true);
		}
	}, []);

	useEffect(() => {
		if (!open) return;
		// Focus the confirm button for keyboard users.
		buttonRef.current?.focus();
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") dismiss();
		}
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	function dismiss() {
		try {
			localStorage.setItem(ACK_KEY, "1");
		} catch {
			// ignore — best effort
		}
		setOpen(false);
	}

	if (!open) return null;

	return (
		<div
			className={styles.backdrop}
			onClick={(e) => {
				if (e.target === e.currentTarget) dismiss();
			}}
		>
			<div
				ref={dialogRef}
				role="dialog"
				aria-modal="true"
				aria-labelledby="demo-modal-title"
				aria-describedby="demo-modal-body"
				className={styles.dialog}
			>
				<span className={styles.eyebrow}>Demo project</span>
				<h2 id="demo-modal-title" className={styles.title}>
					Welcome — this is a demo
				</h2>
				<p id="demo-modal-body" className={styles.body}>
					This is a base demo created to support the Feedbakkr integration guides. It's
					intentionally small and simple so the walkthrough steps stay easy to follow.
				</p>
				<p className={styles.body}>
					It isn't meant to be production-ready — explore the structure alongside the docs, and
					treat it as a starting point rather than a template.
				</p>
				<div className={styles.actions}>
					<button ref={buttonRef} type="button" className={styles.button} onClick={dismiss}>
						Got it
					</button>
				</div>
			</div>
		</div>
	);
}
