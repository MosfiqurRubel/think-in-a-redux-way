import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJobThunk } from "@/features/deleteJob/deleteJobSlice";
import { editActive } from "@/features/updateJob/updateJobSlice";
import { Calendar, DollarSign, Pencil, Square, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const JobList = ({ job }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, type, salary, deadline } = job || {};

  const typeColor = {
    internship: "fill-orange-700 stroke-orange-700",
    full_time: "fill-yellow-600 stroke-yellow-600",
    remote: "fill-teal-500 stroke-teal-500",
  };

  const handleDelete = () => {
    dispatch(removeJobThunk(id));
  };

  const handleEdit = () => {
    dispatch(editActive(job));
    navigate(`/edit-job/${id}`);
  };

  return (
    <div className="lws-single-job flex justify-between items-start border-b border-secondary-200 pb-4">
      <div className="flex-1 min-w-0">
        <Heading
          level={5}
          fontWeight="semibold"
          text={title.split("_").join(" ")}
          className="capitalize mb-2"
        />
        <div className="job-footers flex flex-wrap gap-6 text-sm text-foreground">
          <div className="flex items-center capitalize">
            <Square
              size={18}
              className={`mr-1.5 ${typeColor[type?.toLowerCase()]} ${
                typeColor[type?.toLowerCase()]
              }`}
            />
            {type.split("_").join(" ")}
          </div>
          <div className="flex items-center">
            <DollarSign size={18} className="stroke-secondary-400 mr-1.5" />
            {salary}
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="stroke-secondary-400 mr-1.5" />
            Closing on {deadline}
          </div>
        </div>
      </div>

      <div className="mt-5 flex lg:mt-0 lg:ml-4 gap-3">
        <Button
          onClick={handleEdit}
          size="sm"
          variant="primary"
          className="gap-1"
        >
          <Pencil size={16} /> Edit
        </Button>

        <Button
          onClick={handleDelete}
          size="sm"
          variant="danger"
          className="gap-1"
        >
          <Trash size={16} className="fill-white" /> Delete
        </Button>
      </div>
    </div>
  );
};

export default JobList;
