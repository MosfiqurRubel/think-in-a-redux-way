import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchBlogs } from "@/features/blogs/blogsSlice";
import BlogGridItem from "./BlogGridItem";
import Loading from "@/components/ui/Loading";

const BlogGrid = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error, sortBy, filterBy } = useSelector(
    (state) => state.blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  // ✅ Filter and Sort Logic
  const visibleBlogs = [...blogs]
    .filter((b) => (filterBy === "saved" ? b.isSaved : true))
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      if (sortBy === "mostliked") {
        return b.likes - a.likes;
      }
      return 0;
    });

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError) content = <Loading loadingText={error} />;

  if (!isError && !isLoading && visibleBlogs?.length === 0)
    content = <Loading loadingText="No blogs found!" />;

  if (!isError && !isLoading && visibleBlogs?.length > 0) {
    content = visibleBlogs.map((blog) => (
      <BlogGridItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 min-h-80">
      {content}
    </div>
  );
};

export default BlogGrid;
