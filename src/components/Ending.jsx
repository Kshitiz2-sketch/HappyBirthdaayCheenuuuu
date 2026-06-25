import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Ending() {

  useEffect(() => {

    const duration = 10000;

    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

      if (Date.now() > animationEnd) {

        clearInterval(interval);

        return;

      }

      confetti({
        particleCount: 8,
        startVelocity: 35,
        spread: 360,
        ticks: 120,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5
        },
        colors: [
          "#ff69b4",
          "#ff1493",
          "#ffd1dc",
          "#ffffff",
          "#ffb6c1"
        ]
      });

    }, 300);

    return () => clearInterval(interval);

  }, []);

  return (

    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-200 via-pink-100 to-rose-100 flex justify-center items-center">

      {/* Floating Hearts */}

      {[...Array(40)].map((_, i) => (

        <motion.div

          key={i}

          className="absolute text-pink-300 text-2xl"

          initial={{
            opacity:0,
            y:900,
            x:Math.random()*window.innerWidth
          }}

          animate={{
            opacity:[0,.8,0],
            y:-300,
            rotate:360
          }}

          transition={{
            repeat:Infinity,
            duration:8+Math.random()*5,
            delay:Math.random()*3
          }}

        >

          ❤️

        </motion.div>

      ))}

      {/* Main Card */}

      <motion.div

        initial={{
          opacity:0,
          scale:.8
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

        className="relative z-10 bg-white/30 backdrop-blur-xl rounded-[40px] shadow-2xl p-10 max-w-4xl w-[90%] text-center"

      >

        {/* Favourite Image */}

        <motion.img

          initial={{
            scale:.7,
            opacity:0
          }}

          animate={{
            scale:1,
            opacity:1
          }}

          transition={{
            duration:1
          }}

          src="/photos/favourite.jpg"

          alt="Cheenuuuu"

          className="mx-auto w-72 h-72 rounded-full border-8 border-white object-cover shadow-2xl"

        />

        {/* Heading */}

        <motion.h1

          animate={{
            scale:[1,1.03,1]
          }}

          transition={{
            repeat:Infinity,
            duration:2
          }}

          className="mt-10 text-6xl font-bold text-pink-600"

        >

          Happy Birthday

        </motion.h1>

        <h2 className="text-5xl mt-4 text-rose-500 font-bold">

          Cheenuuuu ❤️

        </h2>

        {/* Typewriter */}

        <div className="mt-12 text-2xl text-gray-700 leading-10">

          <TypeAnimation

            sequence={[

`No matter how many birthdays come and go...

I hope this smile never changes.

Keep smiling.

Keep shining.

Keep being the amazing person you are.

Thank you for every laugh,
every memory,
every conversation.

Happy 18th Birthday ❤️

I hope today becomes one of your happiest memories.

🤍`,

1000

]}

            speed={60}

            repeat={0}

          />

        </div>

        {/* Signature */}

        <motion.div

          initial={{
            opacity:0
          }}

          animate={{
            opacity:1
          }}

          transition={{
            delay:10
          }}

          className="mt-20 flex justify-end"

        >

          <div className="text-right">

            <p className="text-pink-600 text-3xl font-semibold">

              — Your Mamsab 🤍

            </p>

          </div>

        </motion.div>

      </motion.div>

      {/* Bottom Glow */}

      <div className="absolute bottom-[-250px] w-[700px] h-[700px] rounded-full bg-pink-300 blur-[170px] opacity-50"/>

    </section>

  );

}