"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRef, useState } from "react";
import Glassdiv from "./glass-div";
import LanguageSwitcher from "./language-switcher";
import { useTheme } from "./theme-context";
import ThemeSwitcher from "./theme-switcher";

export default function NavBar() {
	const [tooltip, setTooltip] = useState<{
		label: string;
		left: number;
		top: number;
	} | null>(null);
	const t = useTranslations("Navigation");
	const { theme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);

	const icons = [
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_Home.svg"
					: "/navIcons/dark/icon_Home.png",
			target: "home",
			label: t("homeLbl"),
		},
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_Tool.svg"
					: "/navIcons/dark/icon_Tool.png",
			target: "skills",
			label: t("skillsLbl"),
		},
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_Folder.svg"
					: "/navIcons/dark/icon_Folder.png",
			target: "projects",
			label: t("projectsLbl"),
		},
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_Experience.svg"
					: "/navIcons/dark/icon_Experience.svg",
			target: "experience",
			label: t("experienceLbl"),
		},
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_User.svg"
					: "/navIcons/dark/icon_User.png",
			target: "about",
			label: t("aboutLbl"),
		},
		{
			src:
				theme == "light"
					? "/navIcons/light/icon_Message.svg"
					: "/navIcons/dark/icon_Message.png",
			target: "contact",
			label: t("contactLbl"),
		},
	];

	return (
		<nav className="relative flex w-full items-center justify-center px-4">
			<button
				onClick={() => setMenuOpen(true)}
				className="absolute right-8 md:hidden"
				aria-label="Open menu"
			>
				<div className="flex flex-col gap-1">
					<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
					<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
					<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
				</div>
			</button>
			<Glassdiv className="hidden h-14 w-[445px] flex-row items-center justify-between rounded-full px-4 py-3 sm:px-8 md:flex">
				{icons.map(({ src, target, label }, i) => {
					return (
						<div
							key={i}
							onMouseEnter={(e) => {
								const rect = e.currentTarget.getBoundingClientRect();
								console.log(e.currentTarget);
								setTooltip({
									label,
									left: rect.left + rect.width / 2 + window.scrollX,
									top: rect.bottom + window.scrollY - 12,
								});
							}}
							onMouseLeave={() => {
								setTooltip(null);
							}}
							className="flex cursor-pointer flex-col items-center"
						>
							<div className="relative mx-1.5 h-6 w-6 rounded-md p-2 transition-all duration-200 hover:scale-110 hover:bg-[var(--text-secondary)] sm:mx-2 sm:h-7 sm:w-7 md:h-8 md:w-8">
								<Image src={src} alt={target} fill className="object-contain" />
							</div>
						</div>
					);
				})}
			</Glassdiv>
			<div className="absolute top-1/2 right-4 hidden h-full -translate-y-1/2 gap-2 md:flex">
				<ThemeSwitcher />
				<LanguageSwitcher />
			</div>

			{tooltip && (
				<div
					className="pointer-events-none absolute z-50 rounded-md bg-[var(--tooltip-background)] px-2 py-1 text-center text-sm font-bold whitespace-nowrap"
					style={{
						top: tooltip.top,
						left: tooltip.left,
						transform: "translateX(-50%)",
					}}
				>
					{tooltip.label}
				</div>
			)}

			{menuOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 md:hidden">
					<Glassdiv className="w-[90%] max-w-sm rounded-2xl p-6">
						<div className="flex justify-end">
							<button
								onClick={() => setMenuOpen(false)}
								className="text-xl font-bold"
							>
								✕
							</button>
						</div>

						<ul className="mt-6 flex flex-col gap-6">
							{icons.map(({ src, target, label }, i) => (
								<li
									key={i}
									className="flex items-center gap-4 text-lg"
									onClick={() => setMenuOpen(false)}
								>
									<div className="relative h-6 w-6">
										<Image
											src={src}
											alt={label}
											fill
											className="object-contain"
										/>
									</div>
									<span>{label}</span>
								</li>
							))}
						</ul>

						<div className="mt-8 flex justify-between">
							<ThemeSwitcher />
							<LanguageSwitcher />
						</div>
					</Glassdiv>
				</div>
			)}
		</nav>
	);
}
