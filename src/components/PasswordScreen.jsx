import { useState } from "react";
import { motion } from "framer-motion";

const PASSWORD = "08072008";

export default function PasswordScreen({ next }) {
  const [pin, setPin] = useState("");
  const [wrong, setWrong] = useState(false);

  const press = (num) => {
    if (pin.length >= 8) return;

    const newPin = pin + num;
    setPin(newPin);

    if (newPin.length === 8) {
      if (newPin === PASSWORD) {
        setTimeout(() => {
          next();
        }, 1200);
      } else {
        setWrong(true);

        setTimeout(() => {
          setPin("");
          setWrong(false);
        }, 1200);
      }
    }
  };

  const remove = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 overflow-hidden relative">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl"
          initial={{
            opacity: 0,
            y: 700,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -400,
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 5,
            delay: Math.random() * 3,
          }}
        >
          ❤️
        </motion.div>
      ))}

      <motion.div
        animate={wrong ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="w-[380px] rounded-[35px] bg-white/70 backdrop-blur-xl shadow-2xl p-8 text-center"
      >

        {/* Snoopy */}
        <motion.img
          src="/photos/snoopy.png"
          alt="Snoopy"
          className="w-40 mx-auto mb-4"
          animate={{ y: [0, -8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        <h2 className="text-3xl font-bold text-pink-600">
          Hey Cheenuuuu 💖
        </h2>

        <p className="text-gray-600 mt-2">
          Enter your birthday password
        </p>

        {/* PIN Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: pin.length > i ? 1.2 : 1,
              }}
              className={`w-5 h-5 rounded-full ${
                pin.length > i
                  ? "bg-pink-500"
                  : "bg-pink-200"
              }`}
            />
          ))}
        </div>

        {wrong && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mt-4 font-semibold"
          >
            Oopsie... Wrong Password 😝💕
          </motion.p>
        )}

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 mt-10">

          {[1,2,3,4,5,6,7,8,9].map((n)=>(
            <button
              key={n}
              onClick={()=>press(String(n))}
              className="h-16 rounded-full bg-pink-400 text-white text-2xl shadow-lg hover:scale-105 active:scale-95 transition"
            >
              {n}
            </button>
          ))}

          <button
            onClick={remove}
            className="h-16 rounded-full bg-white text-pink-500 shadow-lg text-xl"
          >
            ⌫
          </button>

          <button
            onClick={()=>press("0")}
            className="h-16 rounded-full bg-pink-400 text-white text-2xl shadow-lg hover:scale-105 active:scale-95 transition"
          >
            0
          </button>

          <button
            onClick={()=>{
              setPin("");

            }}
            className="h-16 rounded-full bg-white text-pink-500 shadow-lg text-xl"
          >
            ✖
          </button>

        </div>

        <motion.p
          className="mt-8 text-pink-500"
          animate={{
            opacity:[0.5,1,0.5]
          }}
          transition={{
            repeat:Infinity,
            duration:2
          }}
        >
          Hint: It's your birthday 🎂
        </motion.p>

      </motion.div>

    </div>
  );
}