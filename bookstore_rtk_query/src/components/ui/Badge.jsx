// src/components/ui/Badge.jsx
const Badge = ({
  text,
  variant = "primary", // primary | success | danger | warning | info | custom
  outline = false, // ✅ true = outline badge
  size = "md", // sm | md | lg
  rounded = "full", // none | sm | md | lg | full
  className = "",
  icon: Icon, // optional icon component
  onClick,
}) => {
  const baseStyle =
    "inline-flex items-center gap-1 select-none transition-all duration-200";

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-1.5",
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
      fill: "bg-primary-100 text-primary-600",
      outline: "bg-primary-50 border border-primary-500 text-primary-600",
    },
    secondary: {
      fill: "bg-secondary-100 text-secondary-600",
      outline: "bg-secondary-50 border border-secondary-500 text-secondary-600",
    },
    active: {
      fill: "bg-primary-600 text-white",
      outline: "bg-primary-50 border border-primary-500 text-primary-600",
    },
    success: {
      fill: "bg-success-100 text-success-600",
      outline: "bg-success-50 border border-success-500 text-success-600",
    },
    danger: {
      fill: "bg-danger-100 text-danger-600",
      outline: "bg-danger-50 border border-danger-500 text-danger-600",
    },
    warning: {
      fill: "bg-warning-100 text-warning-800",
      outline: "bg-warning-50 border border-warning-500 text-warning-600",
    },
    info: {
      fill: "bg-info-100 text-info-600",
      outline: "bg-info-50 border border-info-500 text-info-600",
    },
    custom: {
      fill: "bg-primary/80 text-primary",
      outline: "border border-primary/60 bg-primary/10 text-primary",
    },
  };

  const colorClasses = outline
    ? variantColors[variant].outline
    : variantColors[variant].fill;

  return (
    <span
      onClick={onClick}
      className={`${baseStyle} ${sizeClasses[size]} ${roundedClasses[rounded]} ${colorClasses} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </span>
  );
};

export default Badge;
