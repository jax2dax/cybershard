"use client"
import  { useState } from 'react'
import Scene from "@/components/Scene" ;
import gsap from "gsap"
import { useGSAP,  } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger} from 'gsap/all';
import Shard from "./shard/page"
import { Audiowide } from "next/font/google";
import MarqueeGlider from '@/components/Marquee';
import{ Speed1, Speed2 } from "@/components/Speed"
import { Button } from '@/components/ui/button';
const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
gsap.registerPlugin(ScrollTrigger);
const page = () => {
  const progress = useRef(0);
  const [ loopwave, setLoopwave ] = useState(true);
  const [moveRobot, setMoveRobot] = useState("");

  //const moveRobotRef = useRef("");
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
    //markers: true, // remove later
  });
  //loopwave to false when a div inters
  ScrollTrigger.create({    //GSAP-R3F scroll-hanshake
    trigger: "#wave-loop-off",
    start: "top center",
    end: "bottom bottom",
    scrub: true,
   // markers: true,

    onEnter: () => {
      setLoopwave(false)
    },
  });

}, []);
//move down
useGSAP(()=>{

 //go down
 ScrollTrigger.create({    //GSAP-R3F scroll-hanshake
    trigger: "#wave-loop-off",
    start: "top center",
    end: "bottom bottom",
    scrub: true,

    onEnter: () => {
      setMoveRobot("down");
    },
     onEnterBack: () => {
      setMoveRobot("default");
    }
  });
  //go down end
  });
//   useGSAP(()=>{
//  ScrollTrigger.create({    
//     trigger: "duo-header-left",
//     start: "top center",
//     end: "bottom bottom",
//     scrub: true,

//     onEnter: () => {
//       setMoveRobot("down2");
//     },
//      onEnterBack: () => {
//       setMoveRobot("down");
//     }
//   });
//   //go down end
//   });
 /// //pannel enter
//gianting -the pink -bg
 useGSAP(()=>{
  const tl = gsap.timeline({scrollTrigger: {
    trigger: "#left-panel",
    start: "top 10%",
    end: "bottom top",    //bottom 70% = bottom of the div reach 70% down the screen (time control=scrub)
    scrub: true,
  }}); 
 tl.to("#static-pink-box",{
    //height: "100vh",        //pull the pink box to the full width of the screen
    width: "100vw",
    z:120,
    position: "absolute",
    opacity: 1
  }).to("#static-pink-box2",{ //pull the right pink box to the full width of the screen
    //height: "100vh",
    width: "100vw",
    z: 120,
    position: "absolute",
    opacity: 1
  },"<");


  //////////////////////////////////////////////////////////////////////////////////////////
  //pink bg transition(bottom to top)
  const tl2 = gsap.timeline({scrollTrigger: {
    trigger: "#pink-bg",
    start: "top 70%",
    end: "top top",    //bottom 70% = bottom of the div reach 70% down the screen (time control=scrub)
    scrub: true,
     snap: {
      snapTo: 1,      // snap to the end of this trigger
      duration: 1.3,
      delay: 0,
      ease: "power2.out"
    }
  }}); 
        tl2.to("#pink-bg",{
          yPercent: -100
        });
 })
  useGSAP(()=>{
    const panelTl = gsap.timeline({scrollTrigger: {
      trigger: "#robot-cover",
      start: "top 40%",
      end: "bottom bottom",
      scrub: true,
      
    }});
      panelTl.fromTo("#left-panel",{
        xPercent: -100,
      },{
        xPercent: 0,
        duration: 0.5
      });
      panelTl.fromTo("#right-panel",{
        xPercent: 100,
      },{
        xPercent: 0 ,
        duration: 0.5
      },"<50%")

  })
  ////Duo headers///
  const duoHeaderLeftRef = useRef(null);
  const duoHeaderRightRef = useRef(null);
  useGSAP(()=>{
    const tl = gsap.timeline({scrollTrigger: {
       trigger: "#duo-header-left", //blue
          start: "top center",
          end: "top top",   //stop when the top of the bluebg reach 30% of the viewport
      scrub: true,
       //markers: true,
    }});
  
    tl.fromTo([duoHeaderLeftRef.current, duoHeaderRightRef.current], {
     y: 0,
    }, {
      y: "50vh",
      ease: "sin.inOut",   //pull it down to the blue area
     // duration: 2,
    }).to([duoHeaderLeftRef.current, duoHeaderRightRef.current],{
        color:"#ea00ff",
        //textContent: "hello",
       duration:0.5,    //change texts to pink
       scrub: false
    },"<50%")
    .to([duoHeaderLeftRef.current, duoHeaderRightRef.current],{
      
    })
    
  })
  //duo headers//
  ////disappear the original blue box///
