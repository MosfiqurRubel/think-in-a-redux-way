import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // 🔐 এখানে তুমি তোমার actual auth logic বসাতে পারো
  const isAuthenticated = JSON.parse(localStorage.getItem("auth"));

  // যদি লগইন না করা থাকে → login পেজে redirect করবে
  if (!isAuthenticated?.accessToken) {
    return <Navigate to="/" replace />;
  }

  // লগইন থাকলে child route render করবে
  return <Outlet />;
};

export default ProtectedRoute;
