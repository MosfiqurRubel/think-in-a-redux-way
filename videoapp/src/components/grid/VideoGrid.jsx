import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchVideos } from "@/features/videos/videosSlice";
import VideoGridItem from "./VideoGridItem";
import Loading from "@/components/ui/Loading";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.videos
  );
  const { tags, search } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchVideos({ tags, search }));
  }, [dispatch, tags, search]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Loading loadingText={error} />;

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }
  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <section className="pt-12">
      <div className="grid grid-cols-12 gap-x-4 gap-y-10 mx-auto px-5 lg:px-0 min-h-80">
        {content}
      </div>
    </section>
  );
};

export default VideoGrid;
