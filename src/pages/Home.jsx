import Header from "../components/Header";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="bg-[#d4d4e6] dark:bg-[#111111] transition-all duration-300 ease-in-out roboto h-[300vh]">
      <Header />
      <div className="w-full py-15"></div>
      <Hero />
    </div>
  );
};

export default Home;
