import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTags } from "@/features/tags/tagsSlice";
import Tag from "./Tag";

const Tags = () => {
  const { tags } = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return tags?.length > 0 ? (
    <section className="mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b border-border overflow-x-auto">
      {tags.map((tag) => (
        <Tag key={tag.id} title={tag.title} />
      ))}
    </section>
  ) : null;
};

export default Tags;
