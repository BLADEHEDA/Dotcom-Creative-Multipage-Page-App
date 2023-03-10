import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptopCode,faCode,faEnvelopeOpen,faChartLine} from '@fortawesome/free-solid-svg-icons'
import Button from '../Shared/Button'

const ServicesProp = (props) => {
    return (
      <div className='ServicesProp mb-[2.5em]'>
              <div className='ServicesProp flex  '>
        <div className="ServicesProp-left mt-[0.65em] mr-[1em]"> {props.icon}</div>
        <div className="ServicesProp-right">
            <p className="content-head text-[#131313] font-[500] text-[1.4em] ">{props.head }</p>
            <p className="content-body text-[#4A4A4A] ">{props.content }</p>
            <p className="content-read text-[#FDAC53] text-[1.2em]  mt-[1em]">Read More</p>
        </div>
      </div>
      </div>
    )
  }

const Services = () => {
  return (
    <main className='Services mx-[2em] mt-[7em]'>
       <p className="services-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[7em] mb-[1em] ">WHAT WE DO</p>
       <h1 className="services-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
       We Offer Creative Services</h1>
       <p className="provider-content text-[1.5em] mb-[0.5em] text-[#6c757d] leading-6">Lorem ut kasd dolores elitr sed est duo ea ipsum justo diam,
        est erat lorem. Est magna sea clita diam tempor elitr </p>
        <div className="provider-btn"><Button style={{marginTop:"1em" }} name="Discover More"/>  </div>

     <section className="services-courses mt-[2.5em]">
     <ServicesProp head="Web Design" 
     content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='h-[3.2em] text-[#FDAC53] bg-[#fff] ' icon={faLaptopCode}/>}
      />
       <ServicesProp head="Development" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='h-[3.2em]  text-[#FDAC53] bg-[#fff] ' icon={faCode}/>}
      />
       <ServicesProp head="Marketing" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='h-[3.2em]  text-[#FDAC53] bg-[#fff] ' icon={faEnvelopeOpen}/>}
      />
       <ServicesProp head="Strategy" 
       content="Et kasd justo clita amet kasd, vero amet vero eos kasd diam justo, ipsum diam sed elitr erat" 
      icon={ <FontAwesomeIcon className='h-[3.2em]  text-[#FDAC53] bg-[#fff] ' icon={faChartLine}/>}
      />
     </section>
      
    </main>
  )
}

export default Services