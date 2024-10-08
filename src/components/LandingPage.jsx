import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2"  style={{backgroundImage: `url("https://creativeeyestudio-296378152.imgix.net/pages/bg-home.jpg?auto=format,compress&w=1946")`}} className='w-full h-screen bg-center bg-cover bg-zinc-900 pt-1'>
       <div className='textstructure mt-32'>
        {["We Create", "eye Opening", "Presentations"].map((item, index) =>{
            return  (
            <div className='masker'>
              <div className='w-fit flex items-center'>
              { index === 1 && (
              <motion.div initial={{width: 0}}
               animate={{width: "9vw"}}
               transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}
                className='w-[9vw] h-[5vw] rounded-md relative top-[0.5vw] bg-red-500'>
                  <img className='w-full rounded-md h-full bg-cover object-center' src="https://i.pinimg.com/736x/9e/92/87/9e92871b9a62f38edca97aa51e9b846a.jpg" alt="" />
                </motion.div>

              )}
            <h1 className='uppercase text-[7vw]  leading-[6.5vw]  tracking-tighter font-["Test Founders Grotest X-Cond SmBd"] font-medium'>
                 {item}
            </h1>
              </div>
            </div>
            );
        })}
       </div>
       <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["for public and private companies", "From the first pitch to IPO",].map((item, index)=>(
        <p className='text-md font-light tracking-tight leading-none'>{item}</p>
        ))}
        <div className='start flex items-center gap-5'>
          <div className='px-4 py-2 border-[2px] border-zinc-600 rounded-full font-light text-sm'>Start The Project</div>
          <div className='w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500'>
            <span className='rotate-[45deg]'>
            <FaArrowUpLong/> 
            </span>
          </div>

        </div>
       </div>
    </div>
  )
}

export default LandingPage
