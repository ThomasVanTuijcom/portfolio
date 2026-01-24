"use client";
import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { bakehaus } from "../fonts";
import { useTheme } from "./theme-context";

export default function ResumeScroll({ id }: { id: string }) {
	const t = useTranslations("Resume");
	const exp = useTranslations("Resume.Experience");
	const edu = useTranslations("Resume.Education");
	const { theme } = useTheme();
	const experience = [
		{
			title: exp("job1.title"),
			subtitle: exp("job1.subtitle"),
			place: exp("job1.place"),
			date: exp("job1.date"),
		},
		{
			title: exp("job2.title"),
			subtitle: exp("job2.subtitle"),
			place: exp("job2.place"),
			date: exp("job2.date"),
		},
		{
			title: exp("job3.title"),
			subtitle: exp("job3.subtitle"),
			place: exp("job3.place"),
			date: exp("job3.date"),
		},
		{
			title: exp("job4.title"),
			subtitle: exp("job4.subtitle"),
			place: exp("job4.place"),
			date: exp("job4.date"),
		},
	];
	const education = [
		{
			title: edu("edu1.title"),
			subtitle: edu("edu1.subtitle"),
			place: edu("edu1.place"),
			date: edu("edu1.date"),
		},
		{
			title: edu("edu2.title"),
			subtitle: edu("edu2.subtitle"),
			place: edu("edu2.place"),
			date: edu("edu2.date"),
		},
		{
			title: edu("edu3.title"),
			subtitle: edu("edu3.subtitle"),
			place: edu("edu3.place"),
			date: edu("edu3.date"),
		},
	];

	const containerRefDesktop = useRef<HTMLDivElement>(null);
	const { scrollYProgress: scrollDesktop } = useScroll({
		target: containerRefDesktop,
		offset: ["center end", "end center"],
	});
	const progressHeightDesktop = useTransform(
		scrollDesktop,
		[0, 1],
		["0%", "100%"],
	);

	const containerRefMobile = useRef<HTMLDivElement>(null);
	const { scrollYProgress: scrollMobile } = useScroll({
		target: containerRefMobile,
		offset: ["center end", "end center"],
	});
	const progressHeightMobile = useTransform(
		scrollMobile,
		[0, 1],
		["0%", "100%"],
	);
	let rowIndex = 0;

	return (
		<div id={id}>
			<div
				ref={containerRefMobile}
				className={clsx(
					"flex w-full justify-center py-20 md:hidden",
					theme === "light" &&
						"bg-[radial-gradient(ellipse_45%_100%_at_53%_50%,rgba(245,245,245,0.8)_40%,rgba(245,245,245,0)_50%)]",
				)}
			>
				<div
					className="grid grid-cols-[5%_80%] gap-8"
					style={{
						gridTemplateRows: `repeat(${experience.length + education.length + 2}, auto)`,
					}}
				>
					<div
						style={{
							gridRow: `span ${experience.length + education.length + 2} / span ${experience.length + education.length + 2}`,
						}}
						className="col-start-1 row-start-1 flex justify-center"
					>
						<div className="relative h-full w-[4px] rounded-full bg-[linear-gradient(to_bottom,transparent_0%,#A6A3A3_7%,#A6A3A3_93%,transparent_100%)]">
							<motion.div
								className="absolute top-0 left-1/2 w-[6px] origin-top -translate-x-1/2 rounded-full bg-(--text-secondary) shadow-[0_0_20px_var(--text-secondary)]"
								style={{ height: progressHeightMobile }}
							/>
						</div>
					</div>
					<div className="col-start-2 row-start-1 mb-4">
						<h2
							className={`${bakehaus.className} text-3xl text-[var(--text-secondary)]`}
						>
							{t("expTitle")}
						</h2>
					</div>
					{experience.map(({ title, subtitle, place, date }, i) => {
						const currentRow = i + 2;
						return (
							<div
								className={`col-start-2 row-start-${currentRow} mb-10 origin-left transform text-pretty transition-transform hover:scale-105 hover:text-[var(--text-secondary)]`}
								key={`exp-${i}`}
							>
								<h4 className="sm:text[18px]text-[16px] text-[16px] font-bold">
									{title}
								</h4>
								{subtitle && <h5>{subtitle}</h5>}
								<h5>{place}</h5>
								<h5>{date}</h5>
							</div>
						);
					})}

					<div
						className={`col-start-2 row-start-${experience.length + 2} mb-4`}
					>
						<h2
							className={`${bakehaus.className} text-3xl text-[var(--text-secondary)]`}
						>
							{t("educTitle")}
						</h2>
					</div>

					{education.map(({ title, subtitle, place, date }, i) => {
						const currentRow = experience.length + 3 + i;
						return (
							<div
								className={`col-start-2 row-start-${currentRow} mb-10 origin-left transform text-pretty transition-transform hover:scale-110 hover:text-[var(--text-secondary)]`}
								key={`edu-${i}`}
							>
								<h4 className="sm:text[18px] text-[16px] font-bold">{title}</h4>
								{subtitle && <h5>{subtitle}</h5>}
								<h5>{place}</h5>
								<h5>{date}</h5>
							</div>
						);
					})}
				</div>
			</div>
			<div
				ref={containerRefDesktop}
				className={clsx(
					"hidden w-full justify-center py-20 md:flex",
					theme === "light" &&
						"bg-[radial-gradient(ellipse_45%_100%_at_53%_50%,rgba(245,245,245,0.8)_40%,rgba(245,245,245,0)_50%)]",
				)}
			>
				<div
					className={`grid grid-cols-[20%_5%_65%] gap-8`}
					style={{
						gridTemplateRows: `repeat(${experience.length + education.length}, auto)`,
					}}
				>
					<div
						style={{
							gridRow: `span ${experience.length} / span ${experience.length}`,
						}}
					>
						<h2
							className={`${bakehaus.className} self-start text-right text-3xl text-[var(--text-secondary)]`}
						>
							{t("expTitle")}
						</h2>
					</div>

					<div
						style={{
							gridRowStart: experience.length + 1,
							gridRowEnd: experience.length + 1 + education.length,
						}}
					>
						<h2
							className={`${bakehaus.className} self-start text-right text-3xl text-[var(--text-secondary)]`}
						>
							{t("educTitle")}
						</h2>
					</div>
					<div
						style={{
							gridRow: `span ${experience.length + education.length} / span ${experience.length + education.length}`,
						}}
						className="col-start-2 row-start-1 flex justify-center"
					>
						<div className="relative h-full w-[4px] rounded-full bg-[linear-gradient(to_bottom,transparent_0%,#A6A3A3_7%,#A6A3A3_93%,transparent_100%)]">
							<motion.div
								className="absolute top-0 left-1/2 w-[6px] origin-top -translate-x-1/2 rounded-full bg-(--text-secondary) shadow-[0_0_20px_var(--text-secondary)]"
								style={{
									height: progressHeightDesktop,
								}}
							/>
						</div>
					</div>
					{experience.map(({ title, subtitle, place, date }, i) => {
						const currentRow = ++rowIndex;
						return (
							<div
								className={`col-start-3 row-start-${currentRow} mb-10 origin-left transform text-[14px] text-pretty transition-transform hover:scale-105 hover:text-[var(--text-secondary)] md:text-[16px] lg:text-[16px]`}
								key={`exp-${i}`}
							>
								<h4 className="text-[18px] font-bold lg:text-[20px]">
									{title}
								</h4>
								{subtitle && <h5>{subtitle}</h5>}
								<h5>{place}</h5>
								<h5>{date}</h5>
							</div>
						);
					})}
					{education.map(({ title, subtitle, place, date }, i) => {
						const currentRow = ++rowIndex;
						return (
							<div
								className={`col-start-3 row-start-${currentRow} mb-10 origin-left transform text-[14px] text-pretty transition-transform hover:scale-105 hover:text-[var(--text-secondary)] lg:text-[16px]`}
								key={`edu-${i}`}
							>
								<h4 className="text-[20px] font-bold">{title}</h4>
								{subtitle && <h5>{subtitle}</h5>}
								<h5>{place}</h5>
								<h5>{date}</h5>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
