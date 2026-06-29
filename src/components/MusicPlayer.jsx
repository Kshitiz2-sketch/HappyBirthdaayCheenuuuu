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

    if (!audio) return;

    audio.volume = volume;

    const updateProgress = () => {
      if (!audio.duration) return;

      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener("timeupdate", updateProgress);

    audio.play().catch(() => {});

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
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
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          scale: 1.03,
        }}
        transition={{
          duration: 0.6,
        }}
        className="fixed bottom-6 right-6 z-[9999] w-96 rounded-3xl border border-white/30 bg-white/20 p-5 shadow-2xl backdrop-blur-xl"
      >
        {/* Top */}

        <div className="flex items-center gap-4">
          {/* Album */}

          <motion.img
            src="/photos/favourite.jpg"
            alt="Album"

            animate={
              playing
                ? {
                    rotate: 360,
                  }
                : {
                    rotate: 0,
                  }
            }

            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}

            className="h-20 w-20 rounded-full border-4 border-pink-300 object-cover"
          />

          {/* Song Details */}

          <div className="flex-1">
            <h2 className="text-lg font-bold text-pink-600">
              A Special Day ❤️
            </h2>

            <p className="text-gray-600">
              For Cheenuuuu
            </p>
          </div>
        </div>

        {/* Progress Bar */}

        <div className="mt-5">
          <div className="h-2 w-full overflow-hidden rounded-full bg-pink-200">
            <motion.div
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                ease: "linear",
              }}
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-600"
            />
          </div>
        </div>

        {/* Controls */}

        <div className="mt-5 flex items-center gap-4">
          <motion.button
            whileTap={{
              scale: 0.9,
            }}
            whileHover={{
              scale: 1.1,
            }}
            onClick={toggleMusic}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-xl"
          >
            {playing ? <FaPause /> : <FaPlay />}
          </motion.button>

          <FaVolumeUp className="text-pink-600 text-xl" />

          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="flex-1 accent-pink-500"
          />

          <FaMusic className="text-pink-500 text-xl" />
        </div>

        {/* Bottom Text */}

        <motion.p
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="mt-4 text-center text-sm text-pink-500"
        >
          🎵 Enjoy the memories...
        </motion.p>
      </motion.div>
    </>
  );
}