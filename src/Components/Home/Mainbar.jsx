import React, { useState ,useEffect } from 'react'
import Button from '../Shared/Button'
import "./Home.css"
import {Data} from "./Data"

const MainbarProp= (props)=>{
  return (  
    <div className="main-bar-prop">
    <h1 className="main-title text-white mr-[1em] text-[1.7em] leading-9 font-[800] 
     md:text-[3.3em] leading-[1.1em] lg:text-[4.5em]  "> {props.title} </h1>
      </div>
  )

}

const Mainbar = () => {
  // the state for the hero chenging content 
  // const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
const changeIndex = (ind)=>{
  setIndex(ind);
}
// write the logiv to change the texts automaitcallly after a certain time interval 
useEffect(() => {
  const timer = setTimeout(() => {
    setIndex((index + 1) % Data.length);
  }, 7000);

  return () => clearTimeout(timer);
}, [index]);

// change the color of the buttons onclick 

const [color,setColor]=useState(false)
const presentColor= color?"light":"white";
const [color1,setColor1]=useState(false)
const presentColor1= color1?"light":"white";
const [color2,setColor2]=useState(false)
const presentColor2= color2?"light":"white";

  return (
    <div className={`mainbar-div pt-[1.5em] px-[1em] flex md:pt-[7em] lg:pt-[15em] `}>
<div className="mainbar-left mt-[2.5em] mr-[1em] md:mt-[3.5em] ">
  <div onClick={() => {
       setColor(true);
       setColor1(false);
       setColor2(false);
    changeIndex(0);
  }} className={`mainbar-dot 
  ${presentColor}`}></div>
  <div   onClick={() => {
     setColor(false);
     setColor1(true);
     setColor2(false);
    changeIndex(1)
  }}className={`mainbar-dot
  ${presentColor1}`}></div>
  <div   onClick={() => {
       setColor(false);
       setColor1(false);
       setColor2(true);
    changeIndex(2)             
  }}className={`mainbar-dot 
  ${presentColor2}`}></div>
</div>
<div className="mainbar-right" > 
<h1 className="main-name text-white text-[1em] mb-2 font-[400] md:font-[300] 
md:text-[1.25em] lg:text-[1.3em] ">CREATIVE AGENCY</h1>
<div className='mainbar-prop-div w-full md:w-[95%]  lg:w-[80%]'> <MainbarProp title={Data[index].text} /></div>

<div className="mainbar-btn md:mt-[1em] "> <Button style={{marginTop:"1em"}} name="Learn More "/>  </div>
</div>
                               
    </div>
  )
}

export default Mainbar
