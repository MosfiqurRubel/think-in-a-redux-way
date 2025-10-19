import Pagination from "@/components/ui/Pagination";
import Tags from "@/components/Tags";
import VideoGrid from "@/components/grid/VideoGrid";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
