import React from 'react'

function NotFound() {
  return (
    <div>
        <div className="d-flex align-items-center justify-content-center">
        <div className="text-center ">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            {" "}
            <span className="text-danger fw-bolder">Opps!</span> Page not found.
          </p>
          <p className="lead">The page you’re looking for doesn’t exist.</p>
          <a href="/" className="btn rounded-pill btn-outline-dark">
            Go Home
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound