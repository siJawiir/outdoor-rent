import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomers } from "../services/customersApi";
import { getGears } from "../services/gearsApi";
import {
  editTransaction,
  getTransactionById,
} from "../services/transactionsApi";

function EditTransaction() {
  const [gears, setGears] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    GearId: "",
    CustomerId: "",
    dateStart: "",
    dateEnd: "",
    // image: "",
  });

  const navigation = useNavigate();
  const params = useParams();

  const gearsList = () => {
    getGears((result) => setGears(result));
  };

  const customersList = () => {
    getCustomers((result) => setCustomers(result));
  };

  const getTransactionInfo = () => {
    const { id } = params;
    getTransactionById(+id, (result) => {
      setForm({
        GearId: result.GearId,
        CustomerId: result.CustomerId,
        dateStart: result.dateStart,
        dateEnd: result.dateEnd,
        // image: result.image,
      });
      console.log(result);
    });
  };

  useEffect(() => {
    getTransactionInfo();
    gearsList();
    customersList();
  }, []);

  const submitHandler = () => {
    editTransaction(+params.id, form);
    navigation("/transactions");
  };

  return (
    <div>
      <div className="d-flex justify-content my-3 align-items-center flex-column min-vh-100">
        <div className="card">
          <div className="card-header text-md-center">
            <h5 className="mb-0">Edit Transaction</h5>
          </div>
          <div className="card-body">
            <form>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  value={form.CustomerId}
                  onChange={(e) =>
                    setForm({ ...form, CustomerId: e.target.value })
                  }
                >
                  <option selected>Select Customer</option>
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
                  value={form.GearId}
                  onChange={(e) => setForm({ ...form, GearId: e.target.value })}
                >
                  <option selected>Select Gear</option>
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
                  value={form.dateStart}
                  onChange={(e) =>
                    setForm({ ...form, dateStart: e.target.value })
                  }
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="alpha view"
                />
                <label for="floatingInput">Date Start</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={form.dateEnd}
                  onChange={(e) =>
                    setForm({ ...form, dateEnd: e.target.value })
                  }
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

export default EditTransaction;
