"use client";
import React, { useEffect, useRef, useState } from "react";
import { bakehaus, karla } from "../fonts";

export default function ResumeScroll() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center justify-center w-[100%] pt-20">
      <section className="flex flex-row justify-center w-[80%]">
        <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl w-[15%] text-right`}>Experience</h2>
        <div className="w-[10%]"/>
        <div className="w-[45%]">
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>IT Sales Assistant - On-call temp work</h4>
            <h5 className={`${karla.className}`}>Mediamarkt - Woluwe-Saint-Lambert</h5>
            <h5 className={`${karla.className}`}>2023 - Present</h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Internship </h4>
            <h5 className={`${karla.className}`}>Web Solution for Integrating ABAP-Code Checks into SAP System</h5>
            <h5 className={`${karla.className}`}>MediaMarkt – Woluwe-Saint-Lambert</h5>
            <h5 className={`${karla.className}`}>February 2024 – June 2024</h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Student Job – IT Sales Assistant</h4>
            <h5 className={`${karla.className}`}>Mediamarkt - Woluwe-Saint-Lambert</h5>
            <h5 className={`${karla.className}`}>2019 – 2023</h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Volunteer – YOUCA Action Day</h4>
            <h5 className={`${karla.className}`}>MediaMarkt – Woluwe-Saint-Lambert</h5>
            <h5 className={`${karla.className}`}>October 19, 2019</h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Student Job – Archiving and Administrative Support</h4>
            <h5 className={`${karla.className}`}>ONE – Office de la Naissance et de l’Enfance (Child and Family Agency)</h5>
            <h5 className={`${karla.className}`}>2018</h5>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-center w-[80%]">
        <h2 className={`${bakehaus.className} text-(--text-secondary) text-2xl w-[15%] text-right`}>Education</h2>
        <div className="w-[10%]"/>
        <div className="w-[45%]">
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Certification in Upper Secondary Education</h4>
            <h5 className={`${karla.className}`}>(High School Diploma equivalent)</h5>
            <h5 className={`${karla.className}`}> BeCentral - Campus 19 (Member of 42)</h5>
            <h5 className={`${karla.className}`}>September 2024 – Present </h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Bachelor’s Degree in Application Development (3rd Year)</h4>
            <h5 className={`${karla.className}`}>Haute École Bruxelles Brabant – HE2B ESI</h5>
            <h5 className={`${karla.className}`}>September 2021 – September 2023</h5>
          </div>
          <div className="mb-15">
            <h4 className={`${karla.className} font-bold text-[20px]`}>Upper Secondary Education Certificate</h4>
            <h5 className={`${karla.className}`}>ZAVO Campus – Zaventem Hoogstraat </h5>
            <h5 className={`${karla.className}`}>(Dutch-taught program)</h5>
            <h5 className={`${karla.className}`}>September 2014 – September 2021</h5>
          </div>
        </div>
      </section>
      <div />
      <div>
      </div>
    </div>
  );
}
