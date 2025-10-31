import { useGetVideosQuery } from "@/features/api/apiSlice";
import VideoLoader from "@/components/ui/loaders/VideoLoader";
import Error from "@/components/ui/Error";
import Video from "./Video";

const Videos = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <VideoLoader />;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No videos found!" />;
  }
  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }

  return content;
};

export default Videos;
