import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { emojis } from "../constants/emojis";

export default function HeroSection() {
  const music = useRef(null);

  useEffect(() => {
    music.current?.play().catch(() => {});
  }, []);

 
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Music */}
      <audio
        ref={music}
        src="/music/background.mp3"
        loop
      />

      {/* Background Image */}
      <img
        src="/photos/favourite.jpg"
        alt="Birthday"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Pink Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-400 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-rose-300 blur-[180px]"
      />

      {/* Floating Emojis */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl pointer-events-none"
          initial={{
            y: "110%",
            x: `${Math.random() * 100}%`,
            opacity: 0,
          }}
          animate={{
            y: "-120%",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {emojis[i % emojis.length]}
        </motion.div>
      ))}

      {/* Main Card */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
          }}
          className="max-w-5xl rounded-[40px] border border-white/20 bg-white/15 backdrop-blur-xl shadow-2xl px-10 py-14 text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white tracking-[8px] uppercase text-sm md:text-lg"
          >
            FOR MY BEST FRIEND
          </motion.p>

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-6 text-6xl md:text-8xl font-extrabold text-white"
          >
            Happy Birthday
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-5 text-5xl md:text-6xl font-bold text-pink-200"
          >
            Cheenuuuu ❤️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-10 text-xl md:text-3xl text-white leading-relaxed"
          >
            Happyy birthdayyy chunndarr chiii girlyyyy!!
            <br />
            🤗🤗😋
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="mt-8 text-lg md:text-2xl text-pink-100"
          >
            Today isn't just another day...
            <br />
            It's the day the world got someone truly special. 💖
          </motion.p>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-30"
      >
        <p className="mb-3 tracking-[5px] text-white">
          SCROLL
        </p>

        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white">
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-white"
          />
        </div>
      </motion.div>

    </section>
  );
}