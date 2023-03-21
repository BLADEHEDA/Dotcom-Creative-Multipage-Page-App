import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

  return (
    <section className='Navvar'>
        <navbar className="mobile-nav flex justify-between bg-[#131313] py-[0.3em] px-[1em] lg:hidden">  
        <nav className="mobile-nav-left font-[900] text-[2.1em] text-slate-100">
             <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
          </nav>

        <nav className="mobile-nav-right">
           <button className="nav hamburger-menu  mt-[12px] ">
            <FontAwesomeIcon className='h-[1.75em] text-slate-300' icon={faBars }/></button>  
        </nav>
       </navbar>
       <ul className="navlinks text-[#fff] font-[400] bg-[#131313]
            text-[1em] lg:hidden ">
              <li className="navlink">Home </li>
              <li className="navlink">About</li>
              <li className="navlink">Services</li>
              <li className="navlink">Pricing</li>
              <li className="navlink">Pages</li>
              <li className="navlink">Contact</li>
            </ul> 
    </section>
  )
}

export default NavBar
