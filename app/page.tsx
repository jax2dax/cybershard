"use client"
import React from 'react'
import Scene from "@/components/Scene" ;
import gsap from "gsap"
import { useGSAP,  } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const progress = useRef(0);

useEffect(() => {
  ScrollTrigger.create({
    trigger: "#hero",
    start: "top top",
    end: "bottom bottom",
    scrub: true,

    onUpdate: self => {
      progress.current = self.progress;
    }
  });
}, []);
  return (
    <div className='h-full  min-h-[300vh] hero overflow-x-hidden' id="hero">
     <div className="absolute inset-0">
    <Scene progress={progress}canAnimate={true} />
  </div>
       <div className="absolute inset-0 z-10 flex items-center justify-center gap-6">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <p className="text-lg font-semibold">Hello, World!</p>
        </div>
      </div>

    </div>
  )
}

export default page
