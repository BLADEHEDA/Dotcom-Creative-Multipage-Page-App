import React from 'react'
import Info from './Info'
import Mainbar from './Mainbar'
import Provider from './Provider'


const Home = () => {
  return (
    <div>
      <Mainbar/>
      <Provider/>
      <Info/>
    </div>
  )
}

export default Home
