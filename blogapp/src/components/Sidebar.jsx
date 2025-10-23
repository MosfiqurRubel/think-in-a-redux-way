import { useDispatch, useSelector } from "react-redux";
import { sortChanged, filterChanged } from "@/features/blogs/blogsSlice";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Heading from "@/components/ui/Heading";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { sortBy, filterBy } = useSelector((state) => state.blogs);

  const sortItems = [
    { label: "Newest", value: "newest" },
    { label: "Most Liked", value: "mostliked" },
  ];

  const handleSort = (e) => {
    dispatch(sortChanged(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterChanged(e.target.value));
  };

  return (
    <aside className="max-lg:flex space-y-6">
      <div className="sidebar-content min-w-49 space-y-2">
        <Heading level="5" text="Sort" />

        <Select
          name="sort"
          options={sortItems}
          value={sortBy}
          onChange={handleSort}
          placeholder="Default"
          id="lws-sort"
        />
      </div>
      <div className="grow"></div>
      <div className="sidebar-content min-w-49 space-y-3">
        <Heading level="5" text="Filter" />
        <div className="max-lg:flex max-lg:items-center max-lg:gap-x-10 lg:space-y-3">
          <div className="flex items-center gap-3">
            <Checkbox
              type="radio"
              name="filter"
              id="all"
              value="all"
              checked={filterBy === "all"}
              onChange={handleFilter}
              color="primary"
            />
            <label htmlFor="all">All</label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              type="radio"
              name="filter"
              id="saved"
              value="saved"
              checked={filterBy === "saved"}
              onChange={handleFilter}
              color="info"
            />
            <label htmlFor="saved">Saved</label>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
