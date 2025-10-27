"use client";

import Image from "next/image";
import Glassdiv from "./glass-div";
import { useState, useRef } from "react";
import { karla } from "../fonts";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./language-switcher";
import ThemeSwitcher from "./theme-switcher";
import { useTheme } from "./theme-context";

export default function NavBar() {
	const [tooltip, setTooltip] = useState<{
		label: string;
		left: number;
		top: number;
	} | null>(null);
	const t = useTranslations("Navigation");
	const { theme } = useTheme();

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
		<nav className="relative flex w-full items-center justify-center">
			<Glassdiv className="flex h-14 w-9/10 flex-row items-center justify-between rounded-full px-8 py-3 md:w-1/2 lg:w-1/5">
				{icons.map(({ src, target, label }, i) => {
					const iconRef = useRef<HTMLDivElement>(null);

					return (
						<div
							key={i}
							ref={iconRef}
							className="relative flex cursor-pointer flex-col items-center"
							onMouseEnter={() => {
								if (iconRef.current) {
									const rect = iconRef.current.getBoundingClientRect();
									setTooltip({
										label,
										left: rect.left + rect.width / 2 + window.scrollX,
										top: rect.bottom + window.scrollY - 15,
									});
								}
							}}
							onMouseLeave={() => setTooltip(null)}
							onClick={() =>
								document
									.getElementById(target)
									?.scrollIntoView({ behavior: "smooth" })
							}
						>
							<div className="relative rounded-md p-1 transition-all duration-200 hover:scale-110 hover:bg-[var(--text-secondary)]">
								<Image
									src={src}
									alt={target}
									width={32}
									height={32}
									className="object-contain"
								/>
							</div>
						</div>
					);
				})}
			</Glassdiv>
			<div className="absolute right-10 hidden h-full w-1/8 justify-end gap-2 md:flex">
				<ThemeSwitcher />
				<LanguageSwitcher className="flex h-full w-1/2 items-center justify-center rounded-full" />
			</div>

			{tooltip && (
				<div
					className="absolute z-50 hidden rounded-md bg-[var(--tooltip-background)] px-2 py-1 text-sm font-bold sm:block"
					style={{
						top: tooltip.top,
						left: tooltip.left,
						transform: "translateX(-50%)",
					}}
				>
					{tooltip.label}
				</div>
			)}
		</nav>
	);
}
