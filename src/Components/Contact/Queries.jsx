import React from 'react'
import { InfoProp } from '../Home/Info'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'
import Button from '../Shared/Button'

const Queries = () => {
  return (
    <main className='ueries mt-[5em] mb-[3em] '>
        <div className="Queries-conternt text-center md:mb-[3em] ">  
      <p className="Experience-prehead bg-[#FDAC53] m-auto text-[#fff] text-[15px] w-[8em] mb-[1em] 
         md:text-[13px] ">
            GET IN TOUCH</p>
            <h1 className="Experience-head text-[1.7rem]  m-auto w-[70%] mb-[0.75em] text-[#131313] font-[900] leading-7
           md:text-[2rem]   lg:text-[2.5rem] font-[900] ">
          Contact For Any Queries</h1>
          </div>
          <section className="section queries mx-[2em] md:flex lg:mx-[4.5em] ">
          <article className='Info md:mr-[2em] mb-[3em] flex-[40%]  '>
            <InfoProp head="Our Office" content="123 Street, New York, USA " 
            icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faMapMarkerAlt}/>}
            />
            <InfoProp head="Email Us" content="nfo@example.com"
                icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faEnvelopeOpen}/>} />
            <InfoProp head="Call us" content="+012 345 6789"
                icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faPhone}/>} />  
    </article>
      <article className="query-form  mb-[5em] md:ml-0 flex-[60%] mt-[-2em] md:mt-[0em]   ">
        <section className="section-forms md:flex "> 
            <div className="form-div flex-[50%] md:mr-[0.25em]  ">
            <input type="text" className="form-input" placeholder='Your Nmae' />    
            </div>
            <div className="form-div flex-[50%] md:ml-[0.25em] ">
            <input type="text" className="form-input" placeholder='Your Email'  />
            </div>
        </section> 
        <div className="form-div">
        <input type="text" className="form-input" placeholder='Subject'  />
        </div>
        <div className="form-div">
       <textarea name="messages" rows={5} className="form-input" placeholder='Message' ></textarea>
        </div>
        <div className="provider-btn">
            <Button style={{marginTop:"0em", padding:"0.75em 2em", color:"#495057",fontSize:"1em"  }} 
            name="Send Message "/>  </div>
      </article>
      </section>
    </main>
  )
}

export default Queries
