import React from 'react'
import Footer from './Footer'
import DATA from '../Data.js'
const Post = () => {

    const currentDate = new Date();

    // Format the date as per your requirement
    const formattedDate = `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
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
                        DATA.map((item)=>(
<tr>
                       <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{item.id}</h6></td>
                       <td class="border-bottom-0">
                           <h6 class="fw-semibold mb-1">{item.title.substring(0,20)}</h6>                       
                       </td>
                       <td class="border-bottom-0">
                         <p class="mb-0 fw-normal">{item.description.substring(0,20)} ....</p>
                       </td>
                       <td class="border-bottom-0">
                      
                         <p class="mb-0 fw-normal">{formattedDate}</p>
                       </td>
                       <td class="border-bottom-0">
                           <div style={{display: "flex",flexDirection: "row"}}>
                           <a href="#" class="btn btn-warning" style={{marginRight : "5px"}}>Edit</a>
                         <form action="" method="post">
                         <input type="hidden" id="postIdToDelete" name="postIdToDelete" value=""/>
                         <button type="submit" class="btn btn-danger">Delete</button>
                         </form>
                           
                           </div>                         
                       </td>
                       
                     </tr> 
                        ))
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
