import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Services from "../Pages/Services";
import Blogs from "../Pages/Blogs";
import Pricing from "../Pages/Pricing";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
