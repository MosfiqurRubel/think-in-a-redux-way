const Loading = ({ loadingText = "Loading ...", className }) => {
  return <div className={`col-span-12 ${className}`}>{loadingText}</div>;
};

export default Loading;
