import { Link, NavLink } from "react-router-dom";
import logo from "@/assets/images/lws-logo-dark.svg";

const Navigation = () => {
  return (
    <nav className="fixed w-full z-40 transition-all duration-300 bg-primary-700 py-3">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="LWS" className="h-10 object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-foreground"
              }
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
