import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 w-full z-20 p-4 text-white">
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#00d1ff]/70 to-transparent" />
        <div className="flex justify-center gap-8 mt-4">          
            <a href="https://github.com/antoninojoaquin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-400">
                <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="https://www.linkedin.com/in/antoninojoaquin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-400">
                <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
            </a>
            <a href="mailto:joaquin.antonino@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-400">
                <SiGmail className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;