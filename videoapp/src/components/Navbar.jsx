import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-slate-100 shadow-md py-3.5",
        isScrolled && "bg-white py-3 shadow-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} className="h-10 object-contain" />
        </Link>

        {/* <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-foreground"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-foreground"
              }
            >
              Wishlist
            </NavLink>
          </li>
        </ul> */}

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
