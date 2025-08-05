import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import String from "../components/String";
import Swipe from "../components/Swipe";

const Home = () => {
  return (
    <div className="bg-[#d4d4e6] dark:bg-[#111111] relative transition-all duration-300 ease-in-out roboto h-[300vh]">
      <Header />
      <div className="w-full py-15 lg:py-10 xl:py-5"></div>
      <Hero />
      <div className="w-full relative lg:-top-30 xl:-top-35">
        <String />
      </div>
      {/* <div className=" w-full top-[25%] sm:top-[27%] md:top-[32%] lg:top-[38%] xl:top-[41%] absolute">
        <String />
      </div> */}
      <About />

      {/* <div className="h-100 lg:px-10">
        <Swipe />
      </div> */}
    </div>
  );
};

export default Home;
