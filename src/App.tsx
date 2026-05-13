import { useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "projects", label: "Proyectos" },
];


const EXPERIENCES = [
  {
    date: "Oct. 2025 – Dic. 2025",
    role: "Desarrollador Full-Stack",
    company: "Widder",
    url: "https://widder.cl/",
    description:
      "Trabajé en el desarrollo de soluciones orientadas a la automatización y generación de reportes dinámicos para uso interno. Participé en la integración de datos desde distintos servicios y en la creación de flujos automáticos para la distribución de información, aportando a mejorar la disponibilidad y el acceso a datos relevantes para el negocio.",
  },
  {
    date: "May. 2025 – Jul. 2025",
    role: "Desarrollador Full-Stack",
    company: "Fritz International",
    url: "https://fritzinternational.us/cl/",
    description:
      "Formé parte del desarrollo de nuevas funcionalidades dentro de la plataforma de la empresa, enfocadas en el registro y análisis de información clave. Contribuí a la construcción de paneles y visualizaciones que apoyaron la toma de decisiones, además de integrar datos provenientes de distintas fuentes públicas y privadas en un solo sistema.",
  },
  {
    date: "Feb. 2024 – Feb. 2025",
    role: "Desarrollador Full-Stack",
    company: "AFIN",
    url: "https://www.constructoraafin.cl/",
    description:
      "Participé en el desarrollo de herramientas internas orientadas a digitalizar y optimizar procesos operativos y administrativos de distintas áreas de la empresa. Trabajé creando aplicaciones y flujos automatizados que facilitaron el registro de información, el control de recursos y la comunicación interna, adaptando cada solución a las necesidades reales de los equipos.",
  },
];

const PROJECTS = [
  {
    name: "Portfolio",
    image: "/portfolio-project.png",
    url: "https://josenunez.cl/",
    description:
      "Mi portfolio personal, desarrollado con React y TailwindCSS. Presenta mis habilidades, experiencia y proyectos de manera clara y atractiva, destacando mi enfoque en el desarrollo web moderno y responsivo.",
  },
  {
    name: "Mangalovers",
    image: "/mangalovers.png",
    url: "https://mangalovers.josenunez.cl/",
    description:
      "Aplicación web progresiva (PWA) para la lectura y gestión de mangas, enfocada en una experiencia rápida, intuitiva y optimizada para dispositivos móviles. Permite explorar títulos, gestionar el progreso de lectura por capítulos, marcar estados de seguimiento y compartir mangas fácilmente. Desarrollada con React en el frontend y Node.js con Express en el backend, prioriza rendimiento, usabilidad y una experiencia similar a una app nativa.",
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  const scrollToSection = (id: string) => {
    setActiveSection(id);

    const el = document.getElementById(id);
    if (!el) return;

    if (window.innerWidth < 768) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const rightColumn = document.getElementById("right-column");
      if (rightColumn) {
        const top = el.getBoundingClientRect().top - rightColumn.getBoundingClientRect().top + rightColumn.scrollTop;
        rightColumn.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-dvh bg-slate-950 flex items-center justify-center md:p-4">
      <div className="w-full max-w-6xl bg-slate-900 md:rounded-2xl shadow-2xl flex flex-col md:flex-row md:max-h-[calc(100dvh-2rem)]">
        <aside className="md:w-80 p-10 md:p-12 flex flex-col justify-between border-slate-800 border-b md:border-b-0 md:border-r max-md:gap-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-white mb-2">José Núñez</h1>
            <p className="text-xl text-slate-300 mb-1">Desarrollador Full-Stack</p>
            <p className="text-slate-400">Transformo ideas en aplicaciones web</p>
            <nav className="mt-12 max-md:mt-6">
              <ul className="space-y-3 max-md:flex max-md:gap-6 max-md:space-y-0 max-md:overflow-x-auto">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`text-base transition-all duration-300 cursor-pointer ${
                        activeSection === item.id
                          ? "text-indigo-400 font-semibold"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex gap-5 max-md:mt-4">
            <a
              href="https://github.com/Ignxciop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jnunezm/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-400 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </aside>

        <main id="right-column" className="flex-1 md:overflow-y-auto p-10 md:p-12">
          <div className="max-w-2xl mx-auto space-y-24 max-md:space-y-16">
            <section id="about" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-indigo-500 rounded-full inline-block flex-shrink-0" />
                Sobre mí
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-[15px]">
                <p>
                  Soy desarrollador Full-Stack con más de dos años de experiencia trabajando en el
                  desarrollo de aplicaciones web y soluciones internas orientadas a mejorar procesos
                  y facilitar la toma de decisiones. A lo largo de este tiempo he participado en
                  proyectos donde el foco ha sido crear herramientas útiles, claras y alineadas a
                  las necesidades reales de los usuarios.
                </p>
                <p>
                  He trabajado desarrollando soluciones full-stack utilizando tecnologías como
                  React, Node.js y Next.js, integrando APIs, automatizaciones y bases de datos
                  relacionales. Gran parte de mi experiencia se ha dado en proyectos donde la
                  organización de la información, la automatización de flujos y la optimización de
                  procesos han sido clave.
                </p>
                <p>
                  Me interesa especialmente el desarrollo de productos que tengan un impacto directo
                  en las personas que los usan. Disfruto pensar la lógica del producto, entender el
                  problema antes de escribir código y buscar soluciones simples que se mantengan en
                  el tiempo.
                </p>
                <p>
                  Me considero una persona autodidacta, adaptable y con atención al detalle, que
                  valora el trabajo en equipo y la comunicación clara. Siempre estoy aprendiendo
                  nuevas herramientas y buenas prácticas para seguir mejorando tanto a nivel técnico
                  como profesional.
                </p>
              </div>
            </section>


            <section id="experience" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-indigo-500 rounded-full inline-block flex-shrink-0" />
                Experiencia
              </h2>
              <div className="space-y-8">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.company} className="flex gap-5 max-md:flex-col max-md:gap-1">
                    <div className="text-sm text-slate-500 font-medium w-36 flex-shrink-0 max-md:w-full">
                      {exp.date}
                    </div>
                    <div className="flex-1">
                      <h3
                        onClick={() => window.open(exp.url, "_blank")}
                        className="text-base font-semibold text-slate-300 cursor-pointer hover:text-indigo-400 transition-colors"
                      >
                        {exp.role} · {exp.company}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section id="projects" className="scroll-mt-8">
              <h2 className="text-2xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                <span className="w-1 h-7 bg-indigo-500 rounded-full inline-block flex-shrink-0" />
                Proyectos
              </h2>
              <div className="space-y-5">
                {PROJECTS.map((project) => (
                  <div
                    key={project.name}
                    onClick={() => window.open(project.url, "_blank")}
                    className="flex gap-5 items-center p-5 bg-slate-800 rounded-xl cursor-pointer hover:bg-slate-700 transition-all duration-300 group max-md:flex-col max-md:items-start"
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-44 h-auto rounded-lg flex-shrink-0 max-md:w-full max-md:max-w-60"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
