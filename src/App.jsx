import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
