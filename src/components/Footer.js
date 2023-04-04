import React from 'react'
import { Typography } from "@material-tailwind/react";
import {
  EnvelopeIcon, 
  PhoneIcon,
} from '@heroicons/react/24/outline'
import logo from '../assests/img/logo-W.png'

function Foot() {
  return (
    <footer className="w-full bg-[#002550] p-8 flex flex-col  gap-6">
      <div className="flex lg:flex-row items-start justify-center gap-y-6 lg:gap-x-12 text-center md:justify-between lg:px-14 ">
        <img
          src={logo}
          alt="logo-ct"
          className="w-20"
        />
        <ul className="flex flex-col text-left gap-y-2 gap-x-8">
          <li>
            <Typography
              color="blue-gray"
              className="text-[28px]  font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Company
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#home"
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Home
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#offerings"
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Our Offerings
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#team"
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Our Team
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#contact"
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
        <ul className="flex flex-col text-left gap-y-2 gap-x-8">
          <li>
            <Typography
              color="blue-gray"
              className="text-[28px]  font-bold text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Useful Link
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#blog"
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Blogs
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href=""
              color="blue-gray"
              className="text-[18px] font-normal text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              FAQ's
            </Typography>
          </li>
        </ul>
        <ul className="flex flex-col text-left gap-y-3 gap-x-8">
          <li className='flex items-center gap-4 '>
            <div>
              <EnvelopeIcon
                className='h-10 text-white'
              />

            </div>
            <div>
              <Typography
                color="blue-gray"
                className="text-[24px] font-[700] text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Email:
              </Typography>
              <Typography
                color="blue-gray"
                className="text-[20px] font-[400] text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                support@inreglobal.com
              </Typography>
            </div>
          </li>
          <li className='flex items-center gap-4 '>
            <div>
              <PhoneIcon
                className='h-10 text-white'
              />
            </div>
            <div>
              <Typography
                color="blue-gray"
                className="text-[24px] font-[700] text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                Phone:
              </Typography>
              <Typography
                color="blue-gray"
                className="text-[20px] font-[400] text-white transition-colors hover:text-blue-500 focus:text-blue-500"
              >
                +91 | 7019305889
              </Typography>
            </div>
          </li>
        </ul>
      </div>
      <div className='flex justify-between px-14'>
        <Typography color="white" className="text-center font-normal">
          &copy; 2023. Designed by INRE Global with Harshit Garg
        </Typography>
        <ul className='flex lg:gap-14 md:gap-3 text-white'>
          <li>
            LinkedIn
          </li>
          <li>
            Facebook
          </li>
          <li>
            Twitter
          </li>
          <li>
            Instagram
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Foot