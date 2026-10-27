import { memo } from "react";
import nenatermGlosarioImg from "../assets/images/nenaterm-glosario.webp";
import nenatermPracticaImg from "../assets/images/nenaterm-practica.webp";
import nenatermJuegoImg from "../assets/images/nenaterm-juego.webp";
import lmMobileProductsImg from "../assets/images/lmmobile-products.webp";
import lmMobileFavoritesImg from "../assets/images/lmmobile-favorites.webp";
import lmMobileCartImg from "../assets/images/lmmobile-cart.webp";
import littleLemonWelcomeImg from "../assets/images/littlelemon-welcome.webp";
import littleLemonSubscribeImg from "../assets/images/littlelemon-subscribe.webp";
import lmFrontendImg from "../assets/images/lmfrontend-catalogo.webp";
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiFirebase, SiGithub, SiExpo } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FiSmartphone, FiMonitor, FiDownload } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

type Platform = "mobile" | "web";

interface ProjectLink {
  label: string;
  url: string;
  icon: React.ReactNode;
}

interface Technology {
  name: string;
  icon: React.ReactNode;
}

interface Project {
  id: number;
  title: string;
  platform: Platform;
  description: string;
  images: string[];
  links: ProjectLink[];
  technologies: Technology[];
}

const TECH = {
  reactNative: { name: "React Native", icon: <TbBrandReactNative /> },
  expo: { name: "Expo", icon: <SiExpo /> },
  react: { name: "React", icon: <SiReact /> },
  typescript: { name: "TypeScript", icon: <SiTypescript /> },
  javascript: { name: "JavaScript", icon: <SiJavascript /> },
  tailwind: { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  firebase: { name: "Firebase", icon: <SiFirebase /> },
} satisfies Record<string, Technology>;

const repoLink = (repo: string): ProjectLink => ({
  label: "Visitar Repositorio",
  url: `https://github.com/antoninojoaquin/${repo}`,
  icon: <SiGithub size={12} />,
});

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "NenaTerm",
    platform: "mobile",
    description: "App Android / iOS para aprender vocabulario técnico en inglés. Glosario con buscador y filtros, cuatro minijuegos de práctica, pronunciación con text-to-speech y traductor, acompañados por Nena, una mascota en pixel art que reacciona a cada respuesta. Distribuida como APK con actualizaciones OTA vía EAS.",
    images: [nenatermGlosarioImg, nenatermPracticaImg, nenatermJuegoImg],
    links: [
      { label: "Descargar APK", url: "https://github.com/antoninojoaquin/NenaTerm/releases/latest/download/NenaTerm.apk", icon: <FiDownload size={12} /> },
      repoLink("NenaTerm"),
    ],
    technologies: [TECH.reactNative, TECH.expo, TECH.typescript],
  },
  {
    id: 2,
    title: "Los Molinos Mobile",
    platform: "mobile",
    description: "Versión nativa del e-commerce de Los Molinos Regionales. Consume la misma base de Firestore que la web como única fuente de verdad: búsqueda y filtros táctiles, favoritos persistidos, carrito limitado por stock real y checkout por deep link a WhatsApp. Ubicación y contacto resueltos con intents nativos en lugar de mapas embebidos.",
    images: [lmMobileProductsImg, lmMobileFavoritesImg, lmMobileCartImg],
    links: [repoLink("los-molinos-mobile")],
    technologies: [TECH.reactNative, TECH.expo, TECH.typescript, TECH.firebase],
  },
  {
    id: 3,
    title: "Little Lemon",
    platform: "mobile",
    description: "Proyecto final del curso de React Native de la Meta React Native Specialization. Cumple la consigna con un rediseño propio: sistema de diseño centralizado, navegación con Native Stack, validación de email accesible, manejo de safe areas y teclado, y deep linking a la pantalla de suscripción.",
    images: [littleLemonWelcomeImg, littleLemonSubscribeImg],
    links: [repoLink("LittleLemonApp")],
    technologies: [TECH.reactNative, TECH.expo, TECH.javascript],
  },
  {
    id: 4,
    title: "Los Molinos Frontend",
    platform: "web",
    description: "Tienda online de un negocio de accesorios para parrilla, pensada primero para celular. Catálogo y stock en tiempo real desde Firestore, carrito sincronizado entre pestañas, zoom táctil y checkout por WhatsApp. Rutas con carga diferida (bundle inicial ~80 KB gzip) e imágenes optimizadas con Cloudinary.",
    images: [lmFrontendImg],
    links: [
      { label: "Visitar Web", url: "https://lmregionales.vercel.app", icon: <FiMonitor size={12} /> },
      repoLink("los-molinos-frontend"),
    ],
    technologies: [TECH.react, TECH.javascript, TECH.tailwind, TECH.firebase],
  },
];

