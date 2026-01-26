import { useTranslations } from "next-intl";
import Image from "next/image";
import { bakehaus } from "../fonts";
import Glassdiv from "./glass-div";

export default function About({ id }: { id: string }) {
	const t = useTranslations("About");

	return (
		<div id={id}>
			<div className="hidden h-[100vh] w-full flex-row items-center justify-center sm:flex">
				<Glassdiv className="flex h-[500px] w-[800px] flex-row gap-5 overflow-hidden rounded-2xl px-15 py-10">
					<div className="relative hidden h-full w-1/3 sm:block">
						<Image
							src="/debout.png"
							alt={t("standingProfileImgAlt")}
							fill
							className="object-contain"
							priority
						/>
					</div>
					<div className="flex w-full flex-col justify-center text-white sm:w-2/3">
						<h2
							className={`${bakehaus.className} font-regular mb-4 text-3xl text-[var(--text-secondary)]`}
						>
							{t("title")}
						</h2>
						<p className="font-regular mb-4 text-justify text-[var(--text-primary)]">
							{t("description")}
						</p>
					</div>
				</Glassdiv>
			</div>
			<div
				id={id}
				className="flex min-h-screen w-full items-center justify-center sm:hidden"
			>
				<Glassdiv className="w-full max-w-2xl rounded-2xl px-6 py-10 sm:px-12 sm:py-16">
					<div className="relative text-white">
						<h2
							className={`${bakehaus.className} mb-4 text-3xl text-[var(--text-secondary)]`}
						>
							{t("title")}
						</h2>
						<div className="relative left-6 float-right h-[178px] w-[100px]">
							<Image
								src="/debout.png"
								alt={t("standingProfileImgAlt")}
								fill
								className="object-contain"
								priority
							/>
						</div>

						<p className="text-justify leading-relaxed text-[var(--text-primary)]">
							{t("description")}
						</p>
					</div>
				</Glassdiv>
			</div>
		</div>
	);
}
