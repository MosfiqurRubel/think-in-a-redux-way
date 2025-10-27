import { useNavigate } from "react-router-dom";
import { Calendar, DollarSign, Pencil, Square, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const JobList = ({ job }) => {
  const navigate = useNavigate();
  const { id, title, type, salary, deadline } = job || {};

  const typeColor = {
    Internship: "fill-orange-700 stroke-orange-700",
    "Full Time": "fill-yellow-600 stroke-yellow-600",
    Remote: "fill-teal-500 stroke-teal-500",
  };

  return (
    <div className="lws-single-job flex justify-between items-start border-b border-slate-700 pb-4">
      <div className="flex-1 min-w-0">
        <Heading
          level={5}
          fontWeight="semibold"
          text={title}
          className="mb-2"
        />
        <div className="job-footers flex flex-wrap gap-6 text-sm text-slate-300">
          <div className="flex items-center">
            <Square
              size={18}
              className={`mr-1.5 ${typeColor[type]} ${typeColor[type]}`}
            />
            {type}
          </div>
          <div className="flex items-center">
            <DollarSign size={18} className="stroke-slate-400 mr-1.5" />
            {salary}
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="stroke-slate-400 mr-1.5" />
            Closing on {deadline}
          </div>
        </div>
      </div>

      <div className="mt-5 flex lg:mt-0 lg:ml-4 gap-3">
        <Button
          onClick={() => navigate(`/edit-job/${id}`)}
          size="sm"
          variant="primary"
          className="gap-1"
        >
          <Pencil size={16} /> Edit
        </Button>

        <Button size="sm" variant="danger" className="gap-1">
          <Trash size={16} className="fill-white" /> Delete
        </Button>
      </div>
    </div>
  );
};

export default JobList;
