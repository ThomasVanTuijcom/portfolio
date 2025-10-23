'use client';
import { useLocale } from "next-intl";
import Glassdiv from "./glassdiv";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { karla } from "../fonts";

export default function LanguageSwitcher({
    className,
} : {
    className: string,
}) {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();
    const [hovered, setHovered] = useState<string | null>(null);

    const handleLanguageChange = (lang: string) => {
        if (lang === currentLocale) return;

        const newPath = pathname.replace(`/${currentLocale}`, `/${lang}`);
        router.push(newPath);
    };

    const languages = [
        { lan: 'en', label: 'EN', img: '/flags/en.png' },
        { lan: 'fr', label: 'FR', img: '/flags/fr.png' },
        { lan: 'nl', label: 'NL', img: '/flags/nl.png' }
    ]

    return (
        <Glassdiv className={className}>
            <select
                value={currentLocale}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className={`${karla.className} w-full bg-transparent text-center font-bold appearance-none outline-none cursor-pointer z-1`}
            >
                {languages.map(({ lan, label }) => (
                    <option
                        key={lan}
                        value={lan}
                        className={`${karla.className} bg-[#292C33]`}
                    >
                        {label}
                    </option>
                ))}
            </select>
            {/* optional down-arrow icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-5 w-4 h-4 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </Glassdiv>
    );
}