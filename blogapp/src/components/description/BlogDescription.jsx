import { useDispatch } from "react-redux";
import { toggleSaveBlog } from "@/features/blog/blogSlice";
import { Bookmark } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Tags from "@/components/Tags";
import LikeUnlike from "@/components/ui/LikeUnlike";

const BlogDescription = ({ blog }) => {
  const dispatch = useDispatch();
  const {
    id,
    title,
    description,
    image,
    tags,
    likes = 0,
    isSaved,
  } = blog || {};

  const handleSave = () => {
    dispatch(toggleSaveBlog({ id, data: { isSaved: !isSaved } }));
  };

  return (
    <section className="post">
      <img
        src={image}
        alt={title}
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <Heading level="3" fontWeight="bold" text={title} className="mt-6 mb-2" />

      <Tags
        tags={tags}
        prefix="#"
        separator=", "
        className="gap-x-2 gap-y-1 my-2"
      />

      <div className="flex items-center gap-6">
        <LikeUnlike id={id} likes={likes} single />

        <Button
          onClick={handleSave}
          size="auto"
          variant={`${isSaved ? "iconFlatFill" : "iconFlat"}`}
          className="font-bold text-lg"
        >
          <Bookmark size={18} /> {isSaved ? "Saved" : "Save"}
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-heading">{description}</p>
      </div>
    </section>
  );
};

export default BlogDescription;
