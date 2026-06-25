import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaHeart } from "react-icons/fa";

export default function BirthdayLetter() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center px-6 py-24">

      {/* Floating Hearts */}

      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300"
          initial={{
            opacity: 0,
            y: 900,
            x: Math.random() * window.innerWidth,
            rotate: Math.random() * 360,
          }}
          animate={{
            opacity: [0, .8, 0],
            y: -300,
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 4,
            delay: Math.random() * 4,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Letter */}

      <motion.div
        initial={{
          opacity: 0,
          scale: .8,
          rotateX: -20,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotateX: 0,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{ once: true }}
        className="relative max-w-4xl rounded-[40px] bg-[#fffaf5] shadow-2xl p-12 border-[12px] border-pink-200"
      >

        {/* Wax Seal */}

        <div className="absolute -top-10 left-1/2 -translate-x-1/2">

          <div className="w-20 h-20 rounded-full bg-red-500 shadow-xl flex items-center justify-center">

            <FaHeart className="text-white text-3xl"/>

          </div>

        </div>

        <h1 className="text-center text-5xl font-bold text-pink-600 mt-8">

          💌 A Letter For You

        </h1>

        <div className="mt-12 text-xl leading-[50px] text-gray-700">

<TypeAnimation
sequence={[
`Happyy birthdayyy chunndarr chiii girlyyyy!! 🤗🤗😋

Today isn't just another day...

It's the day someone incredibly special came into this world.

Thank you for being my best friend.

Thank you for all the laughs.

For all the random conversations.

For always being yourself.

I hope this birthday brings you happiness that never ends.

May every dream you've ever wished for come true.

Keep smiling.

Keep shining.

And never change who you are.

Happy 18th Birthday Cheenuuuu ❤️

With lots of love,

Your Mamsab 🤍`,
1000,
]}
speed={70}
repeat={0}
/>

        </div>

        {/* Signature */}

        <motion.div
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:5 }}
          className="text-right mt-20"
        >

          <p className="text-3xl text-pink-600 font-semibold">

            — Your Mamsab 🤍

          </p>

        </motion.div>

      </motion.div>

    </section>
  );
}