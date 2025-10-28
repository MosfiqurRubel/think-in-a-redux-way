import { FilePlus2, BriefcaseBusiness, Square } from "lucide-react";
import NavLink from "./ui/NavLink";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/"
              icon={BriefcaseBusiness}
              label="All Available Jobs"
            />
            <ul className="space-y-6 lg:space-y-3 ml-6 mt-2">
              <li>
                <NavLink
                  to="#"
                  icon={Square}
                  iconSize={14}
                  label="Internship"
                  iconClass="fill-orange-700 stroke-orange-700"
                />
              </li>
              <li>
                <NavLink
                  to="#"
                  icon={Square}
                  iconSize={14}
                  label="Full Time"
                  iconClass="fill-warning-600 stroke-warning-600"
                />
              </li>
              <li>
                <NavLink
                  to="#"
                  icon={Square}
                  iconSize={14}
                  label="Remote"
                  iconClass="fill-teal-500 stroke-teal-500"
                />
              </li>
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
