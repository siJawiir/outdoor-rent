import React from "react";
import AllCategories from "../components/AllCategories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../utils/AddButton";

function Categories() {
  return (
    <div>
      <Navbar />
      <div className="min-vh-100">
        <AllCategories />
        <AddButton link={"/categories/create"} />
      </div>
      <Footer />
    </div>
  );
}

export default Categories;
