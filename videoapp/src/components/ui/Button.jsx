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
    "inline-flex items-center justify-center transition-all duration-200 focus:outline-none relative overflow-hidden";

  const sizeClasses = {
    auto: "gap-1",
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-base px-5 py-2.5",
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
      fill: "border border-transparent bg-primary-500 text-white hover:bg-primary-600",
      outline:
        "border border-primary-500 text-primary-500 hover:border-primary-400",
    },
    secondary: {
      fill: "border border-transparent bg-secondary-500 text-white hover:bg-secondary-600",
      outline:
        "border border-secondary-500 text-secondary-500 hover:border-secondary-400",
    },
    success: {
      fill: "border border-transparent bg-success-500 text-white hover:bg-success-600",
      outline:
        "border border-success-500 text-success-500 hover:border-success-400",
    },
    danger: {
      fill: "border border-transparent bg-danger-500 text-white hover:bg-danger-600",
      outline:
        "border border-danger-500 text-danger-500 hover:border-danger-400",
    },
    warning: {
      fill: "border border-transparent bg-warning-500 text-white hover:bg-warning-600",
      outline:
        "border border-warning-500 text-warning-500 hover:border-warning-400",
    },
    info: {
      fill: "border border-transparent bg-info-500 text-white hover:bg-info-600",
      outline: "border border-info-500 text-info-500 hover:border-info-400",
    },
    iconFlat: {
      fill: "text-white bg-primary-200 hover:text-primary-600",
      outline: "text-white hover:bg-transparent hover:text-primary-600",
    },
    iconFlatDanger: {
      fill: "text-white bg-danger-200 hover:text-danger-600",
      outline: "text-white hover:bg-transparent hover:text-danger-600",
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
    ring: "hover:ring-2 hover:ring-offset-2 hover:ring-primary-500/50",
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
