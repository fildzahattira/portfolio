"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Hero() {
  const ref = useScrollAnimation();
  const fullText = "Software Development Enthusiast";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} id="hero" className="fade-section" style={{ background: "linear-gradient(160deg, #fdf6f0, #f5eef8)" }}>
      <div className="px-10 py-20 flex flex-col md:flex-row items-center gap-10 max-w-screen-xl mx-auto">
        <div className="flex-shrink-0 md:order-2">
          <Image src="/Photo_Fildzah.jpeg" alt="Fildzah Attira Khair" width={280} height={280} priority className="rounded-full object-cover" style={{ border: "4px solid rgba(192,132,184,0.4)" }} />
        </div>
        <div className="flex-1 md:order-1">
          <h1 className="text-4xl font-bold" style={{ color: "#3d2952", fontFamily: "Georgia, serif" }}>
            {displayed}<span style={{ color: "#c084b8" }}>|</span>
          </h1>
          <p className="mt-4 text-justify" style={{ color: "#5c3d6e" }}>
            An Informatics graduate with hands-on experience in software quality activities, focusing on understanding user interactions and enhancing overall product quality. Experienced in application testing, collaborating closely with users during validation and feedback sessions, and working with cross-functional teams. Additionally, passionate about software development, with a strong interest in building scalable solutions and continuously improving technical skills in development.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#projects" className="px-6 py-2 rounded" style={{ background: "#3d2952", color: "#f5eef8" }}>See Projects</a>
            <a href="#contact" className="px-6 py-2 rounded" style={{ border: "1px solid #c084b8", color: "#c084b8", background: "transparent" }}>Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}