import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/free-solid-svg-icons'

const FooterProp=(props)=>{
    return(
        <main className="FooterProp">
            <footer className="footer-two-flexed">
            <div className="footer-two-left">
            <FontAwesomeIcon className='h-[1em]   text-[#FDAC53] bg-[#fff] ' icon={faAngleRight}/>
            </div>
            <div className="footer-two-right">{props.text} </div>
            </footer> 
        </main>
    )
}

const Footer = () => {
  return (
    <main className='Footer'>
     <footer className="footer-one">
    <h1 className="footer-one-head">DotCom</h1>
    <p className="footer0one-content">Volup amet magna clita tempor. Tempor sea eos vero ipsum.
     Lorem lorem sit sed elitr sed kasd et</p>
     </footer>
     <footer className="footer-two">
        <h2 className="footer-head">Quick Links</h2>

     </footer>
Home
About Us
Services
Pricing
Contact Us
Popular Links
Home
About Us
Services
Pricing
Contact Us
       
 
     <footer className="footer-three">
     </footer>
     <footer className="footer-four">
     <h2 className="footer-three-head">Get In Touch</h2>
        <p className="footer-three-content">Dolor clita stet nonumy clita diam vero, et et ipsum diam labore</p>
    </footer>   






123 Street, New York, USA

+012 345 67890

info@example.com
    </main>
  )
}

export default Footer
