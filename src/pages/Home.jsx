import About from "../components/About";
import Agents from "../components/Agents";
import Demos from "../components/Demos";
import Header from "../components/Header";
import Hero from "../components/Hero";
import String from "../components/String";

const Home = () => {
  return (
    <>
      <Header />
      <div className="bg-[#d4d4e6] dark:bg-[#111111] relative transition-all duration-300 ease-in-out roboto">
        <div className="w-full py-15 lg:py-10 xl:py-5"></div>
        {/* <Hero /> */}
        <div className="w-full relative -top-0 md:-top-5 lg:-top-30 xl:-top-35">
          <String />
        </div>
        <About />
        <Agents />
        <Demos />
      </div>
    </>
  );
};

export default Home;
