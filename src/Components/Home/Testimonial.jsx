import React from 'react'
import Button from '../Shared/Button'

const TestimonialProp =()=>{

}

const Testimonial = () => {
  return (
    <main className='Testimonial mx-[2em] '>
        <section className="Testimonial-top mb-[3em]">  
     <p className="Testimonial-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[9em] mb-[1em] ">WHAT CLIENTS SAY</p>
      <h1 className="Testimonial-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
      Clients Say About Our Services</h1>
      <p className="Testimonial-content text-[1.3em] mb-[0.25em] text-[#6c757d] leading-6">
      Lorem ut kasd elitr sed est duo ea ipsum justo diam, est erat lorem clita diam elitr</p>
       <div className="Testimonial-ntn"><Button style={{marginTop:"1em" }} name="Submit Review"/>  </div>
       </section>
       <section className="Testimonial-bottom">   </section>
    </main>
  )
}

export default Testimonial
