export default function Hero() {
  return (
    <section className="px-10 py-20 bg-cream">
      <h1 className="text-4xl font-bold text-navy">Software Development Enthusiast</h1>
      <p className="text-navy mt-4 max-w-2xl">
        An Informatics graduate with experience in software quality activities,
        focusing on understanding user interactions and improving overall
        product quality. Brings experience in application testing, working
        closely with users during application validation and feedback sessions,
        and collaboration with cross-functional teams, with a strong emphasis on
        clarity, structure, and continuous improvement.
      </p>
      <div className="flex gap-4 mt-6">
        <button className="bg-blue text-cream px-6 py-2 rounded">See Projects</button>
        <button className="border border-blue text-blue px-6 py-2 rounded">Contact Me</button>
      </div>
     
    </section>
  );
}
