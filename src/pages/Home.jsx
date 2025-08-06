import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import String from "../components/String";
import Swipe from "../components/Swipe";
import SmoothScroll from "../scrolling/SmoothScroll";

const Home = () => {
  return (
    <>
      <Header />
      <SmoothScroll>
        <div className="bg-[#d4d4e6] dark:bg-[#111111] relative transition-all duration-300 ease-in-out roboto h-[300vh]">
          <div className="w-full py-15 lg:py-10 xl:py-5"></div>
          <Hero />
          <div className="w-full relative -top-0 md:-top-5 lg:-top-30 xl:-top-35">
            <String />
          </div>
          <About />
          <div className="px-7 lg:px-15 flex flex-col gap-15">
            <h1 className="text-center text-black dark:text-white text-[1 sm:text-4xl md:text-5xl poppins font-[500] transition-all duration-300 ease-in-out">
              Wanna Try!
            </h1>
            <Swipe />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
};

export default Home;
