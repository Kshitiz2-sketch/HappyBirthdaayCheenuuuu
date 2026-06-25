import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake({ next }) {
  const [blown, setBlown] = useState(false);

  const blowCandles = () => {
    if (blown) return;

    setBlown(true);

    // Confetti
    confetti({
      particleCount: 300,
      spread: 180,
      origin: { y: 0.6 },
      colors: [
        "#ff69b4",
        "#ffb6c1",
        "#ffffff",
        "#ffd1dc",
        "#ffc0cb"
      ]
    });

    // Move to ending
    setTimeout(() => {
      next();
    }, 6000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center">

      {/* Floating Hearts */}

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{
            opacity: 0,
            y: 800,
            x: Math.random() * window.innerWidth
          }}
          animate={{
            opacity: [0, .8, 0],
            y: -300
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 4
          }}
        >
          ❤️
        </motion.div>
      ))}

      <div className="text-center">

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-pink-600"
        >
          🎂 Make A Wish
        </motion.h1>

        <p className="mt-4 text-xl text-gray-700">
          Happy 18th Birthday Cheenuuuu ❤️
        </p>

        {/* Cake */}

        <div className="relative mt-20 flex justify-center">

          {/* Cake Base */}

          <div className="w-80 h-44 rounded-b-[50px] bg-pink-400 shadow-2xl relative">

            {/* Frosting */}

            <div className="absolute -top-8 w-full h-12 bg-pink-200 rounded-full"></div>

            {/* Candles */}

            <div className="absolute -top-20 flex gap-12 left-1/2 -translate-x-1/2">

              {[1,2,3].map((item)=>(
                <div key={item} className="flex flex-col items-center">

                  {/* Flame */}

                  <AnimatePresence>

                  {!blown && (

                    <motion.div
                      initial={{scale:0}}
                      animate={{
                        scale:[1,1.2,1],
                        y:[0,-5,0]
                      }}
                      exit={{
                        opacity:0,
                        scale:0
                      }}
                      transition={{
                        repeat:Infinity,
                        duration:.6
                      }}
                      className="w-5 h-8 rounded-full bg-yellow-300 mb-1 shadow-lg"
                    />

                  )}

                  </AnimatePresence>

                  {/* Candle */}

                  <div className="w-3 h-20 rounded bg-white"></div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Button */}

        {!blown && (

          <motion.button

            whileHover={{ scale:1.05 }}

            whileTap={{ scale:.95 }}

            onClick={blowCandles}

            className="mt-16 bg-pink-500 text-white px-8 py-4 rounded-full text-2xl shadow-xl"

          >

            🎤 Blow The Candles

          </motion.button>

        )}

        {/* Message */}

        <AnimatePresence>

          {blown && (

            <motion.div

              initial={{opacity:0, scale:.5}}

              animate={{opacity:1, scale:1}}

              className="mt-16"

            >

              <h2 className="text-5xl text-pink-600 font-bold">

                🎉 Yayyyyy!! 🎉

              </h2>

              <p className="mt-6 text-2xl text-gray-700">

                Hope all your wishes come true ❤️

              </p>

            </motion.div>

          )}

        </AnimatePresence>

      </div>

    </section>
  );
}