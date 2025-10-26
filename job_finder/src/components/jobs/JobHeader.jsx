import { Search } from "lucide-react";
import Heading from "@/components/ui/Heading";
import SearchBar from "@/components/ui/SearchBar";
import Select from "@/components/ui/Select";
import { useState } from "react";

const JobHeader = () => {
  const [salary, setSalary] = useState("default");

  const salaryItems = [
    { label: "Salary (Low to High)", value: "low" },
    { label: "Salary (High to Low)", value: "high" },
  ];

  const handleSort = (e) => {
    setSalary(e.target.value);
  };

  return (
    <header className="md:flex space-y-2 md:space-y-0 justify-between mb-10">
      <Heading level={1} fontWeight="extrabold" text="All Available Jobs" />
      <div className="flex gap-4">
        <SearchBar />

        <Select
          name="salary"
          options={salaryItems}
          value={salary}
          onChange={handleSort}
          placeholder="Default"
          className="max-w-48"
        />
      </div>
    </header>
  );
};

export default JobHeader;
