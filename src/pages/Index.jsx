import React from 'react'
import '../index.css'
import Footer from './Footer'

const Index = () => {
  return (


    <>
   
      <section class="header-container">
        <div class="header-container1">
            <h1>KNOWLEDGE <br/> <strong class="black_bold">FOR </strong><br/>
                <strong class="yellow_bold">WEB DEV </strong></h1>
            <p class="p">Welcome to our knowledge-sharing blog</p><br/>
            <a href="blog" class="btn btn-primary button">See more Blogs</a>
        </div>
        <div class="header-container2">
            <img class="img" src="user/images/photo.jpg" alt="First slide"/>
        </div>
      </section>
      <div class="whyschose">
         <div class="container">

            <div class="row">
               <div class="col-md-7 offset-md-3">
                  <div class="title">
                     <h2>What <strong class="black">is your target!</strong></h2>
                     <span>For Beginner Web Developers </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="choose_bg">
         <div class="container">
            <div class="white_bg">
            <div class="row justify-content-center">
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img style={{height: "150px"}} className='frontend-image' src="user/images/frontend.jpg" alt='img'/></i>
                     <h3>Frontend</h3>
                     <p>Step by step guide to becoming a modern frontend developer in 2024</p>
                     <div class="col-md-12">
                  <a href="/frontend" class="read-more">Read More</a>
               </div>
                  </div>
               </dir>
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img style={{height: "150px"}} className='backend-image' src="user/images/backend.jpg" alt='img'/></i>
                     
                     <h3>Backend</h3>
                     <p>Step by step guide to becoming a modern backend developer in 2024</p>
                     <div class="col-md-12">
                  <a href="/backend" class="read-more">Read More</a>
               </div>
                  </div>
               </dir>
               <dir class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                  <div class="for_box">
                     <i><img style={{height: "150px"}} className='fullstack-image' src="user/images/fullstack.jpg" alt='img'/></i>
                     <h3>Full Stack</h3>
                     <p>Step by step guide to becoming a modern full stack developer in 2024</p>
                     <div class="col-md-12">
                  <a href="/fullstack" class="read-more">Read More</a>
               </div>
                  </div>
               </dir>
                              
            </div>
         </div>
       </div>
      </div>

      <div class="service">
         <div class="container">
            <div class="row">
               <div class="col-md-8 offset-md-2">
                  <div class="title">
                     <h2>Our  <strong class="black">Contributions</strong></h2>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="service-box">
                     
                     <h3>General</h3>
                     <p>Basic topics related to web development</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="service-box">
                     
                     <h3>Server</h3>
                     <p>Basic content related to web server </p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="service-box">
                    
                     <h3>OOP</h3>
                     <p>Object oriented programming content that even a developer must know</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="service-box">
                     
                     <h3>Design Pattern</h3>
                     <p>Content related to design pattern</p>
                  </div>
               </div>
               
            </div>
            <div class="btn btn-primary " >
                  <li><a className='seeallblog' href="blog">See all blogs</a></li>
               </div>
         </div>
      </div>
      <br/><br/>
      <Footer/>
      

	
    </>
  )
}

export default Index
