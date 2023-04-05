import React from 'react'
import Button from '../Shared/Button'
import "./Home.css"
// subjected to changes
// import React, { Component } from "react";
import Carousel from 'better-react-carousel'

import testimonial1 from "../images/testimonial-1.jpg"
import testimonial2 from "../images/testimonial-2.jpg"
import testimonial3 from "../images/testimonial-3.jpg"
import testimonial4 from "../images/testimonial-4.jpg"
import testimonial5 from "../images/testimonial-5.jpg"

const TestimonialProp =(props)=>{
  return(
    <main className="TestimonialProp mb-[2em] ">
       <div className="speech-bubble">
          Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod 
          clita lorem. Dolores tempor voluptua ipsum sanctus clita
       </div>
       <div className="testimony-info-div flex">
        <div className="testimony-img mr-[1.5em] w-[28%] ">
           <img src={props.img} alt="testimony-img " className="testimony-pic rounded-[50%]" />
           </div>
        <div className="testimony-info mt-[1em]">
          <p className="testimony-name mb-[3px] font-[700] ">Client Name</p>
          <p className="testimony-profession">Profession</p>
        </div>
       </div>
    </main>
  )

}

const Testimonial = () => {
  return (
    <main className='Testimonial mx-[2em] mb-[4em] lg:flex '>
        <section className="Testimonial-top mb-[3em] flex-[50%] ">  
     <p className="Testimonial-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[9em] mb-[1em] 
     md:text-[13px] ">WHAT CLIENTS SAY</p>
      <h1 className="Testimonial-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7
      md:text-[2.1em] ">
      Clients Say About Our Services</h1>
      <p className="Testimonial-content text-[1.3em] mb-[0.25em] text-[#6c757d] leading-6">
      Lorem ut kasd elitr sed est duo ea ipsum justo diam, est erat lorem clita diam elitr</p>
       <div className="Testimonial-ntn"><Button style={{marginTop:"1em" }} name="Submit Review"/>  </div>
       </section>
       {/* <section className="Testimonial-bottom "> 
      <TestimonialProp img={testimonial1}/>
      <TestimonialProp img={testimonial2}/>
      <TestimonialProp img={testimonial3}/>
      <TestimonialProp img={testimonial4}/>
      <TestimonialProp img={testimonial5}/>
        </section> */}
  <section className="Testimonial-bottom flex-[50%]  ">   
  <Carousel Carousel  cols={2} rows={1} gap={10} loop >
      <Carousel.Item>
      <TestimonialProp img={testimonial1}/> 
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialProp img={testimonial2}/>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialProp img={testimonial3}/>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialProp img={testimonial4}/>
      </Carousel.Item>
      <Carousel.Item>
      <TestimonialProp img={testimonial5}/>
      </Carousel.Item>
    </Carousel>
    </section> 

    </main>
  )
}

export default Testimonial
