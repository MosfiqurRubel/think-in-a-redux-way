const Checkbox = ({
  id,
  name,
  checked = false,
  onChange,
  required = false,
  disabled = false,
  className = "",
}) => {
  const handleChange = (e) => {
    if (disabled) return;
    onChange?.({
      target: {
        name: name,
        value: e.target.checked,
      },
    });
    console.log("checkbox", e.target.checked);
  };

  return (
    <input
      id={id}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      required={required}
      disabled={disabled}
      className={`w-4 h-4 cursor-pointer disabled:opacity-50 ${className}`}
    />
  );
};

export default Checkbox;
