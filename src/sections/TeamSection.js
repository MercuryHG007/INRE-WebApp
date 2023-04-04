import React from 'react'

import member1 from '../assests/img/member1.png'
import member2 from '../assests/img/member2.jpg'
import member3 from '../assests/img/member3.jpg'

import MemberCard from '../components/MemberCard'

const Members = [
  {
    name: "Brajesh Pathak",
    desc: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",
    imageURL: member1
  },
  {
    name: "Deepak Shukla",
    desc: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience...",
    imageURL: member2 
  },
  {
    name: "Alok Kumar Singh",
    desc: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital...",
    imageURL: member3
  },
]

function TeamSection() {
  return (
    <div
      id='team'
      className=' flex flex-col gap-6 w-[70vw] items-center justify-center'
    >
      <h2
        className=' text-[32px] font-[700] border-b-black border-b-2'
      >
        Our Team Members
      </h2>
      <div
          className='lg:w-[120%] xl:w-[100%] xl:h-[78vh] flex justify-between sm:flex-col lg:flex-row gap-4'
        >
          {Members.map((member, i) => (
            <MemberCard
              key={i}
              width="80%"
              height="200px"
              imageURL={member.imageURL}
              name={member.name}
              desc={member.desc}
            />
          ))}
        </div>
    </div>
  )
}

export default TeamSection