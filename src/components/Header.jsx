import { RiRobot2Line } from "react-icons/ri";
import { HiBars3 } from "react-icons/hi2";
import menubar from "../assets/menu-bar.gif";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const Header = () => {
  const mode = useSelector((state) => state.theme.mode);
  console.log(mode);

  const dispatch = useDispatch();
  const modeSelect = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="flex justify-between items-center px-5 py-3">
      <div className="">
        <RiRobot2Line size={50} />
      </div>
      <button
        onClick={modeSelect}
        className="text-2xl font-bold  dark:text-[#fff] text-[#000] bg-[#3B82F6] dark:bg-[#fff] px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out"
      >
        Mode
      </button>
      <div className="w-20">
        {/* <HiBars3 size={50} /> */}
        <img src={menubar} alt="" />
      </div>
    </div>
  );
};

export default Header;
