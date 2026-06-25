import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function GiftBox3D({ next }) {

    const [opened,setOpened]=useState(false);

    const openGift=()=>{

        if(opened) return;

        setOpened(true);

        confetti({
            particleCount:350,
            spread:170,
            origin:{y:.6},
            colors:[
                "#ff69b4",
                "#ffd1dc",
                "#ffffff",
                "#ffc0cb",
                "#ff1493"
            ]
        });

        setTimeout(next,6500);

    }

    useEffect(()=>{

        const timer=setTimeout(openGift,2500);

        return ()=>clearTimeout(timer);

    },[]);

    return(

<div className="fixed inset-0 bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200 flex items-center justify-center overflow-hidden">

{/* Floating Hearts */}

{
[...Array(25)].map((_,i)=>(

<motion.div

key={i}

className="absolute text-2xl"

initial={{
opacity:0,
y:900,
x:Math.random()*window.innerWidth
}}

animate={{
opacity:[0,.8,0],
y:-300
}}

transition={{
repeat:Infinity,
duration:10+Math.random()*4,
delay:Math.random()*3
}}

>

❤️

</motion.div>

))
}

<motion.div

initial={{
y:-700
}}

animate={{
y:0
}}

transition={{
type:"spring",
bounce:.45,
duration:2
}}

className="relative"

>

{/* Lid */}

<motion.div

animate={

opened?

{

y:-220,

rotate:-15,

opacity:0

}:{}

}

transition={{
duration:1.4
}}

className="absolute w-80 h-24 rounded-xl bg-pink-500 shadow-2xl z-20"

>

<div className="absolute w-6 h-full bg-pink-200 left-1/2 -translate-x-1/2"/>

<div className="absolute h-6 w-full bg-pink-200 top-1/2 -translate-y-1/2"/>

</motion.div>

{/* Box */}

<motion.div

animate={{
y:[0,-10,0]
}}

transition={{
repeat:Infinity,
duration:2
}}

onClick={openGift}

className="mt-24 relative w-80 h-60 rounded-b-3xl bg-pink-400 shadow-[0_25px_80px_rgba(255,105,180,.45)] cursor-pointer"

>

<div className="absolute w-6 h-full bg-pink-200 left-1/2 -translate-x-1/2"/>

<div className="absolute h-6 w-full bg-pink-200 top-1/2 -translate-y-1/2"/>

</motion.div>

</motion.div>

<AnimatePresence>

{

opened&&(

<>

{/* Butterflies */}

{

[...Array(18)].map((_,i)=>(

<motion.div

key={i}

initial={{
x:0,
y:0,
opacity:1,
scale:.5
}}

animate={{
x:(Math.random()-.5)*1200,
y:-Math.random()*700,
rotate:720,
opacity:0
}}

transition={{
duration:4,
delay:i*.05
}}

className="absolute text-4xl"

>

🦋

</motion.div>

))

}

{/* Flowers */}

{

[...Array(25)].map((_,i)=>(

<motion.div

key={"f"+i}

initial={{
x:0,
y:0
}}

animate={{
x:(Math.random()-.5)*1400,
y:(Math.random()-.5)*900,
rotate:360,
opacity:0
}}

transition={{
duration:5
}}

className="absolute text-3xl"

>

🌸

</motion.div>

))

}

{/* Text */}

<motion.div

initial={{
opacity:0,
scale:.5
}}

animate={{
opacity:1,
scale:1
}}

transition={{
delay:1
}}

className="absolute text-center"

>

<h1 className="text-7xl font-bold text-pink-600">

Happy Birthday

</h1>

<h2 className="mt-5 text-5xl text-rose-500">

Cheenuuuu ❤️

</h2>

<p className="mt-8 text-2xl text-gray-700">

Your surprise is just beginning...

</p>

</motion.div>

</>

)

}

</AnimatePresence>

</div>

);

}