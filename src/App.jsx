import TimelineHero from "./components/TimelineHero";
import HoverCard from "./components/HoverCard";
import ScrollSection from "./components/ScrollSection";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 px-8 py-12">
      
      {/* Objective Section */}
      <section className="max-w-3xl mx-auto mb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Advanced Animations Project
        </h1>
        <p className="text-gray-700 font-semibold">
          Create advanced animations using libraries like GSAP or Framer Motion.
          Implement interactive elements triggered by user actions such as
          hover and scroll-based animations.
        </p>
      </section>

      {/* GSAP Timeline */}
      <TimelineHero />

      {/* Hover Interaction */}
      <div className="flex justify-center mb-40">
        <HoverCard />
      </div>

      {/* Scroll Animation */}
      <ScrollSection />

    </div>
  );
}
