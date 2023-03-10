import React from 'react'
import Experience from './Experience'
import Info from './Info'
import Mainbar from './Mainbar'
import Pricing from './Pricing'
import Provider from './Provider'
import Services from './Services'
import Team from './Team'
import Testimonial from './Testimonial'


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
    </div>
  )
}

export default Home
