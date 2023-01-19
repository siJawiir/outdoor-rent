import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../services/categoriesApi";
import { editGear, getGearById } from "../services/gearsApi";

function EditGear() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    CategoryId: "",
    description: "",
    image: "",
  });
  const [preview, setPreview] = useState("https://via.placeholder.com/150");
  const [categories, setCategories] = useState([]);

  const categoriesList = () => {
    getCategories((result) => setCategories(result));
  };

  const navigation = useNavigate();
  const params = useParams();

  const getGearInfo = () => {
    const { id } = params;
    getGearById(+id, (result) => {
      setForm({
        name: result.name,
        price: result.price,
        CategoryId: result.CategoryId,
        description: result.description,
        // image: result.image,
      });
      console.log(result);
    });
  };

  function handleUpload(e) {
    let uploaded = e.target.files[0];
    setPreview(global.URL.createObjectURL(uploaded));
    // setImage(uploaded);
  }

  useEffect(() => {
    getGearInfo();
    categoriesList();
  }, []);

  const submitHandler = () => {
    editGear(+params.id, form);
    navigation("/gears");
  };
  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100 mx-5">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Edit Gear</h5>
          </div>
          <div className="card-body">
            <form enctype="multipart/form-data">
              <div className="form-floating mb-3">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Gear Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={form.price}
                  onChange={(e) => setForm({ ...form, price: e.target.value })}
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
                  value={form.CategoryId}
                  onChange={(e) =>
                    setForm({ ...form, CategoryId: e.target.value })
                  }
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
                <input
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Description</label>
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

export default EditGear;
