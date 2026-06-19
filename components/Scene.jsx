"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { OrbitControls } from "@react-three/drei"
import Robot from "@/components/Robot"
import { useProgress,Html } from "@react-three/drei"
import { ScrollControls } from "@react-three/drei"
import { useMediaQuery } from 'react-responsive'
const Loader = ()=>{
    const { progress, active } = useProgress();
    return <Html center>{progress.toFixed(2)} %</Html>
}



const Scene = () => {
    const isMobile = useMediaQuery({query: '(max-width:768px)'}) ;

// const  ptn = {  x: -0.8060782616407615, y: -7.694908748305981, z: 6.029279228547276 }
// const  rtn = {_x : -0.44253979478456734, _y: -0.9610511898258951, _z: -0.3705444712580497}

const  ptn = {  x: -3, y: 2, z: 1 }
const  rtn = {_x : 0, _y: 0, _z: 0}
  return (
    <Canvas camera={{ position: [ptn.x, ptn.y, ptn.z] , rotation: [rtn._x, rtn._y, rtn._z] }} gl={{ antialias: true }} dpr={2} style={{ width: '100vw', height: '100vh' }} className="border-2 border-blue-700">
      <ambientLight />
      <gridHelper args={[10, 10]} />

      <OrbitControls onChange={(e) => {
        console.log(e.target.object.position); //position 
        console.log(e.target.object.rotation); //rotation
    }} />
      
      <Suspense fallback={<Loader />}>
      <ScrollControls damping={0.1} pages={3} >   {/**adding scroll functionality */}
        <Robot position={[0, -5, 0]} />
      </ScrollControls>
      </Suspense>

    </Canvas>
  )
}

export default Scene
