import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex px-32 gap-5 items-center justify-center'>
        <div className='cardcontainer w-1/2 h-[50vh]'>
            <div className='relative card flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]'>
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>hello</button>
            </div>
        </div>
         <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='card rounded-xl w-1/2 h-full bg-[#416a64] items-center flex justify-center relative'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>hello</button>
            </div>
            <div className='card rounded-xl w-1/2 h-full bg-[#3e5c58] items-center flex justify-center relative'>
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>hello</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
