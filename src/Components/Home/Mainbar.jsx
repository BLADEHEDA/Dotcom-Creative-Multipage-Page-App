import React from 'react'
import Button from '../Shared/Button'
import "./Home.css"

const MainbarProp= (props)=>{
  return (  
    <div className="main-bar-prop">
    <h1 className="main-title text-white mr-[1em] text-[1.9em] leading-9 font-[800]"> {props.title} </h1>
      </div>
  )

}

const Mainbar = () => {
  return (
    <div className='mainbar-div pt-[1.5em] px-[1em] flex'>
<div className="mainbar-left mt-[1.5em] mr-[1em] ">
  <div className="mainbar-dot bg-white h-[1em] w-[1em] rounded-[50%] mt-[1em]"></div>
  <div className="mainbar-dot bg-white h-[1em] w-[1em] rounded-[50%] mt-[1em] "></div>
  <div className="mainbar-dot bg-white h-[1em] w-[1em] rounded-[50%] mt-[1em]"></div>
</div>
<div className="mainbar-right"> 
<h1 className="main-name text-white text-[1em] mb-2 font-[400] ">CREATIVE AGENCY</h1>
<div> <MainbarProp title=" Creative Services For Brands Grow" /></div>

<div className="mainbar-btn"> <Button style={{marginTop:"1em"}} name="Learn More "/>  </div>
</div>
      
    </div>
  )
}

export default Mainbar
