import { RiRobot2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import menubar from "../assets/menu-bar.gif";
import ThemeToggler from "./themeToggler";
import { useSelector } from "react-redux";

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="">
        {mode === "light" ? <RiRobot2Line size={50} /> : <RiRobot2Line size={50} color="#fff" />}
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
