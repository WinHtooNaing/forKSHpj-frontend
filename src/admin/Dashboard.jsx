import React from "react";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <>
      <div class="container" style={{marginLeft : "20%",paddingTop : "5%"}}>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title fw-semibold mb-4">Change Your Password</h5>
              <div class="card">
                <div class="card-body">
                  <form action="change-password" method="post">
                    <div class="mb-3">
                      <label for="title" class="form-label">
                        Current Password
                      </label>

                      <input
                        type="text"
                        class="form-control"
                        id="current-password"
                        name="current-password"
                        value="phamana252313"
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
