import { useDispatch } from "react-redux";
import Heading from "@/components/ui/Heading";
import SearchBar from "@/components/ui/SearchBar";
import Select from "@/components/ui/Select";
import { setSort } from "../../features/filter/filterSlice";

const JobHeader = ({ sort }) => {
  const dispatch = useDispatch();

  const salaryItems = [
    { label: "Salary (Low to High)", value: "asc" },
    { label: "Salary (High to Low)", value: "desc" },
  ];

  const handleSort = (e) => {
    dispatch(setSort(e.target.value));
  };

  return (
    <header className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
      <Heading level={1} fontWeight="extrabold" text="All Available Jobs" />
      <div className="flex gap-4">
        <SearchBar />

        <Select
          name="sort"
          options={salaryItems}
          value={sort}
          onChange={handleSort}
          placeholder="Default"
          className="max-w-48"
        />
      </div>
    </header>
  );
};

export default JobHeader;
