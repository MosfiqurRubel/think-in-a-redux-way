import { Loader2 } from "lucide-react";

const Button = ({
  children,
  text,
  variant,
  outline = false,
  size = "md", // sm | md | lg | auto (for icon-only)
  rounded = "md", // none | sm | md | lg | full
  hoverEffect = "none", // shadow | ring | none
  id,
  className = "",
  icon: Icon, // optional icon
  iconPosition = "left", // left | right
  iconSize = 16, // ✅ dynamic
  iconColor, // ✅ dynamic
  iconStroke = 2, // ✅ dynamic
  iconClass = "", // ✅ dynamic
  onClick,
  disabled = false,
  loading = false,
  type = "button",
  animate = "none", // none | scale | gradient | ripple
  ...rest
}) => {
  const baseStyle =
    "inline-flex items-center justify-center transition-all duration-200 focus:outline-none relative overflow-hidden";

  const sizeClasses = {
    auto: "gap-1",
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-5 py-2",
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
      fill: "border border-transparent bg-primary-600 text-white hover:bg-primary-700",
      outline:
        "border border-primary-600 text-primary-600 hover:border-primary-700",
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
    custom: { fill: "", outline: "" },
  };

  const selectedVariant = variantColors[variant] || variantColors["custom"];
  const colorClasses = outline ? selectedVariant.outline : selectedVariant.fill;

  const hoverEffects = {
    none: "",
    shadow: "hover:shadow-lg",
    ring: "hover:ring-2 hover:ring-offset-2 hover:ring-primary-500/50",
  };

  const animationClasses = {
    none: "",
    scale: "hover:scale-105 active:scale-95",
    gradient:
      "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white",
    ripple:
      "after:content-[''] after:absolute after:rounded-full after:scale-0 hover:after:scale-150 after:opacity-0 hover:after:opacity-10 after:bg-white after:duration-700 after:w-full after:h-full",
  };

  const isIconOnly = !!Icon && !children && !text;
  const finalSize = isIconOnly ? "icon" : size;

  const cursorClass =
    disabled || loading ? "cursor-not-allowed opacity-60" : "cursor-pointer";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyle} ${sizeClasses[finalSize]} ${roundedClasses[rounded]} ${colorClasses} ${hoverEffects[hoverEffect]} ${animationClasses[animate]} ${cursorClass} ${className}`}
      id={id}
      {...rest}
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon
              size={iconSize}
              color={iconColor}
              strokeWidth={iconStroke}
              className={iconClass}
            />
          )}
          {children || text}
          {Icon && iconPosition === "right" && (
            <Icon
              size={iconSize}
              color={iconColor}
              strokeWidth={iconStroke}
              className={iconClass}
            />
          )}
        </>
      )}
    </button>
  );
};

export default Button;
