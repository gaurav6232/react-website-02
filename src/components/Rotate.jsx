import React, { useEffect, useRef, useState } from 'react'

const Rotate = () => {
  const [rotare, setRotate] = useState(0)

  useEffect(() =>{

    window.addEventListener("mousemove", (e) =>{
       let mouseX = e.clientX;
       let mouseY = e.clientY;

       let deltaX = mouseX - window.innerWidth/2;
       let deltaY = mouseY - window.innerHeight/2;

       var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI)
        setRotate(angle-180)
    })
  })


  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='w-1/2 flex gap-10 items-center justify-center absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-96'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotare}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rounded-full'>
            <div className='w-6 h-6 rounded-full bg-zinc-100'> </div>
            </div>

            </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
            <div className='w-2/3 h-2/3 rounded-full bg-zinc-900 relative'>
            <div style={{transform: `translate(-50%, -50%) rotate(${rotare}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 rounded-full'>
            <div className='w-6 h-6 rounded-full bg-zinc-100'> </div>
            </div>
            </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Rotate
