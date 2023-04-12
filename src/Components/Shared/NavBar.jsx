import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars,faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faListAlt } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BrowserRouter,  Routes,Route,Link} from "react-router-dom";
const NavBar = () => {
  // hide and show nav 
  const[showNav, setShowanav]=useState();
  const displayNav= showNav?"show":"hide";
  const toggleNav=()=>{
    setShowanav(!showNav);
  }
  // closw Nav
const closeNave=()=>{
  setShowanav()
}

  // hide and show pages dropdown
  const[showDrop, setShowDrop]=useState();
  const displayDrop= showDrop?"show":"hide";
  const toggleDrop=()=>{
    setShowDrop(!showDrop);
  }
  //handle the hoveeffect 
  const [showPage , setshowPage] = useState();
  const handleshowPage=()=>{
    setShowDrop(true);
  }
  const handleoffshowPage=()=>{
    setShowDrop(false);
  }


  return (
    <section className='Navbar'>

        <navbar className=" mobile-nav flex justify-between bg-[#131313] py-[0.3em] px-[1em] lg:hidden md:px-[1.2em] ">  
        <Link onClick={closeNave}  to="/" ><nav className="mobile-nav-left font-[900] cursor-pointer text-[2.1em] text-slate-100 md:text-[2.7em] ">
             <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
          </nav>  
          </Link>   

        <nav className="mobile-nav-right">
           <button onClick={toggleNav} className="nav hamburger-menu  mt-[12px] md:mt-[20px] ">
            <FontAwesomeIcon className='h-[1.75em] text-slate-300' icon={faBars }/>
            </button>  
        </nav>
       </navbar>
       <ul className={`navlinks text-[#fff] font-[400] bg-[#131313] text-[15px]  my-[-0.375em] z-[9999]
            md:text-[1.1em] md:mt-[-0.5em] lg:hidden ${displayNav}`}>
            <Link  onClick={closeNave} to="/" ><li className="navlink">Home </li>  </Link>  
            <Link  onClick={closeNave} to="About" > <li className="navlink">About</li>  </Link> 
            <Link  onClick={closeNave} to="Services" ><li className="navlink">Services</li>  </Link>
   
              
            <Link  onClick={closeNave} to="Price" ><li className="navlink">Pricing</li></Link>  
              <div onClick={toggleDrop} className="navlink flex">
                <ul className="pages-div mr-[2px] ">Pages</ul>
                <div><FontAwesomeIcon className='h-[1em] text-slate-300' icon={faCaretDown}/> </div> 
                </div>
              <div onClick={ handleoffshowPage} className={`pages-ul bg-[#fff] text-[#4A4A4A] py-[0.75em] pl-[1em]
               mx-[1em] ${displayDrop} `} > 
              <Link  onClick={closeNave} to="Blog" > <li className="navlink-pages">Blog Grid</li></Link>
              <Link  onClick={closeNave} to="Blog1" ><li className="navlink-pages">Blog Detail</li>  </Link>   
              </div>
              <Link  onClick={closeNave} to="Contact" > <li className="navlink">Contact</li>  </Link>
             
            </ul> 

            <section className="desktop-nav flex  py-[0.3em] px-[1em] hidden 
            lg:block absolute    z-[999] ">
              <article className='desktopnav-div flex justify-between ' >
          <Link  to="/"> 
          <nav className="desktop-nav-left cursor-pointer font-[900] text-[3.3em] pl-[1.3em] text-slate-100  ">
             <span className="color-logo  ">D</span>ot<span className="color-logo">C</span>om
          </nav>
          </Link> 
          <nav className="desktop-nav-right "> 
          <ul className={`navlinkx text-[#fff] font-[400]  text-[15px] 
            md:text-[1em] flex`}>
              <Link to="/" ><li className="navlink">Home </li>  </Link>  
            <Link to="About" > <li className="navlink">About</li>  </Link> 
            <Link to="Services" ><li className="navlink">Services</li>  </Link>
            <Link to="Price" ><li className="navlink">Pricing</li></Link> 
            
              <div onClick={toggleDrop} onMouseEnter={handleshowPage}  onMouseLeave={handleoffshowPage}  className="navlink flex">
                <ul className="pages-div mr-[2px] ">Pages</ul>
                <div><FontAwesomeIcon className='h-[1em] text-slate-300' icon={faCaretDown}/> </div> 
                </div>
              <div onMouseEnter={handleshowPage}  onMouseLeave={handleoffshowPage} onClick={ handleoffshowPage}
                className={`pages-ul bg-[#fff] text-[#4A4A4A] py-[0.75em] absolute 
               right-[5em] top-[4em]  pl-[1em] pr-[3em] mx-[1em] ${displayDrop} `} > 
              <Link to="Blog" > <li className="navlink-pages">Blog Grid</li></Link>
              <Link to="Blog1" ><li className="navlink-pages">Blog Detail</li>  </Link>
              </div>

              <Link to="Contact" > <li className="navlink">Contact</li>  </Link>
            </ul> 
            </nav>
            </article>
            </section>
    </section>
  )
}

export default NavBar
