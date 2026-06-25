import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const updateProgress = () => {

      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (scrollTop / documentHeight) * 100;

      setScroll(progress);

    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);

  }, []);

  return (

    <>

      {/* Progress Container */}

      <div className="fixed top-0 left-0 w-full h-2 bg-pink-100 z-[9999]">

        <motion.div

          animate={{

            width: `${scroll}%`

          }}

          transition={{

            duration: 0.15

          }}

          className="h-full bg-gradient-to-r
          from-pink-500
          via-rose-400
          to-pink-300"

        />

      </div>

      {/* Percentage */}

      <motion.div

        animate={{
          opacity: scroll > 1 ? 1 : 0
        }}

        className="fixed top-5 right-5 z-[9999]
        bg-white/70
        backdrop-blur-xl
        px-4
        py-2
        rounded-full
        shadow-xl"

      >

        <span className="text-pink-600 font-semibold">

          {Math.floor(scroll)}%

        </span>

      </motion.div>

    </>

  );

}