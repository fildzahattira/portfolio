"use client";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Projects() {
  const ref = useScrollAnimation();

  return (
    <section ref={ref} id="projects" className="fade-section" style={{ background: "#3d2952" }}>
      <div className="px-10 py-20 max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-10" style={{ fontFamily: "Georgia, serif", color: "#f5eef8", fontWeight: 400 }}>
          <em>Projects</em>
        </h2>
        <a href="https://github.com/fildzahattira/mandiribersama?tab=readme-ov-file#about-the-app" target="_blank" className="block mb-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
          <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>Web-Based Invoice Validation System</h3>
          <p className="text-sm mt-1" style={{ color: "#c084b8" }}>Next.js, MySQL</p>
          <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>Developed a custom invoice authentication platform for a logistics consulting company. Integrated QR code generation and TOTP for secure document validation. Implemented role-based access (Super Admin & Admin) and email-based OTP verification.</p>
        </a>
        <a href="https://github.com/fildzahattira/sideChef_mobileApp?tab=readme-ov-file#about-the-app" target="_blank" className="block mb-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
          <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>SideChef - Mobile App Recipe</h3>
          <p className="text-sm mt-1" style={{ color: "#c084b8" }}>React Native, PHP, MySQL</p>
          <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>Developed a mobile app that allows users to create, browse, and manage recipes. Features include recipe search, CRUD operations, and image upload functionality.</p>
        </a>
        <a href="https://github.com/fildzahattira/laravel_product-management?tab=readme-ov-file#-product-management-system" target="_blank" className="block mb-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
          <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>Product Management System</h3>
          <p className="text-sm mt-1" style={{ color: "#c084b8" }}>Laravel</p>
          <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>A simple Laravel app with admin login, product CRUD (add, edit, delete), search, category filter, pagination and responsive interface.</p>
        </a>
        <a href="https://github.com/fildzahattira/Cpp-Project_Fildzah" target="_blank" className="block mb-4 rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:brightness-110" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
          <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>C++ Programming Projects</h3>
          <p className="text-sm mt-1" style={{ color: "#c084b8" }}>C++</p>
          <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>A collection of practice projects demonstrating core programming skills covering object-oriented principles, data structure usage, and basic algorithm implementation.</p>
        </a>
      </div>
    </section>
  );
}