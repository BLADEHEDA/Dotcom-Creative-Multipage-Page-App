import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker,faEnvelopeOpen,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const InfoProp = (props) => {
    return (
      <div className='InfoProp'>
        <div className="infoprop-left"> {props.icon}</div>
        <div className="infoprop-right">
            <p className="content-head">{props.head }</p>
            <p className="content-body">{props.content }</p>
        </div>
      </div>
    )  
  }

const Info = () => {
  return (
    <div className='Info'>
      <InfoProp head="Our Office" content="123 Street, New York, USA " 
      />
      <InfoProp head="Email Us" content="nfo@example.com" />
      <InfoProp head="OCall us" content="+012 345 6789"  />
    </div>
  )
}

export default Info
