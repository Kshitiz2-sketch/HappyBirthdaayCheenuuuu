import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function IncomingCall({ next }) {
  const ringtone = useRef(null);
  const voice = useRef(null);

  const [accepted, setAccepted] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    ringtone.current?.play().catch(() => {});
  }, []);

 useEffect(() => {
  if (!accepted) return;

  ringtone.current?.pause();

  if (ringtone.current) {
    ringtone.current.currentTime = 0;
  }

  voice.current?.play().catch(() => {});

  const interval = setInterval(() => {
    setTime((t) => t + 1);
  }, 1000);

  if (voice.current) {
    voice.current.onended = () => {
      clearInterval(interval);

      setTimeout(() => {
        next();
      }, 1200);
    };
  }

  return () => {
    clearInterval(interval);
  };

}, [accepted, next]);
  const formatTime = (sec) => {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 px-6 py-10">

      {/* Audio */}

      <audio
        ref={ringtone}
        src="/music/ringtone.mp3"
        loop
      />

      <audio
        ref={voice}
        src="/voice/voice.mp3"
      />

      {/* Floating Hearts */}

      {Array.from({ length: 18 }).map((_, i) => (

        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: "120%",
            x: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: "-120%",
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 5,
            ease: "linear",
          }}
          className="absolute text-3xl pointer-events-none"
        >
          ❤️
        </motion.div>

      ))}

      {/* Phone */}

      <motion.div

        animate={
          !accepted
            ? {
               rotate: [0, -1.5, 1.5, -1.5, 1.5, 0],
x: [0, -2, 2, -2, 2, 0],
              }
            : {}
        }

        transition={{
          repeat: Infinity,
          duration: 0.6,
        }}

        className="relative w-[340px] md:w-[390px] overflow-hidden rounded-[55px] border-[10px] border-black bg-black shadow-[0_25px_80px_rgba(0,0,0,.35)]"

      >

        {/* Dynamic Island */}

       <div className="absolute left-1/2 top-3 z-50 -translate-x-1/2">
  <div className="h-8 w-44 rounded-full bg-black shadow-lg" />
</div>
        

        <div className="flex h-[700px] flex-col bg-gradient-to-b from-pink-50 via-white to-pink-100">

          {/* Status */}

          <div className="flex items-center justify-between px-7 pt-5 text-sm font-semibold">

            <span>9:41</span>

           <div className="flex items-center gap-2">
  <span>📶</span>
  <span>📡</span>
  <span>🔋100%</span>
</div>

          </div>

          {/* Avatar */}

          <div className="mt-20 flex justify-center">

            <motion.div

              animate={{
                scale: [1, 1.05, 1],
              }}

              transition={{
                repeat: Infinity,
                duration: 2,
              }}

              className="relative"

            >

              <motion.div

                animate={{
                  scale: [1, 1.5],
                  opacity: [0.4, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}

                className="absolute inset-0 rounded-full bg-pink-400"

              />

              <img
                src="/photos/favourite.jpg"
                alt="Cheenuuuu"
                className="relative h-40 w-40 rounded-full border-4 border-pink-400 object-cover shadow-xl"
              />

            </motion.div>

          </div>

          {/* Name */}

          <h1 className="mt-8 px-4 text-center text-4xl md:text-5xl font-bold text-pink-600">

            Phone Uthaooo

          </h1>

          <h2 className="mt-2 text-center text-3xl font-semibold text-pink-500">

            Mammmm ❤️

          </h2>

          {/* Status */}

          <p className="mt-6 text-center text-xl text-gray-500">

            {accepted ? "Connected" : "Calling Cheenuuuu..."}

          </p>

          {!accepted && (
            <p className="mt-2 text-center text-pink-500 animate-pulse">
              Incoming Call...
            </p>
          )}
                    {/* Accept / Decline Buttons */}

          {!accepted && (

            <div className="mt-auto mb-14 flex justify-around px-10">

              {/* Decline */}

              <div className="flex flex-col items-center">

                <motion.button

                  whileHover={{
                    scale: 1.08,
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}

                  onClick={() => {
                    alert("Nice Try Baby. Call uthao chupp chaapp😂❤️");
                  }}

                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-red-500
                    shadow-xl
                  "

                >

                  <span className="inline-block rotate-[135deg] text-4xl text-white">

                    📞

                  </span>

                </motion.button>

                <p className="mt-3 text-gray-600">

                  Decline

                </p>

              </div>

              {/* Accept */}

              <div className="flex flex-col items-center">

                <motion.button

                  whileHover={{
                    scale: 1.08,
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}

                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(34,197,94,.2)",
                      "0 0 30px rgba(34,197,94,.7)",
                      "0 0 0px rgba(34,197,94,.2)",
                    ],
                  }}

                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                  }}

                  onClick={() => setAccepted(true)}

                  className="
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    shadow-xl
                  "

                >

                  <span className="inline-block -rotate-45 text-4xl text-white">

                    📞

                  </span>

                </motion.button>

                <p className="mt-3 text-gray-600">

                  Accept

                </p>

              </div>

            </div>

          )}
                    {/* Connected Call */}

          {accepted && (

            <div className="mt-auto mb-14 flex flex-col items-center">

              {/* Timer */}

              <motion.div

                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                className="mb-8 rounded-full bg-pink-100 px-8 py-3 shadow-lg"

              >

                <p className="text-lg font-semibold text-pink-600">

                  {formatTime(time)}

                </p>

              </motion.div>

              {/* Voice Wave */}

              <div className="mb-10 flex items-end gap-2">

                {[...Array(7)].map((_, i) => (

                  <motion.div

                    key={i}

                    animate={{
                      height: [18, 45, 20, 55, 18],
                    }}

                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.1,
                    }}

                    className="w-2 rounded-full bg-pink-500"

                  />

                ))}

              </div>

              {/* Listening */}

              <motion.p

                animate={{
                  opacity: [0.5, 1, 0.5],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}

                className="text-lg font-medium text-pink-500"

              >

                🎤 Listening...

              </motion.p>

              {/* Small Hint */}

              <p className="mt-4 text-center text-sm text-gray-500">

                Enjoy the surprise ❤️

              </p>

            </div>

          )}
                  </div>

      </motion.div>

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.12, 0.28, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          -left-52
          -bottom-52
          h-[500px]
          w-[500px]
          rounded-full
          bg-pink-400
          blur-[180px]
        "
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
          absolute
          -right-52
          -top-52
          h-[500px]
          w-[500px]
          rounded-full
          bg-rose-300
          blur-[180px]
        "
      />

    </section>
  );
}

              