useGSAP(()=>{

  const tl = gsap.timeline({scrollTrigger: {
          trigger: "#robot-cover",
          start: "top top",
          end: "top top",
          scrub: true
        }});
        tl.to("#bluebox",{
          opacity: 0,
          duration: 0.1,
          //scrub: false
        })

}) 
  /////////bluebox///////////
   useGSAP(()=>{
   const blueTl = gsap.timeline({
    paused: true,
  });

  blueTl
    .fromTo(
      "#bluebox",
      {
        yPercent: -100,
      },
      {
        yPercent: 75,
        duration: 0.46,
      }
    )
    .to("#bluebox", {
      yPercent: 40,
      duration: 0.4,
    })
    .to("#bluebox", {
      yPercent: 10,
      duration: 0.33,
    })
    .to("#bluebox", {
      width: "+=100vw",
      yPercent: -5,
      height: "+=5vh",
      duration: 1,
    });

  ScrollTrigger.create({
    trigger: "#wave-loop-off",
    start: "top center",

    onEnter: () => {
      blueTl.play();
    },

    onLeaveBack: () => {
      blueTl.reverse();
    },
  });
   })
    
   /////rotate bluebox and robrpt cover
   useGSAP(()=>{
      const tl = gsap.timeline({scrollTrigger: {
        trigger: "#robot-cover",
        start: "top center",
        end: "top top",
        scrub: true
      }});
      tl
      
      .to(
        "#bluebox",
        {
        //  rotate: "2deg",
          duration: 2
        }
      )
    })
  /////bluebox end
  //-----------------------------------------
