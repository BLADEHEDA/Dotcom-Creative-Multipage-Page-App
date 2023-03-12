import React from 'react'
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"

const BlogProp=(props)=>{
    return(
        <main className="Blogprop">
            <section className="blogprop-first relative">
               <div className="blog-pic-div">
               <img src={props.src }alt="Blog-image" className="Blog-picdiv" />
                </div>
                <div className="blog-date-div bg-[#FDAC53] w-[80px] py-[0.75em] absolute bottom-[0em] ">
                    <h1 className="blog-date-mnt text-center mb-[-10px] ">JAN</h1>
                    <h1 className="blog-date-fig text-center text-[1.65em] font-[900] ">01</h1>
                </div>
            </section>
            <section className="blogprop-section">
                <div className="blogprop-flexed">
                    <div className="blogprop-item">
                        <img src="" alt="" className="blogprop-icon" />
                    </div>
                    <div className="blogprop-item"></div>
                    <div className="blogprop-item"></div>
                    <div className="blogprop-item"></div>
                </div>
            </section>
        </main>
    )
}

const Blog = () => {
  return (
    <main className='Blog  mx-[2em] mb-[4em] '>
        <section className="Blog-top text-center">
        <p className="Blog-prehead bg-[#FDAC53] text-[#fff] text-[15px] w-[6em] mb-[1em] m-[auto] ">OUR Blog</p>
      <h1 className="Blog-head text-[1.7rem] mb-[0.75em] text-[#131313] font-[900] leading-7">
      Latest From  Blog</h1>
      </section>
      <section className="blog-second">
        <BlogProp src={blog1}/>
      </section>
      
    </main>
  )
}

export default Blog
