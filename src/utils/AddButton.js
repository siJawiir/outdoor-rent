import React from "react";
import { FaPlus } from "react-icons/fa";

function AddButton(props) {
  return (
    <div>
      <div className="position-absolute bottom-0 end-0 me-4 mb-4">
        <a
          className="btn btn-danger btn-md text-white rounded-circle"
          type="button"
          href={props.link}
        >
          <FaPlus />
        </a>
      </div>
    </div>
  );
}

export default AddButton;
