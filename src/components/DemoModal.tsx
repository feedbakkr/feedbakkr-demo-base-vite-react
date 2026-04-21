import { useEffect, useRef } from "react";
import styles from "./DemoModal.module.css";

/**
 * Demo-project modal. Controlled from the outside so the top bar can re-open
 * it after the first-run dismissal. Writing the ack is still the modal's
 * concern — the first dismissal persists so subsequent visits don't auto-open.
 * Shared local-storage key across every feedbakkr-demo-base-* repo.
 */
export const DEMO_MODAL_ACK_KEY = "feedbakkr-demo-ack";

type DemoModalProps = {
	open: boolean;
	onClose: () => void;
};

export default function DemoModal({ open, onClose }: DemoModalProps) {
	const buttonRef = useRef<HTMLButtonElement | null>(null);

	useEffect(() => {
		if (!open) return;
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
			localStorage.setItem(DEMO_MODAL_ACK_KEY, "1");
		} catch {
			// ignore — best effort
		}
		onClose();
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
				role="dialog"
				aria-modal="true"
				aria-labelledby="demo-modal-title"
				aria-describedby="demo-modal-body"
				className={styles.dialog}
			>
				<span className={styles.eyebrow}>Demo project</span>
				<h2 id="demo-modal-title" className={styles.title}>
					About this demo
				</h2>
				<p id="demo-modal-body" className={styles.body}>
					This is a demo application created to support the Feedbakkr integration guides. It's
					intentionally small and simple so the walkthrough steps stay easy to follow.
				</p>
				<p className={styles.body}>
					It is <strong>not</strong> a production-ready solution — there's no backend, no
					authentication, and no real data. Treat the structure as a starting point to explore
					alongside the Feedbakkr documentation.
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
