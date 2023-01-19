import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, getCategoryById } from "../services/categoriesApi";

function EditCategory() {
  const navigation = useNavigate();
  const params = useParams();
  const [form, setForm] = useState({
    name: "",
  });
  const [preview, setPreview] = useState("https://via.placeholder.com/150");

  const getCategoryInfo = () => {
    const { id } = params;
    getCategoryById(+id, (result) => {
      setForm({
        name: result.name,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getCategoryInfo();
  }, []);

  const submitHandler = () => {
    editCategory(+params.id, form);
    navigation("/categories");
  };

  return (
    <div>
      <div className="d-flex justify-content align-items-center my-3 mx-5 flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Edit Category</h5>
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

export default EditCategory;
