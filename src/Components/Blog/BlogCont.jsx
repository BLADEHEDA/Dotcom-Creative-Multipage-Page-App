import React from 'react'
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import user1 from "../images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark,faSearch} from '@fortawesome/free-solid-svg-icons'
import { BlogProp } from '../Home/Blog'

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
                <li className="page-num"><a href="#" class="previous">&laquo; </a></li>    
                <li className="page-num bg-[#FDAC53] text-[#fff] "> <a href="/" className="page ">1</a></li>
                <li className="page-num"> <a href="/" className="page">2</a></li>
                <li className="page-num"> <a href="/" className="page">3</a></li>
                <li className="page-num"> <a href="#" class="next"> &raquo;</a></li>
            </ul>
        </div>
      </section>
      <section className="BlogCont-right">
      <a rticle className="Blogcont-search flex mb-[1em]">
        <div className="serch-div flex-[87%]  ">
           <input type="text" placeholder='Keyword' className="search-blog py-[0.4em] pl-[0.5em] w-full " /></div>
        <div className="serch-div px-[0.5em] pt-[0.5em] flex-[13%] ">
        <FontAwesomeIcon className=' text-[1.1em] text-[#FDAC53] bg-[#fff] ' icon={faSearch}/>
        </div>
       
      </a>    
      </section>
    </main>
  )
}

export default BlogCont
