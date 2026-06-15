import { memo } from "react";
import timerrcImg from "../assets/images/timerrc-screenshot.webp";
import lmregionalesImg from "../assets/images/lmregionales-screenshot.webp";
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiFirebase, SiGithub } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiSmartphone, FiMonitor} from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

interface ProjectLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  links: ProjectLink[];
  technologies: React.ReactNode[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "timerrc",
    description: "Plataforma de alta precisión para speedcubers con cronómetro en tiempo real. Implementé scrambles algorítmicos, persistencia local y analíticas de usuario.",
    image: timerrcImg,
    links: [
      { label: "Visitar Web", url: "https://timerrc.com", icon: <FiMonitor size={12} /> },
    ],
    technologies: [<SiReact key="r" />, <SiJavascript key="j" />, <SiTailwindcss key="t" />],
  },
  {
    id: 2,
    title: "Los Molinos Regionales (Web + Mobile)",
    description: "Ecosistema digital completo. E-commerce web con enfoque en UX y aplicación móvil nativa. Ambas plataformas sincronizan stock en tiempo real mediante Firestore y comparten lógica de checkout vía WhatsApp.",
    image: lmregionalesImg,
    links: [
      { label: "Visitar Web", url: "https://lmregionales.vercel.app", icon: <FiMonitor size={12} /> },
      { label: "Visitar Repositorio", url: "https://github.com/antoninojoaquin/los-molinos-frontend", icon: <SiGithub size={12} /> },
      { label: "Visitar Repositorio App", url: "https://github.com/antoninojoaquin/los-molinos-mobile", icon: <FiSmartphone size={12} /> }
    ],
    technologies: [
      <SiReact key="r" />, 
      <TbBrandReactNative key="rn" />, 
      <SiTypescript key="ts" />, 
      <SiFirebase key="fb" />
    ],
  },
];

const ProjectCard = memo(({ project, index }: { project: Project; index: number }) => (
  <article className="group relative border-b border-white/10 py-12 transition-all duration-500 hover:border-[#00d1ff]/30">
    <span 
      aria-hidden="true"
      className="absolute -left-1 top-12 font-mono text-[10rem] font-black leading-none text-white/3 select-none pointer-events-none transition-all duration-500 group-hover:text-[#00d1ff]/10"
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1fr_320px] md:gap-16 items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-3xl font-black text-[#00d1ff] md:text-4xl">
          {project.title}
        </h3>

        <p className="max-w-lg font-mono text-sm leading-relaxed text-white/50">
          {project.description}
        </p>

        <div className="flex items-center gap-3">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="flex h-12 w-12 items-center justify-center rounded border border-white/10 text-3xl text-white/30 transition-all duration-200 hover:border-[#00d1ff]/50 hover:text-[#00d1ff]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={project.links[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/img relative block overflow-hidden rounded-sm aspect-video mb-1"
          aria-label={`Visitar sitio web de ${project.title}`}
        >
          <div className="absolute inset-0 z-10 bg-[#00d1ff] mix-blend-multiply opacity-0 transition-opacity duration-500 group-hover/img:opacity-20" />
          
          <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-[#00d1ff] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
              {project.links[0].icon}
              {project.links[0].label}
            </span>
          </div>

          <img
            src={project.image}
            alt={`Preview del proyecto ${project.title}`}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-110 grayscale group-hover/img:grayscale-0"
          />
        </a>

        <div className="grid grid-cols-1 gap-2">
          {project.links.slice(1).map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2 border border-white/10 rounded text-xs font-mono text-white/50 hover:text-[#00d1ff] hover:border-[#00d1ff]/50 hover:bg-[#00d1ff]/5 transition-all"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  </article>
));

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="relative min-h-screen bg-slate-950 px-6 py-24 flex items-center justify-center">
      <div className="relative mx-auto max-w-5xl w-full">
          <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-white flex gap-4 tracking-tight">
            <FaRocket className="text-[#00d1ff] 2xl:w-16 2xl:h-16 w-12 h-12" />
            <span>Proyectos</span>
          </h2>

        <div className="flex flex-col">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;