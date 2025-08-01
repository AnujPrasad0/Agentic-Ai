import airobot from "../assets/airobot.gif";
import HeroSection from "./HeroSection";
import Robo from "./robo";

const Hero = () => {
  return (
    <div>
      <div className="lg:hidden flex flex-col items-center gap-5">
        <div className="w-70 m-auto pl-10 sm:w-100 md:w-130">
          <img className="w-full" src={airobot} alt="" />
        </div>
        <button className="bg-[linear-gradient(90deg,_#815BFF,_#DC00C9,_#ff007f_65%,_#ff7a26_100%)] text-3xl px-6 py-3 rounded-full text-[#d4d4e6] md:text-5xl">
          Get Started
        </button>
      </div>
      <div className="hidden lg:block">
        <Robo />
      </div>
      <HeroSection />
    </div>
  );
};

export default Hero;
