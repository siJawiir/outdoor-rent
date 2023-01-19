import React from "react";
import AllTransactions from "../components/AllTransactions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Transactions() {
  return (
    <div>
      <Navbar />
      <AllTransactions />
      <Footer />
    </div>
  );
}

export default Transactions;
