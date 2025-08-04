import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const String = () => {
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const [dims, setDims] = useState({ width: 0, height: 0 });
  const finalPathRef = useRef("");

  // Update dimensions and final path on mount and resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDims = () => {
      const { width, height } = container.getBoundingClientRect();
      setDims({ width, height });
      const midY = height / 2;
      // Resting path based on actual container dims
      finalPathRef.current = `M 0 ${midY} Q ${width / 2} ${midY} ${width} ${midY}`;
      // Initialize path
      if (pathRef.current) {
        gsap.set(pathRef.current, { attr: { d: finalPathRef.current } });
      }
    };

    updateDims();
    window.addEventListener("resize", updateDims);
    return () => window.removeEventListener("resize", updateDims);
  }, []);

  // Mouse movement
  useEffect(() => {
    const container = containerRef.current;
    const pathEl = pathRef.current;
    if (!container || !pathEl) return;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const midY = rect.height / 2;

      const d = `M 0 ${midY} Q ${x} ${y} ${rect.width} ${midY}`;
      gsap.to(pathEl, {
        attr: { d },
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(pathEl, {
        attr: { d: finalPathRef.current },
        duration: 1,
        ease: "elastic.out(1, 0.2)",
      });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [dims]);

  return (
    <div
      ref={containerRef}
      className="w-full h-32 sm:h-48 md:h-64 lg:h-80 relative overflow-hidden"
    >
      {dims.width > 0 && (
        <svg
          width={dims.width}
          height={dims.height}
          viewBox={`0 0 ${dims.width} ${dims.height}`}
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
        >
          <path
            ref={pathRef}
            d=""
            stroke="white"
            strokeWidth="2"
            fill="transparent"
          />
        </svg>
      )}
    </div>
  );
};

export default String;
