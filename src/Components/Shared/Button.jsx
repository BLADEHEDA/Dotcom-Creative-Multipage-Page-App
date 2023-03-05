import React from 'react'

const Button = (props) => {
  return (
    <div className='Button'>
      <button style={props.style} className="btn0">{props.name} </button>
    </div>
  )
}

export default Button
