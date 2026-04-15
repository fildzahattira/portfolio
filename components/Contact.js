"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Contact() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="contact" className="fade-section" style={{ background: "linear-gradient(160deg, #fdf6f0, #f5eef8)" }}>
      <div className="px-10 py-20 flex flex-col items-center text-center max-w-screen-xl mx-auto">
        <h2 className="text-3xl mb-4" style={{ fontFamily: "Georgia, serif", color: "#3d2952", fontWeight: 400 }}>
          Let's <em style={{ color: "#c084b8" }}>Work Together</em>
        </h2>
        <p className="mb-10 max-w-md" style={{ color: "#5c3d6e", fontWeight: 300 }}>
          Got a project in mind or just want to connect? Feel free to reach out — I'd love to hear from you!
        </p>
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
          <a href="mailto:fildzahattira560@gmail.com" className="flex-1 flex flex-col items-center gap-2 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:brightness-95" style={{ background: "linear-gradient(135deg, #f5eef8, #fdf6f0)", border: "1px solid rgba(192,132,184,0.4)" }}>
            <MdEmail size={28} color="#c084b8" />
            <p className="font-medium" style={{ color: "#3d2952" }}>Email</p>
            <p className="text-sm" style={{ color: "#7a5a8a", fontWeight: 300 }}>fildzahattira560@gmail.com</p>
          </a>
          <a href="https://linkedin.com/in/fildzahattira" target="_blank" className="flex-1 flex flex-col items-center gap-2 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:brightness-95" style={{ background: "linear-gradient(135deg, #f5eef8, #fdf6f0)", border: "1px solid rgba(192,132,184,0.4)" }}>
            <FaLinkedin size={28} color="#c084b8" />
            <p className="font-medium" style={{ color: "#3d2952" }}>LinkedIn</p>
            <p className="text-sm" style={{ color: "#7a5a8a", fontWeight: 300 }}>Let's connect</p>
          </a>
          <a href="https://github.com/fildzahattira" target="_blank" className="flex-1 flex flex-col items-center gap-2 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:brightness-95" style={{ background: "linear-gradient(135deg, #f5eef8, #fdf6f0)", border: "1px solid rgba(192,132,184,0.4)" }}>
            <FaGithub size={28} color="#c084b8" />
            <p className="font-medium" style={{ color: "#3d2952" }}>GitHub</p>
            <p className="text-sm" style={{ color: "#7a5a8a", fontWeight: 300 }}>Check out my code</p>
          </a>
        </div>
      </div>
    </section>
  );
}