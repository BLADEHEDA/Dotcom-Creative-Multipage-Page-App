import React, { useState ,useEffect } from 'react'
import Button from '../Shared/Button'
import "./About.css"
import MainProp from '../Shared/MainProp'
  
const Mainbar = () => {
  return (
    <main className='Mainbar'>
      <section className={`Mainbar-divx  pt-[1.5em] px-[1em] flex md:pt-[7em] lg:pt-[10em] pb-[5em] `}>
<div className="mainbar-di z-50  m-[auto] " > 
<MainProp content="About" />
</div>
                               
    </section>
    </main>
  )
}

export default Mainbar
