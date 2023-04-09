import React from 'react'
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import user1 from "../images/user.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookBookmark,faSearch,faAngleRight} from '@fortawesome/free-solid-svg-icons'
// import { BlogProp } from '../Home/Blog'
import { BlogCategories, BlogPosrs, Cloud, Image } from './BlogCont'

const BlogProp=(props)=>{
    return(
        <main className="Blogprop1 mb-[2em]  ">
            <section className="blogprop-first relative">
               <div className="blog-pic-div">
               <img src={props.src }alt="Blog-image" className="Blog-picdiv" />
                </div>
                <div className="blog-date-div bg-[#FDAC53] w-[80px] py-[0.75em] absolute bottom-[0em] ">
                    <h1 className="blog-date-mnt text-center mb-[-10px] ">JAN</h1>
                    <h1 className="blog-date-fig text-center text-[1.65em] font-[900] ">01</h1>
                </div>
            </section>
            <section className="blogprop-section  mt-[1.5em] ">
                <div className="blogprop-flexed flex justify-between mb-[1em] md:justify-start ">
                    <div className="blogprop-item w-[15%] md:w-[7%] mr-0  md:mr-[1em] ">
                        <img src={user1} alt="user-img " className="blogprop-icon rounded-[50%] " />
                    </div>
                    <div className="blogprop-item mt-[.5em] mr-0 md:mr-[1em]"> 
                   <a href="/"><li className="blogprop-link list-none text-[#6c757d]">John Doe</li></a> 
                    </div>
                    <div className="blogprop-item mt-[.5em] mr-0 md:mr-[1em]">
                    <FontAwesomeIcon className='h-[1.5em]  text-[#FDAC53] bg-[#fff] ' icon={faBookBookmark}/>
                    </div>
                    <div className="blogprop-item mt-[.5em]">
                    <a href="/"><li className="blogprop-link list-none text-[#6c757d] ">Web Design</li></a> 
                    </div>
                </div>
                <div className="blogprop-content">
                  <a className='link-blogprop font-[700] text-[1.55em] leading-6 
                 lg:text-[1.9em]  lg:leading-8 lg:font-[600]' href="/">Kasd tempor diam sea
                   justo dolor kasd amet dolor
                   labore amet clita est diam dolor</a>
                </div>
            </section>
        </main>
    )
}

const BlogDet = () => {
  return (
 
       <main className='BlogDet mx-[1em] mt-[5em] md:mx-[2.5em] md:mt-[7em] block 
    lg:mx-[5em] lg:flex '>
      <section className="BlogCont-left lg:flex-[65%] lg:mr-[0.75em] ">
        <div className="Blogcont-top ">
        <BlogProp src={blog1}/>
        <p className="blogcont-content mt-[-1em] mb-[1em] text-[#4A4A4A] text-[1.0em] ">
        Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut 
        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet 
        amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at 
        at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidun
        t at et aliquyam ut et vero clita.
         Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.
        </p>
        <p className="blogcont-content  mb-[1em] text-[#4A4A4A] text-[1.0em]">
        Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam
         dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam 
         stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero 
         sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita
         lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.
        </p>
        <h1 className="blogcon2-head font-[700] text-[1.55em] mb-[1em] ">Est dolor lorem et ea</h1>
        <div className="blogcont2-img0div">
            <img src={blog1} alt="blog-2" className="blogcont2-img" />
        </div>
        <p className="blogcont2-content text-[#4A4A4A] text-[1.05em] mb-[2em] ">
        Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor 
        invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam 
        lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum 
        consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam 
        kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt 
        sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor
         amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore
          sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem 
          clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam 
          justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren 
          ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est
           accusam labore eirmod vero et voluptua. Amet labore clita
         duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.
        </p>
        <h1 className="blogcon2-head font-[700] text-[1.55em] mb-[1em] ">Est dolor lorem et ea</h1>
        <div className="blogcont2-img0div">
            <img src={blog2} alt="blog-2" className="blogcont2-img2" />
        </div>
        <p className="blogcont2-content text-[#4A4A4A] text-[1.05em] mb-[2em] ">
        Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt
         at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed.
          Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur,
           sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata 
           ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum 
           sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero 
           ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet 
           lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur 
           et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam 
           et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, 
        2elitr aliquyam takimata sea kasd dolores
         diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no.
        </p>
        </div>
        <di className="Blogcont-bottom">
        </di>
      </section>
      <section className="BlogCont-right lg:flex-[35%] ml-[0.75em]   ">
      <article className="Blogcont-search flex mb-[1em] md:mb-[2em] ">
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
      <div className="blog-image  ">
      <Image src={blog1} />
      </div>
        <aricle className="blogcloud-div mb-[1em] md:hidden  lg:block ">  
          <h1 className="blogcloud-head text-[1.5em] font-[400] mt-[2em]  ">Tag Cloud</h1>
              <div className="blog-cloud-div">  
            <div className="Blog-Clouud mt-[0.5em] flex  ">
            <Cloud content="Design" />
            <Cloud content="Development" />
            <Cloud content="Marketing" />
            </div>
              <div className="Blog-Clouud mb-[2.5em] mt-[0.5em] flex ">
              <Cloud content="SEO" />
              <Cloud content="Writing" />
              <Cloud content="Consulting" />
              </div>
              </div>
          </aricle>
          <aricle className="blogcloud-div hidden mb-[2em] md:block lg:hidden ">  
          <h1 className="blogcloud-head text-[1.5em] font-[400] mt-[2em] mb-[1em] ">Tag Cloud</h1>
              <div className="blog-cloud-div md:flex">          
            <Cloud content="Design" />
            <Cloud content="Development" />
            <Cloud content="Marketing" />
              <Cloud content="SEO" />
              <Cloud content="Writing" />
              <Cloud content="Consulting" />
              </div>
          </aricle>
          <article className="blog-imag  mb-[2.5em] ">
        <Image src={blog2} />
        </article>
        <article className="plain-text mb-[5em]">
        <h1 className="blogcloud-head text-[1.5em] font-[400] mt-[2em] mb-[1em] ">Plain Text</h1>
        <p className="plain-text-div p-[1em] text-[#4A4A4A] text-[1em] leading-2  ">Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est 
        aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. 
        Magna sanctus sed eos tempor rebum dolor, tempor clita sit et elitr eirmod.</p>
        </article>
      </section>

    </main>
  )
}

export default BlogDet
