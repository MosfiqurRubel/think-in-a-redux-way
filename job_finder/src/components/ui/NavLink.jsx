import { Link, useLocation } from "react-router-dom";

const NavLink = ({
  to = "/",
  icon: Icon, // ✅ optional icon (Lucide or any React component)
  children,
  label = "Link",
  fontWeight = "medium", // normal | medium | semibold | bold | extrabold
  activeClass = "text-primary-500 font-semibold cursor-default",
  inactiveClass = "text-foreground hover:text-primary-500",
  baseClass = "flex items-center gap-2 transition-all duration-300",
  iconSize = 16,
  exact = false,
  onClick,
  className = "",
  iconClass = "",
  labelClass = "",
}) => {
  const location = useLocation();

  // ✅ Check if the current route matches
  const isActive = exact
    ? location.pathname === to
    : location.pathname.startsWith(to);

  const weightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClass} ${weightClasses[fontWeight]} ${
        isActive ? activeClass : inactiveClass
      } ${className}`}
    >
      {Icon && <Icon size={iconSize} className={iconClass} />}
      <span className={labelClass}>{children || label}</span>
    </Link>
  );
};

export default NavLink;
