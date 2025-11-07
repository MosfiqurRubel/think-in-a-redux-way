import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";

export default function PrivateRoute() {
  const isLoggedIn = useAuth();

  // যদি লগইন না করা থাকে, তাহলে login পেজে redirect করবে
  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
}
