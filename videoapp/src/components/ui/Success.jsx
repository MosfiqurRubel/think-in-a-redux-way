/**
 * A dynamic and reusable success message component.
 *
 * @param {object} props - The component's properties.
 * @param {string} [props.className] - Custom class names for additional styling.
 * @param {React.ReactNode} [props.children] - The success message content.
 * @param {string} [props.message] - A shortcut for the message content if not using children.
 */
export default function Success({ message, children, className }) {
  // Combine all class names
  const baseClasses =
    "max-w-7xl col-span-12 w-full h-10 flex-center mx-auto p-2 text-teal-700 bg-teal-100";
  const combinedClasses = `${baseClasses} ${className || ""}`;

  return (
    <div className={combinedClasses}>
      {children || message || "Operation successful!"}
    </div>
  );
}
