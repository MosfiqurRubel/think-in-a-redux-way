import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

const PublicRoute = () => {
  const isLoggedIn = useAuth();

  // যদি লগইন করা থাকে, তাহলে /inbox এ redirect করবে
  return isLoggedIn ? <Navigate to="/inbox" replace /> : <Outlet />;
};

export default PublicRoute;
