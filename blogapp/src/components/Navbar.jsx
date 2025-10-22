import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "w-full z-40 transition-all duration-300 bg-slate-50 border-b border-border py-3.5",
        isScrolled && "bg-white py-3 fixed"
      )}
    >
      <div className="flex items-center justify-between container">
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
        <div className="flex gap-x-4">
          <Button variant="primary" text="sign in" className="capitalize" />
          <Button
            variant="secondary"
            outline
            text="sign up"
            className="capitalize"
          />
        </div>
        {/* <SearchBar /> */}
      </div>
    </nav>
  );
};

export default Navbar;
