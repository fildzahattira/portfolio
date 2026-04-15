"use client";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Footer() {
  const ref = useScrollAnimation();

  return (
    <footer ref={ref} className="fade-section" style={{ background: "linear-gradient(160deg, #fdf6f0, #f5eef8)", borderTop: "1px solid rgba(192,132,184,0.3)" }}>
      <div className="text-center px-10 py-6 max-w-screen-xl mx-auto">
        <p className="text-sm" style={{ color: "#5c3d6e" }}>&copy; 2026 Fildzah Attira Khair. All rights reserved.</p>
      </div>
    </footer>
  );
}