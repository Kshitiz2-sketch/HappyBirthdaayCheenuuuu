import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

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
        alt="Cheenuuuu"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Pink Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 via-pink-500/20 to-pink-100/60" />

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-200 text-2xl select-none"
          initial={{
            opacity: 0,
            y: "100%",
            x: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: "-120%",
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 3,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 flex h-full items-center justify-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-3xl rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 p-10 text-center shadow-2xl"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: .5 }}
            className="text-pink-100 text-xl tracking-[6px]"
          >
            FOR MY BEST FRIEND
          </motion.p>

          <motion.h1
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            transition={{ delay: .8 }}
            className="mt-4 text-6xl font-bold text-white"
          >
            Happy Birthday
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="mt-3 text-5xl font-extrabold text-pink-200"
          >
            Cheenuuuu ❤️
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-8 text-xl text-white leading-9"
          >
            Happyy birthdayyy chunndarr chiii girlyyyy!! 🤗🤗😋
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            className="mt-6 text-lg text-pink-100"
          >
            Today isn't just another day...
            <br />
            It's the day the world got someone truly special. 💖
          </motion.p>

        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-center"
      >

        <p className="text-white mb-3 tracking-widest">
          SCROLL
        </p>

        <div className="w-8 h-14 rounded-full border-2 border-white flex justify-center">

          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="mt-2 w-2 h-2 rounded-full bg-white"
          />

        </div>

      </motion.div>

      {/* Bottom Glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-pink-300 blur-[140px] opacity-60" />

    </section>
  );
}