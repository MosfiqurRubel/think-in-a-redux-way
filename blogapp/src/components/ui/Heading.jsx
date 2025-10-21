// const Heading = ({ text, className = "" }) => {
//   return <h4 className={`text-xl font-bold ${className}`}>{text}</h4>;
// };

// export default Heading;

const Heading = ({
  level = 4, // ✅ choose heading level: 1–6
  text,
  children,
  align = "left", // left | center | right
  fontWeight = "semibold", // font-normal | font-medium | font-semibold | font-bold | font-extrabold
  className = "",
  color = "text-heading", // you can override Tailwind color
}) => {
  // ✅ pick the tag dynamically
  const Tag = `h${level}`;

  // ✅ define default font sizes per heading level
  const sizeMap = {
    1: "text-4xl",
    2: "text-3xl",
    3: "text-2xl",
    4: "text-xl",
    5: "text-lg",
    6: "text-sm",
  };

  const wightClasses = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag
      className={`${sizeMap[level]} ${wightClasses[fontWeight]} ${alignClasses[align]} ${color} ${className}`}
    >
      {children || text}
    </Tag>
  );
};

export default Heading;
