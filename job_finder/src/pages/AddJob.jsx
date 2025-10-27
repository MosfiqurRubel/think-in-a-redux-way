import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { createJobThunk } from "@/features/createJob/createJobSlice";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const AddJob = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.create);

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const payload = {
      ...jobData,
      [name]: type === "checkbox" ? checked : value,
    };
    setJobData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...jobData,
      salary: Number(jobData.salary),
    };

    console.log(payload);

    dispatch(createJobThunk(payload));
    setJobData(empty);
  };

  return (
    <>
      <header className="md:flex justify-center mb-10">
        <Heading level={1} fontWeight="extrabold" text="Add New Job" />
      </header>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Title" />
          <Select
            id="title"
            name="title"
            options={titleOptions}
            value={jobData.title}
            onChange={handleChange}
            placeholder="Select Job"
            required
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Type" />
          <Select
            id="type"
            name="type"
            options={typeOptions}
            value={jobData.type}
            onChange={handleChange}
            placeholder="Select Job Type"
            required
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
              required
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
            required
          />
        </div>

        {!isLoading && isError && (
          <p className="text-danger-500">There was an error occured!</p>
        )}

        <div className="text-right">
          <Button
            disabled={isLoading}
            type="submit"
            variant="primary"
            text="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default AddJob;
