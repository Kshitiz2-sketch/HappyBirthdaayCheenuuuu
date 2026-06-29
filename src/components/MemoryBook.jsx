import { motion } from "framer-motion";

const memories = [
  {
    image: "/photos/baby.jpg",
    title: "Chapter 1",
    subtitle: "The Beginning",
    text: "Once upon a time... a little princess entered the world. ❤️",
    sticker: "🧸",
  },
  {
    image: "/photos/group.jpg",
    title: "Chapter 2",
    subtitle: "School Days",
    text: "Where countless beautiful memories began. 📚",
    sticker: "🌸",
  },
  {
    image: "/photos/plant.jpg",
    title: "Chapter 3",
    subtitle: "Growing Beautifully",
    text: "Just like this little plant, you continue to bloom every single day. 🌱",
    sticker: "🌿",
  },
  {
    image: "/photos/night.jpg",
    title: "Chapter 4",
    subtitle: "Beautiful Moments",
    text: "Some people shine because of lights... you shine even without them. ✨",
    sticker: "⭐",
  },
  {
    image: "/photos/favourite.jpg",
    title: "Chapter 5",
    subtitle: "Today",
    text: "Happy Birthday Cheenuuuu ❤️",
    sticker: "🎀",
  },
];

export default function MemoryBook() {
  return (
    <section className="relative bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 py-24 px-6 overflow-hidden">

      {/* Floating Hearts */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-2xl pointer-events-none"
          initial={{
            opacity: 0,
            y: 800,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -200,
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-6xl font-bold text-pink-500 mb-20"
      >
        📖 Our Memory Book
      </motion.h1>

      <div className="max-w-6xl mx-auto space-y-24">

        {memories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-12 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >

            {/* Image */}
            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: index % 2 === 0 ? 2 : -2,
              }}
              className="relative"
            >
              <img
                src={item.image}
                alt={item.subtitle}
                loading="lazy"
                className="w-full max-w-[360px] rounded-3xl border-[10px] border-white shadow-2xl"
              />

              <div className="absolute -top-5 -right-5 text-5xl">
                {item.sticker}
              </div>
            </motion.div>

            {/* Text */}
            <div className="max-w-xl text-center md:text-left">

              <p className="uppercase tracking-[6px] text-pink-400 text-sm">
                {item.title}
              </p>

              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-pink-600">
                {item.subtitle}
              </h2>

              <p className="mt-6 text-lg md:text-xl leading-9 text-gray-700">
                {item.text}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}