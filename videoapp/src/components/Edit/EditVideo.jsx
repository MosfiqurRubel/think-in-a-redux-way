import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "@/features/api/apiSlice";
import Form from "./Form";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Heading from "@/components/ui/Heading";

const EditVideo = () => {
  const { videoId } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(videoId);

  // decision what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) content = <Error message="There was an error!" />;
  if (!isLoading && !isError && video?.id) content = <Form video={video} />;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <Heading level={5} fontWeight="medium" text="Edit video" />
          <p className="mt-1 text-sm text-foreground">
            Please fillup the form to edit video
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
      </div>
    </div>
  );
};

export default EditVideo;
