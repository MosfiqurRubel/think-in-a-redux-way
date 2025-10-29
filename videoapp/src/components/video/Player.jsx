const Player = ({
  title = "Some video title",
  link = "https://www.youtube-nocookie.com/embed/6O4s7v28nlw",
}) => {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden">
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
