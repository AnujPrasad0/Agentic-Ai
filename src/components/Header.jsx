import { RiRobot2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import menubar from "../assets/menu-bar.gif";
import ThemeToggler from "./themeToggler";
import { useSelector } from "react-redux";

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className="z-10 flex justify-between fixed w-full items-center px-5 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-b-sm transition-all ease-in-out duration-300">
      <div className="">
        {mode === "light" ? (
          <RiRobot2Line size={50} />
        ) : (
          <RiRobot2Line size={50} color="#44DD65" />
        )}
      </div>
      <ThemeToggler />
      <div className="w-20">
        {/* <HiBars3 size={50} /> */}
        <img src={menubar} alt="" />
      </div>
    </div>
  );
};

export default Header;
