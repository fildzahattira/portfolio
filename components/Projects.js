export default function Projects() {
  return (
    <section className="bg-cream px-10 py-20">
      <a href="#" target="_blank" className="block bg-lightblue p-6 rounded-lg mb-4 hover:bg-blue hover:text-cream transition">
        <div>
          <h3 className="font-bold text-navy text-lg">Web-Based Invoice Validation System</h3>
          <p className="text-blue text-sm mt-1">Next.js, MySQL</p>
          <p className="text-navy mt-2">Developed a custom invoice authentication platform for a logistics consulting company. Integrated QR code generation and TOTP for secure document validation. Implemented role-based access (Super Admin & Admin) and email-based OTP verification.</p>
        </div>
      </a>
      <a href="#" target="_blank" className="block bg-lightblue p-6 rounded-lg mb-4 hover:bg-blue hover:text-cream transition">
        <div>
          <h3 className="font-bold text-navy text-lg">SideChef - Mobile App Recipe</h3>
          <p className="text-blue text-sm mt-1">React Native, PHP, MySQL</p>
          <p className="text-navy mt-2">Developed a mobile app that allows users to create, browse, and manage recipes. Features include recipe search, CRUD operations, and image upload functionality.</p>
        </div>
      </a>
      <a href="#" target="_blank" className="block bg-lightblue p-6 rounded-lg mb-4 hover:bg-blue hover:text-cream transition">
        <div>
          <h3 className="font-bold text-navy text-lg">$mallcashier - Web-based Point of Sale System</h3>
          <p className="text-blue text-sm mt-1">PHP, MySQL</p>
          <p className="text-navy mt-2">Developed a cashier application for managing sales transactions, including product inventory, checkout process, and transaction history.</p>
        </div>
      </a>
      <a href="#" target="_blank" className="block bg-lightblue p-6 rounded-lg mb-4 hover:bg-blue hover:text-cream transition">
        <div>
          <h3 className="font-bold text-navy text-lg">C++ Programming Projects</h3>
          <p className="text-blue text-sm mt-1">C++</p>
          <p className="text-navy mt-2">A collection of practice projects demonstrating core programming skills covering object-oriented principles, data structure usage, and basic algorithm implementation.</p>
        </div>
      </a>
    </section>
  );
}