import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTags } from "@/features/tags/tagsSlice";
import Badge from "@/components/ui/Badge";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();
  // const

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b border-border overflow-y-auto">
      {tags.map((tag) => (
        <Badge key={tag.id} text={tag.title} />
      ))}
    </section>
  ) : null;
};

export default Tags;
