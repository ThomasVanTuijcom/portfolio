"use client";
import { useLocale } from "next-intl";
import Glassdiv from "./glass-div";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { karla } from "../fonts";

export default function LanguageSwitcher({ className }: { className: string }) {
	const router = useRouter();
	const pathname = usePathname();
	const currentLocale = useLocale();

	const handleLanguageChange = (lang: string) => {
		if (lang === currentLocale) return;

		const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
		router.push(newPath);
	};

	const languages = [
		{ lan: "en", label: "EN", img: "/flags/en.png" },
		{ lan: "fr", label: "FR", img: "/flags/fr.png" },
		{ lan: "nl", label: "NL", img: "/flags/nl.png" },
	];

	return (
		<Glassdiv className={className}>
			<select
				value={currentLocale}
				onChange={(e) => handleLanguageChange(e.target.value)}
				className="z-1 w-full cursor-pointer appearance-none bg-transparent text-center font-bold outline-none"
			>
				{languages.map(({ lan, label }) => (
					<option key={lan} value={lan} className="bg-[var(--background)]">
						{label}
					</option>
				))}
			</select>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="pointer-events-none absolute right-5 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</Glassdiv>
	);
}
