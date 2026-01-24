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
	const { theme, toggleTheme } = useTheme();
	const [menuOpen, setMenuOpen] = useState(false);
	const themeIcon = theme == "dark" ? "/moon.svg" : "sun.svg";
	const lanIcon =
		theme == "dark"
			? "/navIcons/dark/icon_Globe.svg"
			: "/navIcons/light/icon_Globe.svg";

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
			{/* Bouton hamburger */}
			{!menuOpen && (
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
			)}

			{/* Bouton de fermeture */}
			{menuOpen && (
				<button
					onClick={() => setMenuOpen(false)}
					className="absolute right-8 md:hidden"
					aria-label="Close menu"
				>
					<div className="flex flex-col gap-1">
						<span className="h-0.5 w-6 translate-y-2 rotate-45 bg-[var(--text-secondary)]" />
						<span className="h-0.5 w-6 -translate-y-2 -rotate-45 bg-[var(--text-secondary)]" />
					</div>
				</button>
			)}
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
							onClick={() => {
								const el = document.getElementById(target);
								if (el) {
									el.scrollIntoView({ behavior: "smooth", block: "start" });
								}
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
				<Glassdiv className="flex justify-center rounded-full font-bold">
					<LanguageSwitcher
						style="flex aspect-square h-full items-center justify-center rounded-full"
						arrow={false}
						fullLang={false}
						allignText="text-center"
					/>
				</Glassdiv>
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
				<div className="fixed inset-0 z-40 flex justify-end bg-black/40 md:hidden">
					<div className="relative h-screen w-[50vw] border-l border-l-[var(--text-secondary)] bg-[var(--background)] px-4 sm:w-[40vw]">
						{/* Bouton de fermeture */}
						<button
							onClick={() => setMenuOpen(false)}
							className="absolute top-6 right-8 z-50 md:hidden"
							aria-label="Close menu"
						>
							<div className="flex flex-col gap-1">
								<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
								<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
								<span className="h-0.5 w-6 bg-[var(--text-secondary)]" />
							</div>
						</button>

						{/* Icônes du menu */}
						<div className="mt-20 flex h-full flex-col">
							{icons.map(({ src, target, label }, i) => {
								return (
									<div
										key={i}
										className="mb-4 flex items-center rounded-md hover:bg-[var(--text-secondary)]"
										onClick={() => {
											const el = document.getElementById(target);
											if (el) {
												const yOffset = -20;
												const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
												window.scrollTo({
													behavior: "smooth",
													top: y,
												});
											}
										}}
									>
										<div className="relative h-6 w-6 p-2 sm:h-7 sm:w-7 md:h-8 md:w-8">
											<Image
												src={src}
												alt={target}
												fill
												className="object-contain"
											/>
										</div>
										<h2 className="ml-2">{label}</h2>
									</div>
								);
							})}
						</div>

						{/* Bloc thème/langues en bas */}
						<div className="absolute bottom-5 flex w-full flex-col justify-between">
							{/* Theme switch à gauche */}
							<div
								className="flex cursor-pointer items-center rounded-md hover:bg-[var(--text-secondary)]"
								onClick={toggleTheme}
							>
								<div className="relative h-6 w-6">
									<Image
										src={themeIcon}
										alt="theme"
										fill
										className="object-contain"
									/>
								</div>
								<h2 className="ml-2">
									{theme === "dark" ? t("darkModeLbl") : t("lightModeLbl")}
								</h2>
							</div>

							{/* Langues à droite */}
							<div className="flex cursor-pointer rounded-md hover:bg-[var(--text-secondary)]">
								<div className="relative h-6 w-6">
									<Image
										src={lanIcon}
										alt="theme"
										fill
										className="object-contain"
									/>
								</div>
								<LanguageSwitcher
									style="ml-2 text-[16px] font-normal"
									arrow={true}
									fullLang={true}
									allignText="text-start"
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
