"use client"
import {useState , useEffect, useRef } from 'react'
import { Rock_Salt } from "next/font/google";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import Button from "@/components/Button"
import { ScrollTrigger } from 'gsap/all';
import { Audiowide } from "next/font/google";
import {Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger);
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const Shard = () => {
  const[ glitching, setGlitching ] = useState(false);
  const blueRef = useRef(null);
  const greenRef = useRef(null);
  const headerRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);
  const morphTl = useRef(null);
  const originalRect = useRef(null);
  const bubbleRef = useRef(null);


const glitch2 =()=>{
    const random = Math.random();
    if(random > 0.5){ 
        gsap.timeline()
        .to(greenRef.current, {
            clipPath: "inset(20% 0 40% 0)",
            duration: 0.05,
            delay: 0.5* random,
            repeat: 3,
            yoyo: true
})
}}

  const glitch = () => {
  gsap.timeline()

    .to(blueRef.current, {
      x: 12,
      y:4,
      
      duration: 0.03,
    }).to(blueRef.current, {
  clipPath: "inset(20% 0 40% 0)",
  duration: 0.05,
  repeat: 3,
  yoyo: true
})

    .to(greenRef.current, {
      x: -10,
      y: -4,
      z: 2,
       
      duration: 0.03,
    }, "<")

    .to([blueRef.current, greenRef.current], {
      x: 0,
      y: 0,
      duration: 0.05,
    })

    .to(blueRef.current, {
      x: -5,
      duration: 0.02,
    })

    .to(greenRef.current, {
      x: 5,
      
      duration: 0.02,
    }, "<")

    .to([blueRef.current, greenRef.current], {
      x: 0,
      duration: 0.04,
    })
    // .to([blueRef.current, greenRef.current], {
    // rotation: gsap.utils.random(-2, 2),
    // duration: 0.01
    // })
};
useGSAP(()=>{
    originalRect.current = btn1Ref.current.getBoundingClientRect();
    gsap.fromTo(headerRef.current, {
        yPercent:-40,
        opacity: 0,
        
    }, {
        yPercent: 0,
        opacity: 1,
        duration: 5,
        ease: "ease-in-out"
    })
})

//morph
// useGSAP(() => {
//   morphTl.current = gsap.timeline({
//     paused: true
//   });

//   morphTl.current
//   .to(btn1Ref.current, {
//       y:"50vh",
     
//       duration: 0.2,
//       ease: "power4.out",
//     })
   
//     .to(btn1Ref.current, {
//       width: "30vw",
//       height: "80vh",
//       duration: 1.3,
//       ease: "",
//     })
//     .to(
//       btn1Ref.current,
//       {
//        // backgroundColor: "#39e5ff",
//        // duration: 1,
//       },
//       "<50%"   //starts on 50% of the previous animation
//     );

//   ScrollTrigger.create({
//     trigger: btn1Ref.current,
//     start: "top top",

//     onEnter: () => morphTl.current.play(),

//     onLeaveBack: () => morphTl.current.reverse(),
//   });
// }, []);
////////////
useGSAP(() => {
  gsap.to(bubbleRef.current, {
    x: 180,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
gsap.to(bubbleRef.current, {
  keyframes: [
    { x: 180, y: 0 },
    { x: 0, y: 60 },
    { x: 180, y: 120 },
  ],
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});
///////////
   useEffect(() => {
            const interval = setInterval(() => {
                glitch(); 
                //glitch2();
                setGlitching(!glitching);
  }, ((2000 * Math.random())+(6000 * Math.random())) );
  const interval2 = setInterval(() => {
                //glitch(); 
                glitch2();
                //setGlitching(!glitching);
  }, ((3000 * Math.random())+(5000 * Math.random())) );

  return () => {clearInterval(interval2);}
}, []);
    console.log("SHARD RENDERINGxxx");
  return (
    <section className="w-full h-dvh max-sm:flex-col justify-center items-center flex gap-0 bg-black border-2 border-red-400">

      <div className="w-full flex-1 h-full flex flex-col items-center justify-center border-2 border-blue-400">
        <header ref={headerRef} className={`w-full flex-no-wrap content-stretch h-20 relative bottom-5 left-16 max-sm:bottom-0 max-sm:left-2 my-4 mx-2 flex items-center justify-center p-4 `}>
        <h1 className={`${rockSalt.className} text-5xl max-sm:text-3xl  
text-white   font-extrabold scale-170 max-sm:scale-100 ml-4 absolute z-5 top-0 `}>
            CYBER <span className="text-[#fefefe]">ShaRD</span>  {/**text-[#ea00ff] pink */}
           
        </h1>
        <h1 ref={blueRef} className={`${rockSalt.className} text-[#2f01ff] text-5xl max-sm:text-3xl  
  font-extrabold scale-170 max-sm:scale-100 ml-6 absolute top-0 z-3 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
        <h1 ref={greenRef} className={`${rockSalt.className} text-[#00ffb7] text-5xl max-sm:text-3xl  
  font-extrabold scale-170 max-sm:scale-100 ml-2 z-2 absolute top-0 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
     {/**content header */}
     
      </header>
      <div className="">
        <div className={`flex ${audiowide.className} flex-col  gap-4 relative flex-nowrap text-2xl mx-3 ml-8 bg-[#0acaff] rounded-xl px-3 text-white border-2 border-blue-400 mt-0 pb-10`}>
        <div
  ref={bubbleRef}
  className="
    absolute scale-140
    top-2
    left-0
    w-10
    h-10
    pointer-events-none
    z-20
    mix-blend-difference
  "
>
  <div
    className="
      absolute scale-140
      top-[5px]
      left-[5px]
      w-6
      h-6
      rounded-full
      bg-yellow-600
    "
  />

  <Search
    className="
      absolute scale-140
      inset-0
      w-10
      h-10
      text-[#0aff74]
      
    "
  />
</div>
           <p className="flex-nowrap flex "> Search Faster  
                    
            </p> {/**with our advanced algorithms and intuitive interface. */} 
           <p>  Blazing-fast full-text search</p>
           <p>Explore Bette</p>

 
        </div>
      </div>
      {/* <div
  ref={morphRef}
  className="
    fixed
    z-50
     w-32
    h-16
    rounded-xl
    bg-pink-500
  "
/> */}
      <div className="flex gap-4 align-bottom translate-y-[14vh] max-sm:translate-y-[4vh] justify-evenly  w-full CTA">
         <Button ref={btn1Ref} glitching={glitching} content="Click me" variant="primary" />
        <Button ref={btn2Ref} glitching={glitching} content="Secondary" variant="secondary" />
      </div>
      

      </div>


      {/**emptu section for therobot to show on the right */}
      <div className="w-full flex-1 h-full flex items-center justify-center p-4">
        
      </div>
    </section>
  )
}

export default Shard
