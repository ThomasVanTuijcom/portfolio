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
    offset: ["start end", "end start"],
  });
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let rowIndex = 1;

  return (
    <div ref={containerRef} className="flex justify-center w-full">
      <div className={`grid grid-cols-[15%_10%_75%] grid-rows-${experience.length + education.length} gap-4`}>
        <div className={`row-span-${experience.length}`}>
          <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl text-right self-start row-span-${experience.length}`}>
            Experience
          </h2>
        </div>
        <div className={`row-span-${education.length} col-start-1 row-start-${experience.length + 1}`}>
          <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl text-right self-start`}>
            Education
          </h2>
        </div>
        <div className={`row-span-${experience.length + education.length} col-start-2 row-start-1`}>
          <motion.div
            className="w-[6px] bg-(--text-secondary) origin-top rounded-full mx-auto"
            style={{
              height: progressHeight,
            }}
          />
        </div>
        {experience.map(({ title, subtitle, place, date }, i) => {
          const currentRow = rowIndex + 1;
          rowIndex++;
          return (
            <div className={`col-start-3 row-start-${currentRow} mb-10 hover:text-(--text-secondary)`} key={i}>
              <h4 className={`${karla.className} font-bold text-[20px]`}>{title}</h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          )
        })}
        {education.map(({ title, subtitle, place, date }, i) => {
          const currentRow = rowIndex + 1;
          rowIndex++;
          return (
            <div className={`col-start-3 row-start-${currentRow} mb-10 hover:text-(--text-secondary)`} key={i}>
              <h4 className={`${karla.className} font-bold text-[20px]`}>{title}</h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          )
        })}
      </div>
    </div>
  );
}
