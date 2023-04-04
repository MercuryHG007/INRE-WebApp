import React from 'react'

import { Button } from '@material-tailwind/react'
import { ArrowLongRightIcon} from '@heroicons/react/24/outline'
import {CalendarDaysIcon} from '@heroicons/react/24/solid'

function BlogCard({ width, height = "30vh", imageURL, place, date, user, title, desc }) {
    return (
        <div
            className={`flex flex-col sm:w-[100%] lg:w-[${width}] h-[${height}] gap-5 sm:items-center bg-white drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)]`}
        >

            <div
                className={`flex flex-col w-[100%] h-[100%] rounded-md border-[#F2F4F6] border-2 p-4 gap-5 items-center`}
            >
                <div
                    className='flex lg:w-[20vw] sm:w-[100%] h-[50%] items-center justify-center'
                >
                    <img
                        src={imageURL}
                        height="100%"
                        width="100%"
                        alt={`${title}img`}
                        className='lg:h-[100%] sm:h-[200px] rounded-md object-cover'
                    />
                </div>
                <p
                    className='w-[100%] text-left text-[#002550] text-[16px]'
                >
                    {place}
                </p>
                <div
                    className='w-[100%] flex justify-between items-center'
                >
                    <div
                        className='flex gap-3 justify-center items-center'
                    >
                        <CalendarDaysIcon height={20}/>
                        <p
                            className='text-xs font-semibold'
                        >
                            {date}
                        </p>
                    </div>
                    <p
                        className='text-xs font-semibold'
                    >
                        By {user}
                    </p>
                </div>
                <div
                    className='flex flex-col gap-3 w-[100%] xl:h-[40%] text-left justify-center'
                >
                    <h2
                        className='text-[#002550] font-[600] text-[28px]'
                    >
                        {title}
                    </h2>
                    <p
                        className='text-[#1A1A1A] font-[400] text-[16px] leading-[21px] text-justify'
                    >
                        {desc}
                    </p>
                </div>
                <div
                    className='flex items-center justify-between w-[100%]'
                >
                    <Button
                        variant='outlined'
                        className='w-[150px] flex text-[#01244A] border-[#01244A] items-center justify-center rounded-sm gap-2 p-3'
                    >
                        <p>View More </p><ArrowLongRightIcon height={20} />
                    </Button>
                </div>


            </div>
        </div>
    )
}

export default BlogCard