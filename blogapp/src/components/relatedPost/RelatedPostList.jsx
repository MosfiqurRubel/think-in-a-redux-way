import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRelatedPosts } from "@/features/RelatedPosts/RelatedPostsSlice";
import RelatedPostItem from "./RelatedPostItem";
import Heading from "@/components/ui/Heading";
import Loading from "@/components/ui/Loading";

const RelatedPostList = ({ currentPostId, tags }) => {
  const dispatch = useDispatch();
  const { relatedPosts, isLoading, isError, error } = useSelector(
    (state) => state.relatedPosts
  );

  useEffect(() => {
    dispatch(fetchRelatedPosts({ tags, id: currentPostId }));
  }, [dispatch, tags, currentPostId]);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Loading loadingText={error} />;
  if (!isLoading && !isError && relatedPosts?.length === 0) {
    content = <Loading loadingText="No related post found!" />;
  }
  if (!isLoading && !isError && relatedPosts?.length > 0) {
    content = relatedPosts.map((post) => (
      <RelatedPostItem key={post.id} post={post} />
    ));
  }

  return (
    <aside className="space-y-4">
      <Heading level="4" text="Related Posts" />
      {content}
    </aside>
  );
};

export default RelatedPostList;
