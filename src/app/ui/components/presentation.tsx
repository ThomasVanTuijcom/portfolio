import Image from "next/image";
import { bakehaus, karla } from "../fonts";
import Glassdiv from "./glass-div";
import { useTranslations } from "next-intl";

export default function Presentation({ id }: { id: string }) {
	const t = useTranslations("Presentation");
	return (
		<div id={id} className="flex w-full justify-center">
			<Glassdiv className="my-[110px] flex w-full gap-20 rounded-4xl px-4 py-10 lg:w-3/5 lg:px-15 lg:py-15">
				<div className="flex w-full flex-col justify-center gap-2 lg:w-1/2">
					<h1
						className={`${bakehaus.className} text-3xl text-[var(--text-secondary)]`}
					>
						{t("greeting")}
					</h1>
					<h1 className={`${bakehaus.className} text-3xl`}>{t("name")}</h1>
					<h3 className="font-extrabold">{t("entitlement")}</h3>
					<h4>{t("place")}</h4>
					<p className="mt-5 text-justify text-[var(--text-primary)]">
						{t("presentationText")}
					</p>
					<div className="flex w-full justify-evenly lg:justify-normal lg:gap-10">
						<a
							href="/resume-en.pdf"
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
				<div className="hidden w-1/2 items-center justify-center md:flex">
					<div className="relative h-full w-full">
						<Image
							src="/illustration.png"
							fill
							className="object-contain"
							priority
							alt="Hero Picture"
						/>
					</div>
				</div>
			</Glassdiv>
		</div>
	);
}
