import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "w-full top-0 z-40 transition-all duration-300 bg-background text-foreground py-4",
        isScrolled && " bg-background text-foreground py-3.5 fixed"
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
                isActive
                  ? "text-primary-500"
                  : cn("text-foreground", isScrolled && "text-black")
              }
            >
              AllJobs
            </NavLink>
          </li>
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/add-job"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-500"
                  : cn("text-foreground", isScrolled && "text-black")
              }
            >
              AddJob
            </NavLink>
          </li>
          <li className="font-semibold cursor-pointer">
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive
                  ? "text-primary-500"
                  : cn("text-foreground", isScrolled && "text-black")
              }
            >
              Wishlist
            </NavLink>
          </li>
        </ul> */}
        <div className="flex gap-x-4">
          <SearchBar />
          <Button variant="primary" text="sign in" className="capitalize" />
          <Button
            variant="secondary"
            outline
            text="sign up"
            className="capitalize"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
