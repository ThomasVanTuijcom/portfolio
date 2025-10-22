"use client";
import React, { useEffect, useRef, useState } from "react";
import { bakehaus, karla } from "../fonts";
import { motion, useScroll, useTransform } from "motion/react"
import { useTranslations } from "next-intl";

export default function ResumeScroll({
  id,
}: {
  id: string,
}) {
  const t = useTranslations('Resume');
  const exp = useTranslations('Resume.Experience');
  const edu = useTranslations('Resume.Education');
  const experience = [
    { title: exp('job1.title'), subtitle: exp('job1.subtitle'), place: exp('job1.place'), date: exp('job1.date') },
    { title: exp('job2.title'), subtitle: exp('job2.subtitle'), place: exp('job2.place'), date: exp('job2.date') },
    { title: exp('job3.title'), subtitle: exp('job3.subtitle'), place: exp('job3.place'), date: exp('job3.date') },
    { title: exp('job4.title'), subtitle: exp('job4.subtitle'), place: exp('job4.place'), date: exp('job4.date') },
    { title: exp('job5.title'), subtitle: exp('job5.subtitle'), place: exp('job5.place'), date: exp('job5.date') },
  ]
  const education = [
    { title: edu('edu1.title'), subtitle: edu('edu1.subtitle'), place: edu('edu1.place'), date: edu('edu1.date') },
    { title: edu('edu2.title'), subtitle: edu('edu2.subtitle'), place: edu('edu2.place'), date: edu('edu2.date') },
    { title: edu('edu3.title'), subtitle: edu('edu3.subtitle'), place: edu('edu3.place'), date: edu('edu3.date') },
  ]

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end center"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let rowIndex = 0;

  return (
    <div id={id} ref={containerRef} className="flex justify-center w-full">
      <div
        className={`grid grid-cols-[20%_5%_75%] gap-8`}
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
            className={`${bakehaus.className} text-[var(--text-secondary)] text-2xl text-right self-start`}
          >
            {t('expTitle')}
          </h2>
        </div>

        <div
          style={{
            gridRowStart: experience.length + 1,
            gridRowEnd: experience.length + 1 + education.length,
          }}
        >
          <h2
            className={`${bakehaus.className} text-[var(--text-secondary)] text-2xl text-right self-start`}
          >
            {t('educTitle')}
          </h2>
        </div>
        <div
          style={{
            gridRow: `span ${experience.length + education.length} / span ${experience.length + education.length}`,
          }}
          className="col-start-2 row-start-1 flex justify-center"
        >
          <div className="relative w-[4px] bg-[linear-gradient(to_bottom,transparent_0%,#A6A3A3_7%,#A6A3A3_93%,transparent_100%)] rounded-full h-full">
            <motion.div
              className="absolute top-0 left-1/2 w-[6px] -translate-x-1/2
                 origin-top rounded-full
                 bg-(--text-secondary)
                 shadow-[0_0_20px_var(--text-secondary)]"
              style={{
                height: progressHeight,
              }}
            />
          </div>
        </div>
        {experience.map(({ title, subtitle, place, date }, i) => {
          const currentRow = ++rowIndex;
          return (
            <div
              className={`col-start-3 row-start-${currentRow} mb-10 hover:text-[var(--text-secondary)]`}
              key={`exp-${i}`}
            >
              <h4 className={`${karla.className} font-bold text-[20px]`}>
                {title}
              </h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          );
        })}
        {education.map(({ title, subtitle, place, date }, i) => {
          const currentRow = ++rowIndex;
          return (
            <div
              className={`col-start-3 row-start-${currentRow} mb-10 hover:text-[var(--text-secondary)]`}
              key={`edu-${i}`}
            >
              <h4 className={`${karla.className} font-bold text-[20px]`}>
                {title}
              </h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}
