import React from "react";


function LoginForm() {
  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card position-relative d-flex">
        <div className="row g-0">
          <div className="col-md-4">
            <div class="form-floating m-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating m-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>
          </div>
          <div className="col-md-8">
            <img
              src=""
              alt="Card image cap"
              className="img-fluid rounded-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
