import React from 'react'
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
    </div>
  )
}

export default Home
