const Select = ({
  name = "select",
  options = [],
  value,
  onChange,
  required = false,
  placeholder = "Select an option",
  className = "",
  ...rest
}) => {
  // console.log("Options ", options);
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className={`select-box ${className}`}
      {...rest}
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
