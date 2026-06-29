import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <>
      {/* Sparkles */}

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={"spark" + i}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 5,
          }}
          className="fixed z-0 pointer-events-none text-yellow-300 text-xl"
        >
          ✨
        </motion.div>
      ))}

      {/* Hearts */}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={"heart" + i}
          initial={{
            opacity: 0,
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: -200,
          }}
          transition={{
            repeat: Infinity,
            duration: 12 + Math.random() * 6,
            delay: Math.random() * 6,
          }}
          className="fixed z-0 pointer-events-none text-pink-300 text-2xl"
        >
          ❤️
        </motion.div>
      ))}

      {/* Flowers */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={"flower" + i}
          initial={{
            opacity: 0,
            y: -100,
            x: Math.random() * window.innerWidth,
            rotate: 0,
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: window.innerHeight + 100,
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
          className="fixed z-0 pointer-events-none text-3xl"
        >
          🌸
        </motion.div>
      ))}
    </>
  );
}