import React from "react";

function SearchButton() {
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchButton;
