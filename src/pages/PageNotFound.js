import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

function PageNotFound() {
  return (
    <div>
      <Navbar />
      <NotFound/>
      <Footer />
    </div>
  );
}

export default PageNotFound;
