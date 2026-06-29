import { motion } from "framer-motion";

const pages = [
  {
    image: "/photos/baby.jpg",
    title: "Chapter 1",
    subtitle: "The Beginning",
    text: "Once upon a time, the cutest little princess came into this world. ❤️",
    color: "from-pink-100 to-rose-50"
  },
  {
    image: "/photos/2.jpg",
    title: "Chapter 2",
    subtitle: "School Days",
    text: "Every smile became a beautiful memory.",
    color: "from-rose-100 to-pink-50"
  },
  {
    image: "/photos/3.jpg",
    title: "Chapter 3",
    subtitle: "Growing Up",
    text: "Dreams became bigger every year.",
    color: "from-pink-50 to-pink-100"
  },
  {
    image: "/photos/favourite.jpg",
    title: "Chapter 4",
    subtitle: "Today",
    text: "Happy 18th Birthday Cheenuuuu ❤️",
    color: "from-pink-100 to-white"
  }
];

export default function StoryBook() {

  return (

    <section className="relative">

      {pages.map((page,index)=>(

        <section

          key={index}

          className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${page.color}`}

        >

          <motion.div

            initial={{
              opacity:0,
              rotateY:-90,
              scale:.8
            }}

            whileInView={{
              opacity:1,
              rotateY:0,
              scale:1
            }}

            transition={{
              duration:1
            }}

            viewport={{once:true}}

            className="w-[90%] max-w-6xl bg-white rounded-[40px] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row gap-10 items-center"

          >

            <motion.img

              whileHover={{
                rotate:3,
                scale:1.05
              }}

              src={page.image}

              className="w-full md:w-[420px] rounded-3xl object-cover shadow-xl"

            />

            <div className="flex-1">

              <p className="tracking-[6px] uppercase text-pink-400">

                {page.title}

              </p>

              <h1 className="text-5xl font-bold mt-5 text-pink-600">

                {page.subtitle}

              </h1>

              <p className="mt-10 text-2xl leading-10 text-gray-700">

                {page.text}

              </p>

            </div>

          </motion.div>

        </section>

      ))}

    </section>

  );

}