const PLATFORM_LABEL: Record<Platform, { label: string; icon: React.ReactNode }> = {
  mobile: { label: "App Mobile", icon: <FiSmartphone size={12} /> },
  web: { label: "Web", icon: <FiMonitor size={12} /> },
};

const ProjectPreview = ({ project }: { project: Project }) => {
  const imgClass = "w-full h-full object-cover transition-all duration-700 ease-out can-hover:grayscale group-hover/img:grayscale-0";

  if (project.platform === "web") {
    return (
      <div className="relative overflow-hidden rounded-sm aspect-video">
        <img
          src={project.images[0]}
          alt={`Preview del proyecto ${project.title}`}
          loading="lazy"
          className={`${imgClass} group-hover/img:scale-110`}
        />
      </div>
    );
  }

  return (
    <div
      className="grid gap-3 py-2"
      style={{ gridTemplateColumns: `repeat(${project.images.length}, minmax(0, 1fr))` }}
    >
      {project.images.map((src, i) => (
        <div
          key={src}
          className={`overflow-hidden rounded-2xl border-4 border-white/10 aspect-[9/19.5] transition-all duration-500 group-hover/img:border-[#00d1ff]/30 ${
            i % 2 === 1 ? "translate-y-4" : ""
          }`}
        >
          <img
            src={src}
            alt={`Captura ${i + 1} de ${project.title}`}
            loading="lazy"
            className={imgClass}
          />
        </div>
      ))}
    </div>
  );
};

const ProjectCard = memo(({ project, index }: { project: Project; index: number }) => (
  <article className="group relative border-b border-white/10 py-12 transition-all duration-500 hover:border-[#00d1ff]/30">
    <span
      aria-hidden="true"
      className="absolute -left-1 top-12 font-mono text-[10rem] font-black leading-none text-white/3 select-none pointer-events-none transition-all duration-500 group-hover:text-[#00d1ff]/10"
    >
      {String(index + 1).padStart(2, "0")}
    </span>

    <div className="relative grid grid-cols-1 gap-10 md:grid-cols-[1fr_360px] md:gap-16 items-center">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <span className="flex w-fit items-center gap-2 rounded-full border border-[#00d1ff]/30 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#00d1ff]/80">
            {PLATFORM_LABEL[project.platform].icon}
            {PLATFORM_LABEL[project.platform].label}
          </span>
          <h3 className="text-3xl font-black text-[#00d1ff] md:text-4xl">
            {project.title}
          </h3>
        </div>

        <p className="max-w-lg font-mono text-sm leading-relaxed text-white/50">
          {project.description}
        </p>

        <div className="flex items-center gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech.name}
              title={tech.name}
              aria-label={tech.name}
              className="flex h-12 w-12 items-center justify-center rounded border border-white/10 text-3xl text-white/30 transition-all duration-200 hover:border-[#00d1ff]/50 hover:text-[#00d1ff]"
            >
              {tech.icon}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href={project.links[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/img relative block mb-1 touch:pointer-events-none"
          aria-label={`${project.links[0].label}: ${project.title}`}
        >
          <div className="absolute inset-0 z-20 flex touch:hidden items-center justify-center opacity-0 transition-opacity duration-300 group-hover/img:opacity-100">
            <span className="flex items-center gap-2 rounded-full bg-[#00d1ff] px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider text-black shadow-xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
              {project.links[0].icon}
              {project.links[0].label}
            </span>
          </div>

          <ProjectPreview project={project} />
        </a>

        <div className={`grid grid-cols-1 gap-2 ${project.platform === "mobile" ? "mt-4" : ""}`}>
          {/* On touch screens the image overlay never shows, so the main link gets its own button */}
          <a
            href={project.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden touch:flex items-center justify-center gap-2 w-full py-2 rounded bg-[#00d1ff] text-xs font-mono font-bold uppercase tracking-wider text-black"
          >
            {project.links[0].icon}
            {project.links[0].label}
          </a>
          {project.links.slice(1).map((link) => (
            <a
              key={link.url}
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
