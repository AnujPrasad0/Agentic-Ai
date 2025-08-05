import useThemeClass from "./hooks/useThemeClass";
import Home from "./pages/Home";
import { useRef } from "react";
import gsap from "gsap";

const App = () => {
  useThemeClass();

  const cursor = useRef();

  const handleMouseMove = (e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 1,
      ease: "back.out",
    });
  };

  return (
    <>
      <div
        ref={cursor}
        className="fixed z-20 h-4 w-4 bg-black dark:bg-white rounded-full transition-colors duration-300 ease-in-out"
      ></div>
      <div onMouseMove={handleMouseMove} className="w-full">
        <Home />
      </div>
    </>
  );
};

export default App;
