import axios from "axios";
import Swal from "sweetalert2";
import ErrorAlert from "../utils/ErrorAlert";
import SuccessAlert from "../utils/SuccessAlert";

const URL = `http://localhost:3001/api`;

const getCustomers = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/customers`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addCustomer = (obj) => {
  const { name, email, address, image } = obj;
  axios({
    method: "POST",
    url: `${URL}/customers`,
    data: {
      name,
      email,
      address,
      image,
    },
  })
    .then((result) => {
      SuccessAlert();
    })
    .catch((err) => {
      ErrorAlert();
    });
};

const deleteCustomer = (id) => {
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
        url: `${URL}/customers/${id}`,
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

const editCustomer = async (id, customer) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/customers/${id}`,
      data: customer,
    });
    SuccessAlert();
  } catch (e) {
    ErrorAlert();
  }
};

const getCustomerById = async (id, cb) => {
  axios({
    method: "GET",
    url: `${URL}/customers/${id}`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  getCustomers,
  addCustomer,
  deleteCustomer,
  editCustomer,
  getCustomerById,
};
