import Image from "next/image";
import Glassdiv from "./glass-div";
import { useTheme } from "./theme-context";

export default function ThemeSwitcher() {
	const { theme, toggleTheme } = useTheme();
	const src = theme == "dark" ? "/moon.svg" : "sun.svg";

	return (
		<Glassdiv className="flex aspect-square h-full items-center justify-center rounded-full p-4">
			<button
				onClick={toggleTheme}
				className="z-1 flex h-full w-full cursor-pointer items-center justify-center"
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
