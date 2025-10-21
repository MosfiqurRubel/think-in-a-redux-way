import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "w-full z-40 transition-all duration-300 bg-slate-100 px-5 py-3.5 shadow-md",
        isScrolled && "bg-white py-3 shadow-md fixed"
      )}
    >
      <div className="flex items-center justify-between">
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
