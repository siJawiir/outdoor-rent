import React, { useEffect, useState } from "react";
import { getCustomers } from "../services/customersApi";
import { getGears } from "../services/gearsApi";
import { addTransactions } from "../services/transactionsApi";

function TransactionForm() {
  const [GearId, setGearId] = useState("");
  const [CustomerId, setCustomerId] = useState("");
  const [gears, setGears] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const gearsList = () => {
    getGears((result) => setGears(result));
  };

  const customersList = () => {
    getCustomers((result) => setCustomers(result));
  };

  useEffect(() => {
    gearsList();
    customersList();
  }, []);

  const submitHandler = () => {
    const obj = { GearId, CustomerId, dateStart, dateEnd };
    addTransactions(obj);
  };

  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Add a new Transaction</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={CustomerId}
                  onChange={(e) => setCustomerId(e.target.value)}
                >
                  {customers.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
                <label for="floatingSelect">Customer</label>
              </div>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={GearId}
                  onChange={(e) => setGearId(e.target.value)}
                >
                  {gears.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
                <label for="floatingSelect">Gear</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setDateStart(e.target.value)}
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Date Start</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  onChange={(e) => setDateEnd(e.target.value)}
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Date End</label>
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

export default TransactionForm;
