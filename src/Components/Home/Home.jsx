import React from 'react'
import Blog from './Blog'
import Experience from './Experience'
import Info from './Info'
import Mainbar from './Mainbar'
import Pricing from './Pricing'
import Provider from './Provider'
import Services from './Services'
import Team from './Team'
import Testimonial from './Testimonial'
import TestimonialHover from './TestimonialHover'


const Home = () => {
  return (
    <div>
      <Mainbar />
      <Provider />
      <Info />
      <Services />
      <Experience />
      <Team />
      <Pricing />
      <Testimonial />
      <Blog/>
    </div>
  )
}

export default Home
