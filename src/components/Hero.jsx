import airobot from "../assets/airobot.gif";
import Robo from "./robo";

const Hero = () => {
  return (
    <div>
      <div className="lg:hidden">
        <div className="w-70 m-auto">
          <img src={airobot} alt="" />
        </div>
        <button className="m-auto">Get Started</button>
      </div>
      <div className="hidden lg:block">
        <Robo />
      </div>
    </div>
  );
};

export default Hero;
