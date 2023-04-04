import React from 'react'

import contactimg from '../assests/img/contact.jpg'
import { Button } from '@material-tailwind/react'

function ContactSection() {
  return (
    <div
      id='contact'
      className='lg:w-[85vw] xl:w-[70vw] p-[48px] drop-shadow-[0px_-1px_5px_rgba(0,0,0,0.16)] bg-white'
    >
      <div
        className='flex justify-between items-center gap-8'
      >
        <div
          className='md:w-[100%] lg:w-[90%] flex flex-col gap-6 lg:justify-start md:justify-center items-start'
        >
          <h2
            className='text-[#1A1A1A] text-2xl'
          >
            Get In Touch With Us To Connect
          </h2>
          <p
            className='text-base'
          >
            Contact Us
          </p>
          <form
            className='md:w-[100%]'
          >
            <div
              className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 text-[#888888]'
            >
              <div
                className='flex flex-col'
              >
                <label className='text-left'>Full Name</label>
                <input
                  name='fullName'
                  type='text'
                  placeholder='Lorem Ipsum'
                  className='md:w-[100%] lg:w-[100%]  border-[1.5px] text-[14px] border-[#888888] rounded-md p-3 pl-4 pr-4'
                />
              </div>
              <div
                className='flex flex-col'
              >
                <label className='text-left'>Email</label>
                <input
                  name='email'
                  type='email'
                  placeholder='lorem@gmail.com'
                  className='md:w-[100%] lg:w-[100%]  border-[1.5px] border-[#888888] rounded-md p-3 pl-4 pr-4'
                />
              </div>
              <div
                className='flex flex-col'
              >
                <label className='text-left'>Phone</label>
                <input
                  name='phone'
                  pattern="\d*" 
                  maxlength="12"
                  placeholder='+91 9876543210'
                  className='md:w-[100%] lg:w-[100%]  border-[1.5px] border-[#888888] rounded-md p-3 pl-4 pr-4'
                />
              </div>
              <div
                className='flex flex-col'
              >
                <label className='text-left'>Country</label>
                <input
                  name='country'
                  type='text'
                  placeholder='India'
                  className='md:w-[100%] lg:w-[100%]  border-[1.5px] border-[#888888] rounded-md p-3 pl-4 pr-4'
                />
              </div>
              <div
                className='flex flex-col'
              >
                <label className='text-left'>Stages</label>
                <input
                  name='stages'
                  type='text'
                  placeholder='I have booked but registration is not done'
                  className='md:w-[100%] lg:w-[100%]  border-[1.5px] border-[#888888] rounded-md p-3 pl-4 pr-4'
                />
              </div>
              <div></div>
              <Button
                size="sm"
                className="bg-[#002550] md:w-[100%] lg:w-[100%] rounded-none p-3"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
        <div
          className='md:hidden lg:block w-[80%] height-[100%]'
        >
          <img
            src={contactimg}
            width="100%"
            height="100%"
            alt='ContactIMG'
            className='w-[100%] object-cover'
          />
        </div>
      </div>
    </div>
  )
}

export default ContactSection