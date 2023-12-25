import "./App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/Home-page/HomePage";

function App() {
  const routes = useRoutes([
    {
      path:'/',
      element: <HomePage/>
    },
    {
      path:'/login',
      element: <LoginPage/>
    }
  ])
  return (
    <>
      {routes}
    </>
  );
}

export default App;