//pin& bump in animation
const textContent1Ref = useRef<HTMLDivElement>(null);
const p1Ref = useRef<HTMLParagraphElement>(null);
const p2Ref = useRef<HTMLParagraphElement>(null);
const p3Ref = useRef<HTMLParagraphElement>(null);
const p4Ref = useRef<HTMLParagraphElement>(null);
const p5Ref = useRef<HTMLParagraphElement>(null);
const coverBox1Ref = useRef<HTMLDivElement>(null);
const previousIndexRef = useRef<number | null>(null);
useGSAP(() => {
    

const switchOpacity = () => {
  const refs = [p1Ref, p2Ref , p3Ref, p4Ref, p5Ref];

  const availableIndexes = refs
    .map((_, i) => i)
    .filter(i => i !== previousIndexRef.current);

  const randomIndex =
    availableIndexes[
      Math.floor(Math.random() * availableIndexes.length)
    ];

  previousIndexRef.current = randomIndex;

  refs.forEach((ref, index) => {
    gsap.set(ref.current, {
      opacity: index === randomIndex ? 1 : 0,
    });
  });
};
    //bum animation
    ScrollTrigger.create({
      trigger:"sect-2"  ,// textContent1Ref.current,
      start: "top 40%",
      pin: true,
     // markers: true,
      onEnter: () => {
        gsap.to(textContent1Ref.current, {
          opacity: 1,
          duration: 0.4,
        });
      }
           });
        const tl = gsap.timeline({ paused: true ,repeat:-1, });

    tl
        .to(coverBox1Ref.current, {
          xPercent: -125,
          duration: 1.8,
          onStart: switchOpacity
        })
        .to(coverBox1Ref.current, {
          xPercent: 0,
          duration: 0.8
        }, ">0.4")
        .to(coverBox1Ref.current, {
          xPercent: -125,
          duration: 0.8,
          onStart: switchOpacity
        }, ">0.2")
        .to(coverBox1Ref.current, {
          xPercent: 0,
          duration: 0.8
        }, ">0.4");
//////////////////////
ScrollTrigger.create({
  trigger: textContent1Ref.current,
  start: "top center",
  //markers: true,
  

  onEnter: () => {
    tl.play();
  },

  onLeaveBack: () => {
    tl.reverse();
  }
});
})   ;
  /////////////////
  return (
    <div className='h-full  min-h-[300vh] relative hero overflow-hidden scrollbar-x-hidden' id="hero">
     <div id="robot-canvas" className="absolute inset-0 z-10 ">
    <Scene progress={progress} loopwave={loopwave} moveRobot={moveRobot} canAnimate={true} />
  </div>
       <div   ><Shard  /></div>
       
      <div id="wave-loop-off" className=" move-down w-full h-[100vh] relative  border-green-500 bg-black">
        <div id="wave-loop-off-content" className='bg-blue-600 hidden relative h-100 z-10 top-0 '>
              {/* <div className="bg-blue-600 w-[10%] rounded-full h-full absolute top-0 -translate-y-[40%]  " />
              <div className="bg-blue-600 w-[10%] rounded-full h-full left-[20%] a absolute top-0 -translate-y-[10%]  " />
              <div className="bg-blue-600 w-[10%] rounded-full h-full left-[40%] a absolute top-0 -translate-y-[3%]  " />
              <div className="bg-blue-600 w-[10%] rounded-full h-full absolute  left-[60%] a top-0 -translate-y-[16%]  " />
              <div className="bg-blue-600 w-[10%] rounded-full h-full left-[80%] absolute top-0 -translate-y-[6%]  " /> */}
          </div>
          <h1 id="duo-header-left" ref={duoHeaderLeftRef} className="text-white z-2 text-4xl font-bold absolute bottom-[30vh] left-10">Instant Glasses <span className="text-[#ea00ff] sm:hidden">Quality Search</span></h1>
          <h1 id="duo-header-right" ref={duoHeaderRightRef} className="text-white z-2 text-4xl font-bold absolute bottom-[30vh] right-10 max-sm:hidden"> Quality Search</h1>
      </div>
      <div id="bluebox" className="fixed  top-0 w-[5%] rounded-full left-1/2 transform -translate-x-1/2 h-15 z-10 text-black bg-[#0acaff]">
                 
      </div>
     
      <div id="robot-cover" className="  relative w-full h-[100vh]  bg-[#0acaff] ">
              <div id="left-panel" className="w-1/3 max-sm:w-[45%] h-2/3 rounded-r-xl   bg-pink-500 absolute bottom-[10%] z-1  flex items-center  flex-col justify-evenly">
                <div id="static-pink-box"  className=" h-full bg-pink-500 w-2 h-2 z-10 absolute top-0 left-0 flex items-center justify-center" />
                <h2 className="text-white text-2xl max-sm:text-lg">Robot Cover Content</h2>
                <h2 className="text-white text-2xl max-sm:text-lg">Robot Cover Content</h2>
                <h2 className="text-white text-2xl max-sm:text-lg">best in the market</h2>
                <h2 className="text-white text-2xl  max-sm:text-lg">trusted by millions</h2>
              </div>
              <div id="right-panel" className="w-1/3 max-sm:w-[45%] h-2/3 rounded-l-xl  bg-pink-500 absolute right-0 bottom-[10%] z-1 flex items-center  flex-col justify-evenly">
                <div id="static-pink-box2"  className=" h-full bg-pink-500 z-10 w-2 h-2   absolute top-0 right-0 left-right flex items-center justify-center" />
                <h2 className="text-white text-2xl max-sm:text-lg">Robot Cover Content</h2>
                <h2 className="text-white text-2xl max-sm:text-lg">Robot Cover Content</h2>
                <h2 className="text-white text-2xl max-sm:text-lg ">best in the market</h2>
                <h2 className="text-white text-2xl max-sm:text-lg ">trusted by millions</h2>
              </div>

      </div> 
        <div className=" h-[100vh] w-full z-100 flex  bg-black relative items-center justify-center">
              <div id="pink-bg"  className="z-100 bg-pink-500 h-full w-full top-0 "></div>
              {/**constent box */}
              
          <div className="w-full h-full flex  flex-col items-center absolute gap-10 justify-center">
                <h1 className="text-white text-5xl sm:scale-120 ">Explore the unknown</h1>
                <h1 className="text-white text-4xl sm:scale-120"><span className="text-pink-500 text-lg">with</span> CyberShard</h1>
                <Button className="bg-pink-500 text-white py-8 px-10 mt-10 rounded-md">Get Started</Button>
                <div className="absolute top-0 z-19 w-full h-full"><Speed2  /></div>
          </div>
           </div>  {/**z-100 ztopper a simple div to cover the robot(absolute) */}
          
       
    </div>
  )
}

export default page
