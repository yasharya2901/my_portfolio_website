import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

function About() {
  return (
    <div className='flex flex-col'>
        <div className='text-[#4ADE80] py-2 mt-16'>Hello World! I&apos;m</div>
        <div className='text-white font-extrabold text-6xl py-4'>Yash Arya</div>
        <div className='text-[#7c7c7c] text-3xl font-medium py-6'>Backend Engineer && Problem Solver</div>
        <div className='text-[#797979] text-lg'>I write code that makes servers happy and databases efficient.</div>
        <div className='text-[#797979] text-lg'>Currently crafting microservices at Wealthy, where I turn</div>
        <div className='text-[#797979] text-lg'>coffee into Go code.</div>
        <div className='flex flex-row my-10'>
          <button className='text-white bg-[#42d477] hover:bg-[#3ab366] duration-100 ease-in rounded-lg'>
            <div className='flex flex-row justify-center items-center py-3 px-2'>
              <span className='px-5'>View My Work</span> <FaArrowRight /> 
            </div>
          </button>
          <button className='text-gray-500 border-2 border-neutral-500 hover:text-gray-300 hover:border-neutral-400 duration-100 ease-in rounded-lg mx-5'>
            <div className='flex flex-row justify-center items-center py-3 px-4'>
              <span className='px-2'>Let&apos;s Connect</span> <FaArrowRight /> 
            </div>
          </button>
        </div>
        <div id="jokes" className='text-gray-600 text-sm my-8 mb-20'>
          <p>{`// Fun fact: I debug with println() and I'm not ashamed of it`}</p>
          <p>{`// Another one: My code is like my coffe - strong, reliable, and occasionally bitter`}</p>
        </div>

    </div>
  )
}

export default About