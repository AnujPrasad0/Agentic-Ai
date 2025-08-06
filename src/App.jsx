import useThemeClass from "./hooks/useThemeClass";
import Home from "./pages/Home";
import { useRef, useEffect } from "react";
import agentTypesAPI from "./features/agentTypes/agentTypesAPI";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    // 1. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    // 2. Use requestAnimationFrame for Lenis
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 3. Tell ScrollTrigger to use Lenis as scroller
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return value !== undefined ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    // 4. Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", ScrollTrigger.update);

    return () => {
      lenis.destroy();
      ScrollTrigger.kill();
    };
  }, []);

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
