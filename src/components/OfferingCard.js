import { ArrowLongRightIcon } from '@heroicons/react/24/outline'
import { Button } from '@material-tailwind/react'
import React from 'react'

function OfferingCard({ width, height = "30vh", step, stepName, imageURL, title, desc, cost = null }) {
    return (
        <div
            className={`flex flex-col sm:w-[100%] lg:w-[${width}] h-[${height}] gap-5 sm:items-center`}
        >
            <div
                className='bg-[#F2F4F6] flex gap-4 h-[100px] w-[100%] items-center justify-center text-[24px]'
            >
                <div
                    className='flex w-[48px] h-[48px] bg-white text-black rounded-[50%] items-center justify-center'
                >
                    {step}
                </div>
                <p
                    className='lg:w-[50%] md:w-[65%] md:text-2xl lg:text-base xl:text-2xl 2xl:text-xl'
                >
                    {stepName}
                </p>
            </div>
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
                <div
                    className='flex flex-col gap-3 w-[100%] xl:h-[40%] text-left justify-center'
                >
                    <h2
                        className='text-[#002550] font-[600] text-[28px]'
                    >
                        {title}
                    </h2>
                    <p
                        className='text-[#1A1A1A] font-[400] text-[18px] text-justify'
                    >
                        {desc}
                    </p>
                    <div
                        className='flex items-center justify-between w-[100%]'
                    >
                        <Button
                            variant='outlined'
                            className='w-[150px] flex text-[#01244A] border-[#01244A] items-center justify-center rounded-md gap-2 p-3'
                        >
                            <p>Contact Us </p><ArrowLongRightIcon height={20} />
                        </Button>
                        {cost && (
                            <p
                                className='text-[#01244A] text-right'
                            >
                                INR {cost} /Project
                            </p>
                        )}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default OfferingCard