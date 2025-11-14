import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "@/features/auth/authSlice";
import logo from "@/assets/images/logo.png";

const Navigation = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };
  return (
    <nav className="fixed w-full z-40 transition-all duration-300 bg-primary-700 py-3">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="LWS" className="h-10 object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li className="text-white">
            <span className="cursor-pointer font-medium" onClick={logout}>
              Logout
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
