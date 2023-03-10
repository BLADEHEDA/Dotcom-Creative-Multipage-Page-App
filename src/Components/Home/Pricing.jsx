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
        <div className="pricing-top">
        <PriceProp price="49" type="Basic"   />
        <PriceProp price="99" type="Premium"   />
        </div>
      
    </main>
  )
}

export default Pricing
