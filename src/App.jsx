import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "./components/LoadingScreen";
import IncomingCall from "./components/IncomingCall";
import PasswordScreen from "./components/PasswordScreen";
import GiftBox3D from "./components/GiftBox3D";

import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";
import MusicPlayer from "./components/MusicPlayer";

import HeroSection from "./components/HeroSection";
import StoryBook from "./components/StoryBook";
import Gallery from "./components/Gallery";
import MemoryBook from "./components/MemoryBook";
import BirthdayLetter from "./components/BirthdayLetter";
import Cake from "./components/Cake";
import Ending from "./components/Ending";

export default function App() {
  const [screen, setScreen] = useState("loading");

  const nextScreen = () => {
    switch (screen) {
      case "loading":
        setScreen("call");
        break;

      case "call":
        setScreen("password");
        break;

      case "password":
        setScreen("gift");
        break;

      case "gift":
        setScreen("hero");
        break;

      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-pink-50 overflow-x-hidden"
    >
      {/* First Screens */}

      {screen === "loading" && (
        <LoadingScreen next={nextScreen} />
      )}

      {screen === "call" && (
        <IncomingCall next={nextScreen} />
      )}

      {screen === "password" && (
        <PasswordScreen next={nextScreen} />
      )}

      {screen === "gift" && (
        <GiftBox3D next={nextScreen} />
      )}

      {/* Main Birthday Website */}

 {/* Main Birthday Website */}

{screen === "hero" && (
  <AnimatePresence mode="wait">
    <motion.div
      key="birthday"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <BackgroundEffects />
      <ScrollProgress />
      <MusicPlayer />

      <HeroSection />
      <StoryBook />
      <Gallery />
      <MemoryBook />
      <BirthdayLetter />
      <Cake />
      <Ending />
    </motion.div>
  </AnimatePresence>
)}
    </motion.div>
  );
}