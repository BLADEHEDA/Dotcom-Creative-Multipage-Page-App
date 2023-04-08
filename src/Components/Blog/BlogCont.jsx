import React from 'react'
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import user1 from "../images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark,faSearch,faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { BlogProp } from '../Home/Blog'

const BlogCategories=(props)=>{
  return(
<main className='category-div py-[0.65em] px-[1.1em] flex justify-between' >
  <section className="categoru-div-left  flex ">
    <div className="categories mr-[0.5em] "> 
    <FontAwesomeIcon className=' text-[0.9em] font-[400] text-[#FDAC53] bg-[#fff] ' icon={faAngleRight}/></div>
    <div className="categories text-[#FDAC53] font-[400] ">{props.content}</div>
  </section>

  <section className="categories-div-right text-[0.8em] h-[1.5em] font-[700] bg-[#FDAC53] px-[0.6em] "> {props.figure} </section>
</main>
  )
} 
const BlogPosrs=(props)=>{
  return(
    <main className="post-maindiv mb-[0.85em]"> 
<section className="post-div flex">
  <div className="post-div-left flex-[25%]"><img src={props.src} alt={props.name} className='h-full' /> </div>
  <div className="post-div-right flex-[75%] text-[1.1em] py-[0.75em] pr-[1em] pl-[1em] "> <a href="/"> {props.content} </a></div>
</section>
    </main>
  )
}

const BlogCont = () => {
  return (
    <main className='BlogCont mx-[1em] mt-[5em] '>
      <section className="BlogCont-left">
        <div className="Blogcont-top">
        <BlogProp src={blog1}/>
        <BlogProp src={blog2}/>
        <BlogProp src={blog1}/>
        <BlogProp src={blog2}/>
        </div>
        <div className="Blogcont-bottom">
            <ul className="pagination flex justify-center mb-[3em] ">
                <li className="page-num"><a href="/" class="previous">&laquo; </a></li>    
                <li className="page-num bg-[#FDAC53] text-[#fff] "> <a href="/" className="page ">1</a></li>
                <li className="page-num"> <a href="/" className="page">2</a></li>
                <li className="page-num"> <a href="/" className="page">3</a></li>
                <li className="page-num"> <a href="/" class="next"> &raquo;</a></li>
            </ul>
        </div>
      </section>
      <section className="BlogCont-right">
      <article className="Blogcont-search flex mb-[1em]">
        <div className="serch-div flex-[87%]  ">
           <input type="text" placeholder='Keyword' className="search-blog py-[0.4em] pl-[0.5em] w-full " /></div>
        <div className="serch-div px-[0.5em] pt-[0.5em] flex-[13%] ">
        <FontAwesomeIcon className=' text-[1.1em] text-[#FDAC53] bg-[#fff] ' icon={faSearch}/>
        </div>
      </article>  
      <article className="blog-services mb-[2.5em]">
        <h1 className="blogservices-head text-[1.5em] font-[400] mb-[1em] ">  Categories </h1>
        <BlogCategories content="Web Design" figure="150" />
        <BlogCategories content="Web Development" figure="137" />
        <BlogCategories content="Online Marketing" figure="78" />
        <BlogCategories content="Keyword Search" figure="56" />
        <BlogCategories content="Emain Marketing" figure="90" />
        </article>  
      <article className="blog-posts mb-[2.5em] ">
        <h1 className="blog-posts-head text-[1.5em] font-[400] mb-[1em] ">Recent Post </h1>
        <BlogPosrs src={blog1} content="Lorem ipsum dolor sit amet consec adipis elit" />
        <BlogPosrs src={blog2} content="Lorem ipsum dolor sit amet consec adipis elit" />
        <BlogPosrs src={blog1} content="Lorem ipsum dolor sit amet consec adipis elit" />
        <BlogPosrs src={blog2} content="Lorem ipsum dolor sit amet consec adipis elit" />
        <BlogPosrs src={blog1} content="Lorem ipsum dolor sit amet consec adipis elit" />
      </article>

      </section>

    </main>
  )
}

export default BlogCont
