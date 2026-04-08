export default function Skills() {
  return (
    <section className="bg-lightblue px-10 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Languages</h2>
        <ul className="list-disc list-inside">
          <li>PHP (CodeIgniter)</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>C++</li>
        </ul>
      </div>
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Frameworks & Libraries</h2>
        <ul className="list-disc list-inside">
          <li>Next.js</li>
          <li>Express.js</li>
          <li>React Native</li>
        </ul>
      </div>
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Testing</h2>
        <ul className="list-disc list-inside">
          <li>Playwright</li>
          <li>Postman</li>
          <li>Postman Interceptor</li>
          <li>k6</li>
        </ul>
      </div>
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Database & Tools</h2>
        <ul className="list-disc list-inside">
          <li>MySQL</li>
          <li>SQL Server Management Studio</li>
          <li>Git</li>
          <li>Azure DevOps</li>
        </ul>
      </div>
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Project Management</h2>
        <ul className="list-disc list-inside">
          <li>Jira</li>
          <li>Confluence</li>
          <li>Trello</li>
          <li>Google Sheets</li>
        </ul>
      </div>
      <div className="bg-cream p-6 rounded-lg">
        <h2 className="font-bold text-navy mb-3">Design & Docs</h2>
        <ul className="list-disc list-inside">
          <li>Figma</li>
          <li>Excel</li>
          <li>PowerPoint</li>
          <li>Word</li>
        </ul>
      </div>
    </div>
    </section>
  );
}