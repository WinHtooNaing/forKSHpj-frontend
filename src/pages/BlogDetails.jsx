import React from 'react'
import DATA from '../Data.js'
import '../index.css'
import { useParams } from 'react-router-dom'
import Footer from './Footer.jsx'
const BlogDetails = () => {
    const {id} = useParams();
    const paramId = parseInt(id);
    const data = DATA.find(item => item.id === paramId);
    const currentDate = new Date();

  // Format the date as per your requirement
  const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;

    return (
    <>
      
            <div class="page-container">
            	<img class="image" src={data.image} alt='img'/>
                <h2 class="title">{data.title}</h2>
                <p class="time"><strong>Date : </strong>{formattedDate}</p>
                <p class="description"> {data.description}</p>
            </div>

            <Footer/>
    </>
  )
}

export default BlogDetails
