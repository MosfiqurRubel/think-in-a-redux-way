const Loading = ({ loadingText = "some error happened" }) => {
  return <div className="col-span-12">{loadingText}</div>;
};

export default Loading;
