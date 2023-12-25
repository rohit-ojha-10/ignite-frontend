import "./App.css";
import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/login-page/LoginPage";
import HomePage from "./pages/Home-page/HomePage";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authToken } = useAuth();
  const routes = useRoutes([
    {
      path: "/",
      element: authToken ? <HomePage /> : <Navigate to="/login" />,
    },
    {
      path: "/login",
      element: !authToken ? <LoginPage /> : <Navigate to="/" />,
    },
  ]);
  return <>{routes}</>;
}

export default App;
