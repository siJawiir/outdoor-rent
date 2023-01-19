import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TransactionForm from "../components/TransactionForm";

function AddTransaction() {
  return (
    <div>
      <Navbar />
      <TransactionForm />
      <Footer />
    </div>
  );
}

export default AddTransaction;
