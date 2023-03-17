import React from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons"

const TestimonialHover = () => {
  return (
    <main className='TestimonialHover flex justify-center'>
        <div className="TestimonialHover-icon"><FontAwesomeIcon className=' w-[1em]  ' icon={faTwitter}/></div>
        <div className="TestimonialHover-icon"><FontAwesomeIcon className='w-[1em]   ' icon={faFacebookF}/></div>
        <div className="TestimonialHover-icon"><FontAwesomeIcon className=' w-[1em]  ' icon={faLinkedin}/></div>
    </main>
  )
}

export default TestimonialHover
