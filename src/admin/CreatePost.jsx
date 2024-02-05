import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';
const CreatePost = () => {
  const navigate = useNavigate();
    const [postInput, setPostInput] = useState({
        title: '',
        image: '',
        description: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setPostInput({...postInput, [e.target.name]: e.target.value })
    }

    const savePost = (e) => {
      e.preventDefault();
      const data = {
          title: postInput.title,
          image: postInput.image,
          description: postInput.description,
      };
  
      console.log(data);
  
      axios.post(`/api/add-post`, data).then(res => {
          if (res.data.status === 200) {
              swal("Success!", res.data.message, "success");
              setPostInput({
                  title: '',
                  image: '',
                  description: '',
                  error_list: [],
              });
              navigate('/admin/post');
          } else if (res.data.status === 422) {
              setPostInput({ ...postInput, error_list: res.data.validate_err });
          }
      });
  }
  
    
  return (
    <>
      <div class="container"  style={{marginLeft : "20%",paddingTop : "5%"}}>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Create a post</h5>
              <div class="card">
                <div class="card-body">
                  <form onSubmit={savePost}>
                    <div class="mb-3">
                      <label htmlFor="title" class="form-label">Title</label>
                      <input type="text" class="form-control"  name="title" required  onChange={handleInput} value={postInput.title}/>
                      
                    </div>
                    <div class="mb-3">
                      <label htmlFor="description" class="form-label">Description</label>
                      
                      <textarea class="form-control"  name="description"  required onChange={handleInput} value={postInput.description}></textarea>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" htmlFor="image">Image</label>
                      <input type="text" class="form-control"  name="image"  required onChange={handleInput} value={postInput.image}/>
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

export default CreatePost
