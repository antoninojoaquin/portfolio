import timerrcImg from "../assets/images/timerrc-screenshot.webp"
import lmregionalesImg from "../assets/images/lmregionales-screenshot.webp"
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "timerrc",
      description: "Plataforma de alta precisión para speedcubers con cronómetro en tiempo real. Implementé scrambles algorítmicos, persistencia local y analíticas de usuario para optimizar la experiencia de entrenamiento.",
      image: timerrcImg,
      link: "https://timerrc.com",
      technologies: [<SiReact />, <SiJavascript />, <SiTailwindcss />]
    },
    {
      id: 2,
      title: "Los Molinos Regionales",
      description: "E-commerce de artículos de parrilla con enfoque en UX fluida. Implementé persistencia de datos en Firestore y un flujo de pedidos vía WhatsApp para agilizar el contacto directo y la conversión.",
      image: lmregionalesImg,
      link: "https://lmregionales.vercel.app",
      technologies: [<SiReact />, <SiTypescript />, <SiTailwindcss />]
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center py-24">
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
      
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Projects;