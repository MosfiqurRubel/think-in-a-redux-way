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
    ? "border-red-500 focus:ring-red-500"
    : success
    ? "border-emerald-500 focus:ring-emerald-500"
    : "border-gray-300 focus:ring-sky-400";

  const icon = error ? (
    <AlertCircle className="text-red-500 w-5 h-5" />
  ) : success ? (
    <CheckCircle className="text-emerald-500 w-5 h-5" />
  ) : null;

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* ✅ Label */}
      {label && (
        <label
          htmlFor={id || name}
          className={`text-sm font-medium ${
            error
              ? "text-red-600"
              : success
              ? "text-emerald-600"
              : "text-gray-700"
          }`}
        >
          {label} {required && <span className="text-red-500">*</span>}
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
          className={`w-full resize-none rounded-md border ${borderClass} py-2.5 px-3 pr-9 outline-none transition-all duration-200 placeholder:text-gray-400 disabled:opacity-60 disabled:cursor-not-allowed`}
        />
        {/* ✅ Validation Icon */}
        {icon && <span className="absolute right-3 top-3">{icon}</span>}
      </div>

      {/* ✅ Validation Messages */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {!error && success && (
        <p className="text-emerald-500 text-sm">{success}</p>
      )}
    </div>
  );
};

export default Textarea;
