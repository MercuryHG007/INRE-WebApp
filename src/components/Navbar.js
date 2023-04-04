import React, { useEffect, useState } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from '../assests/img/logo.png'

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-lg font-semibold`}
      >
        <a 
          href="#home" 
          className="pb-1 flex items-center"
          style={{
            color: activeLink==='home' ? 'Orange' : '',
            borderBottom: activeLink==='home' ? '1px solid Orange' : '',
          }}
          onClick={() => setActiveLink('home')}  
        >
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-lg font-semibold`}
      >
        <a 
          href="#offerings" 
          className="pb-1 flex items-center"
          style={{
            color: activeLink==='offerings' ? 'Orange' : '',
            borderBottom: activeLink==='offerings' ? '1px solid Orange' : '',
          }}
          onClick={() => setActiveLink('offerings')}  
        >
          Our Offerings
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-lg font-semibold`}
      >
        <a 
          href="#team" 
          className="pb-1 flex items-center"
          style={{
            color: activeLink==='team' ? 'Orange' : '',
            borderBottom: activeLink==='team' ? '1px solid Orange' : '',
          }}
          onClick={() => setActiveLink('team')}  
        >
          Our Team
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-lg font-semibold`}
      >
        <a 
          href="#contact" 
          className="pb-1 flex items-center"
          style={{
            color: activeLink==='contact' ? 'Orange' : '',
            borderBottom: activeLink==='contact' ? '1px solid Orange' : '',
          }}
          onClick={() => setActiveLink('contact')}  
        >
          Contact Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className={`p-1 text-lg font-semibold`}
      >
        <a 
          href="#blog" 
          className="pb-1 flex items-center"
          style={{
            color: activeLink==='blog' ? 'Orange' : '',
            borderBottom: activeLink==='blog' ? '1px solid Orange' : '',
          }}
          onClick={() => setActiveLink('blog')}  
        >
          Blogs
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky inset-0 z-30 h-max max-w-full rounded-none py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src={logo}
          alt='INRElogo'
          width={60}
        />
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex lg:gap-3">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <Button
            size="sm"
            className="bg-[#002550] hidden lg:inline-block rounded-none"
          >
            <span>Register Now</span>
          </Button>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Button
            size="sm"
            fullWidth
            className="bg-[#002550] mb-2 rounded-none"
          >
            <span>Register Now</span>
          </Button>
      </MobileNav>
    </Navbar>
  )
}

export default Nav