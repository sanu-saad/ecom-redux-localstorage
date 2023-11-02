import { Navigate, Outlet } from "react-router-dom";

const ProtactedRoute = () => {
  const auth = localStorage.getItem("loggedin");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtactedRoute;
