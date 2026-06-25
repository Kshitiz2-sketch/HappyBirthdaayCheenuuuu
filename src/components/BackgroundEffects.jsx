import { motion } from "framer-motion";

export default function BackgroundEffects() {

    const flowers = Array.from({ length: 18 });
    const hearts = Array.from({ length: 15 });
    const stars = Array.from({ length: 35 });

    return (

        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

            {/* Blur Circle */}

            <motion.div

                animate={{
                    x: [0, 80, -80, 0],
                    y: [0, -80, 80, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 20,
                }}

                className="absolute w-[700px] h-[700px]
                bg-pink-300
                opacity-20
                rounded-full
                blur-[180px]
                top-[-250px]
                left-[-250px]"
            />

            <motion.div

                animate={{
                    x: [0, -100, 100, 0],
                    y: [0, 100, -100, 0],
                }}

                transition={{
                    repeat: Infinity,
                    duration: 22,
                }}

                className="absolute w-[650px] h-[650px]
                bg-rose-200
                opacity-20
                rounded-full
                blur-[180px]
                bottom-[-220px]
                right-[-220px]"
            />

            {/* Floating Hearts */}

            {hearts.map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute text-pink-300 text-xl"

                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: window.innerHeight + 100,
                        opacity: 0
                    }}

                    animate={{
                        y: -200,
                        opacity: [0, .8, 0],
                        rotate: 360
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 10 + Math.random() * 5,
                        delay: Math.random() * 6
                    }}

                >

                    ❤️

                </motion.div>

            ))}

            {/* Flowers */}

            {flowers.map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute text-2xl"

                    initial={{
                        x: Math.random() * window.innerWidth,
                        y: -100
                    }}

                    animate={{
                        y: window.innerHeight + 200,
                        rotate: 360
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 12 + Math.random() * 8,
                        delay: Math.random() * 6
                    }}

                >

                    🌸

                </motion.div>

            ))}

            {/* Stars */}

            {stars.map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute"

                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}

                    animate={{
                        opacity: [.2, 1, .2],
                        scale: [1, 1.5, 1]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 2 + Math.random() * 3,
                        delay: Math.random() * 3
                    }}

                >

                    ✨

                </motion.div>

            ))}

            {/* Butterflies */}

            {[...Array(8)].map((_, i)=>(

                <motion.div

                    key={i}

                    className="absolute text-3xl"

                    initial={{
                        x:-100,
                        y:Math.random()*window.innerHeight
                    }}

                    animate={{
                        x:window.innerWidth+200,
                        y:[
                            Math.random()*window.innerHeight,
                            Math.random()*window.innerHeight,
                            Math.random()*window.innerHeight
                        ]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:18+Math.random()*8,
                        delay:Math.random()*5
                    }}

                >

                    🦋

                </motion.div>

            ))}

        </div>

    );

}