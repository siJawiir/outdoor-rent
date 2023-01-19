import React, { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { deleteCategory, getCategories } from "../services/categoriesApi";
import AddButton from "../utils/AddButton";
import DataNotFound from "./DataNotFound";

function AllCategories() {
  const [categories, setCategories] = useState([]);

  const getHandler = () => {
    getCategories((result) => setCategories(result));
  };
  getHandler();

  if (categories.length !== 0) {
    return (
      <div className="d-flex align-items-center my-3 mx-5 flex-column min-vh-100">
        <div className="card">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Category Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {categories.map((category, index) => {
                const { id, name } = category;
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>
                      <div className="text-center">
                        <Link
                          to={`/categories/edit/${id}`}
                          className="btn btn-success btn-sm text-white rounded mx-2"
                          type="submit"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          onClick={() => deleteCategory(id)}
                          className="btn btn-danger btn-sm text-white rounded"
                          type="submit"
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <AddButton link={"/categories/create"} />
      </div>
    );
  } else {
    return (
      <div>
        <DataNotFound />
        <AddButton link={"/categories/create"} />
      </div>
    );
  }
}

export default AllCategories;
