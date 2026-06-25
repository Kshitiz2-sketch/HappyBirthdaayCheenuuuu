import { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import MemoryBook from "../components/MemoryBook";
import Gallery from "../components/Gallery";
import BirthdayLetter from "../components/BirthdayLetter";
import Cake from "../components/Cake";
import Ending from "../components/Ending";

import BackgroundEffects from "../components/BackgroundEffects";
import FloatingCursor from "../components/FloatingCursor";
import MusicPlayer from "../components/MusicPlayer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (

    <main className="relative bg-pink-50 overflow-x-hidden">

      {/* Global Effects */}

      <ScrollProgress />

      <BackgroundEffects />

      <FloatingCursor />

      <MusicPlayer />

      {/* Story Begins */}

      <section id="hero">
        <HeroSection />
      </section>

      <section id="memories">
        <MemoryBook />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="letter">
        <BirthdayLetter />
      </section>

      <section id="cake">
        <Cake />
      </section>

      <section id="ending">
        <Ending />
      </section>

    </main>

  );
}