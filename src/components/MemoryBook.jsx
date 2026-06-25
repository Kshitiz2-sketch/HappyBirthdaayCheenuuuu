import { motion } from "framer-motion";

const memories = [
  {
    image: "/photos/baby.jpg",
    title: "Chapter 1",
    subtitle: "The Beginning",
    text: "Once upon a time... a little princess entered the world. ❤️",
    sticker: "🧸"
  },
  {
    image: "/photos/group.jpg",
    title: "Chapter 2",
    subtitle: "School Days",
    text: "Where countless beautiful memories began. 📚",
    sticker: "🌸"
  },
  {
    image: "/photos/plant.jpg",
    title: "Chapter 3",
    subtitle: "Growing Beautifully",
    text: "Just like this little plant, you continue to bloom every single day. 🌱",
    sticker: "🌿"
  },
  {
    image: "/photos/night.jpg",
    title: "Chapter 4",
    subtitle: "Beautiful Moments",
    text: "Some people shine because of lights... you shine even without them. ✨",
    sticker: "⭐"
  },
  {
    image: "/photos/favourite.jpg",
    title: "Chapter 5",
    subtitle: "Today",
    text: "Happy 18th Birthday Cheenuuuu ❤️",
    sticker: "🎀"
  }
];

export default function MemoryBook() {
  return (
    <section className="bg-pink-50 py-24">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="text-center text-6xl font-bold text-pink-500 mb-20"
      >
        📖 Our Memory Book
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-32">

        {memories.map((item, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 100
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: .8
            }}
            viewport={{ once: true }}
            className={`flex items-center gap-14 ${
              index % 2 === 0
                ? "flex-row"
                : "flex-row-reverse"
            }`}
          >

            {/* Photo */}

            <motion.div
              whileHover={{
                rotate: 2,
                scale: 1.05
              }}
              className="relative"
            >

              <img
                src={item.image}
                className="w-[360px] rounded-3xl shadow-2xl border-[12px] border-white"
              />

              <div className="absolute -top-6 -right-6 text-5xl">
                {item.sticker}
              </div>

            </motion.div>

            {/* Text */}

            <div className="max-w-lg">

              <p className="uppercase tracking-[6px] text-pink-400">

                {item.title}

              </p>

              <h2 className="text-5xl font-bold mt-3 text-pink-600">

                {item.subtitle}

              </h2>

              <p className="mt-8 text-xl leading-10 text-gray-700">

                {item.text}

              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

import MemoryBook from "./MemoryBook";

// ...

<>
  {/* Hero content */}
  <MemoryBook />
</>