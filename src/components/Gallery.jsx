import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { emojis } from "../constants/emojis";

const photos = [
  {
    image: "/photos/1.jpg",
    caption: "18 years of beautiful memories ❤️",
  },
  {
    image: "/photos/2.jpg",
    caption: "Confidence looks beautiful on you ✨",
  },
  {
    image: "/photos/3.jpg",
    caption: "School days... where unforgettable memories were made 📚",
  },
  {
    image: "/photos/4.jpg",
    caption: "Growing beautifully, just like every little dream 🌱",
  },
  {
    image: "/photos/5.jpg",
    caption: "Lost in books, found in dreams 📖",
  },
  {
    image: "/photos/6.jpg",
    caption: "Some conversations don't need words 🤍",
  },
  {
    image: "/photos/7.jpg",
    caption: "A smile that lights up every room 🌙",
  },
  {
    image: "/photos/8.jpg",
    caption: "Elegance comes naturally ✨",
  },
  {
    image: "/photos/9.jpg",
    caption: "Walking into another beautiful chapter 💫",
  },
  {
    image: "/photos/10.jpg",
    caption: "Always standing out ❤️",
  },
  {
    image: "/photos/11.jpg",
    caption: "The cutest little princess 👶",
  },
  {
    image: "/photos/12.jpg",
    caption: "Smiles never go out of style 🌸",
  },
  {
    image: "/photos/13.jpg",
    caption: "Chasing sunsets and dreams 🌅",
  },
  {
    image: "/photos/14.jpg",
    caption: "That smile deserves its own sunshine ☀️",
  },
  {
    image: "/photos/15.jpg",
    caption: "Peace sign. Pretty smile. Perfect moment. 💕",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);

  const openImage = (index) => {
    setCurrent(index);
    setSelected(photos[index]);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelected(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    const next = (current + 1) % photos.length;
    setCurrent(next);
    setSelected(photos[next]);
  };

  const previousImage = () => {
    const prev = (current - 1 + photos.length) % photos.length;
    setCurrent(prev);
    setSelected(photos[prev]);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (!selected) return;

      if (e.key === "Escape") closeImage();

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") previousImage();
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selected, current]);

  return (
    <section
      className="relative min-h-screen overflow-hidden
      bg-gradient-to-b
      from-pink-50
      via-white
      to-pink-100
      py-28 px-6"
    >
      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.35, 0.18],
        }}
        transition={{
          repeat: Infinity,
          duration: 10,
        }}
        className="absolute
        -left-52
        -top-44
        h-[600px]
        w-[600px]
        rounded-full
        bg-pink-300
        blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="absolute
        -right-56
        bottom-0
        h-[650px]
        w-[650px]
        rounded-full
        bg-rose-300
        blur-[190px]"
      />

      {/* Floating Emojis */}

      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl pointer-events-none"

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
        className="relative z-10 mb-20 text-center"
      >
        <p className="tracking-[10px] uppercase text-pink-400">
          Memories
        </p>

        <h1 className="mt-5 text-6xl md:text-7xl font-bold text-pink-600">
          Beautiful Moments
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-600 leading-9">
          Every picture tells a story.
          Every smile is a memory.
          Every memory is priceless. ❤️
        </p>
      </motion.div>
            {/* Premium Gallery */}

      <div className="relative z-10 mx-auto mt-20 max-w-7xl columns-1 gap-8 sm:columns-2 lg:columns-3">

        {photos.map((photo, index) => (

          <motion.div
            key={index}

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
              amount: 0.15,
            }}

            transition={{
              duration: 0.7,
              delay: index * 0.06,
            }}

            whileHover={{
              y: -12,
            }}

            className="mb-8 break-inside-avoid cursor-pointer"

            onClick={() => openImage(index)}
          >

            <motion.div

              whileHover={{
                scale: 1.02,
              }}

              transition={{
                duration: 0.35,
              }}

              className="group overflow-hidden rounded-[34px]
              border border-white/40
              bg-white/70
              backdrop-blur-2xl
              shadow-[0_20px_60px_rgba(255,105,180,.15)]"

            >

              {/* Image */}

              <div className="relative overflow-hidden">

                <motion.img
                  src={photo.image}
                  alt={photo.caption}

                  whileHover={{
                    scale: 1.08,
                  }}

                  transition={{
                    duration: 0.5,
                  }}

                  className="w-full object-cover"
                />

                {/* Dark Overlay */}

                <motion.div

                  initial={{
                    opacity: 0,
                  }}

                  whileHover={{
                    opacity: 1,
                  }}

                  className="absolute inset-0
                  bg-gradient-to-t
                  from-black/60
                  via-black/10
                  to-transparent"

                />

                {/* Heart */}

                <motion.div

                  initial={{
                    opacity: 0,
                    scale: 0.5,
                  }}

                  whileHover={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.3,
                  }}

                  className="absolute right-5 top-5
                  flex h-12 w-12 items-center justify-center
                  rounded-full
                  bg-white/80
                  backdrop-blur-xl"

                >

                  ❤️

                </motion.div>

              </div>

              {/* Caption */}

              <div className="p-6">

                <motion.p

                  whileHover={{
                    scale: 1.02,
                  }}

                  className="text-center
                  text-lg
                  italic
                  font-medium
                  text-pink-600"

                >

                  {photo.caption}

                </motion.p>

              </div>

            </motion.div>

          </motion.div>

        ))}

      </div>
            {/* Premium Lightbox */}

      <AnimatePresence>

        {selected && (

          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 px-6 backdrop-blur-md"

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

            onClick={closeImage}
          >

            {/* Close Button */}

            <button
              onClick={closeImage}
              className="absolute right-8 top-8 z-50 h-14 w-14 rounded-full bg-white/20 text-3xl text-white backdrop-blur-xl transition hover:bg-white/40"
            >
              ×
            </button>

            {/* Previous */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-3xl text-white backdrop-blur-xl transition hover:bg-white/40"
            >
              ‹
            </button>

            {/* Next */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-8 top-1/2 z-50 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-3xl text-white backdrop-blur-xl transition hover:bg-white/40"
            >
              ›
            </button>

            {/* Image */}

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >

              <img
                src={selected.image}
                alt={selected.caption}
                className="max-h-[80vh] rounded-[36px] shadow-[0_20px_80px_rgba(255,255,255,.15)]"
              />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-center"
              >

                <h3 className="text-3xl font-semibold text-white">
                  {selected.caption}
                </h3>

                <p className="mt-3 text-lg text-pink-200">
                  {current + 1} / {photos.length}
                </p>

              </motion.div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}