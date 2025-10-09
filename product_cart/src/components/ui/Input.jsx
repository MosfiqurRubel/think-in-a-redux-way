const Input = ({
  id,
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
      id={id}
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
