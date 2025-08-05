const About = () => {
  return (
    <section className="flex flex-col items-center px-5 relative gap-6  -top-0 md:-top-5 lg:-top-30 xl:-top-35 z-1  transition-all duration-300 ease-in-out">
      <h1 className="text-[1.33rem] leading-7 sm:leading-11 md:leading-14 lg:leading-16 text-black dark:text-white text-center poppins font-[500] sm:text-4xl md:text-5xl transition-all duration-300 ease-in-out">
        Why use AgenticAI
      </h1>

      <p className="text-center text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80">
        AgenticAI brings AI agents together to collaborate, solve challenges,
        and deliver transformative results -<br className="hidden lg:block" />
        seamless, scalable and adaptive.
      </p>

      <button className="text-2xl py-3 px-6 rounded-2xl scale-75 sm:scale-100 bg-[linear-gradient(to_bottom,_#f0f0f7_30%,_#c3c3d9_120%)] dark:bg-[linear-gradient(to_bottom,_#1b1b1b_30%,_#333333_120%)] text-black/90 dark:text-white/90 active:scale-70 sm:active:scale-90 active:ring-2 active:ring-black dark:active:ring-white transition-colors duration-300 ease-in-out">
        Discover
      </button>
    </section>
  );
};

export default About;
