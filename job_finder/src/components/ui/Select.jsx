const Select = ({
  id,
  name,
  value,
  options = [],
  onChange,
  required = false,
  disabled = false,
  className = "",
  placeholder = "Select",
}) => {
  const handleChange = (e) => {
    onChange?.({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      className={`select-box ${className}`}
    >
      <option value="">{placeholder}</option>
      {options?.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
