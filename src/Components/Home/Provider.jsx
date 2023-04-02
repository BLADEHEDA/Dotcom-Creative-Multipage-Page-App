import React from 'react'
import about from "../images/about.jpg"
import Button from '../Shared/Button'
import "./Home.css"

const Provider = () => {
  return (
    <main className='Provider mx-[2em] mb-[2em]  '>
      <section className="provide-div-">
     
      <div className="image-div mt-[6em] p-[1em] mb-[3em]">
         <img src={about} alt="about-img" className="img-content" /> </div>
         </section>
         <section className="provide-div-">
         <p className="prov-content bg-[#FDAC53] text-[#fff] text-[15px] w-[7em] mb-[1em] 
         md:text-[13px]">WHO WE ARE</p>
         <h1 className="provider-head text-[1.7rem] mb-[1em]  font-[900] leading-7
         md:text-[2.1rem] leading-10 mb-[0.4em] font-[900] 
         ">
            Most Effective Creative Service Provider For Companies</h1>
      <div className="provider-content leading-6">Eirmod est dolor nonumy sea amet dolore erat sit dolor
       et dolor vero. Tempor ipsum at justo amet at ipsum justo. Aiam kasd sea sit dolor
        duo elitr dolor amet, justo est ipsum amet dolor ut ipsum. Labore diam et nonumy 
        amet dolores. Volup sit labore dolores erat, magna justo sed lorem kasd ea dolor. Labore 
      sit clita invidunt, est dolores lorem sed ipsum kasd no amet ipsum.</div>
      <div className="provider-btn"><Button style={{marginTop:"1em" }} name="Read More "/>  </div>
      </section>
    </main>
  )
}

export default Provider
