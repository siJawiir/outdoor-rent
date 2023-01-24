import React, { useState } from "react";
import { addCustomer } from "../services/customersApi";

function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");

  const submitHandler = () => {
    const obj = { name, email, address, phone, image };
    addCustomer(obj);
  };

  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Add a new Customer</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                />
                <label for="floatingInput">Address</label>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  +62
                </span>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    type="number"
                    class="form-control input-group"
                    id="floatingInput"
                    placeholder="Phone Number"
                  />
              </div>

              {/* <div className="mb-3">
                <input
                  onChange={(e) => setImage(e.target.value)}
                  type="file"
                  className="form-control"
                  id="customFile"
                />
              </div> */}
              <div className="bg-color-primary rounded-pill text-center">
                <button
                  onClick={() => submitHandler()}
                  className="btn btn-md text-white"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerForm;
