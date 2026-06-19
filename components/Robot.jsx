"use client"
import { useGLTF , useAnimations, useScroll} from "@react-three/drei"
import { useEffect, useRef } from  "react"
import { useFrame } from "@react-three/fiber";
import { useMediaQuery } from 'react-responsive'
useGLTF.preload("/robot.glb");


const Robot = () => {
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
    const scroll = useScroll();
    useFrame(()=>{console.log(scroll.offset);
        return (
        (actions["Experiment"].time = (actions["Experiment"]?.getClip().duration * scroll.offset)/3)
        
    )})
    
  return (
    <group ref={group} className="border-2 border-blue-700">
        <primitive  object={scene} 
        position={[isMobile ? -1.59 : -1.59, 0, isMobile ? 0.7 : 1.5]} 
        scale={isMobile ? 0.6 : 1} 
        rotation={[0, isMobile ? -2 : -2.4, 0]}
         />
    </group>
  )
}

export default Robot
