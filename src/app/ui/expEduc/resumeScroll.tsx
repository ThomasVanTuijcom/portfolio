"use client";
import React, { useEffect, useRef, useState } from "react";
import { bakehaus, karla } from "../fonts";

export default function ResumeScroll({
  id,
}: {
  id: string,
}) {
  const containerRef = useRef<HTMLDivElement>(null);
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

  return (
    <div id={id} className="flex flex-col items-center justify-center w-[100%] pt-20">
      <section className="flex flex-row justify-center w-[80%]">
        <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl w-[15%] text-right`}>Experience</h2>
        <div className="w-[10%]" />
        <div className="w-[45%]">
          {experience.map(({ title, subtitle, place, date }, i) => (
            <div className="mb-15 hover:text-(--text-secondary)">
              <h4 className={`${karla.className} font-bold text-[20px]`}>{title}</h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-row justify-center w-[80%]">
        <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl w-[15%] text-right`}>Education</h2>
        <div className="w-[10%]" />
        <div className="w-[45%]">
          {education.map(({ title, subtitle, place, date }, i) => (
            <div className="mb-15 hover:text-(--text-secondary)">
              <h4 className={`${karla.className} font-bold text-[20px]`}>{title}</h4>
              {subtitle && <h5 className={`${karla.className}`}>{subtitle}</h5>}
              <h5 className={`${karla.className}`}>{place}</h5>
              <h5 className={`${karla.className}`}>{date}</h5>
            </div>
          ))}
        </div>
      </section>
      <div />
      <div>
      </div>
    </div>
  );
}
