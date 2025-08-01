const HeroSection = () => {
  return (
    <section className="bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-8 text-center">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Discover Agentic AI
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl text-text-secondary-light dark:text-text-secondary-dark max-w-xl mb-6">
        Dive into a new era of autonomous, goal-driven intelligence. From task
        automation to smart assistants—experience the future, today.
      </p>

      {/* CTA Button */}
      <button className="px-6 py-3 bg-[#111827] dark:bg-primary-dark text-white font-semibold rounded-md shadow-md hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition">
        Explore Types
      </button>

      {/* Background Illustration (suggested) */}
      <div className="mt-10 w-full max-w-4xl">
        {/* You can place SVG, animated gradient, or a subtle AI-themed abstract here */}
        {/* Example placeholder */}
        <div className="w-full h-64 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 rounded-lg shadow-inner blur-sm opacity-70" />
      </div>
    </section>
  );
};

export default HeroSection;
