import axios from "axios";
import Swal from "sweetalert2";
import ErrorAlert from "../utils/ErrorAlert";
import SuccessAlert from "../utils/SuccessAlert";

const URL = `http://localhost:3001/api`;

const getTransactions = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/transactions`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addTransactions = (obj) => {
  const { GearId, CustomerId, dateStart, dateEnd } = obj;
  axios({
    method: "POST",
    url: `${URL}/transactions`,
    data: {
      GearId,
      CustomerId,
      dateStart,
      dateEnd,
    },
  })
    .then((result) => {
      SuccessAlert();
    })
    .catch((err) => {
      ErrorAlert();
    });
};

const deleteTransaction = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      axios({
        method: "DELETE",
        url: `${URL}/transactions/${id}`,
      })
        .then((result) => {
          console.log(result);
          // ConfirmAlert();
        })
        .catch((err) => {
          // console.log(err);
          ErrorAlert();
        });
    }
  });
};

const editTransaction = async (id, transaction) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/transaction/${id}`,
      data: transaction,
    });
    SuccessAlert();
  } catch (e) {
    ErrorAlert();
  }
};

const getTransactionById = async (id, cb) => {
  axios({
    method: "GET",
    url: `${URL}/transactions/${id}`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getTransactions, addTransactions, deleteTransaction, editTransaction, getTransactionById };
