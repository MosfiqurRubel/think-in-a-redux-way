import { CheckCircle, AlertCircle } from "lucide-react";

const Input = ({
  id,
  name,
  label,
  type = "text",
  placeholder = "",
  min,
  max,
  required = false,
  value,
  disabled = false,
  className = "",
  inputClass = "",
  onChange,
  error = "",
  success = "",
}) => {
  // ✅ unified handleChange
  const handleChange = (e) => {
    if (disabled) return;

    onChange?.({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  // ✅ Dynamic border & text color based on validation
  const borderClass = error
    ? "border-danger-500 focus:ring-danger-500"
    : success
    ? "border-success-500 focus:ring-success-500"
    : "border-secondary-200 focus:ring-sky-400";

  const icon = error ? (
    <AlertCircle className="text-danger-500 w-5 h-5" />
  ) : success ? (
    <CheckCircle className="text-success-500 w-5 h-5" />
  ) : null;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* ✅ Label */}
      {label && (
        <label
          htmlFor={id || name}
          className={`text-sm font-medium ${
            error
              ? "text-danger-600"
              : success
              ? "text-success-600"
              : "text-secondary-700"
          }`}
        >
          {label} {required && <span className="text-danger-500">*</span>}
        </label>
      )}

      {/* ✅ Input Field with Icon */}
      <div className="relative">
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
          className={`input-field ${borderClass} ${inputClass}`}
        />

        {/* ✅ Validation Icon (right side) */}
        {icon && <span className="absolute right-3 top-2.5">{icon}</span>}
      </div>

      {/* ✅ Validation Message */}
      {error && <p className="text-danger-500 text-sm">{error}</p>}
      {!error && success && (
        <p className="text-success-500 text-sm">{success}</p>
      )}
    </div>
  );
};

export default Input;
