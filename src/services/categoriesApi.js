import axios from "axios";
import Swal from "sweetalert2";
import ErrorAlert from "../utils/ErrorAlert";
import SuccessAlert from "../utils/SuccessAlert";

const URL = `http://localhost:3001/api`;


const getCategories = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/categories`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addCategory = (obj) => {
    const {name} = obj
    axios({
      method: "POST",
      url: `${URL}/categories`,
      data: {
        name
      },
    })
      .then((result) => {
        SuccessAlert();
      })
      .catch((err) => {
        ErrorAlert();
      });
  };

const deleteCategory = (id) => {
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
        url: `${URL}/categories/${id}`,
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

const editCategory = async (id, category) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/categories/${id}`,
      data: category,
    });
    SuccessAlert();
  } catch (e) {
    ErrorAlert();
  }
};

const getCategoryById = async (id, cb) => {
  axios({
    method: "GET",
    url: `${URL}/categories/${id}`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};


export { getCategories, addCategory, deleteCategory, editCategory, getCategoryById };
