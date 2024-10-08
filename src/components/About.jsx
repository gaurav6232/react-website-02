import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#abc841] rounded-tl-3xl rounded-tr-3xl text-black'>
       <h1 className='font-["Neue_Montreal"] text-[4vw]  leading-[3.5vw]'>chi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple</h1>
       <div className='w-full flex gap-5 border-t-[1px] mt-14 border-[#798061]'>1
       <div className='w-1/2'>
        <h1 className='text-7xl'>Our appoach:</h1>
        <button className='px-10 flex gap-10 items-center py-6 bg-zinc-900 rounded-full mt-10'>Read More
        <div className='w-3 h-3 bg-slate-100 rounded-full'></div>
        </button>
       </div>
       <div className='w-1/2 h-[70vh] rounded-3xl bg-red-600 overflow-hidden'>
        <img className='w-full h-full bg-cover object-cover bg-center' src="https://www.eye-emporium.com/cdn/shop/files/DSC02633.jpg?crop=center&height=450&v=1699884587&width=450" alt="" />
       </div>
       </div>
    </div>
  )
}

export default About
