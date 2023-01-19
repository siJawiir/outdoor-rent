import React from "react";

function Dropdown(props) {
  return (
    <div className="dropdown-center">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          role="button"
          data-bs-toggle="dropdown"
        >
          {props.title}
        </a>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href={props.link1}>
              {props.sub1}
            </a>
          </li>
          <li>
            <a className="dropdown-item" href={props.link2}>
              {props.sub2}
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Dropdown;
