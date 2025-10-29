import Player from "@/components/video/Player";
import Description from "@/components/video/Description";
import RelatedVideos from "@/components/video/related/RelatedVideos";

const Video = () => {
  return (
    <section className="grid grid-cols-3 gap-2 lg:gap-8">
      <div className="col-span-full w-full space-y-8 lg:col-span-2">
        <Player />
        <Description />
      </div>

      <RelatedVideos />
    </section>
  );
};

export default Video;
