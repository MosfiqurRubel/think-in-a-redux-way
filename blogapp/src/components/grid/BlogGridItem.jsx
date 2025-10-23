import { Link } from "react-router-dom";
import Tags from "@/components/Tags";
import LikeUnlike from "@/components/ui/LikeUnlike";

const BlogGridItem = ({ blog = {} }) => {
  const { id, title, image, tags = [], createdAt, isSaved, likes = 0 } = blog;

  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="lws-card-image" alt={title} />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>

          <LikeUnlike id={id} likes={likes} />
        </div>
        <Link
          to={`/blogs/${id}`}
          className="text-xl text-heading hover:text-[#07a6ba]"
        >
          {title}
        </Link>

        <Tags
          tags={tags}
          prefix="#"
          separator=", "
          className=" gap-x-2 gap-y-1 text-gray-500 my-2"
          tagClass="text-gray-500"
        />

        {isSaved && (
          <div className="flex gap-2 mt-4">
            <span className="lws-badge">Saved</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogGridItem;
