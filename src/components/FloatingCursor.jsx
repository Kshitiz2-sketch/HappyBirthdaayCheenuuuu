import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCursor() {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [particles, setParticles] = useState([]);

  useEffect(() => {

    const move = (e) => {

      setMouse({
        x: e.clientX,
        y: e.clientY,
      });

    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);

  }, []);

  useEffect(() => {

    const click = (e) => {

      const id = Date.now();

      const newParticles = [];

      for (let i = 0; i < 15; i++) {

        newParticles.push({

          id: id + i,

          x: e.clientX,

          y: e.clientY,

          dx: (Math.random() - .5) * 200,

          dy: (Math.random() - .5) * 200,

          emoji: ["❤️", "✨", "🌸", "💖"][Math.floor(Math.random() * 4)]

        });

      }

      setParticles((old) => [...old, ...newParticles]);

      setTimeout(() => {

        setParticles((old) =>
          old.filter((p) => !newParticles.includes(p))
        );

      }, 1200);

    };

    window.addEventListener("click", click);

    return () => window.removeEventListener("click", click);

  }, []);

  return (

    <>

      {/* Hide Default Cursor */}

      <style>{`

      *{

        cursor:none;

      }

      `}</style>

      {/* Heart Cursor */}

      <motion.div

        animate={{

          x: mouse.x - 12,

          y: mouse.y - 12,

        }}

        transition={{

          type:"spring",

          stiffness:600,

          damping:35

        }}

        className="fixed z-[9999] text-2xl pointer-events-none"

      >

        💖

      </motion.div>

      {/* Cursor Glow */}

      <motion.div

        animate={{

          x: mouse.x - 20,

          y: mouse.y - 20,

        }}

        transition={{

          type:"spring",

          stiffness:250,

          damping:20

        }}

        className="fixed w-10 h-10 rounded-full bg-pink-300 blur-xl opacity-60 pointer-events-none z-[9998]"

      />

      {/* Click Particles */}

      <AnimatePresence>

      {particles.map((item)=>(

        <motion.div

          key={item.id}

          initial={{

            opacity:1,

            x:item.x,

            y:item.y,

            scale:1

          }}

          animate={{

            opacity:0,

            x:item.x+item.dx,

            y:item.y+item.dy,

            scale:2,

            rotate:360

          }}

          exit={{

            opacity:0

          }}

          transition={{

            duration:1.2

          }}

          className="fixed pointer-events-none text-2xl z-[9999]"

        >

          {item.emoji}

        </motion.div>

      ))}

      </AnimatePresence>

    </>

  );

}