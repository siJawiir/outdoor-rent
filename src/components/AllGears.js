import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCategories } from "../services/categoriesApi";
import { deleteGear, getGears } from "../services/gearsApi";
import AddButton from "../utils/AddButton";
import SortButton from "../utils/SortButton";
import DataNotFound from "./DataNotFound";

function AllGears() {
  const [gears, setGears] = useState([]);
  const [categories, setCategories] = useState([]);

  const getHandler = () => {
    getGears((result) => setGears(result));
  };
  getHandler();

  const categoriesList = () => {
    getCategories((result) => setCategories(result));
  };

  useEffect(() => {
    categoriesList();
  }, []);

  if (gears.length !== 0) {
    return (
      <div className="container my-3 mx-5">
        <div className="row row-cols-5">
          {gears.map((gear) => {
            return (
              <div className="col mb-3" key={gear.id}>
                <Link to={`/gears/${gear.id}`} className="text-decoration-none">
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                      src="http://via.placeholder.com/600x400?text=Gear"
                      alt="Card image cap"
                    />
                    <h5 className="card-header link-dark ">{gear.name} </h5>
                    <div className="card-body">
                      {/* <h5 className="card-text color-primary">
                      {gear.Category.name}
                    </h5> */}
                      {/* <p className="card-text color-primary">{gear.description}</p> */}
                      <p className="card-text color-red fw-bold">
                        Rp {gear.price}
                        <span className="color-primary">/day</span>
                      </p>
                      <Link
                        to={`/gears/edit/${gear.id}`}
                        className="btn btn-success btn-sm text-white rounded me-2"
                        type="submit"
                      >
                        {" "}
                        Edit
                        <FaEdit className="mx-1" />
                      </Link>
                      <button
                        onClick={() => deleteGear(gear.id)}
                        className="btn btn-danger btn-sm text-white rounded"
                        type="submit"
                      >
                        {" "}
                        Delete
                        <FaTrashAlt className="mx-1" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <AddButton link={"/gears/create"} /> */}
      </div>
    );
  } else {
    return (
      <div>
        <DataNotFound />
        {/* <AddButton link={"/gears/create"} /> */}
      </div>
    );
  }
}

export default AllGears;
