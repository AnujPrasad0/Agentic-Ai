import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function useThemeClass() {
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    console.log("Theme is now", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);
}
