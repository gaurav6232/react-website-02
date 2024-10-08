import { motion, useAnimate, useAnimation } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react'
 

const Featured = () => {
 
 const cards = [useAnimation(), useAnimation()]
  const handleHover = (index) =>{
    cards[index].start({y: "0"});
  }
  const handleHoverEnd = (index) =>{
    cards[index].start({y: "100%"});
  }
  
  return (
  
  <>
    <div data-scroll data-scroll-section className='w-full py-10'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight text-zinc-950 font-["Test Founders Grotest X-Cond SmBd"]' >Featured projects</h1>
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <motion.div 
          onHoverStart={() =>handleHover(0)} 
          onHoverEnd={()=> handleHoverEnd(0)}

          className='cardcontainer  relative rounded-lg w-1/2 h-[80vh]'>
          <h1 className='heading flex overflow-hidden absolute text-[#abc841]  text-8xl z-[9] leading-none tracking-tight font-semibold right-0 translate-x-1/2 top-1/2 -translate-y-1/2'>
            {"FYDE".split('').map((item, index)=>
             <motion.span
              initial={{y: "100%"}} 
              animate={cards[0]} 
              transition={{ease: [0.25, 1, 0.5, 1], delay: index*.05}}
              className='inline-block'>{item}</motion.span> )}
           </h1>
            <div className='w-full h-full rounded-lg  overflow-hidden'>
              <motion.img 
                whileHover={{ scale: 0.95 }} 
               className='w-full h-full bg-cover rounded-lg' src="https://neurons-lab.com/wp-content/uploads/2023/07/12859282812793-5.jpg" alt="" />
            </div>
          </motion.div>
          <motion.div
           onHoverStart={() =>handleHover(1)} 
           onHoverEnd={()=> handleHoverEnd(1)}
           className='cardcontainer rounded-lg w-1/2 h-[80vh]  relative'>
           <h1 className='heading flex overflow-hidden absolute text-[#abc841]  text-8xl z-[9] leading-none tracking-tight font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
            {"VISE".split('').map((item, index)=> 
            <motion.span
            initial={{y: "100%"}} 
            animate={cards[1]} 
            transition={{ease: [0.25, 1, 0.5, 1], delay: index*.05}}
            className='inline-block'>{item}</motion.span> )}
           </h1>

            <div className='w-full h-full overflow-hidden rounded-lg'>
            <motion.img
                whileHover={{ scale: 0.95 }} // Adjust scale as needed
                className='w-full h-full bg-cover rounded-lg'
                src='https://cyberconvoy.com/wp-content/uploads/2023/11/loadzoom-1728x959.jpeg.webp'
                alt=''
              />
            </div>
          </motion.div>
        </div>
        </div>
      
    </div>


    <div data-scroll data-scroll-section className='w-full py-10'>
        <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
            <h1 className='text-8xl tracking-tight text-zinc-950 font-["Test Founders Grotest X-Cond SmBd"]' >Featured projects</h1>
        </div>
        <div className='px-20'>
        <div className='cards w-full flex gap-10 mt-10'>
          <motion.div 
          onHoverStart={() =>handleHover(0)} 
          onHoverEnd={()=> handleHoverEnd(0)}

          className='cardcontainer  relative rounded-lg w-1/2 h-[80vh]'>
          <h1 className='heading flex overflow-hidden absolute text-[#abc841]  text-8xl z-[9] leading-none tracking-tight font-semibold right-0 translate-x-1/2 top-1/2 -translate-y-1/2'>
            {"TESTER".split('').map((item, index)=>
             <motion.span
              initial={{y: "100%"}} 
              animate={cards[0]} 
              transition={{ease: [0.25, 1, 0.5, 1], delay: index*.05}}
              className='inline-block'>{item}</motion.span> )}
           </h1>
            <motion.div className='w-full h-full rounded-lg  overflow-hidden bg-zinc-800'>

              <motion.img 
                whileHover={{ scale: 0.95 }} 
               className='w-full h-full bg-cover object-none rounded-lg' src="https://www.eye-emporium.com/cdn/shop/files/joao-melo--OpWKFHA_yQ-unsplash.jpg?crop=center&height=290&v=1700081332&width=448" alt="" />
            </motion.div>
          </motion.div>
          <motion.div
           onHoverStart={() =>handleHover(1)} 
           onHoverEnd={()=> handleHoverEnd(1)}
           className='cardcontainer rounded-lg w-1/2 h-[80vh]  relative'>
           <h1 className='heading flex overflow-hidden absolute text-[#abc841]  text-8xl z-[9] leading-none tracking-tight font-semibold right-full translate-x-1/2 top-1/2 -translate-y-1/2'>
            {"LENCE".split('').map((item, index)=> 
            <motion.span
            initial={{y: "100%"}} 
            animate={cards[1]} 
            transition={{ease: [0.25, 1, 0.5, 1], delay: index*.05}}
            className='inline-block'>{item}</motion.span> )}
           </h1>

            <div className='w-full h-full overflow-hidden rounded-lg bg-zinc-700'>
            <motion.img
                whileHover={{ scale: 0.95 }} // Adjust scale as needed
                className='w-full h-full bg-cover rounded-lg object-none'
                src='https://www.eye-emporium.com/cdn/shop/files/colourimetry_APPOINTMENT.png?crop=center&height=450&v=1654516734&width=450'
                alt=''
              />
            </div>
          </motion.div>
        </div>
        </div>
      
    </div>


  </>
  )
}

export default Featured
