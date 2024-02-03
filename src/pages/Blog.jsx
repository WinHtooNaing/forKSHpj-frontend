import React from 'react'
import DATA from '../Data.js'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'
const Blog = () => {
  return (
    <>
       <div class="Lastestnews blog" style={{background: "none"}}>
	<div class="container">
	 <div class="row">
   {DATA.map((item)=>(
    <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
    <div class="news-box" key={item.id}>
        <figure><Link to={`/blog/${item.id}`} ><img style={{height:"200px"}}  src={item.image} alt="img" /></Link></figure>
        <h3>{item.title}</h3>
        <p>{item.description.substring(0,100)}...</p>
    </div>
</div>
   ))}
        
                
          
       
        </div>
        </div>
        </div>

        <Footer/>

    </>
  )
}

export default Blog
