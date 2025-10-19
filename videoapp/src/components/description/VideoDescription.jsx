import Heading from "@/components/ui/Heading";
import LikeUnlike from "./LikeUnlike";

const VideoDescription = () => {
  return (
    <div>
      <Heading level={5} text="Some video title" className="tracking-tight" />
      <div className="pb-4 flex items-center space-between border-b">
        <Heading
          level={6}
          fontWeight="normal"
          text="Uploaded on 23 Nov 2022"
          className="w-full text-slate-600 leading-6"
        />

        <LikeUnlike />
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        Some video description here
      </div>
    </div>
  );
};

export default VideoDescription;
