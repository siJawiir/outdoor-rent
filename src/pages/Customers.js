import React from "react";
import AllCustomers from "../components/AllCustomers";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../utils/AddButton";

function Customers() {
  return (
    <div>
      <Navbar />
      <div className="min-vh-100">
        <AllCustomers />
        <AddButton link={"/customers/create"} />
      </div>
      <Footer />
    </div>
  );
}

export default Customers;
