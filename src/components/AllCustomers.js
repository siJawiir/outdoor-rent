import React, { useState } from "react";
import DataNotFound from "./DataNotFound";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { getCustomers, deleteCustomer } from "../services/customersApi";
import AddButton from "../utils/AddButton";
import { Link } from "react-router-dom";

function AllCustomers() {
  const [customers, setCustomers] = useState([]);

  const getHandler = () => {
    getCustomers((result) => setCustomers(result));
  };
  getHandler();

  if (customers.length !== 0) {
    return (
      <div className="container my-3 mx-5 min-vh-100">
        <div className="row row-cols-5">
          {customers.map((customer) => {
            const { id, name, email, address, image } = customer;
            return (
              <div className="col mb-3">
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/600x400?text=user"
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{name} </h5>
                    <p className="card-text">{email}</p>
                    <p className="card-text">{address}</p>
                    <Link
                      to={`/customers/edit/${id}`}
                      className="btn btn-success btn-sm text-white rounded mx-2"
                      type="submit"
                    >
                      Edit <FaEdit className="mx-1" />
                    </Link>
                    <button
                      onClick={() => deleteCustomer(id)}
                      className="btn btn-danger btn-sm text-white rounded"
                      type="submit"
                    >
                      Delete
                      <FaTrashAlt className="mx-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <AddButton link={"/customers/create"} />
      </div>
    );
  } else {
    return (
      <div>
        <DataNotFound />
        <AddButton link={"/customers/create"} />
      </div>
    );
  }
}
export default AllCustomers;
