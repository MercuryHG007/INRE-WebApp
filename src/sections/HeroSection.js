import React from 'react'

import Hero1 from '../assests/img/Hero1.jpg'
import Hero2 from '../assests/img/Hero2.jpg'
import { 
  Button 
} from '@material-tailwind/react'
import {
  ArrowLongRightIcon
} from '@heroicons/react/24/outline'


function HeroSection() {
  return (
    <div
      id='home'
      className='flex flex-col gap-4 w-[70vw]'
    >
      <div
        className='flex lg:h-[480px] sm:h-[40vh] w-[100%]'
      >
        <div
          className='relative lg:w-[50%] md:w-[60%] flex items-center justify-end pl-10 z-20'
          style={{
            background: `rgba(0,37,80, 1)`,
            backgroundSize: "100% 100%",
            // backgroundPositionX: "10vw",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p
            className='text-white lg:text-5xl md:text-2xl mr-6 text-left'
          >
            Making your <span className='text-yellow-500 font-bold'>Real Estate</span> purchase journey faster and transparent
          </p>
        </div>
        <div
          className="w-[100%] z-10 lg:-ml-32 md:-ml-6"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(0,37,80, 1) 30%, transparent 30%), url(${Hero1})`,
            backgroundSize: "100% 100%",
            // backgroundPositionX: "10vw",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div
        className='flex sm:flex-col md:flex-row lg:h-[480px] sm:h-[40vh] w-[100%] lg:items-center sm:p-4 md:p-3 lg:p-0 justify-center bg-[#E6EAEE] gap-5'
      >
        <div
          className='lg:w-[47%] lg:h-[88%] md:h-[100%] md:w-[50%] md:flex sm:hidden'
        >
          <img
            src={Hero2}
            alt='Hero2'
            className='rounded-[8px] lg:h-[100%] sm:h-[100%] object-cover'
          />
        </div>
        <div
          className='lg:w-[47%] sm:w-[100%] flex flex-col md:h-[80%] text-left justify-between gap-3'
        >
          <h3
            className='lg:text-3xl md:text-2xl font-semibold'
          >
            Who We Are
          </h3>
          <p
            className='text-justify md:text-xs lg:text-base'
          >
          The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
          </p>
          <Button
            variant='outlined'
            className='lg:w-[200px] flex text-[#01244A] border-[#01244A] items-center justify-center rounded-sm gap-2 sm:p-2 md:p-1 lg:p-2'
          >
            <p>Contact Now </p><ArrowLongRightIcon height={20}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection