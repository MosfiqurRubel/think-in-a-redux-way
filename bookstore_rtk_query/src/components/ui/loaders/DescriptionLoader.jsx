/**
 * A dynamic and reusable skeleton loader for video descriptions.
 *
 * @param {object} props - The component's properties.
 * @param {number} [props.lines=5] - The number of description text lines to display.
 * @param {string} [props.className] - Custom class names for the component wrapper.
 */
const DescriptionLoader = ({ lines = 5, className }) => {
  return (
    <div className={`animate-pulse ${className || ""}`}>
      {/* Title */}
      <h1 className="h-4 w-1/2 bg-slate-200" />

      {/* Meta info line */}
      <div className="mt-2 pb-4 flex items-center space-between border-b">
        <h2 className="text-[8px] h-2 bg-slate-200 w-2/3" />
      </div>

      {/* Dynamic description lines */}
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className={`mt-1 text-sm bg-slate-200 h-2 ${
            index === lines - 1 ? "w-[70%]" : "w-full"
          }`}
        />
      ))}
    </div>
  );
};

export default DescriptionLoader;
