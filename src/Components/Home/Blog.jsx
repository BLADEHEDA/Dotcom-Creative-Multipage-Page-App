import React from 'react'
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import user1 from "../images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark} from '@fortawesome/free-solid-svg-icons'
// import { faBookBookmark } from "@fortawesome/free-regular-svg-icons"




const BlogProp=(props)=>{
    return(
        <main className="Blogprop mb-[3em]">
            <section className="blogprop-first relative">
               <div className="blog-pic-div">
               <img src={props.src }alt="Blog-image" className="Blog-picdiv" />
                </div>
                <div className="blog-date-div bg-[#FDAC53] w-[80px] py-[0.75em] absolute bottom-[0em] ">
                    <h1 className="blog-date-mnt text-center mb-[-10px] ">JAN</h1>
                    <h1 className="blog-date-fig text-center text-[1.65em] font-[900] ">01</h1>
                </div>
            </section>
            <section className="blogprop-section px-[2em] mt-[1.5em] ">
                <div className="blogprop-flexed flex justify-between mb-[1em] ">
                    <div className="blogprop-item w-[15%]">
                        <img src={user1} alt="user-img " className="blogprop-icon rounded-[50%] " />
                    </div>
                    <div className="blogprop-item mt-[.5em]"> 
                   <a href="/"><li className="blogprop-link list-none text-[#6c757d]">John Doe</li></a> 
                    </div>
                    <div className="blogprop-item mt-[.5em]">
                    <FontAwesomeIcon className='h-[1.5em]  text-[#FDAC53] bg-[#fff] ' icon={faBookBookmark}/>
                    </div>
                    <div className="blogprop-item mt-[.5em]">
                    <a href="/"><li className="blogprop-link list-none text-[#6c757d] ">Web Design</li></a> 
                    </div>
                </div>
                <div className="blogprop-content">
                  <a className='link-blogprop font-[700] text-[1.25em] leading-6 ' href="/">Kasd tempor diam sea
                   justo dolor kasd amet dolor
                   labore amet clita est diam dolor</a>
                </div>
            </section>
        </main>
    )
}

const Blog = () => {
  return (
    <main className='Blog  mx-[2em] mb-[4em] '>
        <section className="Blog-top text-center">
        <p className="Blog-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[6em] mb-[1em] m-[auto]
        md:text-[13px]  ">OUR Blog</p>
      <h1 className="Blog-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7
      md:text-[2em] font-[800] ">
      Latest From  Blog</h1>
      </section>
      <section className="blog-second">
        <BlogProp src={blog1}/>
        <BlogProp src={blog2}/>
      </section>
      
    </main>
  )
}

export default Blog
