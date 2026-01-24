import clsx from "clsx";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({
	style,
	arrow,
	fullLang,
	allignText,
}: {
	style: string;
	arrow: boolean;
	fullLang: boolean;
	allignText: string;
}) {
	const router = useRouter();
	const pathname = usePathname();
	const currentLocale = useLocale();

	const handleLanguageChange = (lang: string) => {
		if (lang === currentLocale) return;

		const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
		router.push(newPath);
	};

	const languages = [
		{ lan: "en", label: "EN", longLbl: "English", img: "/flags/en.png" },
		{ lan: "fr", label: "FR", longLbl: "Français", img: "/flags/fr.png" },
		{ lan: "nl", label: "NL", longLbl: "Nederlands", img: "/flags/nl.png" },
	];

	return (
		<div className={clsx("relative inline-flex items-center", style)}>
			<select
				value={currentLocale}
				onChange={(e) => handleLanguageChange(e.target.value)}
				className={clsx(
					allignText,
					"z-10 w-full cursor-pointer appearance-none bg-transparent outline-none",
					{
						"pr-8": arrow, // ajoute padding seulement si arrow = true
					},
				)}
			>
				{languages.map(({ lan, label, longLbl }) => (
					<option key={lan} value={lan} className="bg-[var(--background)]">
						{fullLang ? longLbl : label}
					</option>
				))}
			</select>

			{arrow && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="pointer-events-none absolute right-2 h-4 w-4 text-current"
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
			)}
		</div>
	);
}
