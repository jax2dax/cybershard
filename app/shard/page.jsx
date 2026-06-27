"use client"
import {useState , useEffect, useRef } from 'react'
import { Rock_Salt } from "next/font/google";
import gsap from "gsap"
import {useGSAP} from "@gsap/react"
import Button from "@/components/Button"
import { ScrollTrigger } from 'gsap/all';
import { Audiowide } from "next/font/google";
import {Search } from "lucide-react"
import MarqueeGlider from "@/components/Marquee"
//import Speed1 from "@/components/Speed"
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
  const headerContentRef = useRef(null);
  const textContent1Ref = useRef(null);
  const coverBox1Ref = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const previousIndexRef = useRef(-1); //textopacity switching
  const textContent2Ref = useRef(null);
  const coverBox2Ref = useRef(null);
  const p3Ref = useRef(null);
  const p4Ref = useRef(null);

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

/////SearchIconAnimation///////
useGSAP(() => {
  gsap.to(bubbleRef.current, {
    x: 180,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
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
});
/////////fadein and out Content
useGSAP(() => {
  gsap.set(headerContentRef.current, {
    opacity: 1
  });

  ScrollTrigger.create({
    trigger: headerRef.current,
    start: "bottom top",

    onEnter: () => {
      gsap.to(headerRef.current, {
        opacity: 0,
        duration: 1
      });

      gsap.to(headerContentRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5
      });
    },

    onLeaveBack: () => {
      gsap.to(headerRef.current, {
        opacity: 1,
        duration: 1
      });

      gsap.to(headerContentRef.current, {
        opacity: 1,
        duration: 1,
        delay: 0.5
      });
    }
  });
}, []);
//////fade-in out btn cta
const ctaRef = useRef(null);
useGSAP(() => {
  ScrollTrigger.create({
    trigger: headerRef.current,
    start: "bottom top",

          onEnter: () => {
            gsap.to(ctaRef.current, {
              opacity: 0,
              duration: 1,
              delay: 0.5
            });
          },
          onLeaveBack: () => {
            gsap.to(ctaRef.current, {
              opacity: 1,
              duration: 1,
              delay: 0.5
            });
          }
  });
}, []);
//////End fade in-out /////

//pin& bump in animation
useGSAP(() => {
    


const switchOpacity = () => {
  const refs = [p1Ref, p2Ref];

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
useGSAP(() => {
  
    gsap.to("#marquee-track", {
      x: 1500,
      ease: "none",
      scrollTrigger: {
        trigger: "#marquee-section",
        start: "top center",
        end: "+=1000",
        scrub: true,
      },
    });
  
  });
  /////marquee end
//GLITCH
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
    <>
    <section className="w-full h-dvh max-sm:flex-col justify-center items-center relative  flex gap-0 bg-black ">

      <div className="w-full flex-1 h-full flex flex-col items-center  z-50 justify-center ">
        <header ref={headerRef} className={`w-full flex-no-wrap content-stretch h-20 relative bottom-5 left-16 max-sm:bottom-0 max-sm:left-2 my-4 mx-2 flex items-center justify-center p-4 `}>
        <h1 className={`${audiowide.className} text-5xl max-sm:text-3xl  
text-[#3499f8]   font-extrabold scale-170 max-sm:scale-100 ml-4 absolute z-5 top-0 `}>
            CYBER <span className="text-[#e634ce]">ShaRD</span>  {/**text-[#ea00ff] pink */}
           
        </h1>
        <h1 ref={blueRef} className={`${audiowide.className} text-[#2f01ff] text-5xl max-sm:text-3xl  
  font-extrabold scale-170 max-sm:scale-100 ml-6 absolute top-0 z-3 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
        <h1 ref={greenRef} className={`${audiowide.className} text-[#00ffb7] text-5xl max-sm:text-3xl  
  font-extrabold scale-170 max-sm:scale-100 ml-2 z-2 absolute top-0 `}>
            CYBER <span className="">ShaRD</span>
        </h1>
     {/**content header */}
     
      </header>
      <div className="">
        <div ref={headerContentRef} className={`flex ${audiowide.className} flex-col  gap-4 relative flex-nowrap text-2xl mx-3 ml-8  rounded-xl px-3 text-white  border-blue-400 mt-0 pb-10`}> {/**bg-[#0acaff] */}
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
       
           <p className="flex-nowrap flex mt-4"> Powered Purely by SQL 
                    
            </p> {/**with our advanced algorithms and intuitive interface. */} 
           <p>Engineered for speed</p>
           <p>Tuned for Precision</p>

 
        </div>
      </div>
    
      <div id="CTA" ref={ctaRef} className="flex gap-4 z-100 align-bottom translate-y-[14vh] max-sm:translate-y-[4vh] justify-evenly  w-full CTA">
         <Button ref={btn1Ref} glitching={glitching} content="Try the Demo" variant="primary" />
        <Button ref={btn2Ref} glitching={glitching} content="View on GitHub" variant="secondary" />
      </div>
      
 {/* <MarqueeGlider className="
         bottom-0
          absolute 
          marquee
          w-full
          h-24
          flex
          items-center
          overflow-hidden
          border-y
          border-cyan-500
          bg-black
          z-50" /> */}
      </div>


      {/**emptu section for therobot to show on the right */}
      <div className="w-full flex-1 h-full flex items-center justify-center p-4">
        
      </div>
      
    </section>
    {/* //////section  2*/}
    
    
{/* <Speed1 /> */}
    <section id="marquee-section" className="w-full flex h-full relative bg-black    border-red-600 items-center justify-center p-4">
       
          
          
        <div className="  sect-2 w-full h-full flex items-center justify-center p-4">
          <div className="relative">
              <div ref={textContent1Ref} className="flex scale-125  flex-col opacity-0 w-4/9 absolute  overflow-hidden left-4 ml-2  mr-0 text-3xl font-bold   border-blue-200">
                <p ref={p1Ref} className=" text-[#fb0aff] absolute scale-125  text-2xl  my-auto pl-15 ">Blazing-fast  full-text  search</p>
                <p  ref={p2Ref} className=" text-[#0acaff] absolute  scale-125  opacity-0 my-auto pl-10">Real-time search</p>
                <div  ref={coverBox1Ref}className="absoltue h-16 scale-125   bg-black  w-full  border-blue-900 my-auto" />
            </div>
          </div>
         
        </div>
    </section>
    </>
  )
}

export default Shard
