import React from "react";
import "./Root.css";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import SideNav from "../pages/sideNav/SideNav";
import Footer from "../pages/shared/Footer/Footer";

const Root = () => {
  return (
    <>
      <Header />
      <main className="main-container">
        <div className="sidenav lg:block hidden">
          <SideNav />
        </div>
        <div className="main-element">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Root;
