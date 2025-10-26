const Input = ({
  id,
  name,
  type = "text",
  placeholder = "",
  min,
  max,
  required = false,
  value,
  disabled = false,
  className = "",
  onChange,
}) => {
  // ✅ একদম unified handleChange
  const handleChange = (e) => {
    if (disabled) return;

    onChange?.({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  return (
    <input
      id={id}
      name={name}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      value={value}
      onChange={handleChange}
      className={`input-field ${className}`}
    />
  );
};

export default Input;
