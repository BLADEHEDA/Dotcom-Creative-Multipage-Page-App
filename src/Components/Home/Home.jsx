import React from 'react'
import Experience from './Experience'
import Info from './Info'
import Mainbar from './Mainbar'
import Provider from './Provider'
import Services from './Services'


const Home = () => {
  return (
    <div>
      <Mainbar/>
      <Provider/>
      <Info/>
      <Services/>
      <Experience/>
    </div>
  )
}

export default Home
