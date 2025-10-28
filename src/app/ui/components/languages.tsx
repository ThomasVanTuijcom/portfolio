import Image from "next/image";
import Glassdiv from "./glass-div";

export default function Languages({ id }: { id: string }) {
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

	const rows = [];
	for (let i = 0; i < languages.length; i += 5) {
		rows.push(
			<div key={i} className="flex w-full flex-col items-center">
				<Glassdiv className="flex w-full flex-row justify-between rounded-full px-15 py-5 lg:w-3/7">
					{languages.slice(i, i + 5).map((lang, j) => (
						<div
							key={j}
							className="relative flex h-24 w-24 items-center justify-center"
						>
							<div className="absolute inset-0 z-1 rounded-full bg-white/100 shadow-[0_0_2px_2px_rgba(255,255,255,1)] blur-[5px] hover:bg-[var(--text-secondary)]"></div>
							<Image
								src={lang.icon}
								alt="icon"
								fill
								className="z-2 transform object-contain p-2 transition-transform duration-200 ease-in-out hover:scale-120"
							/>
						</div>
					))}
				</Glassdiv>
				<div className="flex w-full flex-row justify-between px-15 py-2 lg:w-3/7">
					{languages.slice(i, i + 5).map((lang, i) => (
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
			className="flex h-[100vh] flex-col items-center justify-center gap-8"
		>
			{rows}
		</div>
	);
}
