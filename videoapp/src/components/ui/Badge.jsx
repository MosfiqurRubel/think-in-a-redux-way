// src/components/ui/Badge.jsx
const Badge = ({
  text,
  variant = "primary", // primary | success | danger | warning | info | custom
  outline = false, // ✅ true = outline badge
  size = "md", // sm | md | lg
  rounded = "full", // none | sm | md | lg | full
  className = "",
  icon: Icon, // optional icon component
}) => {
  const baseStyle =
    "inline-flex items-center gap-1 select-none transition-all duration-200";

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1",
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
      fill: "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200",
      outline:
        "border border-blue-500 text-blue-600 dark:text-blue-300 dark:border-blue-400",
    },
    success: {
      fill: "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-200",
      outline:
        "border border-green-500 text-green-600 dark:text-green-300 dark:border-green-400",
    },
    danger: {
      fill: "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-200",
      outline:
        "border border-red-500 text-red-600 dark:text-red-300 dark:border-red-400",
    },
    warning: {
      fill: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      outline:
        "border border-yellow-500 text-yellow-600 dark:text-yellow-300 dark:border-yellow-400",
    },
    info: {
      fill: "bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-200",
      outline:
        "border border-sky-500 text-sky-600 dark:text-sky-300 dark:border-sky-400",
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
      className={`${baseStyle} ${sizeClasses[size]} ${roundedClasses[rounded]} ${colorClasses} ${className}`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {text}
    </span>
  );
};

export default Badge;
