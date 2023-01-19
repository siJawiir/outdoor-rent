import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function BackButton(props) {
  return (
    <div>
      <span class="position-absolute top-0 start-0 rounded-circle bg-color-primary translate-middle">
        <a
          className="btn btn-md text-white rounded-circle"
          type="button"
          href={props.link}
        >
          <FaArrowLeft />
        </a>
      </span>
    </div>
  );
}

export default BackButton;
