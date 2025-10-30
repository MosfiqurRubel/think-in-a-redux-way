/**
 * A dynamic and reusable video player skeleton loader.
 *
 * @param {object} props - The component's properties.
 * @param {string} [props.className] - Custom class names to override or add to the loader's style.
 */
const PlayerLoader = ({ className }) => {
  return (
    <div
      className={`aspect-video bg-slate-200 animate-pulse ${className || ""}`}
    ></div>
  );
};

export default PlayerLoader;
