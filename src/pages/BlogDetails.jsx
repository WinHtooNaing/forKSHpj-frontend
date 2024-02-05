import React, { useEffect, useState } from 'react'
import '../index.css'
import { useParams } from 'react-router-dom'
import Footer from './Footer.jsx'
import axios from 'axios'
const BlogDetails = () => {
  const {id} = useParams();

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

    

   





    const paramId = parseInt(id);
    const data = posts.find((item) => item.id === paramId);
    
    if(loading)
    {
        return <h4>Loading PostDetail Data...</h4>
    }
    else
    {
        var student_HTMLTABLE = "";
       
        student_HTMLTABLE = (
          <div class="page-container">
          <img class="image" src={data.image} alt='img'/>
            <h2 class="title">{data.title}</h2>
            <p class="time"><strong>Date : </strong>{data.created_at}</p>
            <p class="description"> {data.description}</p>
        </div>
        )
    }



    return (
    <>
      
           {student_HTMLTABLE}

            <Footer/>
    </>
  )
}

export default BlogDetails
