import About from "../components/About";
import Agents from "../components/Agents";
import Header from "../components/Header";
import Hero from "../components/Hero";
import String from "../components/String";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  gsap.from(".box", {
    scrollTrigger: {
      trigger: ".box",
      start: "top 80%",
      end: "top 30%",
      scrub: true,
      markers: true,
    },
    x: 200,
    opacity: 0,
  });

  return (
    <>
      <Header />
      <div className="bg-[#d4d4e6] dark:bg-[#111111] relative transition-all duration-300 ease-in-out roboto">
        <div className="w-full py-15 lg:py-10 xl:py-5"></div>
        <Hero />
        <div className="w-full relative -top-0 md:-top-5 lg:-top-30 xl:-top-35">
          <String />
        </div>
        <About />
        <Agents />
      </div>
    </>
  );
};

export default Home;
