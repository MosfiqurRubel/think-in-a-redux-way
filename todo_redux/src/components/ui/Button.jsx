import React from "react";

const Button = ({
  children,
  variant = "primary",
  size,
  onClick,
  disabled = false,
  buttonClass = "",
  id,
  ...rest
}) => {
  // Tailwind classes for variants
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-purple-200 text-purple-500 hover:border-purple-600 hover:text-purple-600",
    icon: "flex-center appearance-none border border-transparent",
  };

  // Tailwind classes for sizes
  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  // Combine classes
  const baseClasses = "rounded-lg focus:outline-hidden";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${disabled ? disabledClasses : "cursor-pointer"} ${buttonClass}`;
  return (
    <button
      id={id}
      className={finalClasses}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
