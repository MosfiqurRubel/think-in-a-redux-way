const Tags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <span key={index}>#{tag},</span>
      ))}
    </>
  );
};

export default Tags;
