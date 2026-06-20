"use client"
import  { useState } from 'react'
import Scene from "@/components/Scene" ;
import gsap from "gsap"
import { useGSAP,  } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger} from 'gsap/all';
import Shard from "./shard/page"
import { Audiowide } from "next/font/google";
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const progress = useRef(0);
  const [ loopwave, setLoopwave ] = useState(true);

useEffect(() => {
  ScrollTrigger.create({    //GSAP-R3F scroll-hanshake
    trigger: "#hero",
    start: "top top",
    end: "bottom bottom",
    scrub: true,

    onUpdate: self => {
      progress.current = self.progress;
    }
  });

  ////pin
  ScrollTrigger.create({
    trigger: "#robot-canvas",
    start: "top top",
    endTrigger: "#robot-cover",
    end: "top top",
    pin: true,
    markers: true, // remove later
  });
  //loopwave to false when a div inters
  ScrollTrigger.create({    //GSAP-R3F scroll-hanshake
    trigger: "#wave-loop-off",
    start: "top center",
    end: "bottom bottom",
    scrub: true,

    onEnter: () => {
      setLoopwave(false)
    }
  });

}, []);
  return (
    <div className='h-full  min-h-[300vh] hero overflow-x-hidden scrollbar-x-hidden' id="hero">
     <div id="robot-canvas" className="absolute inset-0  ">
    <Scene progress={progress} loopwave={loopwave} canAnimate={true} />
  </div>
       <div   ><Shard  /></div>
      <div id="wave-loop-off" className=" w-full h-[100vh] bg-black"></div>
     
      <div id="robot-cover" className=" w-full  bg-blue-800 "></div>
      <div className="robot-cover w-full bg-amber-600"></div>

    </div>
  )
}

export default page
