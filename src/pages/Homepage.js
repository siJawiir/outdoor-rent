import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";
import AllTransactions from "../components/AllTransactions";
import AllGears from "../components/AllGears";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTitle title={"TRANSACTIONS LIST"} />
      <AllTransactions />
      <SectionTitle title={"GEARS LIST"} />
      <AllGears />
      <Footer />
    </div>
  );
}

export default Homepage;
