import Heading from "@/components/ui/Heading";
import LikeUnlike from "./LikeUnlike";

const VideoDescription = ({ video }) => {
  const { title, date, likes, unlikes, description } = video;

  return (
    <div>
      <Heading level={5} text={title} className="tracking-tight" />
      <div className="pb-4 flex items-center space-between border-b">
        <Heading
          level={6}
          fontWeight="normal"
          text={`Uploaded on ${date}`}
          className="w-full text-slate-600 leading-6"
        />

        <LikeUnlike likes={likes} unlikes={unlikes} />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
