import { useDispatch, useSelector } from "react-redux";
import { tagSelected, tagRemoved } from "@/features/filter/filterSlice";

import Badge from "@/components/ui/Badge";

const Tag = ({ title }) => {
  const dispatch = useDispatch();
  const { tags: selectedTags } = useSelector((state) => state.filter);

  const isSelected = selectedTags.includes(title) ? true : false;

  const handleSelect = () => {
    if (isSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <Badge
      onClick={handleSelect}
      text={title}
      rounded="md"
      variant={isSelected ? "active" : "primary"}
      className="cursor-pointer"
    />
  );
};

export default Tag;
