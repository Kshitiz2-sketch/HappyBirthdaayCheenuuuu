import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { emojis } from "../constants/emojis";

export default function Ending() {

  useEffect(() => {

    const duration = 15000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 10,
        spread: 360,
        startVelocity: 35,
        ticks: 120,
        origin: {
          x: Math.random(),
          y: Math.random() * 0.5,
        },
        colors: [
          "#ff69b4",
          "#ff1493",
          "#ffd1dc",
          "#ffffff",
          "#ffc0cb",
        ],
      });

    }, 280);

    return () => clearInterval(interval);

  }, []);

  return (

<section
className="
relative
min-h-screen
overflow-hidden
bg-gradient-to-b
from-pink-200
via-pink-100
to-white
px-6
py-28
">

{/* Background Glow */}

<motion.div

animate={{
scale:[1,1.2,1],
opacity:[.2,.45,.2]
}}

transition={{
repeat:Infinity,
duration:10
}}

className="
absolute
-top-44
-left-52
h-[700px]
w-[700px]
rounded-full
bg-pink-300
blur-[190px]
"

/>

<motion.div

animate={{
scale:[1.2,1,1.2],
opacity:[.25,.45,.25]
}}

transition={{
repeat:Infinity,
duration:12
}}

className="
absolute
-bottom-0
-right-60
h-[720px]
w-[720px]
rounded-full
bg-rose-300
blur-[200px]
"

/>

{/* Floating Emojis */}

{[...Array(35)].map((_, i) => (

<motion.div

key={i}

initial={{
opacity:0,
y:"110%",
x:`${Math.random()*100}%`
}}

animate={{
opacity:[0,1,0],
y:"-120%",
rotate:[0,360]
}}

transition={{
repeat:Infinity,
duration:10+Math.random()*5,
delay:Math.random()*5,
ease:"linear"
}}

className="absolute text-2xl pointer-events-none"

>

{emojis[Math.floor(Math.random()*emojis.length)]}

</motion.div>

))}

{/* Heading */}

<motion.div

initial={{
opacity:0,
y:-40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:.8
}}

className="relative z-10 text-center"

>

<p className="tracking-[10px] uppercase text-pink-400">

The Final Chapter

</p>

<h1 className="mt-5 text-6xl md:text-7xl font-bold text-pink-600">

✨ One Last Message ✨

</h1>

<p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">

Some people become memories...

Some become family...

Some become unforgettable. ❤️

</p>

</motion.div>

{/* Main Glass Card */}

<motion.div

initial={{
opacity:0,
y:80,
scale:.95
}}

whileInView={{
opacity:1,
y:0,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:1
}}

className="
relative
z-10
mx-auto
mt-20
max-w-5xl
overflow-hidden
rounded-[40px]
border
border-white/40
bg-white/70
backdrop-blur-2xl
shadow-[0_20px_80px_rgba(255,105,180,.18)]
"
>
      {/* Favourite Photo */}

      <div className="flex justify-center pt-20">

        <motion.img

          initial={{
            opacity: 0,
            scale: 0.7,
            rotate: -8,
          }}

          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 1,
            type: "spring",
          }}

          src="/photos/favourite.jpg"

          alt="Cheenuuuu"

          className="
          h-72
          w-72
          rounded-full
          border-[10px]
          border-white
          object-cover
          shadow-[0_20px_60px_rgba(255,105,180,.35)]
          "

        />

      </div>

      {/* Main Message */}

      <div className="px-10 py-16 md:px-20">

        <TypeAnimation

          sequence={[

`No matter how many birthdays come and go...

I hope this smile never changes.

Keep smiling.

Keep shining.

Keep being the amazing person you are.

Thank you for every laugh.

Thank you for every random conversation.

Thank you for every memory.

I'm really grateful that life gave me a best friend like you.

May your 18th birthday be filled with happiness,

new dreams,

beautiful adventures,

and endless smiles.

Always remember...

You are stronger than you think.

Kinder than you know.

More beautiful than you believe.

And more special than words can ever describe.

Never stop believing in yourself.

Happy Birthday once again Cheenuuuu ❤️

`,

1000

]}

          speed={55}

          repeat={0}

        />

      </div>

      {/* Quote */}

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
          delay: 1,
        }}

        viewport={{
          once: true,
        }}

        className="
        mx-auto
        max-w-3xl
        text-center
        px-8
        pb-12
        "

      >

        <p className="text-2xl italic text-pink-500">

          "Some people make the world brighter just by being in it."

        </p>

      </motion.div>
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
          delay: 1.5,
          duration: 1,
        }}

        viewport={{
          once: true,
        }}

        className="pb-20 pr-14 text-right"

      >

        <p className="text-xl text-gray-500">

          With lots of love,

        </p>

        <h2 className="mt-3 text-4xl font-bold text-pink-600">

          — Your Mamsab 🤍

        </h2>

      </motion.div>

    </motion.div>

    {/* Floating Sparkles */}

    {[...Array(25)].map((_, i) => (

      <motion.div

        key={i}

        initial={{
          opacity: 0,
          scale: 0,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }}

        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1.5, 0],
          rotate: [0, 360],
        }}

        transition={{
          repeat: Infinity,
          duration: 6 + Math.random() * 4,
          delay: Math.random() * 5,
        }}

        className="pointer-events-none absolute text-2xl"

      >

        ✨

      </motion.div>

    ))}

    {/* Bottom Glow */}

    <motion.div

      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.2, 0.35, 0.2],
      }}

      transition={{
        repeat: Infinity,
        duration: 8,
      }}

      className="
      absolute
      bottom-[-260px]
      left-1/2
      h-[700px]
      w-[700px]
      -translate-x-1/2
      rounded-full
      bg-pink-300
      blur-[180px]
      "

    />

    {/* Footer */}

    <motion.div

      initial={{
        opacity: 0,
      }}

      whileInView={{
        opacity: 1,
      }}

      transition={{
        delay: 2,
      }}

      viewport={{
        once: true,
      }}

      className="
      relative
      z-10
      mt-10
      text-center
      "

    >

      <p className="text-lg text-pink-500">

        ❤️ Made with endless love ❤️

      </p>

      <p className="mt-3 text-gray-500">

        © 2026 • Happy 18th Birthday Cheenuuuu ✨

      </p>

    </motion.div>

  </section>

);
}