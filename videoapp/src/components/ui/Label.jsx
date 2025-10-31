const Label = ({ text, htmlFor, required = false, className }) => {
  return (
    <label htmlFor={htmlFor} className={`form-label ${className}`}>
      {text}
      {required && <span className="text-danger-500 ml-1">*</span>}
    </label>
  );
};

export default Label;
