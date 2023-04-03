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
      id='hero'
      className='flex flex-col gap-4 w-[70vw]'
    >
      <div
        className='flex h-[480px] w-[100%]'
      >
        <div
          className='relative w-[50%] flex items-center justify-end pl-10 z-20'
          style={{
            background: `rgba(0,37,80, 1)`,
            backgroundSize: "100% 100%",
            // backgroundPositionX: "10vw",
            backgroundRepeat: "no-repeat"
          }}
        >
          <p
            className='text-white text-5xl mr-6 text-left'
          >
            Making your <span className='text-yellow-500 font-bold'>Real Estate</span> purchase journey faster and transparent
          </p>
        </div>
        <div
          className=" w-[100%] z-10 -ml-32"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(0,37,80, 1) 30%, transparent 30%), url(${Hero1})`,
            backgroundSize: "100% 100%",
            // backgroundPositionX: "10vw",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div
        className='flex h-[480px] w-[100%] items-center justify-center bg-[#E6EAEE] gap-5'
      >
        <div
          className='w-[47%] h-[88%]'
        >
          <img
            src={Hero2}
            alt='Hero2'
            className='rounded-[8px] h-[100%]'
          />
        </div>
        <div
          className='w-[47%] flex flex-col h-[70%] text-left justify-between'
        >
          <h3
            className='text-3xl font-semibold'
          >
            Who We Are
          </h3>
          <p
            className='text-justify'
          >
          The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.
          </p>
          <Button
            variant='outlined'
            className='w-[200px] flex text-[#01244A] border-[#01244A] items-center justify-center rounded-sm gap-2'
          >
            <p>Contact Now </p><ArrowLongRightIcon height={20}/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection