import { Link } from "react-router-dom";

const VideoCard = ({ className = "", video }) => {
  return (
    <div className="relative">
      <Link to={`/videos/${video.id}`}>
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`w-full h-auto rounded-md ${className}`}
        />
      </Link>
      <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1">
        {video.duration}
      </p>
    </div>
  );
};

export default VideoCard;
