import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
    <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-freen-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">RPG- Dragon Repeller</h3>
            <p className="text-gray-400 mb-4">
              Developed an interactive RPG game with multiple levels, weapons
              and enemy AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-green-300 transition-colors my-4"
              >
                {" "}
                View Project {" "}
              </a>
            </div>
            
            
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-freen-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">RPG- Dragon Repeller</h3>
            <p className="text-gray-400 mb-4">
              Developed an interactive RPG game with multiple levels, weapons
              and enemy AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-green-300 transition-colors my-4"
              >
                {" "}
                View Project {" "}
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-freen-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">RPG- Dragon Repeller</h3>
            <p className="text-gray-400 mb-4">
              Developed an interactive RPG game with multiple levels, weapons
              and enemy AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-green-300 transition-colors my-4"
              >
                {" "}
                View Project {" "}
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-freen-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            <h3 className="text-xl font-bold mb-2">RPG- Dragon Repeller</h3>
            <p className="text-gray-400 mb-4">
              Developed an interactive RPG game with multiple levels, weapons
              and enemy AI.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["HTML", "CSS", "JAVASCRIPT"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-green-500/10 text-green-500 py-1 px-3 rounded-full text-sm hover:bg-green-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-green-300 transition-colors my-4"
              >
                {" "}
                View Project {" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </RevealOnScroll>
    </section>
  );
};
