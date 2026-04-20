import type { CSSProperties, ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
	children: ReactNode;
	variant?: "default" | "tight" | "hero";
	as?: "section" | "div" | "main" | "header" | "footer";
	style?: CSSProperties;
	className?: string;
}

export default function Section({
	children,
	variant = "default",
	as: Tag = "section",
	style,
	className,
}: SectionProps) {
	const cls = [
		styles.section,
		variant === "tight" ? styles.sectionTight : "",
		variant === "hero" ? styles.hero : "",
		className ?? "",
	]
		.filter(Boolean)
		.join(" ");
	return (
		<Tag className={cls} style={style}>
			{children}
		</Tag>
	);
}
