import React from 'react'

const MainProp = (props) => {
  return (
    <main className='MainProp text-[white]   '>
        <h1 className="mainprop-title text-[2.2em] md:text-[2.8em] lg:text-[3.5em] font-[900]  ">{props.content} </h1>
        <div className="mainprop-options">
            <div className="mainprop-content text-[1em] font-[300]  text-center ">
                <apan className="mainprop-cont">Home / </apan>
                <apan className="mainprop-cont">{props.content}</apan>
            </div>
        </div>
      
    </main>
  )
}

export default MainProp
