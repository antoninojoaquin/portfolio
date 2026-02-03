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
    <Marquee 
      gradient={false} 
      speed={50}
      className="w-full p-4 z-30 text-slate-200 bg-transparent overflow-hidden"
    >
        <div className="flex gap-12 md:gap-15 lg:gap-32 xl:gap-24 2xl:gap-32 items-center pr-12 text-lg font-medium">
          {techs.map((tech) => (
            <div 
              key={tech.name} 
              className={`flex items-center gap-2 md:gap-4 transition-colors duration-300 hover:text-cyan-400 cursor-crosshair`}
            >
              <span className="text-[#00d1ff]">{tech.name}</span>
              <tech.icon className="text-3xl md:text-4xl lg:text-5xl" />
            </div>
          ))}
        </div>
    </Marquee>
  );
}

export default MarqueeComponent;