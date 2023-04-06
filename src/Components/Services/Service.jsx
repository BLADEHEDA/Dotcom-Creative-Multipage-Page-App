import React from 'react'
import Mainbar1 from './Mainbar1.jsx'
import Serve from './Serve.jsx'
import Testimonial from '../Home/Testimonial.jsx'
import NavBar from '../Shared/NavBar.jsx'
import "../Home/Home.css"

const Service = () => {
  return (
    <div className='Service'>
      {/* <NavBar/> */}
      <Mainbar1/>
      <Serve/>
      <Testimonial/>
    </div>
  )
}

export default Service
