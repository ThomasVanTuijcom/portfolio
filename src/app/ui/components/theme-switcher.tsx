import { useState } from "react";
import Glassdiv from "./glass-div";
import { useTheme } from "./theme-context";
import Image from "next/image";

export default function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	const src = theme == "dark" ? "/moon.svg" : "sun.svg";

	return (
		<Glassdiv className="flex aspect-square h-full items-center justify-center rounded-full p-4">
			<button
				onClick={toggleTheme}
				className="z-1 flex h-full w-full items-center justify-center cursor-pointer"
			>
				<Image
					src={src}
					alt="Theme Icon"
					width={32} // tu peux ajuster
					height={32}
				/>
			</button>
		</Glassdiv>
	);
}
