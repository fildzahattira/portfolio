export default function Hero() {
  return (
    <section className="px-10 py-20" style={{ background: "linear-gradient(160deg, #fdf6f0, #f5eef8)" }}>
      <h1 className="text-4xl font-bold" style={{ color: "#3d2952" }}>Software Development Enthusiast</h1>
      <p className="mt-4 max-w-2xl" style={{ color: "#5c3d6e" }}>
        An Informatics graduate with experience in software quality activities,
        focusing on understanding user interactions and improving overall
        product quality. Brings experience in application testing, working
        closely with users during application validation and feedback sessions,
        and collaboration with cross-functional teams, with a strong emphasis on
        clarity, structure, and continuous improvement.
      </p>
      <div className="flex gap-4 mt-6">
        <button className="px-6 py-2 rounded" style={{ background: "#3d2952", color: "#f5eef8" }}>See Projects</button>
        <button className="px-6 py-2 rounded" style={{ border: "1px solid #c084b8", color: "#c084b8", background: "transparent" }}>Contact Me</button>
      </div>
    </section>
  );
}