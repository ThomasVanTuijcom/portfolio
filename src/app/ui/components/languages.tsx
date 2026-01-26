"use client";
import Image from "next/image";
import Glassdiv from "./glass-div";
import { useEffect, useState } from "react";

export default function Languages({ id }: { id: string }) {
	const DEFAULT_ICONS_PER_ROW = 5;
	const languages = [
		{ icon: "/lanIcons/Logo_C.png", name: "C" },
		{ icon: "/lanIcons/Logo_Cpp.png", name: "C++" },
		{ icon: "/lanIcons/Logo_Git.png", name: "Git" },
		{ icon: "/lanIcons/Logo_HTML.png", name: "HTML" },
		{ icon: "/lanIcons/Logo_CSS.png", name: "CSS" },
		{ icon: "/lanIcons/Logo_Linux.png", name: "Linux" },
		{ icon: "/lanIcons/Logo_PHP.png", name: "PHP" },
		{ icon: "/lanIcons/Logo_Kotlin.png", name: "Kotlin" },
		{ icon: "/lanIcons/Logo_Laravel.png", name: "Laravel" },
		{ icon: "/lanIcons/Logo_Spring.png", name: "Spring" },
		{ icon: "/lanIcons/Logo_Django.png", name: "Django" },
		{ icon: "/lanIcons/Logo_Java.png", name: "Java" },
		{ icon: "/lanIcons/Logo_JavaScript.png", name: "JavaScript" },
		{ icon: "/lanIcons/Logo_MySQL.png", name: "MySQL" },
		{ icon: "/lanIcons/Logo_React.png", name: "React" },
	];

	const [iconsPerRow, setIconsPerRow] = useState(DEFAULT_ICONS_PER_ROW);

	useEffect(() => {
		const getIconsPerRow = () => {
			if (window.innerWidth < 640) return 3;
			if (window.innerWidth < 1024) return 4;
			return 5;
		};
		setIconsPerRow(getIconsPerRow());

		const handleResize = () => setIconsPerRow(getIconsPerRow());
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const rows = [];
	for (let i = 0; i < languages.length; i += iconsPerRow) {
		rows.push(
			<div key={i} className="flex w-full flex-col items-center">
				<Glassdiv className="flex w-full flex-row justify-between rounded-full px-5 py-5 sm:px-11 md:px-15 lg:px-9 xl:px-11 2xl:px-15">
					{languages.slice(i, i + iconsPerRow).map((lang, j) => (
						<div
							key={j}
							className="relative flex aspect-square h-20 w-20 min-w-16 justify-center sm:h-24 sm:w-24"
						>
							<div className="absolute inset-3 z-1 rounded-full bg-white/100 shadow-[0_0_2px_0px_rgba(255,255,255,1)] blur-[8px] hover:bg-[var(--text-secondary)]"></div>
							<Image
								src={lang.icon}
								alt="icon"
								fill
								className="z-2 transform object-contain p-2 transition-transform duration-200 ease-in-out hover:scale-120"
							/>
						</div>
					))}
				</Glassdiv>
				<div className="flex w-full flex-row justify-between rounded-full px-5 py-5 sm:px-11 md:px-15 lg:px-9 xl:px-11 2xl:px-15">
					{languages.slice(i, i + iconsPerRow).map((lang, i) => (
						<div
							key={i}
							className="relative flex w-24 items-center justify-center"
						>
							<h3 className="font-extrabold">{lang.name}</h3>
						</div>
					))}
				</div>
			</div>,
		);
	}

	return (
		<div
			id={id}
			className="mx-auto flex h-[100vh] flex-col items-center justify-center my-32 gap-8 sm:px-12 md:px-20 lg:w-[860px]"
		>
			{rows}
		</div>
	);
}
