// function CameraController({ moveRobot }) {
//   const camera = useThree((state) => state.camera);

const { isPagesAPIRouteMatch } = require("next/dist/server/route-matches/pages-api-route-match");

//   useEffect(() => {
//     if (moveRobot === "down") {
//       gsap.to(camera.position, {
//         x: -3,
//         y: 3,
//         z: -4,
//         duration: 2,
//       });
//     }
//   }, [moveRobot, camera]);

//   return null;
// }
// import React from 'react'

// const MainScene = () => {

//         if(moveRobot === "down"){
//             const  ptn = {  x: -3, y: 3, z: -4 }
//             const  rtn = {_x : 0, _y: 0, _z: 0}
//         }

//   return (
//     <div>
//       <CameraController moveRobot={moveRobot} />
//     </div>
//   )
// }

// export default MainScene
/////////////////////////
// //PagePart 
// useGSAP(()=>{
 
//  ScrollTrigger.create({    //GSAP-R3F scroll-hanshake
//     trigger: "#wave-loop-off",
//     start: "top center",
//     end: "bottom bottom",
//     scrub: true,

//     onEnter: () => {
//       setMoveRobot("down");
      
//     }
//   });
//   })