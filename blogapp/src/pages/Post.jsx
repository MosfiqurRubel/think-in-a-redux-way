import { Link } from "react-router-dom";
import RelatePostList from "@/components/relatePost/RelatePostList";
import BlogDescription from "@/components/description/blogDescription";
import mernImage from "@/assets/images/mern.webp";
import { House } from "lucide-react";

const Post = () => {
  return (
    <>
      <div className="w-full mt-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-teal-600"
          id="lws-goHome"
        >
          <House /> Go Home
        </Link>
      </div>

      <div className="post-page-container !px-0">
        <section className="post">
          <img
            src={mernImage}
            alt="githum"
            className="w-full rounded-md"
            id="lws-megaThumb"
          />

          <BlogDescription />
        </section>

        <RelatePostList />
      </div>
    </>
  );
};

export default Post;
