import React from "react";
import AllTransactions from "../components/AllTransactions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AddButton from "../utils/AddButton";

function Transactions() {
  return (
    <div>
      <Navbar />
      <div className="min-vh-100">
        <AllTransactions />
        <AddButton link={"/gears/create"} />
      </div>
      <Footer />
    </div>
  );
}

export default Transactions;
