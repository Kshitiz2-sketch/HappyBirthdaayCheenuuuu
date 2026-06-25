import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ next }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            next();
          }, 1200);

          return 100;
        }

        return old + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative flex h-screen w-screen overflow-hidden items-center justify-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">

      {/* Floating Background Hearts */}

      <div className="absolute inset-0 overflow-hidden">

        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 120,
              x: Math.random() * window.innerWidth,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              y: -900,
            }}
            transition={{
              repeat: Infinity,
              duration: 8 + Math.random() * 8,
              delay: Math.random() * 5,
            }}
            className="absolute text-pink-300 text-xl"
          >
            ❤
          </motion.div>
        ))}

      </div>

      {/* Center Card */}

      <motion.div
        initial={{ opacity: 0, scale: .8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="z-20 w-[360px] rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl p-10 text-center"
      >

        {/* Icon */}

        <motion.div
          animate={{
            rotate: [0, 8, -8, 8, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-6xl"
        >
          🎀
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: .3 }}
          className="mt-5 text-3xl font-bold text-pink-600"
        >
          Loading Memories...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          className="mt-3 text-gray-700"
        >
          Preparing Something Special For...
        </motion.p>

        <motion.h2
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-2 text-2xl font-semibold text-rose-500"
        >
          ❤️ Cheenuuuu ❤️
        </motion.h2>

        {/* Progress */}

        <div className="mt-8">

          <div className="h-3 overflow-hidden rounded-full bg-pink-200">

            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600"
            />

          </div>

          <p className="mt-3 font-medium text-pink-600">

            {progress}%

          </p>

        </div>

        {/* Bottom Message */}

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-6 text-sm text-gray-600"
        >
          Collecting beautiful memories...
        </motion.p>

      </motion.div>

      {/* Bottom Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [.25, .5, .25],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute bottom-[-250px] h-[500px] w-[500px] rounded-full bg-pink-300 blur-[140px]"
      />

    </div>
  );
}