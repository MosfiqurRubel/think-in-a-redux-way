const Tags = ({
  tags = [],
  prefix = "#", // যেমন #react বা @username
  separator = ", ", // কমা, পাইপ | বা অন্য কিছু
  className = "gap-1 text-gray-700 my-1",
  tagClass = "text-gray-700",
}) => {
  return (
    <div className={`flex flex-wrap ${className}`}>
      {tags.map((tag, index) => (
        <span key={index} className={`text-base ${tagClass}`}>
          {prefix}
          {tag}
          {index !== tags.length - 1 && separator}
        </span>
      ))}
    </div>
  );
};

export default Tags;
