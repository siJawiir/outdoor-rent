import React from "react";
import AllGears from "../components/AllGears";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../utils/AddButton";
import SortButton from "../utils/SortButton";

function Gears() {
  return (
    <div>
      <Navbar />
      <div className="min-vh-100">
        <AllGears />
        <AddButton link={"/gears/create"} />
      </div>
      <Footer />
    </div>
  );
}

export default Gears;
