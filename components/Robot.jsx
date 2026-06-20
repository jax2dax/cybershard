"use client"
import { useGLTF , useAnimations, useScroll} from "@react-three/drei"
import { useEffect, useRef } from  "react"
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from 'react-responsive'
useGLTF.preload("/robot.glb");


const Robot = ({canAnimate, progress, loopwave}) => {
    const isMobile = useMediaQuery({query: '(max-width:768px)'}) ;
    const group = useRef(null);
    const { scene, nodes, materials , animations } = useGLTF("/robot.glb");
    const {actions, clips} =  useAnimations(animations ,scene);
        //pause the animation at first
    useEffect(()=>{
        if(actions["Experiment"]){
            actions["Experiment"].play();
            actions["Experiment"].paused = true;
            
        }
    },[]);
    //const scroll = useScroll();
    useFrame(()=>{ //console.log(scroll.offset); 
        if (!canAnimate || !actions["Experiment"]) return;
        if (loopwave) {

                const t = performance.now() / 1000;

              //  actions["Experiment"].time = 2 + (t % 2.37);  //loop between 2& 5th second slowly and playback and forth continously 
                const center = (2+3.5)/2;  //get the middle point ; 
                const amplitude = (2+4)/4;  //get the middle point ;

                actions["Experiment"].time =
                center +
                amplitude * Math.sin(t*0.5);  //0.3 flag makes the wave slower
                return;
  }
        return (
           
       // (actions["Experiment"].time =  3+(actions["Experiment"]?.getClip().duration * scroll.offset)/3)
    actions["Experiment"].time =   (actions["Experiment"].getClip().duration * progress.current)
        
    )})
    
  return (
    <group ref={group} className="border-2  overflow-x-hidden  border-blue-700">
        <primitive  object={scene} 
        position={[isMobile ? -1.59 : -1.59, 0, isMobile ? 0.7 : 1.5]} 
        scale={isMobile ? 0.6 : 1} 
        rotation={[0, isMobile ? -2 : -2.4, 0]}
         />
    </group>
  )
}

export default Robot
