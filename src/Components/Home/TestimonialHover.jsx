import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons"

const TestimonialHover = () => {
  return (
    <main className='TestimonialHover'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus veritatis delectus officia, molestias nisi rerum placeat eveniet dolor laudantium nihil voluptates ducimus, reprehenderit dicta neque ab accusamus recusandae nam eaque asperiores ad quaerat quos? Voluptate perferendis aperiam reprehenderit doloribus.
        <div className="TestimonialHover-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53] ' icon={faTwitter}/></div>
        <div className="TestimonialHover-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faFacebookF}/></div>
        <div className="TestimonialHover-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faLinkedin}/></div>
    </main>
  )
}

export default TestimonialHover
