import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import SvgIcon from "@/components/ui/SvgIcon";
import Input from "@/components/ui/Input";

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

        <form className="flex items-center">
          <div className="group relative rounded-md bg-white">
            <SvgIcon
              name="search"
              className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-primary"
            />
            <Input
              placeholder="Filter books..."
              id="lws-searchBook"
              className="ps-10 max-w-56 rounded-md"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
