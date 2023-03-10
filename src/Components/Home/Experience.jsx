import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'
import Button from '../Shared/Button'

const Experience = () => {
  return (
    <main className='Experience mx-[2em] mt-[7em]'>
          <p className="Experience-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[8em] mb-[1em] ">WHY CHOOSE US</p>
          <h1 className="Experience-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
           25 Years Expereince</h1>
          <p className="Experience-content text-[1.3em] mb-[0.5em] text-[#6c757d] leading-6">
            Lorem ut kasd dolores elitr sed est duo ea
           ipsum justo diam, est erat lorem </p>
          
           <section className="options mt-[1.5em]">
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
          
    </main>
  )
}

export default Experience
