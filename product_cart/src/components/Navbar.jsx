import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/images/logo.png";

const Navbar = ({ isScrolled }) => {
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-[#171C2A] py-4",
        isScrolled && "bg-gray-700 py-3"
      )}
    >
      <div className="navBar">
        <Link to="/">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </Link>

        <div className="flex gap-4">
          <NavLink to="/" className="navHome" id="lws-home">
            Home
          </NavLink>
          <NavLink to="/cart" className="navCart" id="lws-cart">
            <ShoppingCart size={20} />
            <span id="lws-totalCart">0</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
