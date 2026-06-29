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
        }, 1000);
      } else {
        setWrong(true);

        setTimeout(() => {
          setPin("");
          setWrong(false);
        }, 1000);
      }
    }
  };

  const remove = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center overflow-hidden relative p-4">

      {/* Floating Hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-300 text-xl pointer-events-none"
          initial={{
            opacity: 0,
            y: window.innerHeight + 100,
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            y: -200,
          }}
          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 4,
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Card */}
      <motion.div
        animate={wrong ? { x: [-8, 8, -8, 8, 0] } : {}}
        transition={{ duration: 0.4 }}
        className="relative w-full max-w-sm bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-6"
      >

        {/* Image */}
        <motion.img
          src="/photos/favourite.jpg"
          alt="Cheenuuuu"
          className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-lg"
          animate={{ y: [0, -6, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        <h1 className="text-center text-4xl font-bold text-pink-600 mt-5">
          Hey Cheenuuuu 💖
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Enter your birthday password
        </p>

        {/* PIN */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: pin.length > i ? 1.15 : 1,
              }}
              className={`w-4 h-4 rounded-full ${
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
            className="text-center text-red-500 mt-4 font-semibold"
          >
            Wrong Password 💔
          </motion.p>
        )}

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-3 mt-8">

          {[1,2,3,4,5,6,7,8,9].map((num)=>(
            <button
              key={num}
              onClick={()=>press(String(num))}
              className="h-14 rounded-2xl bg-pink-500 text-white text-2xl font-semibold shadow-lg hover:bg-pink-600 active:scale-95 transition"
            >
              {num}
            </button>
          ))}

          <button
            onClick={remove}
            className="h-14 rounded-2xl bg-gray-100 text-2xl shadow hover:bg-gray-200"
          >
            ⌫
          </button>

          <button
            onClick={()=>press("0")}
            className="h-14 rounded-2xl bg-pink-500 text-white text-2xl font-semibold shadow-lg hover:bg-pink-600 active:scale-95 transition"
          >
            0
          </button>

          <button
            onClick={() => setPin("")}
            className="h-14 rounded-2xl bg-gray-100 text-2xl shadow hover:bg-gray-200"
          >
            ✖
          </button>

        </div>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-center mt-6 text-pink-500"
        >
          Hint: It's your birthday 🎂
        </motion.p>

      </motion.div>

    </div>
  );
}