"use client";
import { SiPhp, SiHtml5, SiTailwindcss, SiJavascript, SiMysql, SiNextdotjs, SiReact, SiPostman, SiK6, SiGit, SiJira, SiConfluence, SiFigma } from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import { RiFileExcel2Fill } from "react-icons/ri";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Skills() {
  const ref = useScrollAnimation();

  const row1 = [
    { icon: <SiPhp size={40} color="#777BB4" />, name: "PHP" },
    { icon: <SiHtml5 size={40} color="#E34C26" />, name: "HTML" },
    { icon: <SiJavascript size={40} color="#F7DF1E" />, name: "JavaScript" },
    { icon: <SiTailwindcss size={40} color="#06B6D4" />, name: "Tailwind CSS" },
    { icon: <SiNextdotjs size={40} color="#3d2952" />, name: "Next.js" },
    { icon: <SiReact size={40} color="#61DAFB" />, name: "React Native" },
    { icon: <img src="/playwright-logo.png" width={40} height={40} alt="Playwright" />, name: "Playwright" },
    { icon: <SiPostman size={40} color="#FF6C37" />, name: "Postman" },
  ];

  const row2 = [
    { icon: <SiK6 size={40} color="#7D64FF" />, name: "k6" },
    { icon: <SiMysql size={40} color="#00758F" />, name: "MySQL" },
    { icon: <SiGit size={40} color="#F05032" />, name: "Git" },
    { icon: <VscAzureDevops size={40} color="#0078D7" />, name: "Azure DevOps" },
    { icon: <SiJira size={40} color="#0052CC" />, name: "Jira" },
    { icon: <SiConfluence size={40} color="#0052CC" />, name: "Confluence" },
    { icon: <SiFigma size={40} color="#F24E1E" />, name: "Figma" },
    { icon: <RiFileExcel2Fill size={40} color="#217346" />, name: "Excel" },
  ];

  const CardGrid = ({ items }) => (
    <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
      {items.map((skill, index) => (
        <div key={index} className="p-4 rounded-lg flex flex-col items-center gap-3 transition-transform hover:-translate-y-1" style={{ background: "linear-gradient(135deg, #f5eef8, #fdf6f0)", border: "1px solid rgba(192,132,184,0.6)" }}>
          {skill.icon}
          <p className="text-xs text-center" style={{ color: "#5c3d6e" }}>{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <section ref={ref} className="fade-section" style={{ background: "linear-gradient(160deg, #fdf6f0, #f5eef8)" }}>
      <div className="px-10 py-20 flex flex-col gap-4 max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-6" style={{ fontFamily: "Georgia, serif", color: "#5c3d6e", fontWeight: 400 }}>
          <em style={{ color: "#c084b8" }}>Skills</em>
        </h2>
        <CardGrid items={row1} />
        <CardGrid items={row2} />
      </div>
    </section>
  );
}