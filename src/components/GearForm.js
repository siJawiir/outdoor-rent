import React, { useEffect, useState } from "react";
import { getCategories } from "../services/categoriesApi";
import { addGear } from "../services/gearsApi";

function GearForm() {
  const URL = `http://localhost:3001/api`;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);
  const [CategoryId, setCategoryId] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState("https://via.placeholder.com/150");
  const [image, setImage] = useState("");

  const categoriesList = () => {
    getCategories((result) => setCategories(result));
  };

  function handleUpload(e) {
    let uploaded = e.target.files[0];
    setPreview(global.URL.createObjectURL(uploaded));
    // setImage(uploaded);
  }

  useEffect(() => {
    categoriesList();
  }, []);

  const submitHandler = () => {
    const obj = { name, price, CategoryId, description, image };
    addGear(obj);
  };

  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100 mx-5">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Add a new Gear</h5>
          </div>
          <div className="card-body">
            <form enctype="multipart/form-data">
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Gear Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setPrice(e.target.value)}
                  type="number"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Price</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={CategoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  <option selected>Select Category</option>
                  {categories.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
                <label for="floatingSelect">Gear Category</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  type="text"
                  className="form-control"
                  id="floatingTextarea"
                  placeholder="alpha view"
                />
                <label for="floatingTextarea">Description</label>
              </div>
              {/* <div className="mb-3 text-center">
                <img
                  src={preview}
                  className="mb-1 img-fluid img-thumbnail photo"
                ></img>
                <input
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
                  Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GearForm;
