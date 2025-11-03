import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/lws-logo-dark.svg";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-violet-700 py-3",
        isScrolled && "bg-violet-600 py-2.5 shadow-md"
      )}
    >
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
          <li className="cursor-pointer">
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive ? "text-white" : "text-foreground"
              }
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
