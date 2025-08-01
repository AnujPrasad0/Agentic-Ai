import Spline from "@splinetool/react-spline";
import { useSelector } from "react-redux";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);

  function ai() {
    if (window.innerWidth >= 1024) {
      if (mode === "light") {
        return (
          <Spline scene="https://prod.spline.design/wpHVhx00cayL3FdF/scene.splinecode" />
        );
      } else {
        return (
          <Spline scene="https://prod.spline.design/Wn7zvgwfHXZutNF0/scene.splinecode" />
        );
      }
    } else {
      return null;
    }
  }
  return <div className="">{ai()}</div>;
}
