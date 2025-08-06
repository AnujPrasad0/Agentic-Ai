import HeroSection from "./HeroSection";
import Robo from "./Robo";
import React, { Suspense, lazy } from "react";

const LazyComponent = lazy(() => import("./Robo"));

const Hero = () => {
  return (
    <div>
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
        {/* <Robo /> */}
      </div>
      <HeroSection />
    </div>
  );
};

export default Hero;
