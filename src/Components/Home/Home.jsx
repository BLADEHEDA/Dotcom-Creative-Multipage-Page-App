import React from 'react'
import Experience from './Experience'
import Info from './Info'
import Mainbar from './Mainbar'
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
    </div>
  )
}

export default Home
