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
      fill: "bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-200",
      outline:
        "border border-primary-500 text-primary-600 dark:text-primary-300 dark:border-primary-400",
    },
    secondary: {
      fill: "bg-secondary-100 text-secondary-600 dark:bg-secondary-900 dark:text-secondary-200",
      outline:
        "border border-secondary-500 text-secondary-600 dark:text-secondary-300 dark:border-secondary-400",
    },
    active: {
      fill: "bg-primary-600 text-white dark:bg-primary-900 dark:text-primary-200",
      outline:
        "border border-primary-500 text-primary-600 dark:text-primary-300 dark:border-primary-400",
    },
    success: {
      fill: "bg-success-100 text-success-600 dark:bg-success-900 dark:text-success-200",
      outline:
        "border border-success-500 text-success-600 dark:text-success-300 dark:border-success-400",
    },
    danger: {
      fill: "bg-danger-100 text-danger-600 dark:bg-danger-900 dark:text-danger-200",
      outline:
        "border border-danger-500 text-danger-600 dark:text-danger-300 dark:border-danger-400",
    },
    warning: {
      fill: "bg-warning-100 text-warning-800 dark:bg-warning-900 dark:text-warning-200",
      outline:
        "border border-warning-500 text-warning-600 dark:text-warning-300 dark:border-warning-400",
    },
    info: {
      fill: "bg-info-100 text-info-600 dark:bg-info-900 dark:text-info-200",
      outline:
        "border border-info-500 text-info-600 dark:text-info-300 dark:border-info-400",
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
