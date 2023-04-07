import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight,faMapMarkerAlt,faEnvelopeOpen,faPhone} from '@fortawesome/free-solid-svg-icons'
import {faFacebookF,faTwitter,faLinkedin,faInstagram } from "@fortawesome/free-brands-svg-icons"

const FooterProp=(props)=>{
    return(
        <main className="FooterProp mb-[0.5em]">
            <footer className="footer-two-flexed flex">
            <div className="footer-two-left mr-[7px] ">
            <FontAwesomeIcon className='h-[1em]   text-[#FDAC53]' icon={faAngleRight}/>
            </div>
            <div className="footer-two-right">{props.text} </div>
            </footer> 
        </main>
    )
}
const FooterContact=(props)=>{
    return(
        <main className=' FooterContac'> 
      <div className=' FooterContac flex mb-[1em]'>
        <div className=" FooterContac-left mr-[0.5em]"> {props.icon}</div>
        <div className=" FooterContac-right">
            <p className="content-body ] ">{props.content }</p>
        </div>
      </div>
        </main>
    )
}

const Footer = () => {
  return (
    <main className='Footer'>
        <section className="footer-top bg-[#131313] pt-[5em] pb-[3em] px-[1em] text-slate-100 
     md:pt-[4em] md:px-[3em] md:pb-[1em] lg:flex ">   
     <footer className="footer-one flex-[25%]">
        <h1 className="mobile-na font-[900] text-[2.1em] text-slate-100 md:text-[2.7em] ">
                <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
        </h1>
    <p className="footer-one-content  md:w-[90%]  ">Volup amet magna clita tempor. Tempor sea eos vero ipsum.
     Lorem lorem sit sed elitr sed kasd et</p>
     <div className="icons-div flex mt-[1em]">
        <div className="footer-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faTwitter}/></div>
        <div className="footer-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faFacebookF}/></div>
        <div className="footer-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faLinkedin}/></div>
        <div className="footer-icon"><FontAwesomeIcon className='h-[1em] text-[#FDAC53]  ' icon={faInstagram }/></div>
     </div>
     </footer>
     <footer className="footer-two mb-[3em] flex-[25%] ">
        <h2 className="footer-head color-logo text-[1.2em] font-[700] mb-[1em] mt-[2em] 
        md:mt-[0em]">Quick Links</h2>
        <FooterProp text="Home" />l
        <FooterProp text="About Us" />
        <FooterProp text="Services" />
        <FooterProp text="Pricing" />
        <FooterProp text="Contact Us" />
     </footer>

     <footer className="footer-three mb-[3em] flex-[25%] ">
     <h2 className="footer-head color-logo text-[1.2em] font-[700] mb-[1em] mt-[2em]
     md:mt-[0em] ">Popular Links</h2>
        <FooterProp text="Home" />
        <FooterProp text="About Us" />
        <FooterProp text="Services" />
        <FooterProp text="Pricing" />
        <FooterProp text="Contact Us" />
     </footer>
     <footer className="footer-four flex-[25%]">
     <h2 className="footer-three-head color-logo text-[1.2em] font-[700] mb-[1em] md:mb-[0em] ">Get In Touch</h2>
        <p className="footer-three-content mb-[1em] lg:w-[90%] ">Dolor clita stet nonumy clita diam vero, 
        et et ipsum diam labore</p>
        <FooterContact
         icon={ <FontAwesomeIcon className='h-[1.1em] text-[#FDAC53]' icon={faMapMarkerAlt}/>}
        content="123 Street, New York, USA"/>
        <FooterContact 
          icon={ <FontAwesomeIcon className='h-[1.1em] text-[#FDAC53]' icon={faPhone}/>} 
        content="+012 345 67890"/>
        <FooterContact 
          icon={ <FontAwesomeIcon className='h-[1.1em] text-[#FDAC53]  ' icon={faEnvelopeOpen}/>} 
        content="info@example.com"/>
    </footer> 
    </section>  
    <section className="footer-bottome">
        <p className="footer-boottom-content text-center py-[1em] ">
        ©<a href='/' className="color-logo">Designo-multipage</a> . All Rights Reserved. Designed by
         <a href="https://github.com/BLADEHEDA" className="color-logo">BLADE HEDA </a> 
        </p>
    </section>
    </main>
  )
}

export default Footer
