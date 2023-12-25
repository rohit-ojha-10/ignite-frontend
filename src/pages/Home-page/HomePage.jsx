import React from "react";
import { Outlet } from "react-router-dom";
import TopSection from "./components/TopSection";
import NavBar from "../../shared/NavBar";
import FundRaiserCards from "./components/FundRaiserCards";
const HomePage = () => {
  return (
    <>
      <NavBar />
      <TopSection />
      <FundRaiserCards />
      <Outlet />
    </>
  );
};

export default HomePage;
