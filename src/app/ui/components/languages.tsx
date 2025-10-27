import LanguageRow from "./language-row";

export default function Languages({ id }: { id: string }) {
	return (
		<div
			id={id}
			className="flex h-[100vh] flex-col items-center justify-center gap-8"
		>
			<LanguageRow
				icons={[
					"/lanIcons/Logo_C.png",
					"/lanIcons/Logo_Cpp.png",
					"/lanIcons/Logo_Git.png",
					"/lanIcons/Logo_HTML.png",
					"/lanIcons/Logo_CSS.png",
				]}
				names={["C", "C++", "Git", "HTML", "CSS"]}
			/>
			<LanguageRow
				icons={[
					"/lanIcons/Logo_Linux.png",
					"/lanIcons/Logo_PHP.png",
					"/lanIcons/Logo_Kotlin.png",
					"/lanIcons/Logo_Laravel.png",
					"/lanIcons/Logo_Spring.png",
				]}
				names={["Linux", "PHP", "Kotlin", "Laravel", "Spring"]}
			/>
			<LanguageRow
				icons={[
					"/lanIcons/Logo_Django.png",
					"/lanIcons/Logo_Java.png",
					"/lanIcons/Logo_JavaScript.png",
					"/lanIcons/Logo_MySQL.png",
					"/lanIcons/Logo_React.png",
				]}
				names={["Django", "Java", "JavaScript", "MySQL", "React"]}
			/>
		</div>
	);
}
