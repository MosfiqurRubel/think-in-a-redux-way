import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import logo from "@/assets/images/logo.png";

const Navbar = ({ isScrolled }) => {
  // const cartItems = useSelector((state) => state.cart.cartItems);

  // const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // console.log(totalQuantity);

  const totalItems = useSelector((state) => state.cart.totalItems);

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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "navHome !text-green-300" : "navHome"
            }
            id="lws-home"
          >
            Home
          </NavLink>
          <NavLink to="/cart" className="navCart" id="lws-cart">
            <ShoppingCart size={20} />
            <span id="lws-totalCart">{totalItems}</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
