import LightRays from "../components/LightRays";
import { useState, useEffect } from "react";
import { LuFingerprint } from "react-icons/lu";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";
import { FiExternalLink } from "react-icons/fi";
import Footer from "../components/Footer";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  url: string;
  icon: React.ReactNode;
}

const CERTIFICATIONS: Certification[] = [
  {
    title: "React Native",
    issuer: "Meta · Coursera",
    date: "Oct 2026",
    url: "https://www.coursera.org/account/accomplishments/verify/TMJRJPCF2SIA",
    icon: <TbBrandReactNative />,
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "Microsoft · freeCodeCamp",
    date: "Jun 2026",
    url: "https://www.freecodecamp.org/certification/joaquin-antonino/foundational-c-sharp-with-microsoft",
    icon: <TbBrandCSharp />,
  },
];

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
                    followMouse={false}
                    noiseAmount={0}
                    distortion={0}
                    className="w-full h-full"
                    pulsating={false}
                    fadeDistance={2}
                    saturation={1}
                />
            </div>
            <header className="mb-20 border-b border-[#00d1ff]/10 pb-8"></header>
            <div className="relative z-30 max-w-3xl 2xl:max-w-5xl mx-auto px-6 pt-24 pb-40 flex flex-col">
                <h2 className="text-4xl md:text-5xl 2xl:text-7xl font-bold text-white mb-6 tracking-tight flex items-center gap-4">
                    <LuFingerprint className="text-[#00d1ff] 2xl:w-16 2xl:h-16 w-12 h-12" />
                    <span>Sobre mí</span>
                </h2>
                
                <div className="text-slate-300 text-xl md:text-3xl xl:text-2xl 2xl:text-3xl leading-relaxed space-y-10 md:space-y-6">
                <p className="mb-4">
                  Desarrollo <span className="text-[#00d1ff]">apps móviles con React Native</span>. Vengo del frontend web, y llevo a Android e iOS lo que aprendí ahí: priorizar la <span className="text-[#00d1ff]">usabilidad</span>, la <span className="text-[#00d1ff]">performance</span> y los detalles que hacen que una app <span className="text-[#00d1ff]">se sienta nativa</span>.
                </p>
                <p>
                  Me interesa el producto completo: desde el <span className="text-[#00d1ff]">diseño de cada pantalla</span> hasta <span className="text-[#00d1ff]">publicar builds y actualizaciones OTA</span>. Como estudiante de Análisis de Sistemas, antes de escribir código pienso en <span className="text-[#00d1ff]">quién va a usar la app</span> y <span className="text-[#00d1ff]">qué problema le resuelve</span>.
                </p>
                </div>

                <div className="mt-14 flex flex-col gap-4">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-[#00d1ff]/80">
                        Certificaciones
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {CERTIFICATIONS.map((cert) => (
                            <a
                                key={cert.url}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded border border-white/10 bg-slate-950/60 p-4 transition-all duration-200 hover:border-[#00d1ff]/50 hover:bg-[#00d1ff]/5"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-white/10 text-3xl text-white/40 transition-colors group-hover:border-[#00d1ff]/50 group-hover:text-[#00d1ff]">
                                    {cert.icon}
                                </span>
                                <span className="flex min-w-0 flex-col gap-1">
                                    <span className="font-bold text-white leading-tight">{cert.title}</span>
                                    <span className="font-mono text-xs text-white/50">
                                        {cert.issuer} · {cert.date}
                                    </span>
                                </span>
                                <FiExternalLink className="ml-auto shrink-0 text-white/30 transition-colors group-hover:text-[#00d1ff]" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    );
};

export default About;