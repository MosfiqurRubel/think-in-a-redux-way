import { Bookmark, ThumbsUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Tags from "@/components/Tags";
import { useState } from "react";
import LikeUnlike from "@/components/ui/LikeUnlike";

const BlogDescription = ({ blog }) => {
  const { title, description, image, tags, isSaved } = blog || {};
  const [isToggled, setIsToggled] = useState(isSaved);

  const handleSave = () => {
    setIsToggled((prevIsToggled) => !prevIsToggled);
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
        <LikeUnlike />

        <Button
          onClick={handleSave}
          size="auto"
          variant="iconFlat"
          className="font-bold text-lg"
        >
          <Bookmark size={18} /> {isToggled ? "Saved" : "Save"}
        </Button>
      </div>
      <div className="mt-6">
        <p className="text-heading">{description}</p>
      </div>
    </section>
  );
};

export default BlogDescription;
