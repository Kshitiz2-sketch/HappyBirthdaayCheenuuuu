import { motion } from "framer-motion";

const photos = [
  "/photos/1.jpg",
  "/photos/2.jpg",
  "/photos/3.jpg",
  "/photos/4.jpg",
  "/photos/5.jpg",
  "/photos/6.jpg",
  "/photos/7.jpg",
  "/photos/8.jpg",
  "/photos/9.jpg",
  "/photos/10.jpg",
  "/photos/11.jpg",
  "/photos/12.jpg",
];

export default function Gallery() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-pink-100 py-24 px-8 overflow-hidden">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{
            opacity: 0,
            y: 800,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 0.7, 0],
            y: -300,
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 5,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        className="text-center text-6xl font-bold text-pink-500 mb-20"
      >
        📸 Beautiful Memories
      </motion.h1>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto">

        {photos.map((photo, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotate: index % 2 === 0 ? 2 : -2,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
            className="mb-8 break-inside-avoid"
          >

            <div className="relative bg-white rounded-3xl p-4 shadow-2xl">

              <img
                src={photo}
                alt=""
                className="rounded-2xl w-full object-cover"
              />

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-pink-500/20 rounded-3xl flex justify-center items-center"
              >
                <div className="text-5xl">
                  💖
                </div>
              </motion.div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}