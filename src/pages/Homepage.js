import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SectionTitle from "../components/SectionTitle";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SectionTitle />
      <Footer />
    </div>
  );
}

export default Homepage;
