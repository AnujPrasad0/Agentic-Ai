import Spline from "@splinetool/react-spline";
import { useSelector } from "react-redux";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  return (
    <div className="relative">
      <div className="z-2 relative">
        <Spline scene="https://prod.spline.design/qIO4-KKjYuoqOOiy/scene.splinecode" />
      </div>
      <div className="z-1 absolute w-[50%] h-[50%] rounded-t-full bg-[radial-gradient(circle_at_bottom,_#008341_10%,_#a8b0c0_60%)] dark:bg-[radial-gradient(circle_at_bottom,_#41d58b_10%,_#070b0c_60%)] left-[50%] top-[50%] translate-[-50%]"></div>
      <div className="z-3 w-35 h-11 absolute right-5 bottom-4 bg-[#d4d4e6] dark:bg-[#111111] transition-all ease-in-out duration-300"></div>
    </div>
  );
}
