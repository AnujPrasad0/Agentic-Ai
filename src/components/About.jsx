import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
    <section className="box px-50 bg-contain bg-center bg-no-repeat flex flex-col items-center relative gap-15 -top-0 md:-top-5 lg:-top-30 xl:-top-35 z-1 transition-all duration-300 ease-in-out">
      <h1 className="text-[1.33rem] leading-7 sm:leading-11 md:leading-14 lg:leading-16 text-black dark:text-white text-center poppins font-[500] sm:text-4xl md:text-5xl transition-all duration-300 ease-in-out">
        Why use AgenticAI ?
      </h1>

      <div className="flex gap-10 h-full">
        <div className="w-[50%] flex flex-col gap-5">
          <p className="text-right text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
            Agentic AI represents a new era of artificial intelligence — one
            where machines aren’t just passive tools, but active, intelligent
            agents that can understand goals, make decisions, and take
            initiative.
          </p>
          <p className="text-right text-[0.8rem] md:text-[1.3rem] text-black/90 dark:text-white/80 transition-all duration-300 ease-in-out">
            Unlike traditional AI that only responds to commands, Agentic AI is
            designed to think, act, and adapt like a human assistant. It can
            plan tasks, solve problems, and follow through with minimal input —
            all while learning from its environment.
          </p>
        </div>
        <div className="h-full w-1 bg-white"></div>
        <div className="w-[50%]">
          <ul className="flex flex-col gap-3">
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
