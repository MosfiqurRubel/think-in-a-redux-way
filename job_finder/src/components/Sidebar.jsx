import { useDispatch, useSelector } from "react-redux";
import { setType } from "@/features/filter/filterSlice";
import { FilePlus2, BriefcaseBusiness, Square } from "lucide-react";
import NavLink from "./ui/NavLink";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.filter);

  const filters = [
    { label: "Internship", value: "internship" },
    { label: "Full Time", value: "full_time" },
    { label: "Remote", value: "remote" },
  ];

  const typeColor = {
    internship: "fill-orange-700 stroke-orange-700",
    full_time: "fill-yellow-600 stroke-yellow-600",
    remote: "fill-teal-500 stroke-teal-500",
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              icon={BriefcaseBusiness}
              label="All Available Jobs"
              onClick={() => dispatch(setType("all"))}
            />
            <ul className="space-y-6 lg:space-y-3 ml-6 mt-2">
              {filters.map((f) => (
                <li key={f.value}>
                  <span
                    onClick={() => dispatch(setType(f.value))}
                    className={`sub-menu cursor-pointer  ${
                      type === f.value ? "text-primary-500" : ""
                    }`}
                  >
                    <Square
                      size={14}
                      className={`mr-1.5 ${typeColor[f.value?.toLowerCase()]} ${
                        typeColor[f.value?.toLowerCase()]
                      }`}
                    />
                    {f.label}
                  </span>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <NavLink
              to="/add-job"
              icon={FilePlus2}
              iconSize={14}
              label="Add New Job"
            />
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
