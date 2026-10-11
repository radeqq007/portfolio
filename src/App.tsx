import BackgroundTexture from "./components/BackgroundTexture"
import Navbar from "./components/Navbar"
import ProjectsSection from "./components/ProjectsSection"
import TopSection from "./components/TopSection"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function App() {
  useGSAP(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  });

  return (
    <>
      <Navbar/>
      <TopSection />
      <ProjectsSection />
      <BackgroundTexture />
    </>
  )
}

export default App
