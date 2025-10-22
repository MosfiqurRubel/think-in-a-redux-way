import RelatePostItem from "./RelatePostItem";
import Heading from "@/components/ui/Heading";

const RelatePostList = () => {
  return (
    <aside className="space-y-4">
      <Heading level="4" text="Related Posts" />
      <RelatePostItem />
      <RelatePostItem />
    </aside>
  );
};

export default RelatePostList;
