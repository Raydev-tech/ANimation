import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TimelineHero() {
  const box = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(box.current, { opacity: 0, y: 40, duration: 0.6 })
      .to(box.current, { scale: 1.05, duration: 0.3 })
      .to(box.current, { scale: 1, duration: 0.2 });
  }, []);

  return (
    <div
      ref={box}
      className="bg-gray-100 p-16 rounded-2xl mb-24 text-center shadow-sm"
    >
      <h2 className="text-3xl font-bold mb-3">GSAP Timeline</h2>
      <p className="text-gray-600">
        Complex animation sequence using GSAP timeline
      </p>
    </div>
  );
}
