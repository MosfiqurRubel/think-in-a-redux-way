import { Link, useMatch, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

const Navbar = ({ isScrolled }) => {
  const navigate = useNavigate();
  const match = useMatch("/videos/add");

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

        {!match && (
          <Button
            variant="primary"
            text="Add Video"
            onClick={() => navigate("/videos/add")}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
