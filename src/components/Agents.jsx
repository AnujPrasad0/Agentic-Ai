import { HiOutlineArrowDownCircle } from "react-icons/hi2";
import Swipe from "./Swipe";

const Agents = () => {
  let width = window.innerWidth;

  return (
    <div className="py-15 px-7 lg:px-15 flex flex-col gap-5 lg:gap-15">
      <div className="flex items-center justify-center gap-5">
        <h1 className="text-center text-black dark:text-white text-[1.33rem] sm:text-4xl md:text-5xl poppins font-[500] transition-all duration-300 ease-in-out">
          Try Them
        </h1>
        <span className="text-black dark:text-white animate-bounce pt-4">
          <HiOutlineArrowDownCircle size={width > 639 ? 35 : 20} />
        </span>
      </div>
      <Swipe />
    </div>
  );
};

export default Agents;
