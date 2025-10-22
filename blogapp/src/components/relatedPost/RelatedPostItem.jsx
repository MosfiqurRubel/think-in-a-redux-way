import { Link } from "react-router-dom";
import Tags from "@/components/Tags";

const RelatedPostItem = ({ post }) => {
  const { id, title, image, tags, createdAt } = post || {};

  return (
    <div className="space-y-4 related-post-container">
      <div className="card">
        <Link to={`/blogs/${id}`}>
          <img src={image} className="card-image" alt={title} />
        </Link>
        <div className="p-4">
          <Link
            to={`/blogs/${id}`}
            className="text-lg post-title lws-RelatedPostTitle"
          >
            {title}
          </Link>
          <div className="flex flex-wrap gap-1 text-gray-500 my-1">
            <Tags tags={tags} />
          </div>
          <p>{createdAt}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedPostItem;
