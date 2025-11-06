const Checkbox = ({
  id,
  name,
  type = "checkbox", // ✅ "checkbox" or "radio"
  value, // ✅ add value prop (important)
  checked = false,
  onChange,
  required = false,
  disabled = false,
  color = "primary",
  size = "sm", // ✅ sm | md | lg
  className = "",
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    onChange?.({
      target: {
        name: name,
        value: type === "checkbox" ? e.target.checked : e.target.value,
      },
    });
    // console.log("checkbox", e.target.checked);
  };

  const colorVariants = {
    primary:
      "accent-primary-600 text-secondary-800 focus:ring-primary-500 focus:ring-offset-1",
    success:
      "accent-success-600 text-success-600 focus:ring-success-500 focus:ring-offset-1",
    danger:
      "accent-danger-600 text-danger-600 focus:ring-danger-500 focus:ring-offset-1",
    warning:
      "accent-warning-500 text-warning-600 focus:ring-warning-500 focus:ring-offset-1",
    info: "accent-info-600 text-info-600 focus:ring-info-500 focus:ring-offset-1",
    custom: "",
  };

  const colorClass = colorVariants[color] || colorVariants["custom"];

  // ✅ Size styles
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  // ✅ Cursor + disabled style
  const cursorClass = disabled
    ? "cursor-not-allowed opacity-60"
    : "cursor-pointer";

  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      checked={checked}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      className={`rounded border-secondary-300 transition-all duration-200 ${sizeClasses[size]} ${colorClass} ${cursorClass} ${className}`}
    />
  );
};

export default Checkbox;
