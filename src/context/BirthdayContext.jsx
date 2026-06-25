import { createContext, useContext, useState } from "react";

const BirthdayContext = createContext();

export function BirthdayProvider({ children }) {

  const [step, setStep] = useState("loading");

  const [musicPlaying, setMusicPlaying] = useState(true);

  const [passwordUnlocked, setPasswordUnlocked] = useState(false);

  const [giftOpened, setGiftOpened] = useState(false);

  const [currentChapter, setCurrentChapter] = useState(1);

  const nextStep = () => {

    const order = [
      "loading",
      "lockscreen",
      "call",
      "password",
      "gift",
      "story"
    ];

    const current = order.indexOf(step);

    if (current !== -1 && current < order.length - 1) {
      setStep(order[current + 1]);
    }

  };

  return (

    <BirthdayContext.Provider

      value={{

        step,
        nextStep,
        setStep,

        musicPlaying,
        setMusicPlaying,

        passwordUnlocked,
        setPasswordUnlocked,

        giftOpened,
        setGiftOpened,

        currentChapter,
        setCurrentChapter

      }}

    >

      {children}

    </BirthdayContext.Provider>

  );

}

export function useBirthday(){

  return useContext(BirthdayContext);

}