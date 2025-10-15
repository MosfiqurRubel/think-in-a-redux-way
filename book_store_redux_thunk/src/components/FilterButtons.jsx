import { useDispatch, useSelector } from "react-redux";
import { selectedBook } from "@/redux/filters/actions";
import Button from "@/components/ui/Button";

const FilterButtons = () => {
  const status = useSelector((state) => state.filter.status);
  const dispatch = useDispatch();

  const handleAll = (statusAll) => {
    dispatch(selectedBook(statusAll));
    console.log(statusAll);
  };
  return (
    <div className="flex items-center space-x-4">
      <Button
        onClick={() => handleAll("all")}
        size="sm"
        variant="primary"
        outline={status === "all" ? false : true}
        rounded="full"
        className="px-6 cursor-pointer"
        id="lws-filterAll"
      >
        All
      </Button>
      <Button
        onClick={() => handleAll("featured")}
        size="sm"
        variant="primary"
        outline={status === "featured" ? false : true}
        rounded="full"
        className="px-6 cursor-pointer"
        id="lws-filterFeatured"
      >
        Featured
      </Button>
    </div>
  );
};

export default FilterButtons;
