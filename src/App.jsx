import useThemeClass from "./hooks/useThemeClass";
import Home from "./pages/Home";
import { useRef } from "react";
import gsap from "gsap";
import agentTypesAPI from "./features/agentTypes/agentTypesAPI";

const App = () => {
  useThemeClass();
  agentTypesAPI();

  const cursor = useRef();

  const handleMouseMove = (e) => {
    gsap.to(cursor.current, {
      x: e.clientX,
      y: e.clientY + 8,
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
