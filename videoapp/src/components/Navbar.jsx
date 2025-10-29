import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
// import SearchBar from "@/components/ui/SearchBar";

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
        <Link
          to="/videos/add"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
        >
          Add Video
        </Link>

        {/* <SearchBar /> */}
      </div>
    </nav>
  );
};

export default Navbar;
