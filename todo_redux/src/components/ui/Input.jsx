const Input = ({
  name,
  type = "text",
  placeholder = "",
  required = false,
  value,
  className,
  onChange,
}) => {
  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      className={`input-field ${className}`}
    />
  );
};

export default Input;
