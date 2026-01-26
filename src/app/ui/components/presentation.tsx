import { useTranslations } from "next-intl";
import Image from "next/image";
import { Cursor, Typewriter } from "nextjs-simple-typewriter";
import { bakehaus } from "../fonts";
import Glassdiv from "./glass-div";

export default function Presentation({ id }: { id: string }) {
	const t = useTranslations("Presentation");
	const greetings = [t("greetings.g1"), t("greetings.g2"), t("greetings.g3")];
	return (
		<div id={id} className="flex w-full justify-center">
			<Glassdiv className="my-[100px] flex w-[1152px] gap-20 rounded-4xl px-4 py-10 md:px-8">
				<div className="flex w-auto flex-col justify-center gap-2 md:max-w-[480px]">
					<h1
						className={`${bakehaus.className} text-3xl text-[var(--text-secondary)]`}
					>
						<Typewriter
							words={greetings}
							loop={0}
							delaySpeed={3000}
							typeSpeed={200}
							deleteSpeed={170}
						/>
						<Cursor />
					</h1>
					<h1 className={`${bakehaus.className} text-3xl`}>{t("name")}</h1>
					<h3 className="font-extrabold">{t("entitlement")}</h3>
					<h4>{t("place")}</h4>
					<p className="mt-5 text-justify text-[var(--text-primary)]">
						{t("presentationText")}
					</p>
					<div className="flex w-full justify-evenly">
						<a
							href={t("resumeHref")}
							download
							className="z-1 mt-6 flex w-2/5 items-center justify-center gap-2 rounded-2xl bg-[var(--text-secondary)] px-5 py-2 font-bold text-[#292C33]"
						>
							{t("resumeBtn")}
							<Image
								src="/download.svg"
								alt="Download Icon"
								width={20} // specify size
								height={20}
								className="object-contain"
							/>
						</a>
						<a
							href="https://github.com/ThomasVanTuijcom"
							target="_blank"
							rel="noopener noreferrer"
							className="z-1 mt-6 flex w-2/5 items-center justify-center gap-2 rounded-2xl border-1 border-[var(--text-secondary)] bg-[#292C33] px-5 py-2 font-bold text-[var(--text-secondary)]"
						>
							GitHub
							<Image
								src="/new-tab.png"
								alt="New Tab Icon"
								width={20}
								height={20}
								className="object-contain"
							/>
						</a>
					</div>
				</div>
				<div className="hidden flex-1 items-center justify-center md:flex">
					<div className="relative aspect-square w-full max-w-[549px] min-w-[250px]">
						<Image
							src="/illustration.png"
							alt="Hello"
							fill
							className="object-contain"
						/>
					</div>
				</div>
			</Glassdiv>
		</div>
	);
}
