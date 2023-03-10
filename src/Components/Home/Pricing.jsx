import React from 'react'
import Button from '../Shared/Button'

const PriceProp = (props) => {
    return (
      <main className='PriceProp text-center pb-[2em] mb-[3em]'>
        <section className="price-div bg-[#FDAC53] pt-[0.65em]  pb-[0.75em] ">
            <div className="price-type font-[400] text-[1.5em] ">{props.type}  </div>
            <div className="price mb-[1em]">
                <span className='currency text-[1em]'>$</span>
                <span className='currency font-[700] text-[2.25em] '> {props.price}</span>    
                <span className="rate text-[1em]">/ Mo</span> </div>
        </section>
        <section className="services text-[ #4A4A4A] ">
            <div className="service mt-[1em]  ">HTML5 & CSS3</div>
            <div className="service mt-[1em] ">Bootstrap 4</div>
            <div className="service mt-[1em] ">Responsive Layout</div>
            <div className="service mt-[1em] ">Compatible With All Browsers</div>   
        </section>
        <div className="Team-ntn"><Button style={{marginTop:"1em" }} name="Order Now"/>  </div>
      </main>
    )
  }

const Pricing = () => {
  return (
    <main className='Pricing mx-[2em] my-[5em]'>
        <section className="pricing-top">
        <PriceProp price="49" type="Basic"   />
        <PriceProp price="99" type="Premium"   />
        </section>
      <section className="pricing-botom">
      <p className="pricing-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[9em] mb-[1em] ">OUR PRICING PLAN</p>
      <h1 className="pricing-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
      We Offer Affordable and Flexible Packages</h1>
      <p className="pricing-content text-[1.3em] mb-[1.25em] text-[#6c757d] leading-6">
      Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem. Est magna sea clita diam tempor elitr</p>
      <h3 className="pricing-head text-[1.25rem] mb-[0.35em] text-[#131313] font-[900] leading-7">
      Need A Custom Package?</h3>
       <div className="pricing-ntn"><Button style={{marginTop:"1em" }} name="Contact Now"/>  </div>
      </section>
    </main>
  )
}

export default Pricing
