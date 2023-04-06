import React from 'react'
import Button from '../Shared/Button'
import { PriceProp } from '../Home/Pricing'

const Package = () => {
  return (
    <main className='package mx-[2em] my-[5em] text-center lg:mx-[5em]'>
         <section className="pricing-botom  flex justify-center ">
         <section className="pricing-botom lg:w-[50%]  lg:ml-[1em] ">
      <p className="pricing-prehead bg-[#FDAC53] text-[#fff] text-[15px] m-[auto] w-[9em] mb-[1em] 
      md:text-[13px]">OUR PRICING PLAN</p>
      <h1 className="package-head text-[2rem] mb-[0.75em] text-[#131313] font-[900] leading-7
      md:text-[2.4em] md:leading-9 lg:text-[2.5em] lg:leading-[1.1em] ">
      We Offer Affordable and Flexible Packages</h1>
      <p className="pricing-content text-[1.3em] mb-[1.25em] text-[#6c757d] leading-6
     md:text-[1.5em] lg:text-[1.75] lg:leading-8 ">
      Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam, est erat lorem. Est magna sea clita diam tempor elitr</p>
      <h3 className="pricing-head text-[1.25rem]  mt-0 mb-[0.35em] text-[#131313] font-[900] leading-7
       lg:font-[300] lg:text-[1.3em] lg:mt-[-0.5em]">
      Need A Custom Package?</h3>
       <div className="pricing-ntn "><Button style={{marginTop:"1em" }} name="Contact Now"/>  </div>
      </section>
      </section>
      <section className="package-top  mt-[2em] lg:mr-[1em] md:mb-[-2em] ">
        <PriceProp price="49" type="Basic"   />
        <PriceProp price="99" type="Premium"/>
        <PriceProp price="149" type="Business"/>
        </section>
    </main>
  )
}

export default Package
