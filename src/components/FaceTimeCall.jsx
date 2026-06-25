import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneSlash,
  FaPhoneAlt,
  FaMicrophone,
  FaVolumeUp,
  FaKeyboard,
  FaPlus
} from "react-icons/fa";

export default function FaceTimeCall({ next }) {

  const ringtone = useRef(null);
  const voice = useRef(null);

  const [accepted, setAccepted] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {

    ringtone.current.play().catch(()=>{});

  }, []);

  useEffect(() => {

    if(!accepted) return;

    ringtone.current.pause();

    voice.current.play();

    const interval = setInterval(()=>{

      setTime(t=>t+1);

    },1000);

    voice.current.onended=()=>{

      clearInterval(interval);

      setTimeout(next,1500);

    }

    return ()=>clearInterval(interval);

  },[accepted]);

  const format=(sec)=>{

    const m=String(Math.floor(sec/60)).padStart(2,"0");
    const s=String(sec%60).padStart(2,"0");

    return `${m}:${s}`;

  }

  return(

<div className="fixed inset-0 bg-black flex flex-col items-center justify-between py-16 text-white">

<audio ref={ringtone} src="/music/ringtone.mp3" loop/>

<audio ref={voice} src="/voice/voice.mp3"/>

<div className="text-center">

<p className="text-xl opacity-70">

{accepted?"FaceTime Audio":"Incoming FaceTime Audio"}

</p>

<motion.img

animate={{
scale:[1,1.05,1]
}}

transition={{
repeat:Infinity,
duration:2
}}

src="/photos/favourite.jpg"

className="w-52 h-52 rounded-full object-cover border-4 border-white mt-12 shadow-2xl"

/>

<h1 className="mt-10 text-5xl font-light">

Mamsab ❤️

</h1>

<p className="mt-4 text-2xl">

{

accepted

?

format(time)

:

"Calling..."

}

</p>

</div>

{

accepted?

<div className="grid grid-cols-3 gap-10">

<CallButton icon={<FaMicrophone/>} text="Mute"/>

<CallButton icon={<FaKeyboard/>} text="Keypad"/>

<CallButton icon={<FaVolumeUp/>} text="Speaker"/>

<CallButton icon={<FaPlus/>} text="Add"/>

<CallButton icon={<FaMicrophone/>} text="FaceTime"/>

<CallButton icon={<FaKeyboard/>} text="Contacts"/>

</div>

:

<div className="flex gap-24">

<button

onClick={()=>alert("😂 Nice Try! The phone rings again!")}

className="w-24 h-24 rounded-full bg-red-600 flex items-center justify-center text-4xl"

>

<FaPhoneSlash/>

</button>

<button

onClick={()=>setAccepted(true)}

className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center text-4xl"

>

<FaPhoneAlt/>

</button>

</div>

}

</div>

);

}

function CallButton({icon,text}){

return(

<div className="flex flex-col items-center">

<div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl">

{icon}

</div>

<p className="mt-3">

{text}

</p>

</div>

)

}