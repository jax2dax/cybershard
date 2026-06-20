import React from 'react'
import { Rock_Salt } from "next/font/google";

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const Shard = () => {
    console.log("SHARD RENDERINGxxx");
  return (
    <section className="w-full h-dvh justify-center items-center flex gap-0 bg-black border-2 border-red-400">

      <header className={`w-full flex-1 relative  my-4 mx-2 flex items-center justify-center p-4 border-2 border-blue-700`}>
        <h1 className={`${rockSalt.className} text-5xl 
text-white   font-extrabold scale-140 ml-4 absolute top-0 `}>
            CYBER <span className="text-[#ea00ff]">ShaRD</span>
           
        </h1>
        <h1 className={`${rockSalt.className} text-[#2f01ff] text-5xl 
  font-extrabold scale-140 ml-2 absolute top-0 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
        <h1 className={`${rockSalt.className} text-[#00ffb7] text-5xl 
  font-extrabold scale-140 ml-4 absolute top-0 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
     
      </header>



      {/**emptu section for therobot to show on the right */}
      <div className="w-full flex-1 h-full flex items-center justify-center p-4">
n
      </div>
    </section>
  )
}

export default Shard
