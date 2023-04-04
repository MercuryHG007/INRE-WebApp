import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
import React from 'react'


function MemberCard({ width, height, imageURL, name, desc }) {
    return (
        <div
            className={`bg-white flex flex-col sm:w-[100%] lg:w-[${width}] h-[${height}] gap-5 sm:items-center drop-shadow-[10px_10px_5px_rgba(0,0,0,0.16)]`}
        >
            <div
                className={`flex flex-col w-[100%] h-[100%] rounded-md border-[#F2F4F6] border-2 p-4 gap-5 items-center `}
            >
                <div
                    className='flex lg:w-[22vw] xl:w-[20vw] sm:w-[100%] h-[50%] items-center justify-center'
                >
                    <img
                        src={imageURL}
                        height="100%"
                        width="100%"
                        alt={`${name}img`}
                        className='bg-black lg:h-[100%] sm:h-[200px] rounded-md object-cover'
                    />
                </div>
                <div
                    className='flex flex-col gap-3 w-[100%] xl:h-[40%] text-left'
                >
                    <h2
                        className='text-[#002550] font-[600] text-[28px]'
                    >
                        {name}
                    </h2>
                    <p
                        className='text-[#1A1A1A] font-[400] text-[18px] text-justify'
                    >
                        {desc}
                    </p>
                </div>
                    <div
                        className='flex items-center justify-end w-[100%]'
                    >
                        <Button
                            variant='outlined'
                            className='w-[150px] flex text-[#01244A] border-[#01244A] items-center justify-center rounded-md gap-2 p-3'
                        >
                            <p>View More </p><ArrowLongRightIcon height={20} />
                        </Button>
                    </div>
            </div>
        </div>
    )
}

export default MemberCard