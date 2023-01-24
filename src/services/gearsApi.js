import axios from "axios";
import Swal from "sweetalert2";
import ErrorAlert from "../utils/ErrorAlert";
import SuccessAlert from "../utils/SuccessAlert";

const URL = `http://localhost:3001/api`;

const getGears = (cb) => {
  axios({
    method: "GET",
    url: `${URL}/gears`,
  })
    .then((result) => {
      // console.log(result.data.sort((a, b) => (a.name < b.name ? 1 : -1)));
      cb(result.data.sort((a, b) => (a.name > b.name ? 1 : -1)));
    })
    .catch((err) => {
      console.log(err);
    });
};

const addGear = (obj) => {
  const { name, price, CategoryId, description, image } = obj;
  axios({
    method: "POST",
    url: `${URL}/gears`,
    data: {
      name,
      price,
      CategoryId,
      description,
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

const deleteGear = (id) => {
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
        url: `${URL}/gears/${id}`,
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

const editGear = async (id, gear) => {
  try {
    let result = await axios({
      method: "PUT",
      url: `${URL}/gears/${id}`,
      data: gear,
    });
    SuccessAlert();
  } catch (e) {
    ErrorAlert();
  }
};

const getGearById = async (id, cb) => {
  axios({
    method: "GET",
    url: `${URL}/gears/${id}`,
  })
    .then((result) => {
      console.log(result.data);
      cb(result.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getGears, addGear, deleteGear, editGear, getGearById };
