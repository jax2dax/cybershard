import { forwardRef} from 'react'
import {redirect} from "next/navigation"
const Button = forwardRef(({ content, variant, className }, ref) => {
  return (
    <button onClick={() => {redirect("/get-started")}} className={`px-8 py-3 z-20 group relative rounded-xl text-2xl 
  bg-white
    `}>
        <div ref={ref}
  className={`
    absolute
    inset-0
    translate-x-2
    translate-y-2
   
    group-hover:translate-x-0
    group-hover:translate-y-0
    transition-all ease-in-out  duration-200
    rounded-xl
    -z-10
     ${variant === 'primary' ? `bg-[#fd4af1]   text-[#000000]` : 'bg-[#39e5ff] text-[#ffffff]'} 
     ${className}
`}
  
/>
     <div className="relative text-3xl font-extrabold z-3">{content}</div>
    </button>
  )
})

export default Button
