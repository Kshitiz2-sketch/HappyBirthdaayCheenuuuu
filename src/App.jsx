import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import IncomingCall from "./components/IncomingCall";
import PasswordScreen from "./components/PasswordScreen";
import GiftOpening from "./components/GiftOpening";
import HeroSection from "./components/HeroSection";

function App() {

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

    <div className="w-screen h-screen overflow-hidden bg-pink-50">

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
        <GiftOpening next={nextScreen} />
      )}

      {screen === "hero" && (
        <HeroSection />
      )}

    </div>

  );
}

export default App;