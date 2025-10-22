import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlog } from "@/features/blog/blogSlice";
import { Link, useParams } from "react-router-dom";
import { House } from "lucide-react";
import RelatedPostList from "@/components/relatedPost/RelatedPostList";
import BlogDescription from "@/components/description/blogDescription";
import Loading from "@/components/ui/Loading";

const Post = () => {
  const dispatch = useDispatch();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const { postId } = useParams();

  const { id, tags } = blog || {};

  useEffect(() => {
    dispatch(fetchBlog(postId));
  }, [dispatch, postId]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Loading loadingText={error} />;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <div className="post-page-container !px-0">
        <BlogDescription blog={blog} />

        <RelatedPostList currentPostId={id} tags={tags} />
      </div>
    );
  }

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

      {content}
    </>
  );
};

export default Post;
