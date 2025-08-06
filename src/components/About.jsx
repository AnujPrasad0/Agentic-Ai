import agenticai from "../assets/agenticai.png";

const About = () => {
  return (
    <section className="bg-contain bg-center bg-no-repeat flex flex-col items-center px-5 relative gap-6  -top-0 md:-top-5 lg:-top-30 xl:-top-35 z-1 transition-all duration-300 ease-in-out">
      <h1 className="text-[1.33rem] leading-7 sm:leading-11 md:leading-14 lg:leading-16 text-black dark:text-white text-center poppins font-[500] sm:text-4xl md:text-5xl transition-all duration-300 ease-in-out">
        Why use AgenticAI ?
      </h1>

      <p className="text-center text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80">
        Agentic AI refers to AI systems that can act independently — making
        decisions, planning actions, and carrying them out to achieve goals.
      </p>
    </section>
  );
};

export default About;
