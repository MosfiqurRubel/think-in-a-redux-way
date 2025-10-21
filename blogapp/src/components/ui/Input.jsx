const Input = ({
  id,
  name,
  type = "text",
  placeholder = "",
  min,
  max,
  required = false,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={`input-field ${className}`}
    />
  );
};

export default Input;
