// useGSAP(() => {
    


// const switchOpacity = () => {
//   const refs = [p1Ref, p2Ref];

//   const availableIndexes = refs
//     .map((_, i) => i)
//     .filter(i => i !== previousIndexRef.current);

//   const randomIndex =
//     availableIndexes[
//       Math.floor(Math.random() * availableIndexes.length)
//     ];

//   previousIndexRef.current = randomIndex;

//   refs.forEach((ref, index) => {
//     gsap.set(ref.current, {
//       opacity: index === randomIndex ? 1 : 0,
//     });
//   });
// };
//     //bum animation
//     ScrollTrigger.create({
//       trigger: textContent1Ref.current,
//       start: "top 40%",
//       pin: true,
//       markers: true,
//       onEnter: () => {
//         gsap.to(textContent1Ref.current, {
//           opacity: 1,
//           duration: 0.4,
//         });
//       }
//     });
//     const tl = gsap.timeline({ paused: true ,repeat:-1, });

// tl
// .to(coverBox1Ref.current, {
//   xPercent: -125,
//   duration: 1.8,
//   onStart: switchOpacity
// })
// .to(coverBox1Ref.current, {
//   xPercent: 0,
//   duration: 0.8
// }, ">0.4")
// .to(coverBox1Ref.current, {
//   xPercent: -125,
//   duration: 0.8,
//   onStart: switchOpacity
// }, ">0.2")
// .to(coverBox1Ref.current, {
//   xPercent: 0,
//   duration: 0.8
// }, ">0.4");

// ScrollTrigger.create({
//   trigger: textContent1Ref.current,
//   start: "top center",
//   markers: true,
  

//   onEnter: () => {
//     tl.play();
//   },

//   onLeaveBack: () => {
//     tl.reverse();
//   }
// });
// })  

// import React from 'react'

// const switchOpcatity = () => {
//   return (
//     <div>
//        <div ref={textContent1Ref} className="flex scale-125  flex-col opacity-0 w-1/3 absolute ml-4 left-10 text-4xl font-bold gap-4  border-blue-200">
//         <p ref={p1Ref} className=" text-white absolute scale-125   my-auto">Blazing-fast full-text  search</p> {/**absolute */}
//         <p  ref={p2Ref} className=" text-white absolute  scale-125  opacity-0 my-auto">Real-time search</p>
//         <div  ref={coverBox1Ref}className="absoltue h-16 scale-125   bg-black  w-full  border-blue-900 my-auto" />
//         </div>
//     </div>
//   )
// }

// export default switchOpcatity
