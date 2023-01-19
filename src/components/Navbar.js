import React from "react";
import logo from "../images/logo.png";
import SearchButton from "./SearchButton";
import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-color-background color-text">
        <div className="container-fluid">
          <a className="navbar-brand ms-3 me-5 fw-semibold" href="/">
            <img src={logo} className="pe-2" />
            Alpha View
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="me-2">
              <SearchButton />
            </div>
            <ul className="navbar-nav mb-2 mb-lg-0 ">
              <div className="me-2">
                <Dropdown
                  title={"Gears"}
                  sub1={"Show all Gears"}
                  sub2={"Create a new Gear"}
                  link1={"/gears"}
                  link2={"/gears/create"}
                />
              </div>
              <div className="me-2">
                <Dropdown
                  title={"Categories"}
                  sub1={"Show all Categories"}
                  sub2={"Create a new Category"}
                  link1={"/categories"}
                  link2={"/categories/create"}
                />
              </div>
              <div className="me-2">
                <Dropdown
                  title={"Customers"}
                  sub1={"Show all Customers"}
                  sub2={"Create a new Customer"}
                  link1={"/customers"}
                  link2={"/customers/create"}
                />
              </div>
              <div className="me-2">
                <Dropdown
                  title={"Transactions"}
                  sub1={"Show all Transactions"}
                  sub2={"Create a new Transaction"}
                  link1={"/transactions"}
                  link2={"/transactions/create"}
                />
              </div>
            </ul>
          </div>
          <div className="color-primary rounded-pill">
            <a className="btn" href="/login">Login</a>
          </div>
          <div className="bg-color-primary rounded-pill">
            <a className="btn text-white" href="/register">Register</a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
