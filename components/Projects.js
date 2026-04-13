export default function Projects() {
  return (
    <section className="px-10 py-20" style={{ background: "#3d2952" }}>
      <h2 className="text-2xl mb-10" style={{ fontFamily: "Georgia, serif", color: "#f5eef8", fontWeight: 400 }}>
  <em>Projects</em>
      </h2>

      <a href="#" target="_blank" className="block mb-4 rounded-lg p-6 transition hover:brightness-95" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
        <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>Web-Based Invoice Validation System</h3>
        <p className="text-sm mt-1" style={{ color: "#c084b8" }}>Next.js, MySQL</p>
        <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>Developed a custom invoice authentication platform for a logistics consulting company. Integrated QR code generation and TOTP for secure document validation. Implemented role-based access (Super Admin & Admin) and email-based OTP verification.</p>
      </a>

      <a href="#" target="_blank" className="block mb-4 rounded-lg p-6 transition hover:brightness-95" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
        <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>SideChef - Mobile App Recipe</h3>
        <p className="text-sm mt-1" style={{ color: "#c084b8" }}>React Native, PHP, MySQL</p>
        <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>Developed a mobile app that allows users to create, browse, and manage recipes. Features include recipe search, CRUD operations, and image upload functionality.</p>
      </a>

      <a href="#" target="_blank" className="block mb-4 rounded-lg p-6 transition hover:brightness-95" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
        <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>$mallcashier - Web-based Point of Sale System</h3>
        <p className="text-sm mt-1" style={{ color: "#c084b8" }}>PHP, MySQL</p>
        <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>Developed a cashier application for managing sales transactions, including product inventory, checkout process, and transaction history.</p>
      </a>

      <a href="#" target="_blank" className="block mb-4 rounded-lg p-6 transition hover:brightness-95" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(192,132,184,0.15))", border: "1px solid rgba(192,132,184,0.25)" }}>
        <h3 className="font-medium text-lg" style={{ fontFamily: "Georgia, serif", color: "#f5eef8" }}>C++ Programming Projects</h3>
        <p className="text-sm mt-1" style={{ color: "#c084b8" }}>C++</p>
        <p className="mt-2 text-sm" style={{ color: "#d4b8e0", fontWeight: 300 }}>A collection of practice projects demonstrating core programming skills covering object-oriented principles, data structure usage, and basic algorithm implementation.</p>
      </a>
    </section>
  );
}