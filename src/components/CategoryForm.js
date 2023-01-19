import React, { useState } from "react";
import { addCategory } from "../services/categoriesApi";

function CategoryForm() {

  const [name, setName] = useState("");

  const submitHandler = () => {
    const obj = {name}
    addCategory(obj);
  };

  return (
    <div>
      <div className="d-flex justify-content align-items-center my-3 mx-5 flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Add a new Category</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Category Name</label>
              </div>
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

export default CategoryForm;
