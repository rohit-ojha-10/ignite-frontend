import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
