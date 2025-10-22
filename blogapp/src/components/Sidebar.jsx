import { useState } from "react";
import Select from "@/components/ui/Select";
import Checkbox from "@/components/ui/Checkbox";
import Heading from "@/components/ui/Heading";

const Sidebar = () => {
  const [formData, setFormData] = useState({
    sort: "",
    role: "all",
  });

  const sortItems = [
    { label: "Newest", value: "newest" },
    { label: "Most Liked", value: "mostliked" },
  ];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-lg:flex space-y-6">
      <div className="sidebar-content min-w-49 space-y-2">
        <Heading level="5" text="Sort" />

        <Select
          name="sort"
          options={sortItems}
          value={formData.sort}
          onChange={handleChange}
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
              name="role"
              id="all"
              value="all"
              checked={formData.role === "all"}
              onChange={handleChange}
              color="primary"
            />
            <label htmlFor="all">All</label>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              type="radio"
              name="role"
              id="saved"
              value="saved"
              checked={formData.role === "saved"}
              onChange={handleChange}
              color="info"
            />
            <label htmlFor="saved">Saved</label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Sidebar;
