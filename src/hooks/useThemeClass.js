import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useThemeClass() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    console.log("Theme is now", mode);
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
}
