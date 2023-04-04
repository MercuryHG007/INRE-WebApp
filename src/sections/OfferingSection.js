import React from 'react'

import OfferingImg1 from '../assests/img/offering1.png'
import OfferingImg2 from '../assests/img/offering2.jpg'
import OfferingImg3 from '../assests/img/offering3.jpg'
import OfferingCard from '../components/OfferingCard';

const Offerings = [
  {
    step: '1',
    stepName: 'Pre-Booking',
    image: OfferingImg1,
    title: "Background verification",
    desc: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
    cost: "3000"
  },
  {
    step: '2',
    stepName: 'Post-Booking & Pre-Registration',
    image: OfferingImg2,
    title: "Virtual site visit",
    desc: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
  },
  {
    step: '3',
    stepName: 'Post-Registration',
    image: OfferingImg3,
    title: "Title diligence",
    desc: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
  }
];

function OfferingSection() {
  return (
    <div
      id='offerings'
      className=' flex flex-col gap-4 w-[70vw] items-center justify-center'
    >
      <h2
        className='w-[250px] text-[32px] font-[700] border-b-black border-b-2'
      >
        Our Offerings
      </h2>
      <p
        color='#1A1A1A'
      >
        This whole purchase journey can be divided into three stages. For more details, <span className='text-[#002550] font-bold cursor-pointer underline'>Click Here</span>
      </p>
      <div
        className='lg:w-[120%] xl:w-[100%] flex justify-between sm:flex-col lg:flex-row gap-4'
      >
        {Offerings.map((offering, i) => (
          <OfferingCard
            key={i}
            width="80%"
            height="200px"
            step={offering.step}
            stepName={offering.stepName}
            imageURL={offering.image}
            title={offering.title}
            desc={offering.desc}
            cost={offering.cost}
          />
        ))}
      </div>

    </div>
  )
}

export default OfferingSection