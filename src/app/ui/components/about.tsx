import { useTranslations } from "next-intl";
import Image from "next/image";
import { bakehaus, karla } from "../fonts";
import Glassdiv from "./glass-div";

export default function About({ id }: { id: string }) {
	const t = useTranslations("About");

	return (
		<div
			id={id}
			className="flex h-[100vh] w-full flex-row items-center justify-center"
		>
			<Glassdiv className="flex w-full flex-row overflow-hidden rounded-2xl px-4 py-10 sm:h-6/10 sm:px-20 sm:py-15 lg:w-1/2">
				<div className="relative hidden h-full w-1/3 sm:block">
					<Image
						src="/debout.png"
						alt="Profile standing image"
						fill
						className="object-contain"
						priority
					/>
				</div>
				<div className="flex w-full flex-col justify-center text-white sm:w-2/3 sm:p-20">
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
	);
}
