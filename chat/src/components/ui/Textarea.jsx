import { CheckCircle, AlertCircle } from "lucide-react";

const Textarea = ({
  id,
  name,
  label,
  placeholder = "",
  required = false,
  value,
  disabled = false,
  rows = 4,
  className = "",
  textareaClass = "",
  onChange,
  error = "",
  success = "",
}) => {
  // ✅ unified handleChange (same as Input)
  const handleChange = (e) => {
    if (disabled) return;

    onChange?.({
      target: {
        name: name,
        value: e.target.value,
      },
    });
  };

  // ✅ Dynamic color styles
  const borderClass = error
    ? "border-danger-500 focus:ring-danger-500"
    : success
    ? "border-success-500 focus:ring-success-500"
    : "border-secondary-200 focus:ring-violet-400";

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
              : "border-secondary-700"
          }`}
        >
          {label} {required && <span className="text-danger-500">*</span>}
        </label>
      )}

      {/* ✅ Textarea Field */}
      <div className="relative">
        <textarea
          id={id}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          className={`resize-none input-field ${borderClass} ${textareaClass}`}
        />
        {/* ✅ Validation Icon */}
        {icon && <span className="absolute right-3 top-3">{icon}</span>}
      </div>

      {/* ✅ Validation Messages */}
      {error && <p className="text-danger-500 text-sm">{error}</p>}
      {!error && success && (
        <p className="text-success-500 text-sm">{success}</p>
      )}
    </div>
  );
};

export default Textarea;
