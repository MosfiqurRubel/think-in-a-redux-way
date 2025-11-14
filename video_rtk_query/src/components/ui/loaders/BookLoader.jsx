/**
 * A dynamic and reusable video skeleton loader component.
 *
 * @param {object} props - The component's properties.
 * @param {number} [props.lines=2] - The number of text lines to display.
 * @param {boolean} [props.smallAvatar=false] - A boolean to use a smaller avatar size.
 * @param {string} [props.className='col-span-12 sm:col-span-6 md:col-span-3'] - Custom class names for the component wrapper.
 */
export default function BookLoader({
  lines = 2,
  smallAvatar = false,
  className,
}) {
  const avatarSize = smallAvatar ? "h-6 w-6" : "h-8 w-8";
  const textStyles = smallAvatar ? "text-[8px]" : "text-[10px]";

  return (
    <div className={`w-full flex flex-col animate-pulse ${className || ""}`}>
      <div className="relative">
        <div className="aspect-video bg-slate-200" />
      </div>

      <div className="flex flex-row mt-2 gap-2 items-center">
        <div className={`bg-slate-200 rounded-full shrink-0 ${avatarSize}`} />

        <div className="flex flex-col space-y-1 grow">
          {Array.from({ length: lines }).map((_, index) => (
            <p
              key={index}
              className={`bg-slate-200 text-slate-200 ${textStyles}`}
            >
              Loading...
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
