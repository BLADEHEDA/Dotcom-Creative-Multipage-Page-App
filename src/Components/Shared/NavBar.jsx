import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const NavBar = () => {
  // hide and show nav
  const[showNav, setShowanav]=useState();
  const displayNav= showNav?"show":"hide";
  const toggleNav=()=>{
    setShowanav(!showNav);
  }
  // hide and show pages dropdown
  const[showDrop, setShowDrop]=useState();
  const displayDrop= showDrop?"show":"hide";
  const toggleDrop=()=>{
    setShowDrop(!showDrop);
  }

  return (
    <section className='Navvar z-[9999]'>
        <navbar className=" mobile-nav flex justify-between bg-[#131313] py-[0.3em] px-[1em] lg:hidden">  
        <nav className="mobile-nav-left font-[900] text-[2.1em] text-slate-100">
             <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
          </nav>

        <nav className="mobile-nav-right">
           <button onClick={toggleNav} className="nav hamburger-menu  mt-[12px] ">
            <FontAwesomeIcon className='h-[1.75em] text-slate-300' icon={faBars }/>
            </button>  
        </nav>
       </navbar>
       <ul className={`navlinks text-[#fff] font-[400] bg-[#131313] text-[15px] 
            md:text-[1.1em] lg:hidden ${displayNav}`}>
              <li className="navlink">Home </li>
              <li className="navlink">About</li>
              <li className="navlink">Services</li>
              <li className="navlink">Pricing</li>
              <div onClick={toggleDrop} className="navlink flex">
                <ul className="pages-div mr-[2px] ">Pages</ul>
                <div><FontAwesomeIcon className='h-[1em] text-slate-300' icon={faCaretDown}/> </div> 
                </div>
              <div className={`pages-ul bg-[#fff] text-[#4A4A4A] py-[0.75em] pl-[1em] mx-[1em] ${displayDrop} `} > 
                <li className="navlink-pages">Blog Grid</li>
                <li className="navlink-pages">Blog Detail</li>
              </div>

              <li className="navlink">Contact</li>
            </ul> 

            <section className="desktop-nav flex  py-[0.3em] px-[1em] hidden 
            lg:block absolute    z-[9999] ">
              <article className='desktopnav-div flex justify-between ' >
            <nav className="desktop-nav-left font-[900] text-[3.3em] pl-[1.3em] text-slate-100  ">
             <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
          </nav>
          <nav className="desktop-nav-right "> 
          <ul className={`navlinkx text-[#fff] font-[400]  text-[15px] 
            md:text-[1em] flex`}>
              <li className="navlink">Home </li>
              <li className="navlink">About</li>
              <li className="navlink">Services</li>
              <li className="navlink">Pricing</li>
              <div onClick={toggleDrop} className="navlink flex">
                <ul className="pages-div mr-[2px] ">Pages</ul>
                <div><FontAwesomeIcon className='h-[1em] text-slate-300' icon={faCaretDown}/> </div> 
                </div>
              <div className={`pages-ul bg-[#fff] text-[#4A4A4A] py-[0.75em] pl-[1em] mx-[1em] ${displayDrop} `} > 
                <li className="navlink-pages">Blog Grid</li>
                <li className="navlink-pages">Blog Detail</li>
              </div>

              <li className="navlink">Contact</li>
            </ul> 
            </nav>
            </article>
            </section>
    </section>
  )
}

export default NavBar
