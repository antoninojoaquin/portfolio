import LightRays from "../components/LightRays";
import { useState, useEffect } from "react";
import { LuFingerprint } from "react-icons/lu";

const About = () => {

    const useMediaQuery = (query: string) => {
      const [matches, setMatches] = useState(false);
    
      useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
      }, [matches, query]);
    
      return matches;
    };
    
      const isLargeScreen = useMediaQuery("(min-width: 1120px)");
    return (
        <section id="about" className="relative w-full min-h-screen overflow-hidden bg-slate-900 flex items-center justify-center">
            <div className="absolute top-0 left-0 w-full h-64 md:h-96 bg-linear-to-b from-slate-950 to-transparent z-20" />
            <div className="absolute inset-0">
                <LightRays
                    raysOrigin="bottom-center"
                    raysColor="#00d1ff"
                    raysSpeed={1}
                    lightSpread={6}
                    rayLength={isLargeScreen ? 0.8 : 8}
                    distortion={0}
                    className="w-full h-full"
                    pulsating={false}
                    fadeDistance={2}
                    saturation={1}
                />
            </div>
            <div className="relative z-30 max-w-3xl mx-auto px-6 flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight flex items-center justify-center gap-8">
                    <LuFingerprint className="text-[#00d1ff] w-12 h-12" />
                    <span>Sobre mí</span>
                </h2>
                
                <div className="text-slate-300 text-xl md:text-2xl leading-relaxed space-y-10 md:space-y-6">
                    <p>
                      Tengo 19 años y estudio <span className="text-[#00d1ff]">Analista de Sistemas</span>. Tengo interés en el <span className="text-[#00d1ff]">desarrollo web</span> y en la creación de interfaces modernas y eficientes.
                    </p>
                    <p>
                      He trabajado en varios <span className="text-[#00d1ff]">proyectos personales</span> que me ayudaron a <span className="text-[#00d1ff]">organizar mejor el código</span> y a crear <span className="text-[#00d1ff]">interfaces más claras y agradables</span>, aprendiendo y mejorando en cada proyecto.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;