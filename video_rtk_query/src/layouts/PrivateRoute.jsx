import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const PrivateRoute = () => {
  const isLoggedIn = useAuth();

  // যদি লগইন না করা থাকে, তাহলে login পেজে redirect করবে
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;
