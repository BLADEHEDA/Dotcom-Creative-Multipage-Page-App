import React, { useState } from 'react'
import Button from '../Shared/Button'
import "./Home.css"
import {Data} from "./Data"

const MainbarProp= (props)=>{
  return (  
    <div className="main-bar-prop">
    <h1 className="main-title text-white mr-[1em] text-[1.9em] leading-9 font-[800]"> {props.title} </h1>
      </div>
  )

}

const Mainbar = () => {
  // the state for the hero chenging content 
  const [index, setIndex] = useState(0);
const changeIndex = (ind)=>{
  setIndex(ind);
}
// change the color of the buttons onclick 

const [color,setColor]=useState(false)
const presentColor= color?"light":"white";
const [color1,setColor1]=useState(false)
const presentColor1= color1?"light":"white";
const [color2,setColor2]=useState(false)
const presentColor2= color2?"light":"white";

  return (
    <div className={`mainbar-div pt-[1.5em] px-[1em] flex lg:pt-[5em] `}>
<div className="mainbar-left mt-[1.5em] mr-[1em] ">
  <div onClick={() => {
       setColor(true);
       setColor1(false);
       setColor2(false);
    changeIndex(0);
  }} className={`mainbar-dot  h-[1em] w-[1em] rounded-[50%] mt-[1em] ${presentColor}`}></div>
  <div   onClick={() => {
     setColor(false);
     setColor1(true);
     setColor2(false);
    changeIndex(1)
  }}className={`mainbar-dot  h-[1em] w-[1em] rounded-[50%] mt-[1em] ${presentColor1}`}></div>
  <div   onClick={() => {
       setColor(false);
       setColor1(false);
       setColor2(true);
    changeIndex(2)
  }}className={`mainbar-dot  h-[1em] w-[1em] rounded-[50%] mt-[1em] ${presentColor2}`}></div>
</div>
<div className="mainbar-right"> 
<h1 className="main-name text-white text-[1em] mb-2 font-[400] ">CREATIVE AGENCY</h1>
<div> <MainbarProp title={Data[index].text} /></div>

<div className="mainbar-btn"> <Button style={{marginTop:"1em"}} name="Learn More "/>  </div>
</div>
      
    </div>
  )
}

export default Mainbar
