import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLock } from "react-icons/fa";

export default function PhoneLockScreen({ next }) {

  const [time, setTime] = useState("");

  useEffect(() => {

    const update = () => {

      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

    };

    update();

    const interval = setInterval(update,1000);

    return ()=>clearInterval(interval);

  }, []);

  return (

    <motion.div

      initial={{opacity:0}}

      animate={{opacity:1}}

      exit={{opacity:0}}

      className="fixed inset-0 overflow-hidden"

    >

      {/* Wallpaper */}

      <img

        src="/photos/favourite.jpg"

        className="absolute inset-0 w-full h-full object-cover"

      />

      {/* Blur */}

      <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px]"/>

      {/* Time */}

      <div className="absolute top-24 w-full text-center">

        <motion.h1

          animate={{
            scale:[1,1.02,1]
          }}

          transition={{
            repeat:Infinity,
            duration:2
          }}

          className="text-white text-8xl font-light"

        >

          {time}

        </motion.h1>

        <p className="mt-4 text-2xl text-white">

          Tuesday, 8 July

        </p>

      </div>

      {/* Lock */}

      <div className="absolute top-10 w-full flex justify-center">

        <FaLock

          className="text-white text-3xl"

        />

      </div>

      {/* Bottom */}

      <motion.div

        animate={{
          y:[0,-10,0]
        }}

        transition={{
          repeat:Infinity,
          duration:1.5
        }}

        className="absolute bottom-10 w-full text-center"

      >

        <p className="text-white text-xl">

          Swipe Up To Unlock

        </p>

        <div

          className="mx-auto mt-5 w-40 h-2 rounded-full bg-white"

        />

      </motion.div>

      {/* Swipe Area */}

      <motion.div

        drag="y"

        dragConstraints={{
          top:-300,
          bottom:0
        }}

        onDragEnd={(e,info)=>{

          if(info.offset.y<-150){

            next();

          }

        }}

        className="absolute bottom-0 w-full h-48"

      />

    </motion.div>

  );

}