import FastMarqueeLib from "react-fast-marquee";
import React, { useId } from 'react';
import { SiTypescript, SiReact, SiGithub, SiExpo, SiFirebase } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

// @ts-ignore
const Marquee = FastMarqueeLib.default ? FastMarqueeLib.default : FastMarqueeLib;

interface TechItem {
  name: string;
  icon: React.ElementType;
}

// Badge logos (shape with the text cut out) — react-icons only ships the bare wordmarks
const BadgeIcon = ({ shape, label, fontSize, className }: { shape: React.ReactNode; label: string; fontSize: number; className?: string }) => {
  const maskId = useId();
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" className={className}>
      <mask id={maskId}>
        <g fill="white">{shape}</g>
        <text x="12" y="12.5" textAnchor="middle" dominantBaseline="middle" fontSize={fontSize} fontWeight="700" fontFamily="Arial, sans-serif" fill="black">
          {label}
        </text>
      </mask>
      <rect width="24" height="24" mask={`url(#${maskId})`} />
    </svg>
  );
};

const CSharpIcon = ({ className }: { className?: string }) => (
  <BadgeIcon shape={<polygon points="12,1 21.5,6.5 21.5,17.5 12,23 2.5,17.5 2.5,6.5" />} label="C#" fontSize={9} className={className} />
);

const DotnetIcon = ({ className }: { className?: string }) => (
  <BadgeIcon shape={<rect x="1" y="1" width="22" height="22" rx="4" />} label=".NET" fontSize={7.5} className={className} />
);

const techs: TechItem[] = [
  { name: "React Native", icon: TbBrandReactNative },
  { name: "Expo", icon: SiExpo },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Firebase", icon: SiFirebase },
  { name: "C#", icon: CSharpIcon },
  { name: ".NET", icon: DotnetIcon },
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