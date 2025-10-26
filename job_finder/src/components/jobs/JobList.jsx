import { Calendar, DollarSign, Pencil, Square, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      type: "Full Time",
      salary: 40000,
      deadline: "2024-12-31",
    },
    {
      id: 2,
      title: "Backend Developer",
      type: "Remote",
      salary: 35000,
      deadline: "2023-12-31",
    },
    {
      id: 3,
      title: "Social Media Manager",
      type: "Internship",
      salary: "20000",
      deadline: "2023-11-30",
    },
  ];
  const colors = [
    { Internship: "orange-700" },
    { "Full Time": "yellow-600" },
    { Remote: "teal-500" },
  ];

  const getColor = (type) => {
    const found = colors.find((c) => c[type]);
    return found ? found[type] : "gray-400";
  };

  return (
    <div className="jobs-list space-y-4">
      {jobs.map((job, idx) => (
        <div
          key={idx}
          className="lws-single-job flex justify-between items-start border-b border-slate-700 pb-4"
        >
          <div className="flex-1 min-w-0">
            <Heading
              level={5}
              fontWeight="semibold"
              text={job.title}
              className="mb-2"
            />
            <div className="job-footers flex flex-wrap gap-6 text-sm text-slate-300">
              <div className="flex items-center">
                <Square
                  key={job.id}
                  size={18}
                  className={`mr-1.5 fill-${getColor(
                    job.type
                  )} stroke-${getColor(job.type)}`}
                />
                {job.type}
              </div>
              <div className="flex items-center">
                <DollarSign size={18} className="stroke-slate-400 mr-1.5" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <Calendar size={18} className="stroke-slate-400 mr-1.5" />
                Closing on {job.deadline}
              </div>
            </div>
          </div>

          <div className="mt-5 flex lg:mt-0 lg:ml-4 gap-3">
            <Button variant="primary" className="gap-1">
              <Pencil size={16} /> Edit
            </Button>

            <Button variant="danger" className="gap-1">
              <Trash size={16} className="fill-white" /> Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobList;
