import BlogGrid from "@/components/grid/blogGrid";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="lg:grid lg:grid-cols-[200px_auto] gap-6 py-12">
      <Sidebar />
      <BlogGrid />
    </div>
  );
};

export default Home;
