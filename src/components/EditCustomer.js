import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCustomer, getCustomerById } from "../services/customersApi";

function EditCustomer() {
  const navigation = useNavigate();
  const params = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    // image: "",
  });
  const [preview, setPreview] = useState("https://via.placeholder.com/150");

  function handleUpload(e) {
    let uploaded = e.target.files[0];
    setPreview(global.URL.createObjectURL(uploaded));
    // setForm({ ...form, image: uploaded });
  }

  const getCustomerInfo = () => {
    const { id } = params;
    getCustomerById(+id, (result) => {
      setForm({
        name: result.name,
        email: result.email,
        address: result.address,
        phone: result.phone,
        // image: result.image,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getCustomerInfo();
  }, []);

  const submitHandler = () => {
    editCustomer(+params.id, form);
    navigation("/customers");
  };

  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Edit Customer</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Email</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={form.address}
                  onChange={(e) =>
                    setForm({ ...form, address: e.target.value })
                  }
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Address</label>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  +62
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Phone Number"
                />
              </div>
              {/* <div className="mb-3 text-center">
                <img
                  src={preview}
                  className="mb-1 img-fluid img-thumbnail photo"
                ></img>
                <input
                  value={form.image}
                  onChange={handleUpload}
                  type="file"
                  className="form-control"
                  id="customFile"
                  name="image"
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

export default EditCustomer;
