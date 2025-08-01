import { RiRobot2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import menubar from "../assets/menu-bar.gif";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="">
        <RiRobot2Line size={50} />
      </div>
      <div className="w-20">
        {/* <HiBars3 size={50} /> */}
        <img src={menubar} alt="" />
      </div>
    </div>
  );
};

export default Header;
