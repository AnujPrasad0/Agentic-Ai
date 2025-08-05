import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";

const ThemeToggler = () => {
  const dispatch = useDispatch();
  const modeSelect = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={modeSelect}
      className="text-2xl font-bold text-[#000] bg-[#3B82F6] dark:bg-[#fff] dark:text-black px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 ease-in-out"
    >
      Mode
    </button>
  );
};

export default ThemeToggler;
