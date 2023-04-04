import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Button from '../Shared/Button'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const ExperienceProp = (props) => {
  const[count,setCount]=useState(false)
  return ( 
    <ScrollTrigger onEnter={()=>setCount(true) } onExit={()=>setCount(false) }  > 
    <div className='ExperienceProp  my-[2.5em]  text-center '>
          <p className="content-head text-[#131313] font-[600] text-[2.5em] text-[#FDAC53] 
           md:text-[3em] md:font-[900] lg:text-[4em] ">
          {/* here is the use of the counterup feature */}
           {count && <CountUp start={props.start} end={props.end} duration={5} delay={1} />}
            </p>
            
          <p className="content-body  mb-[1em] font-[600] text-[1.25em] ">{props.content }</p>
    </div>
    </ScrollTrigger>
  )  
}

const Experience = () => {
  return (
    <main className='Experience mx-[2em] mt-[7em] lg:flex lg:mx-[5em]  '>
      <section className="experience-left  lg:flex-[50%] "> 
          <p className="Experience-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[8em] mb-[1em] 
         md:text-[13px] ">
            WHY CHOOSE US</p>
          <h1 className="Experience-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7
          lg:text-[2.5rem] font-[900] ">
           25 Years Expereince</h1>
          <p className="Experience-content text-[1.3em] mb-[0.5em] text-[#6c757d] leading-6 lg:text-[1.5em] ">
            Lorem ut kasd dolores elitr sed est duo ea
           ipsum justo diam, est erat lorem </p>
          
           <section className="options mt-[1.5em] ">
            <div className="option flex mb-[0.5em] ">
              <div className="option-left">
                <FontAwesomeIcon className='h-[1em]   text-[#FDAC53] bg-[#fff] ' icon={faAngleRight}/></div>
              <div className="option-right ml-[0.5em]">Lorem ut kasd dolores elitr</div>
             </div>
             <div className="option flex"> 
              <div className="option-left mb-[0.5em]">
                <FontAwesomeIcon className='h-[1em]   text-[#FDAC53] bg-[#fff] ' icon={faAngleRight}/></div>
              <div className="option-right ml-[0.5em]">Jsto dolor lorem ipsum</div>
              </div>
              <div className="option flex">
              <div className="option-left mb-[0.5em]">
                <FontAwesomeIcon className='h-[1em]  text-[#FDAC53] bg-[#fff] ' icon={faAngleRight}/></div>
              <div className="option-right ml-[0.5em]">Diama ipsum est dolor</div>
            </div>
            </section>
           <div className="experience-ntn"><Button style={{marginTop:"1em" }} name="Learn More"/>  </div>
           </section>
           <section className="experience-right mt-0 lg:flex-[50%] lg:mt-[-3em] "> 
            <section className="figures">
              <ExperienceProp start="0" end="25" content="Years Expereince" />
              <ExperienceProp start="0" end="225"  content="SKilled Experts" />
              <ExperienceProp start="0" end="1050" content="Happy Clients" />
              <ExperienceProp start="0" end="2500" content="Complete Projects" />
            </section>
           </section>
    </main>
  )
}

export default Experience
