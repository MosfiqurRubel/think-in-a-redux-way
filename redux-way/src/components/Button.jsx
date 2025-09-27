const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  handler,
}) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-colors focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-indigo-400 text-white hover:bg-indigo-600 dark:bg-white dark:text-secondary",
    danger:
      "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };
  return (
    <button
      type={type}
      onClick={handler}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
