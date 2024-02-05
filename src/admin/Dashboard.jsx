import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {

      axios.get(`/api/users`).then(res=>{
          if(res.status === 200)
          {
              setPosts(res.data.posts)

          }
      });

  }, []);

  // const changeHandler = (event)=>{
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   const newPassword = formData.get('new-password');
  //   const comfirmNewPassword = formData.get('re-new-password');
    
  //   if(newPassword !== comfirmNewPassword){
  //     swal("Error",  "something went wrong");
  //   }else{
  //     axios.put(`/api/update-user`, { password: newPassword }).then((res) => {
  //       if (res.data.status === 200) {
  //         swal("Success", res.data.message, "success");
  //         navigate('/login');
  //       } else {
  //         swal("Error", res.data.message, "error");
  //       }
  //     });
  //   }
  // }
  return (
    <>
      <div class="container" style={{marginLeft : "20%",paddingTop : "5%"}}>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Change Your Password</h5>
              <div class="card">
                <div class="card-body">
                  <form >
                    <div class="mb-3">
                      <label for="title" class="form-label">
                        Current Password
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        id="current-password"
                        name="current-password"
                        value={posts.name}
                        disabled
                      />
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label">
                        New Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="new-password"
                        name="new-password"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="title" class="form-label">
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="re-new-password"
                        name="re-new-password"
                        required
                      />
                    </div>

                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dashboard;
