import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faEnvelopeOpen,faPhone } from '@fortawesome/free-solid-svg-icons'

export const InfoProp = (props) => {
    return ( 
      <div className='InfoProp flex mb-[1em] px-[1.5em] py-[1.5em] md:px-[0.5em] lg:px-[5.25em] '>
        <div className="infoprop-left mt-[0.65em] mr-[1em]"> {props.icon}</div>
        <div className="infoprop-right">
            <p className="content-head text-[#131313] font-[600] text-[1.3em] ">{props.head }</p>
            <p className="content-body text-[#4A4A4A] ">{props.content }</p>
        </div>
      </div>
    )  
  }

const Info = () => {
  return (
    <div className='Info mx-[2em] mb-[3em] md:flex justify-evenly lg:mx-[4.5em] justify-between '>
      <InfoProp head="Our Office" content="123 Street, New York, USA " 
      icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faMapMarkerAlt}/>}
      />
      <InfoProp head="Email Us" content="nfo@example.com"
        icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faEnvelopeOpen}/>} />
      <InfoProp head="Call us" content="+012 345 6789"
        icon={ <FontAwesomeIcon className='h-[2em] text-[#FDAC53] bg-[#fff] ' icon={faPhone}/>} />  
    </div>
  )
}

export default Info
