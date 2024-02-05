import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
const Post = () => {
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

    const deleteStudent = (e, id) => {
        e.preventDefault();
        
        const thisClicked = e.currentTarget;
        thisClicked.innerText = "Deleting";

        axios.delete(`/api/delete-post/${id}`).then(res=>{
            if(res.data.status === 200)
            {
                swal("Deleted!",res.data.message,"success");
                thisClicked.closest("tr").remove();
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                thisClicked.innerText = "Delete";
            }
        });
    }

    if(loading)
    {
        return <h4>Loading Student Data...</h4>
    }
    else
    {
        var student_HTMLTABLE = "";
       
        student_HTMLTABLE = posts.map( (item, index) => {
            return (
              <tr key={index}>
              <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{item.id}</h6></td>
              <td class="border-bottom-0">
                  <h6 class="fw-semibold mb-1">{item.title.substring(0,20)}</h6>                       
              </td>
              <td class="border-bottom-0">
                <p class="mb-0 fw-normal">{item.description.substring(0,20)} ....</p>
              </td>
              <td class="border-bottom-0">
             
                <p class="mb-0 fw-normal">{item.created_at}</p>
              </td>
              <td class="border-bottom-0">
                  <div style={{display: "flex",flexDirection: "row"}}>
                  <Link to={`/admin/edit-post/${item.id}`} class="btn btn-warning" style={{marginRight : "5px"}}>Edit</Link>
                
                
                <button type="button" onClick={(e) => deleteStudent(e, item.id)} class="btn btn-danger">Delete</button>
                
                  
                  </div>                         
              </td>
              
            </tr> 
            );
        });
    }







    
  return (
    <>
       <div class="container" style={{marginLeft : "20%",paddingTop : "5%"}}>
       
       <div class="row">
         
         <div class="col-lg-12 d-flex align-items-stretch">
           <div class="card w-100">
             <div class="card-body p-4">
               <h5 class="card-title fw-semibold mb-4">Posts</h5>
               <div class="table-responsive">
               <a href="/admin/create" class="btn btn-success">Create a Post</a>
                 <table class="table text-nowrap mb-0 align-middle">
                   <thead class="text-dark fs-4">
                     <tr>
                       <th class="border-bottom-0">
                         <h6 class="fw-semibold mb-0">No</h6>
                       </th>
                       <th class="border-bottom-0">
                         <h6 class="fw-semibold mb-0">title</h6>
                       </th>
                       <th class="border-bottom-0">
                         <h6 class="fw-semibold mb-0">Description</h6>
                       </th>
                       <th class="border-bottom-0">
                         <h6 class="fw-semibold mb-0">Created_at</h6>
                       </th>
                       <th class="border-bottom-0">
                         <h6 class="fw-semibold mb-0">Action</h6>
                       </th>
                     </tr>
                   </thead>
                   <tbody>
                     
                    {
                      student_HTMLTABLE
                    }
                     
                   
    
                     
                   </tbody>
                 </table>
               </div>
             </div>
           </div>
         </div>
         </div>
         </div>
         <Footer/>
       
    </>
  )
}

export default Post
