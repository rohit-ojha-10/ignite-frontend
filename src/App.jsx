import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/Home-page/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} >
          <Route path="login" element={<LoginPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
