import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  updateJobThunk,
  editInactive,
} from "@/features/updateJob/updateJobSlice";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const EditJob = () => {
  const dispatch = useDispatch();
  const { editing, isLoading } = useSelector((state) => state.update);
  const navigate = useNavigate();

  const empty = {
    title: "",
    type: "",
    salary: "",
    deadline: "",
  };
  const [jobData, setJobData] = useState(empty);

  const titleOptions = [
    { label: "Software Engineer", value: "software_engineer" },
    { label: "Software Developer", value: "software_developer" },
    { label: "Full Stack Developer", value: "full_stack_developer" },
    { label: "DevOps Engineer", value: "devops_engineer" },
    { label: "QA Engineer", value: "qa_engineer" },
    { label: "Frontend Developer", value: "frontend_developer" },
    { label: "Frontend Engineer", value: "frontend_engineer" },
  ];

  const typeOptions = [
    { label: "Full Time", value: "full_time" },
    { label: "Internship", value: "internship" },
    { label: "Remote", value: "remote" },
  ];

  // listen for edit mode active
  useEffect(() => {
    const { id, title, type, salary, deadline } = editing || {};

    if (id) {
      setJobData({ title, type, salary, deadline });
    } else {
      setJobData(empty);
    }
  }, [editing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const payload = {
      ...jobData,
      [name]: type === "checkbox" ? checked : value,
    };
    setJobData(payload);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const payload = {
      ...jobData,
      salary: Number(jobData.salary),
    };
    dispatch(updateJobThunk({ id: editing?.id, data: payload }));
    console.log(payload); // শুধুমাত্র submit করলে log হবে
    setJobData(empty);
  };

  const handleCancel = () => {
    setJobData(empty);
    dispatch(editInactive());
    navigate("/");
  };

  return (
    <>
      <header className="md:flex justify-center mb-10">
        <Heading level={1} fontWeight="extrabold" text="Edit Job" />
      </header>
      <form onSubmit={handleUpdate} className="space-y-6">
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Title" />
          <Select
            name="title"
            options={titleOptions}
            value={jobData.title}
            onChange={handleChange}
            placeholder="Select Job"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Type" />
          <Select
            name="type"
            options={typeOptions}
            value={jobData.type}
            onChange={handleChange}
            placeholder="Select Job Type"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Salary" />
          <div className="flex relative">
            <span className="flex-center bg-card rounded-l-sm absolute top-px left-px bottom-px px-3 text-sm">
              BDT
            </span>
            <Input
              type="number"
              name="salary"
              value={jobData.salary}
              onChange={handleChange}
              placeholder="20,00,000"
              className="ps-15"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Deadline" />
          <Input
            type="date"
            name="deadline"
            value={jobData.deadline}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
          />
        </div>

        <div className="flex justify-end gap-6">
          <Button
            onClick={handleCancel}
            disabled={isLoading}
            variant="secondary"
            text="canclel"
          />
          <Button
            disabled={isLoading}
            type="submit"
            variant="primary"
            text="Edit"
          />
        </div>
      </form>
    </>
  );
};

export default EditJob;
