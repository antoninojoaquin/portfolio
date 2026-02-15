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
<p className="mb-4">
  Me especializo en crear <span className="text-[#00d1ff]">experiencias digitales modernas y eficientes</span>. Transformo ideas complejas en interfaces claras, priorizando siempre la <span className="text-[#00d1ff]">usabilidad</span>, la <span className="text-[#00d1ff]">intuitividad</span> y la <span className="text-[#00d1ff]">estética</span>.
</p>
<p>
  A través de mis proyectos, busco siempre <span className="text-[#00d1ff]">organizar código limpio </span>y <span className="text-[#00d1ff]">aplicar buenas prácticas.</span> Cada desafío es una oportunidad para <span className="text-[#00d1ff]">mejorar la estructura y el impacto visual</span> de lo que construyo.
</p>
                </div>
            </div>
        </section>
    );
};

export default About;