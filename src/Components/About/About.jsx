import React from 'react'
import Mainbar from './Mainbar'
// import Services from '../Home/Services'
import Provider from '../Home/Provider'
import Info from '../Home/Info'
import Experience from '../Home/Experience'
import Team from '../Home/Team'

const About = () => {
  return (
    <div>
      <Mainbar/>
      {/* <Services/> */}
      <Provider/>
      <Info/>
      <Experience/>
      <Team/>
    </div>
  )
}

export default About
