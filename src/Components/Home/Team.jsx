import React from 'react'
import Button from '../Shared/Button'
import team1 from "../images/team-1.jpg"
import team2 from "../images/team-2.jpg"
import team3 from "../images/team-3.jpg"
import team4 from "../images/team-4.jpg"
import "./Home.css"


const TeamProp = (props) => {
    return (
      <main className='Teamprop  mt-[5em] text-center'>
        <div className="Teamprop-img-div"> <img src={props.src} alt="Expert pic" className="teamprop-pic" /> </div>
        <div className="teamprop-name font-[600] text-[1.3em] mt-[1.2em] ">{props.name} </div>
        <div className="teamprop-profession mt-[0.5em] text-[#131313] ">  {props.profession} </div>
      </main>
    )
  }

const Team = () => {
  return (
    <main className='Team mx-[2em] my-[5em]'>
      <p className="Team-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[8em] mb-[1em] ">MEET THE TEAM</p>
      <h1 className="Team-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
      Meet Experts of Behind Work</h1>
      <p className="Team-content text-[1.3em] mb-[0.5em] text-[#6c757d] leading-6">
       Eirmod diam magna sed sea rebum, elitr diam dolor lorem ipsum, ipsum stet magna ea diam vero stet vero</p>
       <div className="Team-ntn"><Button style={{marginTop:"1em" }} name="Meet All Experts"/>  </div>
       <section className="team-pro">
       <TeamProp src={team1} name="John Doe" profession="CEO,Founder" />
       <TeamProp src={team2} name="Kate Wilson" profession="Designer" />
       <TeamProp src={team3} name="John Brown" profession="Designer" />
       <TeamProp src={team4} name="Paul Watson" profession="Marketer" />
       </section>
    </main>
  )
}

export default Team
