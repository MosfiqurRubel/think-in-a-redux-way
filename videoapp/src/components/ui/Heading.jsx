// const Heading = ({ text, className = "" }) => {
//   return <h4 className={`text-xl font-bold ${className}`}>{text}</h4>;
// };

// export default Heading;

const Heading = ({
  level = 4, // ✅ choose heading level: 1–6
  text,
  children,
  align = "left", // left | center | right
  weight = "bold", // font-normal | font-medium | font-bold | font-extrabold
  className = "",
  color = "text-foreground", // you can override Tailwind color
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
    6: "text-base",
  };

  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Tag
      className={`${sizeMap[level]} font-${weight} ${alignClasses[align]} ${color} ${className}`}
    >
      {children || text}
    </Tag>
  );
};

export default Heading;
