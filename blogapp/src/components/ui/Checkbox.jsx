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
  size = "md", // ✅ sm | md | lg
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
    console.log("checkbox", e.target.checked);
  };

  const colorVariants = {
    primary:
      "accent-gray-800 text-gray-800 focus:ring-primary focus:ring-offset-1",
    success:
      "accent-green-600 text-green-600 focus:ring-green-500 focus:ring-offset-1",
    danger:
      "accent-red-600 text-red-600 focus:ring-red-500 focus:ring-offset-1",
    warning:
      "accent-yellow-500 text-yellow-600 focus:ring-yellow-500 focus:ring-offset-1",
    info: "accent-sky-600 text-sky-600 focus:ring-sky-500 focus:ring-offset-1",
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
      className={`rounded border-gray-300 transition-all duration-200 ${sizeClasses[size]} ${colorClass} ${cursorClass} ${className}`}
    />
  );
};

export default Checkbox;
