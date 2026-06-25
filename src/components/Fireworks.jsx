import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaMusic,
} from "react-icons/fa";

export default function MusicPlayer() {

  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const audio = audioRef.current;

    audio.volume = volume;

    const update = () => {
      if (!audio.duration) return;

      setProgress(
        (audio.currentTime / audio.duration) * 100
      );
    };

    audio.addEventListener("timeupdate", update);

    audio.play().catch(() => {});

    return () => {

      audio.removeEventListener("timeupdate", update);

    };

  }, []);

  useEffect(() => {

    audioRef.current.volume = volume;

  }, [volume]);

  const toggleMusic = () => {

    if (playing) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setPlaying(!playing);

  };

  return (

    <>

      <audio

        ref={audioRef}

        src="/music/background.mp3"

        loop

      />

      <motion.div

        initial={{

          opacity:0,

          y:100

        }}

        animate={{

          opacity:1,

          y:0

        }}

        className="fixed bottom-6 right-6 z-[999] w-96 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl p-5"

      >

        {/* Top */}

        <div className="flex items-center gap-4">

          {/* Album */}

          <motion.img

            animate={

              playing

                ? {

                    rotate:360

                  }

                : {}

            }

            transition={{

              repeat:Infinity,

              duration:10,

              ease:"linear"

            }}

            src="/photos/favourite.jpg"

            className="w-20 h-20 rounded-full border-4 border-pink-300 object-cover"

          />

          {/* Song */}

          <div className="flex-1">

            <h2 className="font-bold text-pink-600 text-lg">

              A Special Day ❤️

            </h2>

            <p className="text-gray-600">

              For Cheenuuuu

            </p>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="w-full h-2 rounded-full bg-pink-200 overflow-hidden">

            <motion.div

              animate={{

                width:`${progress}%`

              }}

              className="h-full bg-pink-500"

            />

          </div>

        </div>

        {/* Controls */}

        <div className="mt-5 flex items-center gap-4">

          <button

            onClick={toggleMusic}

            className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-xl"

          >

            {

              playing

                ? <FaPause/>

                : <FaPlay/>

            }

          </button>

          <FaVolumeUp className="text-pink-600"/>

          <input

            type="range"

            min="0"

            max="1"

            step=".01"

            value={volume}

            onChange={(e)=>setVolume(Number(e.target.value))}

            className="flex-1 accent-pink-500"

          />

          <FaMusic className="text-pink-500"/>

        </div>

      </motion.div>

    </>

  );

}