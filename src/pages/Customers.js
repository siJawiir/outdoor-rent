import React from "react";
import AllCustomers from "../components/AllCustomers";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Customers() {
  return (
    <div>
        <Navbar />
        <AllCustomers />
        <Footer />
    </div>
  );
}

export default Customers;
