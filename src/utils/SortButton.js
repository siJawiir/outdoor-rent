import axios from "axios";
import React, { useState } from "react";
import { getGears } from "../services/gearsApi";

function SortButton() {

  const [gears, setGears] = useState([]);
  const getHandler = () => {
    getGears((result) => setGears(result));
  };
  getHandler();

  const sortGears = (key) => {
    const newData = [...gears];
    newData.sort((a, b) => (a[key] > b[key] ? 1 : -1));
    setGears(newData);
  };

  return (
    <div>
      <button onClick={() => sortGears("name")}>Sort by Name</button>
    </div>
  );
}

export default SortButton;
