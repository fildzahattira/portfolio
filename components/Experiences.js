"use client";
import { useState } from "react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

export default function Experiences() {
  const ref = useScrollAnimation();
  const [openIndex, setOpenIndex] = useState(0);

  const experiences = [
    {
      company: "PT Astra International Tbk",
      role: "Software Quality Assurance · Contract",
      period: "Aug 2025 – Present",
      sections: [{ items: ["Implemented STLC processes including test planning, execution, and defect management across 4+ web and mobile applications, including AI-based feature testing.", "Performed UI and functional testing and validated frontend and backend functionalities through UI, API, and database-level testing.", "Created and executed 100+ test scenarios covering business flows, edge cases, and out-of-the-box user scenarios.", "Conducted automation testing using Playwright and basic performance testing using k6 and Postman Interceptor.", "Logged, tracked, and verified defects using Jira with clear steps to reproduce and supporting evidence.", "Presented UAT, facilitated user discussions, delivered user training, and supported production deployment."] }],
    },
    {
      company: "Merkle Innovation",
      role: "IT Project Manager Officer · Freelance",
      period: "Dec 2023 – Aug 2024",
      sections: [{ items: ["Applied SDLC best practices in managing multiple client application projects.", "Managed and monitored bugs, issues, and change requests using Azure DevOps and Google Sheets.", "Supported project planning, task tracking, and timeline coordination to ensure delivery alignment.", "Coordinated cross-functional teams and facilitated daily sync meetings.", "Prepared and delivered daily progress reports to stakeholders to support timely delivery and risk mitigation."] }],
    },
    {
      company: "Growlab",
      role: "Web Developer & Project Manager · Internship",
      period: "Aug 2023 – Mar 2024",
      sections: [
        { role: "Web Developer · Internship", period: "Dec 2023 – Mar 2024", items: ["Developed a company profile website handling both front-end and back-end development.", "Designed the database structure from scratch and implemented API operations.", "Collaborated actively with developers and regularly presented project progress to stakeholders."] },
        { role: "Project Manager · Internship", period: "Aug 2023 – Oct 2023", items: ["Planned and managed event meetings with stakeholders.", "Maintained strong relationships with 100+ community members.", "Demonstrated strong leadership, communication, and project management skills."] },
      ],
    },
  ];

  return (
    <section ref={ref} className="fade-section" style={{ background: "#3d2952" }}>
      <div className="px-10 py-20 max-w-screen-xl mx-auto">
        <h2 className="text-2xl mb-10" style={{ fontFamily: "Georgia, serif", color: "#f5eef8", fontWeight: 400 }}>
          Work <em style={{ color: "#c084b8" }}>Experiences</em>
        </h2>
        <div className="flex flex-col gap-3">
          {experiences.map((exp, index) => (
            <div key={index} style={{ background: "linear-gradient(135deg, #f5eef8, #fdf6f0)", border: "1px solid rgba(192,132,184,0.35)", borderRadius: "14px", overflow: "hidden" }}>
              <div className="flex justify-between items-center px-6 py-4 cursor-pointer" style={{ transition: "background 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(192,132,184,0.15)"} onMouseLeave={e => e.currentTarget.style.background = "transparent"} onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                <div>
                  <p style={{ fontFamily: "Georgia, serif", color: "#3d2952", fontSize: "15px", fontWeight: 500, margin: 0 }}>{exp.company}</p>
                  <p style={{ fontSize: "11px", color: "#c084b8", fontWeight: 300, marginTop: "3px", letterSpacing: "0.04em" }}>{exp.role}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span style={{ fontSize: "10px", color: "#7a5a8a", background: "rgba(192,132,184,0.2)", padding: "3px 10px", borderRadius: "20px" }}>{exp.period}</span>
                  <span style={{ color: "#c084b8", fontSize: "12px" }}>{openIndex === index ? "▲" : "▼"}</span>
                </div>
              </div>
              {openIndex === index && (
                <div className="px-6 pb-5" style={{ borderTop: "1px dashed rgba(192,132,184,0.3)" }}>
                  {exp.sections.map((section, si) => (
                    <div key={si}>
                      {si > 0 && <hr style={{ borderColor: "rgba(192,132,184,0.3)", margin: "12px 0" }} />}
                      {section.role && (
                        <div className="flex justify-between items-center mt-4 mb-2">
                          <p style={{ fontSize: "12px", color: "#5c3d6e", fontWeight: 500, margin: 0 }}>{section.role}</p>
                          <p style={{ fontSize: "10px", color: "#c084b8", margin: 0 }}>{section.period}</p>
                        </div>
                      )}
                      <ul className="mt-3" style={{ padding: 0, margin: 0 }}>
                        {section.items.map((item, ii) => (
                          <li key={ii} className="flex gap-2 mb-2" style={{ fontSize: "12px", color: "#3d2952", lineHeight: "1.75", fontWeight: 300, listStyle: "none" }}>
                            <span style={{ color: "#c084b8", fontSize: "8px", marginTop: "5px", flexShrink: 0 }}>✦</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}