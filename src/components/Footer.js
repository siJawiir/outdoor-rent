import React from "react";
import { BsTwitter, BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import logo from "../images/logo.png";

function Footer() {
  return (
    <div>
      <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top mt-auto">
          <div className="col-md-4 ms-5 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 text-muted text-decoration-none lh-1"
            >
              <img src={logo} className="w-50 h-50" />
            </a>
            <span className="mb-3 text-muted">© 2022 Company, Inc</span>
          </div>
          <ul className="nav col-md-4 me-5 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-muted" href="#"></a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <BsFacebook />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <BsInstagram />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <BsTwitter />
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="#">
                <BsGithub />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
