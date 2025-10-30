/**
 * A dynamic and reusable error message component.
 *
 * @param {object} props - The component's properties.
 * @param {string} [props.className] - Custom class names for additional styling.
 * @param {React.ReactNode} props.children - The error message content.
 */
const Error = ({ children, className }) => {
  return (
    <div
      className={`w-full flex-center h-10 max-w-7xl mx-auto p-2 text-danger-700 bg-danger-100 col-span-12 ${
        className || ""
      }`}
    >
      {children || "An error occurred."}
    </div>
  );
};

export default Error;
