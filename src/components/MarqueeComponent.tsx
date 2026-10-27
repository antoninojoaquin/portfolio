import FastMarqueeLib from "react-fast-marquee";
import React from 'react'; 
import { SiTypescript, SiJavascript, SiReact, SiTailwindcss, SiGit, SiGithub, SiExpo, SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// @ts-ignore
const Marquee = FastMarqueeLib.default ? FastMarqueeLib.default : FastMarqueeLib;

interface TechItem {
  name: string;
  icon: React.ElementType; 
}

const techs: TechItem[] = [
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Expo", icon: SiExpo },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Firebase", icon: SiFirebase },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
];

const MarqueeComponent = () => {
  return (
    <div className="w-full mx-auto"> 
      
      <Marquee 
        gradient={false}
        speed={100}
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
              <span className="text-md md:text-xl 2xl:text-3xl font-semibold tracking-tight font-mono text-[#00d1ff]">
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