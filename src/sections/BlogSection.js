import React from 'react'

import blog1 from '../assests/img/blog1.jpg'
import blog2 from '../assests/img/blog2.jpg'
import blog3 from '../assests/img/blog3.jpg'
import BlogCard from '../components/BlogCard'

const Blogs = [
  {
    imgURL: blog1,
    place: "Real Estate, Analysis",
    date: "09 Jun 2022",
    user: "Admin",
    title: "Guide for personal property buying",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
  },
  {
    imgURL: blog2,
    place: "Real Estate, Analysis",
    date: "09 Jun 2022",
    user: "Admin",
    title: "Guide for personal property buying",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
  },
  {
    imgURL: blog3,
    place: "Real Estate, Analysis",
    date: "09 Jun 2022",
    user: "Admin",
    title: "Guide for personal property buying",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididuut labore dolore magna aliqua do eiusmod...",
  },
]

function BlogSection() {
  return (
    <div
      id='blog'
      className='w-[98.9vw] bg-[#F2F4F6] flex justify-center items-center pb-8'
    >
      <div
        className='flex flex-col gap-5 w-[70vw] items-center justify-center'
      >
        <h2
          className='w-[250px] text-[32px] font-[700] border-b-black border-b-2'
        >
          Blogs
        </h2>
        <div
          className='lg:w-[120%] xl:w-[100%] flex justify-between sm:flex-col lg:flex-row gap-4'
        >
          {Blogs.map((blog, i) => (
            <BlogCard
              key={i}
              width="80%"
              height="200px"
              imageURL={blog.imgURL}
              place={blog.place}
              date={blog.date}
              user={blog.user}
              title={blog.title}
              desc={blog.desc}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection