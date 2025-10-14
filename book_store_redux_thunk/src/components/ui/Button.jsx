import { Loader2 } from "lucide-react"; // for spinner icon

const Button = ({
  children, // ✅ now supports <Button>Anything</Button>
  text, // optional, still works
  variant, // primary | success | danger | warning | info | custom
  outline = false,
  size = "md", // sm | md | lg | auto (for icon-only)
  rounded = "md", // none | sm | md | lg | full
  hoverEffect, // shadow | ring | none
  id,
  className = "",
  icon: Icon, // optional icon
  iconPosition = "left", // left | right
  onClick,
  disabled = false,
  loading = false, // ✅ new loading state
  type = "button",
  animate = "none", // none | scale | gradient | ripple
  ...rest
}) => {
  const baseStyle =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none relative overflow-hidden";

  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-base px-5 py-2.5",
    icon: "p-0", // ✅ For icon-only buttons
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const variantColors = {
    primary: {
      fill: "bg-primary/90 hover:bg-primary text-white",
      outline: "border border-primary text-primary hover:bg-primary/10",
    },
    success: {
      fill: "bg-green-600 hover:bg-green-700 text-white ",
      outline: "border border-green-500 text-green-600 hover:bg-green-50",
    },
    danger: {
      fill: "bg-red-600 hover:bg-red-700 text-white ",
      outline: "border border-red-500 text-red-600 hover:bg-red-50 ",
    },
    warning: {
      fill: "bg-yellow-500 hover:bg-yellow-600 text-black ",
      outline: "border border-yellow-500 text-yellow-600 hover:bg-yellow-50 ",
    },
    info: {
      fill: "bg-sky-600 hover:bg-sky-700 text-white ",
      outline: "border border-sky-500 text-sky-600 hover:bg-sky-50",
    },
    custom: {
      fill: "",
      outline: "",
    },
  };

  const selectedVariant = variantColors[variant] || variantColors["custom"];
  const colorClasses = outline ? selectedVariant.outline : selectedVariant.fill;

  const hoverEffects = {
    none: "",
    shadow: "hover:shadow-lg",
    ring: "hover:ring-2 hover:ring-offset-2 hover:ring-primary/50",
  };

  // ✅ animation styles
  const animationClasses = {
    none: "",
    scale: "hover:scale-105 active:scale-95",
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white",
    ripple:
      "after:content-[''] after:absolute after:rounded-full after:scale-0 hover:after:scale-150 after:opacity-0 hover:after:opacity-10 after:bg-white after:duration-700 after:w-full after:h-full",
  };

  // ✅ Detect if the button only contains an icon (no text/children)
  const isIconOnly = !!Icon && !children && !text;
  const finalSize = isIconOnly ? "icon" : size;

  // ✅ Dynamic cursor pointer logic
  const cursorClass =
    disabled || loading ? "cursor-not-allowed opacity-60" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizeClasses[finalSize]} ${roundedClasses[rounded]} ${colorClasses} ${hoverEffects[hoverEffect]} ${animationClasses[animate]} ${cursorClass} ${className}`}
      id={id}
      {...rest} // ✅ this passes any extra props safely
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === "left" && <Icon className="w-4 h-4" />}
          {children || text}
          {Icon && iconPosition === "right" && <Icon className="w-4 h-4" />}
        </>
      )}
    </button>
  );
};

export default Button;
