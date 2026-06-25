import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function IncomingCall({ next }) {
  const ringtone = useRef(null);
  const voice = useRef(null);

  const [accepted, setAccepted] = useState(false);
  const [time, setTime] = useState(0);

  // Start ringtone
  useEffect(() => {
    ringtone.current?.play().catch(() => {});
  }, []);

  // Vibrate animation
  const phoneAnimation = {
    animate: {
      rotate: [0, -2, 2, -2, 2, 0],
    },
    transition: {
      repeat: Infinity,
      duration: 0.6,
    },
  };

  // Timer after accepting
  useEffect(() => {
    if (!accepted) return;

    ringtone.current.pause();

    voice.current.play();

    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    voice.current.onended = () => {
      clearInterval(interval);

      setTimeout(() => {
        next();
      }, 1500);
    };

    return () => clearInterval(interval);
  }, [accepted]);

  const format = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200 flex justify-center items-center overflow-hidden relative">

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

      {/* Background Hearts */}

      {[...Array(18)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-2xl"
          initial={{
            y: 900,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          animate={{
            y: -300,
            opacity: [0, .7, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 6,
            delay: Math.random() * 3,
          }}
        >
          ❤
        </motion.div>
      ))}

      {/* Phone */}

      <motion.div
        {...(!accepted ? phoneAnimation : {})}
        className="w-[360px] rounded-[45px] bg-black shadow-2xl overflow-hidden border-[10px] border-black"
      >

        {/* Status */}

        <div className="text-white text-center py-4">

          {accepted ? format(time) : "Incoming Call"}

        </div>

        {/* Content */}

        <div className="bg-gradient-to-b from-pink-100 to-white h-[650px] flex flex-col items-center">

          {/* Avatar */}

          <motion.div

            animate={{
              scale: [1, 1.08, 1],
            }}

            transition={{
              repeat: Infinity,
              duration: 2,
            }}

            className="mt-12 w-40 h-40 rounded-full overflow-hidden shadow-xl border-4 border-pink-400"

          >

            <img
              src="/photos/favourite.jpg"
              alt=""
              className="w-full h-full object-cover"
            />

          </motion.div>

          {/* Name */}

          <h1 className="mt-6 text-4xl font-bold text-pink-600">
            Mamsab ❤️
          </h1>

          <p className="mt-3 text-gray-600">

            {accepted
              ? "Connected"
              : "Calling Cheenuuuu..."}

          </p>

          {/* Wave */}

          {accepted && (

            <motion.div
              className="flex gap-2 mt-8"
            >

              {[1,2,3,4,5].map((i)=>(
                <motion.div
                  key={i}
                  animate={{
                    height:[20,60,25,70,20]
                  }}
                  transition={{
                    repeat:Infinity,
                    duration:.8,
                    delay:i*.1
                  }}
                  className="w-2 bg-pink-500 rounded-full"
                />
              ))}

            </motion.div>

          )}

          {/* Buttons */}

          {!accepted && (

            <div className="flex justify-around w-full mt-auto mb-14 px-10">

              {/* Decline */}

              <motion.button

                whileTap={{scale:.9}}

                onClick={()=>{
                  alert("Nice Try 😂❤️");
                }}

                className="w-20 h-20 rounded-full bg-red-500 text-white text-3xl shadow-lg"
              >
                📞
              </motion.button>

              {/* Accept */}

              <motion.button

                whileTap={{scale:.9}}

                onClick={()=>setAccepted(true)}

                className="w-20 h-20 rounded-full bg-green-500 text-white text-3xl shadow-lg"
              >
                📞
              </motion.button>

            </div>

          )}

          {accepted && (

            <div className="mt-auto mb-12 text-center">

              <p className="text-pink-500 animate-pulse">

                Listening...

              </p>

            </div>

          )}

        </div>

      </motion.div>

    </div>
  );
}