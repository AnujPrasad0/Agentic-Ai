import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SwiperContent = ({ data }) => {
  const bounceRef = useRef();

  useEffect(() => {
    gsap.to(bounceRef.current, {
      x: 30,
      duration: 0.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <div className="flex flex-col justify-between items-center gap-5 py-10 px-3 bg-[#e4e4e4] dark:bg-black w-full h-110 transition-colors duration-300 ease-in-out">
      <div className="w-[80%] h-[40%] flex items-center justify-center">
        <img className="object-contain" src={data?.img} alt="" />
      </div>
      <h1 className="text-[1.5rem] poppins text-black dark:text-white transition-colors duration-300 ease-in-out">
        {data?.heading}
      </h1>
      <p className="text-[0.8rem] poppins text-black dark:text-white transition-colors duration-300 ease-in-out">
        {data?.desc}
      </p>
      <button className="text-xl py-1 w-[70%] rounded-md bg-[linear-gradient(to_bottom,_#f0f0f7_30%,_#c3c3d9_120%)] dark:bg-[linear-gradient(to_bottom,_#1b1b1b_30%,_#333333_120%)] text-black/90 dark:text-white/90 active:scale-70 sm:active:scale-90 active:ring-2 active:ring-black dark:active:ring-white transition-colors duration-300 ease-in-out">
        <span ref={bounceRef}>👉</span>Use
      </button>
    </div>
  );
};

export default SwiperContent;
