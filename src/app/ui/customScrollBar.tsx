"use client";
import { useEffect, useState, useRef } from "react";

export default function CustomScrollbar() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => setScrollTop(container.scrollTop);
    setScrollHeight(container.scrollHeight);
    setClientHeight(container.clientHeight);

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const maxScroll = scrollHeight - clientHeight;
  const scrollPercent = maxScroll ? scrollTop / maxScroll : 0;

  return (
    <div className="relative h-screen w-full bg-[#0a0a0f] flex">
      <div
        ref={containerRef}
        className="flex-1 overflow-y-scroll px-10 py-20 text-white space-y-[70vh]"
      >
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
      </div>

      {/* Fake scrollbar */}
      <div className="absolute right-2 top-0 h-full w-2 bg-transparent">
        <div
          className="w-full bg-[#414751] rounded-full transition-transform duration-100"
          style={{
            height: "10px",
            transform: `translateY(${scrollPercent * (clientHeight - 10)}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}