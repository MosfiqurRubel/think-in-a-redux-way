import { useDispatch, useSelector } from "react-redux";
import BlogGridItem from "./BlogGridItem";
import { useEffect } from "react";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import Loading from "@/components/ui/Loading";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Loading loadingText={error} />;

  if (!isError && !isLoading && blogs?.length === 0)
    content = <Loading loadingText="No blogs found!" />;

  if (!isError && !isLoading && blogs?.length > 0) {
    content = blogs.map((blog) => <BlogGridItem key={blog.id} blog={blog} />);
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 min-h-80">
      {content}
    </div>
  );
};

export default BlogGrid;
