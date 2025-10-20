"use client";
import React, { useEffect, useRef, useState } from "react";
import { bakehaus, karla } from "../fonts";
import { motion, useScroll, useTransform } from "motion/react"

export default function ResumeScroll({
  id,
}: {
  id: string,
}) {
  const experience = [
    { title: "IT Sales Assistant - On-call temp work", subtitle: null, place: "Mediamarkt - Woluwe-Saint-Lambert", date: "2023 - Present" },
    { title: "Internship", subtitle: "Web Solution for Integrating ABAP-Code Checks into SAP System", place: "Mediamarkt - Woluwe-Saint-Lambert", date: "February 2024 – June 2024" },
    { title: "Student Job – IT Sales Assistant", subtitle: null, place: "Mediamarkt - Woluwe-Saint-Lambert", date: "2019 – 2023" },
    { title: "Volunteer – YOUCA Action Day", subtitle: null, place: "Mediamarkt - Woluwe-Saint-Lambert", date: "October 19, 2019" },
    { title: "Student Job – Archiving and Administrative Support", subtitle: "ONE – Office de la Naissance et de l’Enfance (Child and Family Agency)", place: "Brussels", date: "2018" },
  ]
  const education = [
    { title: "Certification in Upper Secondary Education", subtitle: "(High School Diploma equivalent)", place: "BeCentral - Campus 19 (Member of 42)", date: "September 2024 – Present " },
    { title: "Bachelor’s Degree in Application Development (3rd Year)", subtitle: null, place: "Haute École Bruxelles Brabant – HE2B ESI", date: "September 2021 – September 2023" },
    { title: "Upper Secondary Education Certificate", subtitle: "(Dutch-taught program)", place: "ZAVO Campus – Zaventem Hoogstraat ", date: "September 2014 – September 2021" },
  ]

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["center end", "end center"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let rowIndex = 0;

  return (
    <div ref={containerRef} className="flex justify-center w-full">
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
            Experience
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
            Education
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
