import { Link } from "react-router-dom";

const VideoCard = ({ className = "", video }) => {
  const { id, title, thumbnail, duration } = video || {};

  return (
    <div className={`relative ${className}`}>
      <Link to={`/videos/${id}`}>
        <img
          src={thumbnail}
          alt={title}
          className={`w-full h-auto rounded-md ${className}`}
        />
      </Link>
      <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1">
        {duration}
      </p>
    </div>
  );
};

export default VideoCard;
