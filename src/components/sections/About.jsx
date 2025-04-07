import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JAVASCRIPT", "REACT", "TAILWINDCSS"];
  const backendSkills = ["NODE.JS", "MYSQL", "EXPRESS.JS"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="tex-gray-400 ">Hardworking and dedicated first year student who is learning Software Development.</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
            <div className="mt-3">
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-3">
                    <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>
                                    Bachelor of Economic Informatics (2024-2027)
                                </strong> : Faculty of Economic Cybernetics, Statistics and Computer Science, Bucharest
                            </li>
                            <li>
                                <strong>
                                    Mathematics and Computer Science (2020,2024)
                                </strong> : National College "Stefan cel Mare", Suceava
                            </li>
                        </ul>
                </div>
                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-3">
                    <h3 className="text-xl font-bold mb-4">Certifications</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 text">
                            <li><strong>Oracle Academy </strong>: Database Programming with SQL</li>
                            <li><strong>Oracle Academy </strong>: Database Design</li>
                            <li><strong>Cisco Network </strong>: IT Essentials Certificate</li>
                            <li><strong>FCE Cambridge </strong>: B2</li>
                        </ul>
                </div>
            </div>
      </div>
    </RevealOnScroll>
    </section>
  );
};
