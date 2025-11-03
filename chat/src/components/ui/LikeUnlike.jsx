// import { useDispatch } from "react-redux";
// import { incrementLike } from "@/features/blog/blogSlice";
// import { updateBlogData } from "@/features/blogs/blogsSlice";
import { ThumbsUp } from "lucide-react";
import Button from "@/components/ui/Button";

const LikeUnlike = ({ id, likes, single = false }) => {
  // const dispatch = useDispatch();

  const handleLike = () => {
    console.log("Like ...");

    // const data = { likes: likes + 1 };

    // single
    //   ? dispatch(incrementLike({ id, data }))
    //   : dispatch(updateBlogData({ id, data }));
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
