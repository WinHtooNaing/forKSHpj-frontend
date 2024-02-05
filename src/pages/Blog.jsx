import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer.jsx'
import axios from 'axios'
const Blog = () => {
  const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {

        axios.get(`/api/posts`).then(res=>{
            if(res.status === 200)
            {
                setPosts(res.data.posts)
                setLoading(false);
            }
        });

    }, []);
    if(loading)
    {
        return <h4>Loading Post Data...</h4>
    }
    else
    {
        var student_HTMLTABLE = "";
       
        student_HTMLTABLE = posts.map( (item, index) => {
            return (
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 margin">
              <div class="news-box" key={item.id}>
                  <figure><Link to={`/blog/${item.id}`} ><img style={{height:"200px"}}  src={item.image} alt="img" /></Link></figure>
                  <h3>{item.title}</h3>
                  <p>{item.description.substring(0,100)}...</p>
              </div>
          </div>
            );
        });
    }
  return (
    <>
       <div class="Lastestnews blog" style={{background: "none"}}>
	<div class="container">
	 <div class="row">
   {student_HTMLTABLE}
        
                
          
       
        </div>
        </div>
        </div>

        <Footer/>

    </>
  )
}

export default Blog
