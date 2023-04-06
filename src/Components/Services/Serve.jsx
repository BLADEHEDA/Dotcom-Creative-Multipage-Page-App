import React from 'react'
import Button from '../Shared/Button'
import { ServicesProp } from '../Home/Services'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode,faCode,faEnvelopeOpen,faChartLine,faSearch, faPen} from '@fortawesome/free-solid-svg-icons'

const Serve = () => {
  return (
    <div className='Serve mx-[2em] lg:mx-[5em] '>
        <section className="serve-left text-center mt-[7em] lg:mt-[3.5em] mb-[3em] "> 
        <p className="serve-prehead bg-[#FDAC53] text-[#fff] m-[auto]  text-[14px] w-[7em] mb-[1em] ">WHAT WE DO</p>
        <h1 className="serve-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7
        lg:text-[2.5em] leading-[1em] ">
        We Offer Creative Services</h1>
        <p className="provider-content text-[1.3em] mb-[0.5em] text-[#6c757d] leading-6">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam,
          est erat lorem. Est magna sea clita diam tempor elitr </p>
          <div className="provider-btn"><Button style={{marginTop:"1em" }} name="Discover More"/>  </div>
        </section>
        <section className="serve-courses mt-[2.5em]   ">
     <ServicesProp head="Web Design" 
     content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons 
       text-[#FDAC53] bg-[#fff] ' icon={faLaptopCode}/>}
      />
       <ServicesProp head="Development" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons  
        text-[#FDAC53] bg-[#fff] ' icon={faCode}/>}
      />
       <ServicesProp head="Marketing" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons 
        text-[#FDAC53] bg-[#fff] ' icon={faEnvelopeOpen}/>}
      />
       <ServicesProp head="Strategy" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons 
       text-[#FDAC53] bg-[#fff] ' icon={faChartLine}/>}
      />
           <ServicesProp head="SEO" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons 
       text-[#FDAC53] bg-[#fff] ' icon={faSearch}/>}
      />

      <ServicesProp head="Content Writing" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='serve-icons 
       text-[#FDAC53] bg-[#fff] ' icon={faPen}/>}
      />
     </section>
     
    </div>
  )
} 

export default Serve
