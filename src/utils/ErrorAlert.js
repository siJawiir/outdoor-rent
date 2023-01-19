import Swal from "sweetalert2";

function ErrorAlert() {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!",
  });
}

export default ErrorAlert;
