import React from 'react'
import Experience from './Experience'
import Info from './Info'
import Mainbar from './Mainbar'
import Pricing from './Pricing'
import Provider from './Provider'
import Services from './Services'
import Team from './Team'


const Home = () => {
  return (
    <div>
      <Mainbar/>
      <Provider/>
      <Info/>
      <Services/>
      <Experience/>
      <Team/>
      <Pricing/>
    </div>
  )
}

export default Home
