const Heading = ({ text, className = "" }) => {
  return <h4 className={`text-xl font-bold ${className}`}>{text}</h4>;
};

export default Heading;
