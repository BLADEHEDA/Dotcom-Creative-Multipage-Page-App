// import React, { useEffect, useState } from 'react'
import Button from '../Shared/Button'
import team1 from "../images/team-1.jpg"
import team2 from "../images/team-2.jpg"
import team3 from "../images/team-3.jpg"
import team4 from "../images/team-4.jpg"
import "./Home.css"
import TestimonialHover from './TestimonialHover'

// subjected to changes
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";


const TeamProp = (props) => {
    return (
      <main className='Teamprop  mt-[5em] text-center relative  '>
        <div className="Teamprop-img-div"> <img src={props.src} alt={props.name} className="teamprop-pic" /> </div>
        <div className="teamprop-name font-[600] text-[1.3em] mt-[1.2em] ">{props.name} </div>
        <div className="teamprop-profession mt-[0.5em] text-[#131313] ">  {props.profession} </div>
        <div className="teamprop-hover-div absolute inset-0 m-[1em]">
        <TestimonialHover/>
        </div>
       
      </main>
    )
  }
const Team = () => {
    // subjected to changes
const people =[
  {
  id:1,
  src: team1,
  name:"John Doe", 
  profession:"CEO,Founder"
  },
  {
    id:2,
    src: team2,
    name:"Kate Wilson", 
    profession:"Designer"
    },
  {
  id:3,
  src: team3,
  name:"John Brown", 
  profession:"Designer"
  },
  {
    id:4,
    src: team4,
    name:"Paul Watson", 
    profession:"Marketerr"
    },
  ]
  // subjected to changes 
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src={team1} alt='pics'  onDragStart={handleDragStart} role="presentation" />,
    <img src={team2} alt='pics'  onDragStart={handleDragStart} role="presentation" />,
    <img src={team3} alt='pics'  onDragStart={handleDragStart} role="presentation" />,
  ];
  return (
    <main className='Team-main- '>
        <main className='Team mx-[2em] my-[5em] lg:flex lg:mx-[5em]  '> 
       <section className="team-left flex-[35%]">
        <p className="Team-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[8em] mb-[1em]
        md:text-[13px] ">MEET THE TEAM</p>
        <h1 className="Team-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7
        md:text-[2em] font-[800]  lg:text-[2.5em] leading-[1em]   ">
        Meet Experts of Behind Work</h1>
        <p className="Team-content text-[1.3em] mb-[0.5em] text-[#6c757d] leading-6
        text-[1.4em] lg:text-[1.55em] ">
        Eirmod diam magna sed sea rebum, elitr diam dolor lorem ipsum, ipsum stet magna ea diam vero stet vero</p>
        <div className="Team-ntn"><Button style={{marginTop:"1em" }} name="Meet All Experts"/>  </div>
       </section> 
       {/* <section className="team-right  flex-[65%] lg:flex lg:mt-[-4.5em] "> */}

        {/* {    
        people.map((person)=>{
          const {id,src,name,profession} =person;
          return(
            <section key={id} className="team-prop">
            <TeamProp src={src} 
            name={name}
            profession= {profession} 
             />
            </section>
          )
        })
        
        } */}

 {/* below is a sample implementation for the react multicarouselslider  */}
 <section className="mobile-carousel mt-[2wm] md:hidden">  
       <Carousel className='Team-mobile  '
        showArrows={false}
         infiniteLoop={true}
         showThumbs={false}
         showStatus={false}
         autoPlay={true}
         interval={6100}
       >
         <TeamProp src={people[0].src} name={people[0].name} profession= {people[0].profession}/>  
          <TeamProp src={people[1].src}name={people[1].name} profession= {people[1].profession}/> 
         <TeamProp src={people[2].src} name={people[2].name} profession= {people[2].profession}/> 
        <TeamProp src={people[3].src} name={people[3].name} profession= {people[3].profession}/>      
      </Carousel>;
      </section>

   </main> 
    </main>
  )
}

export default Team
