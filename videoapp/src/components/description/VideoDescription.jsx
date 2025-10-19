import Heading from "@/components/ui/Heading";
import LikeUnlike from "./LikeUnlike";

const VideoDescription = () => {
  return (
    <div>
      <Heading level={4} text="Some video title" />

      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        Some video title
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <Heading level={6} text="Uploaded on 23 Nov 2022" />
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on 23 Nov 2022
        </h2>

        <LikeUnlike />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
};

export default VideoDescription;
