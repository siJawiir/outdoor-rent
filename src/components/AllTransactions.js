import React, { useState } from "react";
import DataNotFound from "./DataNotFound";
import {
  FaCalendar,
  FaEdit,
  FaShoppingBag,
  FaTrashAlt,
} from "react-icons/fa";
import AddButton from "../utils/AddButton";
import {
  deleteTransaction,
  getTransactions,
} from "../services/transactionsApi";
import { Link } from "react-router-dom";

function AllTransactions() {
  const [transactions, setTransactions] = useState([]);

  const getHandler = () => {
    getTransactions((result) => setTransactions(result));
  };
  getHandler();

  if (transactions.length !== 0) {
    return (
      <div className="container my-3 mx-5">
        <div className="row row-cols-5">
          {transactions.map((transaction) => {
            return (
              <div className="col mb-3">
                <div className="card">
                  <h5 className="card-header text-center">{transaction.Customer.name} </h5>
                  <div className="card-body">
                    <p className="card-text">
                      <FaShoppingBag /> <span className="color-text fw-bold">Booking: </span>{transaction.Gear.name}
                    </p>
                    <p className="card-text">
                      <FaCalendar /> <span className="color-primary fw-bold">Start: </span> {transaction.dateStart}
                    </p>
                    <p className="card-text">
                      <FaCalendar /> <span className="color-red fw-bold">End: </span>{transaction.dateEnd}
                    </p>
                    {/* <Link
                      to={`/transactions/${transaction.id}`}
                      className="btn btn-success btn-sm text-white rounded-pill mx-2"
                      type="submit"
                    >
                      <FaEdit />
                    </Link>
                    <button
                      onClick={() => deleteTransaction(transaction.id)}
                      className="btn btn-danger btn-sm text-white rounded-pill"
                      type="submit"
                    >
                      <FaTrashAlt />
                    </button> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* <AddButton link={"/transactions/create"} /> */}
      </div>
    );
  } else {
    return (
      <div>
        <DataNotFound />
        {/* <AddButton link={"/transactions/create"} /> */}
      </div>
    );
  }
}

export default AllTransactions;
