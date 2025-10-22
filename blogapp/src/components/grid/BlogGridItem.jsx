import { Link } from "react-router-dom";
import { ThumbsUp } from "lucide-react";
import Tags from "@/components/Tags";

const BlogGridItem = ({ blog = {} }) => {
  const { id, title, image, tags, createdAt, likes, isSaved } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount flex items-center gap-1">
            <ThumbsUp size={16} /> {likes}
          </p>
        </div>
        <Link
          to={`/blogs/${id}`}
          className="text-xl text-heading hover:text-[#07a6ba]"
        >
          {title}
        </Link>
        <div className="flex flex-wrap gap-x-2 gap-y-1 text-gray-500 my-2">
          <Tags tags={tags} />
        </div>
        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge"> Saved </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGridItem;
