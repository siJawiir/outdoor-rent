import React, { useState } from "react";
import DataNotFound from "./DataNotFound";
import {
  FaEdit,
  FaTrashAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
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
            const { id, name, email, address, phone, image } = customer;
            return (
              <div className="col mb-3">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="https://via.placeholder.com/600x400?text=user"
                    alt="Card image cap"
                  />
                  <h5 className="card-header text-center color-primary">
                    {name}{" "}
                  </h5>
                  <div className="card-body">
                    <p className="card-text">
                      <FaEnvelope /> {email}
                    </p>
                    <p className="card-text">
                      {" "}
                      <FaPhoneAlt /> +62{phone}
                    </p>
                    <p className="card-text">
                      <FaMapMarkerAlt /> {address}
                    </p>
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
      </div>
    );
  } else {
    return (
      <div>
        <DataNotFound />
      </div>
    );
  }
}
export default AllCustomers;
