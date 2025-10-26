import { FilePlus2, BriefcaseBusiness, Square } from "lucide-react"; // optional if using lucide-react icons
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="space-y-4">
          <li>
            <a
              href="#"
              className="main-menu menu-active flex items-center gap-2 text-[#38BDF8] font-medium"
            >
              <BriefcaseBusiness size={14} />
              <span>All Available Jobs</span>
            </a>
            <ul className="space-y-6 lg:space-y-3 ml-6 mt-2">
              <li>
                <a className="sub-menu" href="#">
                  <Square
                    size={14}
                    className="fill-orange-700 stroke-orange-700"
                  />
                  Internship
                </a>
              </li>
              <li>
                <a className="sub-menu" href="#">
                  <Square
                    size={14}
                    className="fill-yellow-600 stroke-yellow-600"
                  />
                  Full Time
                </a>
              </li>
              <li>
                <a className="sub-menu" href="#">
                  <Square size={14} className="fill-teal-500 stroke-teal-500" />
                  Remote
                </a>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="/add-job"
              className="main-menu flex items-center gap-2 hover:text-white"
            >
              <i className="fa-solid fa-file-circle-plus"></i>
              <FilePlus2 size={14} />
              <span>Add New Job</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
