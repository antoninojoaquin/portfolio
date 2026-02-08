import FloatingLines from "../components/FloatingLines";
import TiltedCard from "../components/TiltedCard";
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
      description: "E-commerce para productos regionales con foco en UX moderna y fluida. Desarrollé gestión de stock en tiempo real y un flujo de compra automatizado vía WhatsApp para maximizar la conversión.",
      image: lmregionalesImg,
      link: "https://lmregionales.vercel.app",
      technologies: [<SiReact />, <SiTypescript />, <SiTailwindcss />]
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen overflow-hidden bg-slate-950 flex flex-col items-center justify-center py-24">
      <div className="absolute top-0 left-0 w-full h-64 bg-linear-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
      
      <div className="absolute inset-0 z-0">
        <FloatingLines 
          linesGradient={["#99fffe","#00d1ff","#0090c1"]} 
          enabledWaves={["top","middle","bottom"]}
          lineCount={5}
          lineDistance={5}
          bendRadius={5}
          bendStrength={-0.5}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="relative z-30 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-2 justify-items-center">
          {projects.map((project) => (
            <div key={project.id} className="w-full max-w-100">
              <TiltedCard
                imageSrc={project.image}
                altText={project.title}
                containerHeight="400px"
                containerWidth="100%"
                imageHeight="400px"
                imageWidth="100%"
                rotateAmplitude={6}
                scaleOnHover={1.08}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="w-full h-100 p-6 flex flex-col justify-end rounded-[15px] overflow-hidden group">
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/65 md:via-slate-950/50 to-transparent rounded-[15px]" />
                    
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-[#00d1ff] mt-1 tracking-tight italic">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-300 text-xs md:text-sm mt-3 font-medium leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center gap-4">
                          <div className="h-0.5 w-12 bg-[#00d1ff] group-hover:w-16 transition-all duration-500 ease-out" />
                          <div className="flex gap-3 text-slate-400 text-xl hover:cursor-crosshair">
                            {project.technologies.map((Icon, index) => (
                              <span key={index} className="hover:text-[#00d1ff] transition-colors duration-300">
                                {Icon}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 py-2 px-4 bg-[#00d1ff] text-slate-950 text-xs font-bold rounded-full hover:scale-105 transition-transform duration-300 tracking-wider"
                        >

                          <FiExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Projects;