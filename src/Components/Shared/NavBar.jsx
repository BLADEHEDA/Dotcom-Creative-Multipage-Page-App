import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const NavBar = () => {

  return (
    <section className='Navvar'>
        <navbar className="mobile-nav flex"> 
        <nav className="mobile-nav-left">
             <span className="color-logo">D</span>ot<span className="color-logo">C</span>om
          </nav>

        <nav className="mobile-nav-right">
           <div className="nav hamburger-menu"><FontAwesomeIcon icon={faBars }/></div>  
        </nav>
        </navbar>
 
    </section>
  )
}

export default NavBar
