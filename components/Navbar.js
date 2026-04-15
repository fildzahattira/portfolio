import { PiCloverDuotone } from "react-icons/pi";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#3d2952] text-[#f5eef8]" style={{ borderBottom: "1px solid rgba(192,132,184,0.3)" }}>
      <div className="flex justify-between px-10 py-5 max-w-screen-xl mx-auto">
        <a href="#hero" className="flex items-center gap-2 hover:text-[#c084b8] transition">
          Fildzah Attira Khair
          <PiCloverDuotone size={20} color="#c084b8" />
        </a>
        <ul className="flex gap-6">
          <li><a href="#hero" className="hover:text-[#c084b8] transition">About</a></li>
          <li><a href="#contact" className="hover:text-[#c084b8] transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}