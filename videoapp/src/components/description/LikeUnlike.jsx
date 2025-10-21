import { useDispatch, useSelector } from "react-redux";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import { toggleLikeDislike } from "@/features/video/videoSlice";
import Button from "@/components/ui/Button";

const LikeUnlike = () => {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const { id, likes = 0, unlikes = 0 } = video || {};

  const handleLike = () => {
    dispatch(toggleLikeDislike({ id, data: { likes: likes + 1 } }));
  };

  const handleUnlike = () => {
    dispatch(toggleLikeDislike({ id, data: { unlikes: unlikes + 1 } }));
  };

  return (
    <div className="flex items-center justify-end gap-10 w-48 pe-2">
      <div className="flex gap-1">
        <Button size="icon" onClick={handleLike}>
          <ThumbsUp size={20} />
          <span className="text-sm text-slate-600">{likes}</span>
        </Button>
      </div>
      <div className="flex gap-1">
        <Button size="icon" onClick={handleUnlike}>
          <ThumbsDown size={20} />
          <span className="text-sm text-slate-600">{unlikes}</span>
        </Button>
      </div>
    </div>
  );
};

export default LikeUnlike;
