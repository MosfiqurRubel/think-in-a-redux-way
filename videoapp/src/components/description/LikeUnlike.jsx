import { ThumbsDown, ThumbsUp } from "lucide-react";

const LikeUnlike = ({ likes, unlikes }) => {
  return (
    <div className="flex items-center justify-end gap-10 w-48 pe-2">
      <div className="flex gap-1">
        <ThumbsUp size={20} />
        <span className="text-sm text-slate-600">{likes}</span>
      </div>
      <div className="flex gap-1">
        <ThumbsDown size={20} />
        <span className="text-sm text-slate-600">{unlikes}</span>
      </div>
    </div>
  );
};

export default LikeUnlike;
