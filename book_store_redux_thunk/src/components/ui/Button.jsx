import React from "react";

const Button = ({
  children,
  variant = "primary",
  pilled = "",
  size,
  onClick,
  disabled = false,
  buttonClass = "",
  id,
  ...rest
}) => {
  // Tailwind classes for variants
  const variantClasses = {
    primary: "bg-primary/90 text-white hover:bg-primary",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    outline:
      "border border-primary/90 text-forground hover:border-primary hover:text-primary",
    icon: "flex-center appearance-none border-none",
  };

  // Tailwind classes for sizes
  const sizeClasses = {
    sm: "px-2 py-1 text-sm rounded-sm",
    md: "px-4 py-2 text-base rounded-md",
    lg: "px-5 py-3 text-lg rounded-lg",
  };

  // Tailwind classes for Pilleds
  const pilledClasses = {
    primary: "rounded-full px-6",
    outline: "rounded-full px-6",
  };

  // Combine classes
  const baseClasses = "inline-flex items-center gap-x-2 focus:outline-hidden";
  const disabledClasses = "opacity-50 cursor-not-allowed";
  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${pilledClasses[pilled]} ${
    disabled ? disabledClasses : "cursor-pointer"
  } ${buttonClass}`;
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
