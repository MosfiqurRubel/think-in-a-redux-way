import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "@/features/api/apiSlice";
import Player from "@/components/video/Player";
import Description from "@/components/video/Description";
import RelatedVideos from "@/components/video/related/RelatedVideos";
import PlayerLoader from "@/components/ui/loaders/PlayerLoader";
import DescriptionLoader from "@/components/ui/loaders/DescriptionLoader";
import Error from "@/components/ui/loaders/Error";
import RelatedVideoLoader from "@/components/ui/loaders/RelatedVideoLoader";

const Video = () => {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  // decide what to render
  let content = null;
  if (isLoading) {
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && video?.id) {
    content = (
      <>
        <Player link={video.link} title={video.title} />
        <Description video={video} />
      </>
    );
  }

  return (
    <section className="grid grid-cols-3 gap-2 lg:gap-8">
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        {content}
      </div>

      {video?.id ? (
        <RelatedVideos />
      ) : isLoading ? (
        <>
          <RelatedVideoLoader />
          <RelatedVideoLoader />
          <RelatedVideoLoader />
        </>
      ) : (
        <Error message="There was an error!" />
      )}
    </section>
  );
};

export default Video;
