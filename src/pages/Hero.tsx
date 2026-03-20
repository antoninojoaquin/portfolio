import LightRays from '../components/LightRays';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useState, useEffect } from "react";
import MarqueeComponent from "../components/MarqueeComponent"
import TextType from '../components/TextType';

const Hero = () => {
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
    <section id="home" className="relative w-full h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00d1ff"
          raysSpeed={1}
          lightSpread={6}
          rayLength={isLargeScreen ? 0.8 : 8}
          followMouse={true}
          mouseInfluence={0.2}
          noiseAmount={0}
          distortion={0}
          className="w-full h-full"
          pulsating={false}
          fadeDistance={2}
          saturation={1}
        />
      </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-[42px] md:text-7xl font-bold md:mb-1 whitespace-nowrap">Antonino Joaquín</h1>
          <TextType 
            text={["Frontend Developer", "Systems Analyst Student"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
            className="text-[30px] md:text-5xl text-[#00d1ff]"
          />
          <div className="flex space-x-6 mt-6 text-[36px] text-slate-200">
            <a href="https://github.com/antoninojoaquin" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d1ff] transition-colors duration-250">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/antoninojoaquin" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d1ff] transition-colors duration-250">
              <FaLinkedin />
            </a>
            <a href="mailto:antoninojoaquin06@gmail.com" className="hover:text-[#00d1ff] transition-colors duration-250">
              <SiGmail />
            </a>
          </div>
        </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-b from-transparent to-slate-950 z-20 pointer-events-none" />
      <div className="absolute bottom-8 w-full">
        <MarqueeComponent />
      </div>    
    </section>
  );
};

export default Hero;