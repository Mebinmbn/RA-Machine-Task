import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Services from "./Services";
import Blogs from "./Blogs";
import Pricing from "./Pricing";

function Layout() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <Pricing />
      <Footer />
    </div>
  );
}

export default Layout;
