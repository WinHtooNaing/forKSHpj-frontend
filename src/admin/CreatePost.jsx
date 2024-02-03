import React from 'react'

const CreatePost = () => {
  return (
    <>
      <div class="container"  style={{marginLeft : "20%",paddingTop : "5%"}}>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Create a post</h5>
              <div class="card">
                <div class="card-body">
                  <form action="AddPost" method="post" enctype="multipart/form-data">
                    <div class="mb-3">
                      <label for="title" class="form-label">Title</label>
                      <input type="text" class="form-control"  name="title" required/>
                      
                    </div>
                    <div class="mb-3">
                      <label for="description" class="form-label">Description</label>
                      
                      <textarea class="form-control"  name="description"  required></textarea>
                    </div>
                    <div class="mb-3">
                      <label class="form-label" for="image">Image</label>
                      <input type="file" class="form-control"  name="image"  required/>
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
