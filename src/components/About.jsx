const About = () => {
  return (
    <section className="px-10 sm:px-22 xl:px-50 bg-contain bg-center bg-no-repeat flex flex-col items-center relative gap-10 lg:gap-15 -top-0 md:-top-5 lg:-top-30 xl:-top-35 z-1 transition-all duration-300 ease-in-out">
      <h1 className="text-[1.33rem] leading-7 sm:leading-11 md:leading-14 lg:leading-16 text-black dark:text-white text-center poppins font-[500] sm:text-4xl md:text-5xl transition-all duration-300 ease-in-out">
        Why use AgenticAI ?
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 h-full">
        <div className="lg:w-[50%] text-center lg:text-right flex flex-col gap-5">
          <p className="text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
            Agentic AI represents a new era of artificial intelligence — one
            where machines aren’t just passive tools, but active, intelligent
            agents that can understand goals, make decisions, and take
            initiative.
          </p>
          <p className="text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
            Unlike traditional AI that only responds to commands, Agentic AI is
            designed to think, act, and adapt like a human assistant. It can
            plan tasks, solve problems, and follow through with minimal input —
            all while learning from its environment.
          </p>
        </div>
        {/* <div className=" w-1 bg-white"></div> */}
        <div className="lg:w-[50%] flex justify-center">
          <ul className="flex flex-col gap-3 h-full justify-between">
            <li className="list-disc text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
              🧠 Smarter than prompts — understands context and desired outcomes
            </li>
            <li className="list-disc text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
              🔄 Autonomous — performs tasks without constant instructions
            </li>
            <li className="list-disc text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
              🧩 Flexible — adapts to different goals, workflows, and users
            </li>
            <li className="list-disc text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
              ⏱️ Time-saving — reduces micromanagement and repetitive tasks
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
