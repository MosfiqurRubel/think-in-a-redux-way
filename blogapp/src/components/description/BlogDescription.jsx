import { Bookmark, ThumbsUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Tags from "@/components/Tags";
import { useState } from "react";

const BlogDescription = ({ blog }) => {
  const { title, description, image, tags, likes, isSaved } = blog || {};
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

      <div
        className="flex flex-wrap gap-x-2 gap-y-1 text-gray-500 my-2"
        id="lws-singleTags"
      >
        <Tags tags={tags} />
      </div>
      <div className="flex items-center gap-6">
        <Button size="icon" className="font-bold gap-x-1 hover:text-teal-500">
          <ThumbsUp size={18} /> {likes}
        </Button>
        <Button
          onClick={handleSave}
          size="icon"
          className={`font-bold gap-x-1 hover:text-teal-500 ${
            isToggled ? "text-teal-500" : ""
          }`}
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
