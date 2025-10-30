import { Link } from "react-router-dom";
import VideoCard from "@/components/ui/VideoCard";

const video = ({ video }) => {
  const { id, title, author, views, date, thumbnail } = video || {};

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <VideoCard video={video} />

        <div className="flex flex-row mt-2 gap-2">
          <img
            src={thumbnail}
            className="rounded-full h-6 w-6 shrink-0"
            alt={title}
          />

          <div clas="flex flex-col">
            <Link to={`/videos/${id}`}>
              <p className="text-slate-900 text-sm font-semibold">{title}</p>
            </Link>
            <span className="text-gray-400 text-xs hover:text-gray-600">
              {author}
            </span>
            <p className="text-gray-400 text-xs">
              {views} views . {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default video;
