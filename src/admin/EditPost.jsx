import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const EditPost = () => {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(true);
//     const [post, setPost] = useState([]);
//     const [errorInput, setError] = useState([]);
//     const {id} = useParams();
//     useEffect(() => {
//         axios.get(`/api/edit-post/${id}`).then( res => {
//             if(res.data.status === 200)
//             {
//                 setPost(res.data.student);
//                 setLoading(false);
//             }
//             else if(res.data.status === 404)
//             {
//                 swal("Error",res.data.message,"error");
//                 navigate('/admin/post');
//             }
//         });

//     }, [id,navigate]);

//     const handleInput = (e) => {
//         e.persist();
//         setPost({...post, [e.target.name]: e.target.value });
//     }

//     const updatePost = (e) => {
//         e.preventDefault();
        
//         //const student_id = props.match.params.id;
//         // const data = studentInput;
//         const data = {
//             title: setPost.title,
//             image: setPost.image,
//             description: setPost.description,
//         }

//         axios.put(`/api/update-post/${id}`, data).then(res=>{
//             if(res.data.status === 200)
//             {
//                 swal("Success",res.data.message,"success");
//                 setError([]);
//                 navigate('/admin/post');
//             }
//             else if(res.data.status === 422)
//             {
//                 swal("All fields are mandetory","","error");
//                 setError(res.data.validationErrors);
//             }
//             else if(res.data.status === 404)
//             {
//                 swal("Error",res.data.message,"error");
//                 navigate('/admin/post');
//             }
//         });
//     }


//   if(loading)
//   {
//       return <h4>Loading Edit Student Data...</h4>
//   }
  
  
    
  return (
    <>
      <div class="container"  style={{marginLeft : "20%",paddingTop : "5%"}}>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Create a post</h5>
              <div class="card">
                <div class="card-body">
                  <form >
                    <div class="mb-3">
                      <label htmlFor="title" class="form-label">Title</label>
                      <input type="text" class="form-control"  name="title" required />
                      
                    </div>
                    <div class="mb-3">
                      <label htmlFor="description" class="form-label">Description</label>
                      
                      <textarea class="form-control"  name="description"  required ></textarea>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" htmlFor="image">Image</label>
                      <input type="text" class="form-control"  name="image"  required />
                    </div>
                    <input type="submit" class="btn btn-primary" value="Create"/>
                  </form>
                </div>
              </div>
              </div>
              </div>
              </div>
              </div>
    </>
  )
}

export default EditPost
