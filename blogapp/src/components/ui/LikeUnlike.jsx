import { useDispatch, useSelector } from "react-redux";
import { ThumbsUp } from "lucide-react";
import Button from "@/components/ui/Button";
import { incrementLike } from "@/features/blog/blogSlice";

const LikeUnlike = () => {
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);
  const { id, likes = 0 } = blog || {};

  const handleLike = () => {
    dispatch(incrementLike({ id, data: { likes: likes + 1 } }));
  };

  return (
    <Button
      size="auto"
      variant="iconFlat"
      rounded="full"
      icon={ThumbsUp}
      text={likes}
      onClick={handleLike}
    />
  );
};

export default LikeUnlike;
