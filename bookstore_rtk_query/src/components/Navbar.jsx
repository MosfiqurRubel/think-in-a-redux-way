import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-[#f8fafc] py-4",
        isScrolled && "bg-white py-3 shadow-md"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img src={logo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary-500" : "text-foreground"
              }
            >
              Book Store
            </NavLink>
          </li>
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/books/add"
              className={({ isActive }) =>
                isActive ? "text-primary-500" : "text-foreground"
              }
            >
              Add Book
            </NavLink>
          </li>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
