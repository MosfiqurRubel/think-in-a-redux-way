import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import SearchBar from "@/components/SearchBar";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-background py-4",
        isScrolled && "bg-gray-700 py-3"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link>
          <img src={logo} width="150px" className="object-contain" />
        </Link>

        <ul className="hidden md:flex items-center space-x-6">
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-foreground"
              }
            >
              Book Store
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-foreground"
              }
            >
              Wishlist
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink
              to="/mycollection"
              className={({ isActive }) =>
                isActive ? "text-primary" : "text-foreground"
              }
            >
              My Collection
            </NavLink>
          </li>
        </ul>

        <SearchBar />
      </div>
    </nav>
  );
};

export default Navbar;
