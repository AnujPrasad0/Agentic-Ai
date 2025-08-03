import Spline from "@splinetool/react-spline";
import { useSelector } from "react-redux";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  // function ai() {
  //   if (window.innerWidth >= 1024) {
  //     if (mode === "light") {
  //       return (
  //         <Spline scene="https://prod.spline.design/wpHVhx00cayL3FdF/scene.splinecode" />
  //       );
  //     } else {
  //       return (
  //         <Spline scene="https://prod.spline.design/8a4J527H4WGVNH8S/scene.splinecode" />
  //       );
  //     }
  //   } else {
  //     return null;
  //   }
  // }
  // return <div className="">{ai()}</div>;
  return (
    <div className="relative">
      <div className="z-2 relative">
        <Spline scene="https://prod.spline.design/qIO4-KKjYuoqOOiy/scene.splinecode" />
      </div>
      <div className="z-1 absolute w-[50%] h-[50%] rounded-t-full bg-[radial-gradient(circle_at_bottom,_#44DD65_10%,_#e9e9e9_60%)] dark:bg-[radial-gradient(circle_at_bottom,_#44DD65_10%,_#343434_60%)] left-[50%] top-[50%] translate-[-50%]"></div>
      <div className="z-3 w-35 h-11 absolute right-5 bottom-4 bg-[#d4d4e6] dark:bg-[#111111] transition-all ease-in-out duration-300"></div>
    </div>
  );
}
