"use client"
import  Lottie from 'lottie-react';
import speed from '@/public/speedWave.json'
import wave from "@/public/dash.json"

export  function Speed1(){
    return (<div className=''> {/**absolute added */}
        <Lottie background='transparent' animationData={speed} loop />
        <div className='-translate-y-1/2 -translate-x-1/2 absolute'>
           
        </div>
        
        </div>
    )
}
export  function Speed2(){
    return (<div className=''> {/**absolute added */}
        <Lottie background='transparent' animationData={wave} loop speed={0.5} />
        <div className='-translate-y-1/2 -translate-x-1/2 absolute'>
           
        </div>
        
        </div>
    )
}