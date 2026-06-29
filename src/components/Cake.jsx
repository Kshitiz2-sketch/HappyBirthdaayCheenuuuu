import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  const [blown, setBlown] = useState(false);

  const celebrate = () => {
    if (blown) return;

    setBlown(true);

    confetti({
      particleCount: 350,
      spread: 180,
      origin: { y: 0.55 },
      colors: [
        "#ff69b4",
        "#ff1493",
        "#ffc0cb",
        "#ffffff",
        "#ffd700",
      ],
    });
  };

  return (
    <section
      id="cake"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 py-24 px-6"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-pink-300 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute -right-40 bottom-0 h-[550px] w-[550px] rounded-full bg-rose-300 blur-[180px]"
      />

      {/* Floating Hearts */}

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "110%",
            x: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: "-120%",
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-2xl pointer-events-none"
        >
          ❤️
        </motion.div>
      ))}

      {/* Balloons Left */}

      <div className="absolute left-8 top-20 space-y-5">
        {["🎈", "🎈", "🎈"].map((balloon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i,
            }}
            className="text-6xl"
          >
            {balloon}
          </motion.div>
        ))}
      </div>

      {/* Balloons Right */}

      <div className="absolute right-8 top-20 space-y-5">
        {["🎈", "🎈", "🎈"].map((balloon, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3.5 + i,
            }}
            className="text-6xl"
          >
            {balloon}
          </motion.div>
        ))}
      </div>

      {/* Heading */}

      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="text-center"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-pink-600">
          🎂 Birthday Cake
        </h1>

        <p className="mt-5 text-xl text-gray-700">
          Every birthday deserves a magical cake...
          make one and blow the candles ❤️
        </p>
      </motion.div>

      {/* Cake Area */}

      <div className="mt-20 flex flex-col items-center">
        {/* Cake Topper */}

        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mb-6 text-6xl md:text-7xl font-extrabold text-pink-600"
        >
          18 🎉
        </motion.div>

        {/* Candles */}

        <div className="mb-4 flex items-end justify-center gap-10">

          {[1, 2, 3].map((candle) => (

            <div
              key={candle}
              className="flex flex-col items-center"
            >

              <AnimatePresence>

                {!blown && (

                  <motion.div
                    initial={{
                      scale: 0,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      y: [0, -4, 0],
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                    }}
                    className="mb-1 h-7 w-4 rounded-full bg-yellow-300 shadow-[0_0_25px_rgba(255,220,0,.9)]"
                  />

                )}

              </AnimatePresence>

              {blown && (

                <motion.div
                  initial={{
                    opacity: 0.8,
                    scale: 0.5,
                    y: 0,
                  }}
                  animate={{
                    opacity: 0,
                    scale: 2,
                    y: -35,
                  }}
                  transition={{
                    duration: 2,
                  }}
                  className="mb-1 h-4 w-4 rounded-full bg-gray-400 blur-md"
                />

              )}

              <div className="h-16 w-3 rounded-full bg-white shadow-md" />

            </div>

          ))}

        </div>

        {/* Top Layer */}

        <div className="relative flex h-24 w-60 items-center justify-center rounded-2xl bg-pink-200 shadow-2xl">

          <div className="absolute top-0 h-7 w-full rounded-full bg-white" />

        </div>

        {/* Middle Layer */}

        <div className="relative -mt-2 flex h-28 w-80 items-center justify-center rounded-2xl bg-pink-300 shadow-2xl">

          <div className="absolute top-0 h-8 w-full rounded-full bg-pink-100" />

          <h2 className="relative z-10 text-4xl font-bold text-white drop-shadow-lg">

            Cheenuuuu ❤️

          </h2>

        </div>

        {/* Bottom Layer */}

        <div className="relative -mt-2 flex h-36 w-[420px] max-w-full items-center justify-center rounded-3xl bg-pink-400 shadow-2xl">

          <div className="absolute top-0 h-8 w-full rounded-full bg-pink-200" />

        </div>

        {/* Plate */}

        <div className="mt-3 h-6 w-[460px] max-w-full rounded-full bg-white shadow-2xl" />
        {/* Blow Button */}

        {!blown && (

          <motion.button

            whileHover={{
              scale: 1.06,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={celebrate}

            className="
          mt-16
          rounded-full
          bg-gradient-to-r
          from-pink-500
          to-rose-500
          px-10
          py-5
          text-2xl
          font-semibold
          text-white
          shadow-[0_15px_40px_rgba(255,105,180,.45)]
          "

          >

            🎤 Blow The Candles

          </motion.button>

        )}

        {/* Celebration */}

        <AnimatePresence>

          {blown && (

            <motion.div

              initial={{
                opacity: 0,
                scale: 0.7,
                y: 40,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
              }}

              transition={{
                duration: 0.6,
              }}

              className="mt-16 text-center"

            >

              <motion.h2

                animate={{
                  scale: [1, 1.05, 1],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 1.8,
                }}

                className="text-6xl font-bold text-pink-600"

              >

                🎉 Yayyyyy!! 🎉

              </motion.h2>

              <p className="mt-6 text-2xl text-gray-700">

                Hope all your wishes come true ❤️

              </p>

              <p className="mt-3 text-lg text-pink-500">

                Happy 18th Birthday Cheenuuuu ✨

              </p>

            </motion.div>

          )}

        </AnimatePresence>

        {/* Floating Celebration Hearts */}

        <AnimatePresence>

          {blown && (

            <div className="pointer-events-none absolute inset-0">

              {[...Array(35)].map((_, i) => (

                <motion.div

                  key={i}

                  initial={{
                    opacity: 0,
                    y: 200,
                    x: Math.random() * window.innerWidth,
                    scale: 0.4,
                  }}

                  animate={{
                    opacity: [0, 1, 0],
                    y: -300,
                    scale: [0.5, 1.4, 0.5],
                    rotate: [0, 360],
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 5 + Math.random() * 3,
                    delay: Math.random() * 2,
                  }}

                  className="absolute text-4xl"

                >

                  ❤️

                </motion.div>

              ))}

            </div>

          )}

        </AnimatePresence>
        {/* Fireworks */}

        <AnimatePresence>

          {blown && (

            <motion.div

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              className="pointer-events-none absolute inset-0"

            >

              {[...Array(40)].map((_, i) => (

                <motion.div

                  key={i}

                  initial={{
                    scale: 0,
                    opacity: 1,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight * 0.6,
                  }}

                  animate={{
                    scale: [0, 2.5, 0],
                    opacity: [1, 1, 0],
                    rotate: [0, 360],
                  }}

                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    delay: i * 0.12,
                  }}

                  className="absolute text-5xl"

                >

                  🎆

                </motion.div>

              ))}

            </motion.div>

          )}

        </AnimatePresence>
      </div>
    </section>

  );

}