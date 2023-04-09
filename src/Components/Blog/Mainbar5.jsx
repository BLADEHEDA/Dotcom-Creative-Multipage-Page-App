import React from 'react'

const MainProp = (props) => {
    return (
      <main className='MainProp text-[white]   '>
          <h1 className="mainprop-title text-[2.2em] md:text-[3em] lg:text-[3.5em] font-[900]  ">{props.content} </h1>
          <div className="mainprop-options">
              <div className="mainprop-content text-[1em] font-[300]  text-center ">
                  <apan className="mainprop-cont">Home / </apan>
                  <apan className="mainprop-cont">{props.content1}</apan>
              </div>
          </div>
        
      </main>
    )
  }
const Mainbar5 = () => {
  return (
    <main className='mainbar5'>
                  <div className='Mainbar4 '>
              <section className={`Mainbar-divx  pt-[1.5em] px-[1em] flex md:pt-[7em] lg:pt-[10em] pb-[5em] `}>
        <div className="mainbar-di z-50  m-[auto]  " > 
        <MainProp content="Blog Detail" content1="Detail" />
        </div>
                               
    </section>
    </div>
      
    </main>
  )
}

export default Mainbar5
