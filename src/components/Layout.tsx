import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { site } from "../content";
import styles from "./Layout.module.css";

const NAV_ITEMS: { label: string; to: string }[] = [
	{ label: "Home", to: "/" },
	{ label: "Features", to: "/features" },
	{ label: "Docs", to: "/docs" },
	{ label: "Contact", to: "/contact" },
	{ label: "About", to: "/about" },
];

export default function Layout() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<div className={styles.shell}>
			<header className={styles.header}>
				<div className={styles.headerInner}>
					<Link to="/" className={styles.brand} onClick={() => setMobileOpen(false)}>
						<span className={styles.brandMark} aria-hidden="true" />
						<span>{site.product.name}</span>
					</Link>

					<nav className={styles.nav} aria-label="Primary">
						{NAV_ITEMS.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								end={item.to === "/"}
								className={({ isActive }) =>
									isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
								}
							>
								{item.label}
							</NavLink>
						))}
					</nav>

					<button
						type="button"
						className={styles.menuButton}
						onClick={() => setMobileOpen((v) => !v)}
						aria-expanded={mobileOpen}
						aria-controls="mobile-nav"
					>
						{mobileOpen ? "Close" : "Menu"}
					</button>
				</div>

				{mobileOpen && (
					<div id="mobile-nav" className={styles.mobileNav}>
						{NAV_ITEMS.map((item) => (
							<NavLink
								key={item.to}
								to={item.to}
								end={item.to === "/"}
								onClick={() => setMobileOpen(false)}
								className={({ isActive }) =>
									isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
								}
							>
								{item.label}
							</NavLink>
						))}
					</div>
				)}
			</header>

			<main className={styles.main}>
				<Outlet />
			</main>

			<footer className={styles.footer}>
				<div className={styles.footerInner}>
					<div>
						<p className={styles.footerNote}>{site.navigation.footerNote}</p>
						<p className={styles.footerMicro}>{site.navigation.footerMicro}</p>
					</div>
					<div className={styles.footerLinks}>
						<Link to="/docs">Docs</Link>
						<Link to="/contact">Contact</Link>
						<Link to="/about">About</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}
