import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaHeart } from "react-icons/fa";
import { emojis } from "../constants/emojis";

export default function BirthdayLetter() {
  return (
    <section
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-gradient-to-b
      from-pink-100
      via-white
      to-pink-50
      px-6
      py-28
    "
    >

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 9,
        }}
        className="
        absolute
        -left-52
        -top-40
        h-[650px]
        w-[650px]
        rounded-full
        bg-pink-300
        blur-[180px]
      "
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          repeat: Infinity,
          duration: 11,
        }}
        className="
        absolute
        -right-56
        bottom-0
        h-[700px]
        w-[700px]
        rounded-full
        bg-rose-300
        blur-[190px]
      "
      />

      {/* Floating Emojis */}

      {[...Array(28)].map((_, i) => (

        <motion.div

          key={i}

          initial={{
            opacity: 0,
            y: "110%",
            x: `${Math.random() * 100}%`,
          }}

          animate={{
            opacity: [0, 1, 0],
            y: "-120%",
            rotate: [0, 360],
          }}

          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 6,
            delay: Math.random() * 5,
            ease: "linear",
          }}

          className="absolute text-2xl pointer-events-none"

        >

          {emojis[Math.floor(Math.random() * emojis.length)]}

        </motion.div>

      ))}

      {/* Heading */}

      <motion.div

        initial={{
          opacity: 0,
          y: -50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}

        className="relative z-10 text-center"

      >

        <p className="tracking-[10px] uppercase text-pink-400">

          A Message From My Heart

        </p>

        <h1 className="mt-5 text-6xl md:text-7xl font-bold text-pink-600">

          💌 Birthday Letter

        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

          Some feelings are difficult to express...
          so I wrote them here. ❤️

        </p>

      </motion.div>
            {/* Letter */}

      <motion.div

        initial={{
          opacity: 0,
          y: 80,
          scale: 0.95,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}

        viewport={{
          once: true,
          amount: 0.2,
        }}

        transition={{
          duration: 1,
        }}

        className="
          relative
          z-10
          mx-auto
          mt-20
          max-w-5xl
          rounded-[40px]
          border
          border-white/40
          bg-white/70
          backdrop-blur-2xl
          shadow-[0_20px_80px_rgba(255,105,180,.18)]
          overflow-hidden
        "

      >

        {/* Wax Seal */}

        <motion.div

          initial={{
            scale: 0,
            rotate: -180,
          }}

          whileInView={{
            scale: 1,
            rotate: 0,
          }}

          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 120,
          }}

          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            -translate-y-1/2
            z-20
          "

        >

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-gradient-to-br
              from-red-600
              to-red-800
              shadow-2xl
            "
          >

            <FaHeart className="text-4xl text-white" />

          </div>

        </motion.div>

        {/* Decorative Lines */}

        <div className="absolute left-10 top-0 h-full w-px bg-pink-100" />
        <div className="absolute right-10 top-0 h-full w-px bg-pink-100" />

        {/* Paper */}

        <div className="px-12 py-20 md:px-20">

          <motion.h2

            initial={{
              opacity: 0,
            }}

            whileInView={{
              opacity: 1,
            }}

            transition={{
              delay: 0.4,
            }}

            className="
              text-center
              text-5xl
              font-bold
              text-pink-600
            "

          >

            Dear Cheenuuuu ❤️

          </motion.h2>

          <div
            className="
              mt-14
              text-lg
              leading-[2.4]
              text-gray-700
              md:text-xl
            "
          >

            <TypeAnimation
              sequence={[
`Dear Chutkuuu Jiii

Happyy birthdayyy chunndarr chiii girlyyyy!! 🤗🤗😋

Today isn't just another day...

It's the day someone incredibly special came into this world.

Thank you for being my best friend.

Thank you for every laugh.

For every random conversation.

For always being yourself.

You have a beautiful heart, a beautiful smile,
and a beautiful soul.

I hope this birthday fills your life with
countless happy memories.

May every dream you have
find its way to reality.

May you always stay healthy,
happy,
successful,
and surrounded by people who truly love you.

Never stop smiling.

Never stop dreaming.

Because your smile has the power
to make someone's day brighter.

Happy Birthday once again Gilipilii si Baby.❤️

With lots of love and little bit of bday bombs at your back


`,
                1000,
              ]}
              speed={55}
              repeat={0}
            />

          </div>
                    {/* Signature */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2,
              duration: 1,
            }}
            className="mt-20 text-right"
          >
            <p className="text-xl text-gray-500">
              With lots of love,
            </p>

            <h3 className="mt-3 text-4xl font-bold text-pink-600">
              — Your Mamsab 🤍
            </h3>
          </motion.div>

        </div>

        {/* Bottom Decoration */}

        <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-pink-300 via-rose-400 to-pink-300" />

      </motion.div>

      {/* Bottom Quote */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="relative z-10 mx-auto mt-20 max-w-3xl text-center"
      >
        <h3 className="text-4xl font-bold text-pink-600">
          ❤️ You'll Always Be Special ❤️
        </h3>

        <p className="mt-8 text-xl leading-10 text-gray-600">
          Some people enter our lives and become memories.
          <br />
          Some become family.
          <br />
          And a few become unforgettable.
          <br />
          <br />
          Thank you for being one of those beautiful people.
        </p>
      </motion.div>

      {/* Floating Sparkles */}

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.4, 0],
            rotate: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 6 + Math.random() * 4,
            delay: Math.random() * 5,
          }}
          className="absolute text-yellow-300 text-xl pointer-events-none"
        >
          ✨
        </motion.div>
      ))}

    </section>
  );
}