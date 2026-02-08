import FastMarqueeLib from "react-fast-marquee";
import React from 'react'; 
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";

// @ts-ignore
const Marquee = FastMarqueeLib.default ? FastMarqueeLib.default : FastMarqueeLib;

interface TechItem {
  name: string;
  icon: React.ElementType; 
}

const techs: TechItem[] = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const MarqueeComponent = () => {
  return (
    <div className="w-full mx-auto"> 
      
      <Marquee 
        gradient={false}
        speed={80}
        pauseOnHover={true}
        className="overflow-hidden"
      >
        <div className="flex items-center">
          {[...techs, ...techs].map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="flex items-center gap-3 px-8 md:px-12 lg:px-16"
            >
              <tech.icon className="text-3xl md:text-5xl"/>
              <span className="text-md md:text-xl font-semibold tracking-tight font-mono text-[#00d1ff]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default MarqueeComponent;