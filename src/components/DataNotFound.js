import React from "react";

function DataNotFound() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="text-center ">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger fw-bolder">Opps!</span> Data not found.
          </p>
          <p className="lead">The data you’re looking for doesn’t exist.</p>
        </div>
      </div>
    </div>
  );
}

export default DataNotFound;
