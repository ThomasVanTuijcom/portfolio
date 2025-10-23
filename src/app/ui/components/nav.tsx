'use client';

import Image from 'next/image';
import Glassdiv from "./glassdiv";
import { useState, useRef } from "react";
import { karla } from "../fonts";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./languageSwitcher";
import ThemeSwitcher from './themeSwitcher';

export default function NavBar() {
    const [tooltip, setTooltip] = useState<{ label: string, left: number, top: number } | null>(null);
    const t = useTranslations('Navigation');

    const icons = [
        { src: "/navIcons/icon_Home.png", target: "home", label: t('homeLbl') },
        { src: "/navIcons/icon_Tool.png", target: "skills", label: t('skillsLbl') },
        { src: "/navIcons/icon_Folder.png", target: "projects", label: t('projectsLbl') },
        { src: "/navIcons/icon_Experience.svg", target: "experience", label: t('experienceLbl') },
        { src: "/navIcons/icon_User.png", target: "about", label: t('aboutLbl') },
        { src: "/navIcons/icon_Message.png", target: "contact", label: t('contactLbl') },
    ];

    return (
        <div className="relative flex flex-row justify-center items-center my-8 w-full">
            <Glassdiv className="flex flex-row justify-between items-center w-1/5 h-14 px-8 py-3 rounded-full">
                {icons.map(({ src, target, label }, i) => {
                    const iconRef = useRef<HTMLDivElement>(null);

                    return (
                        <div
                            key={i}
                            ref={iconRef}
                            className="relative flex flex-col items-center cursor-pointer"
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
                                document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            <div className="relative p-1 rounded-md hover:bg-[var(--text-secondary)] hover:scale-110 transition-all duration-200">
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
            <div className="absolute flex justify-end right-10 gap-2 h-full w-1/8">
                <ThemeSwitcher />
                <LanguageSwitcher className="flex justify-center items-center w-1/2 h-full rounded-full"/>
            </div>

            {tooltip && (
                <div
                    className={`${karla.className} absolute bg-[#292C33] px-2 py-1 rounded-md text-sm z-50 font-bold`}
                    style={{
                        top: tooltip.top,
                        left: tooltip.left,
                        transform: "translateX(-50%)",
                    }}
                >
                    {tooltip.label}
                </div>
            )}
        </div>
    );
}