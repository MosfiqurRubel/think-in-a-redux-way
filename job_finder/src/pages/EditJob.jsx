import { useState } from "react";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const EditJob = () => {
  const empty = {
    title: "",
    type: "",
    salary: "",
    deadline: "",
  };
  const [jobData, setJobData] = useState(empty);

  const jobTitles = [
    { label: "Software Engineer", value: "software_engineer" },
    { label: "Software Developer", value: "software_developer" },
    { label: "Full Stack Developer", value: "full_stackdeveloper" },
    { label: "DevOps Engineer", value: "devOpsEngineer" },
    { label: "QA Engineer", value: "qaEngineer" },
    { label: "Frontend Developer", value: "frontend_developer" },
    { label: "Frontend Engineer", value: "frontend_engineer" },
  ];

  const jobTypes = [
    { label: "Full Type", value: "fulltype" },
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
    setJobData(empty);
  };

  return (
    <>
      <header className="md:flex justify-center mb-10">
        <Heading level={1} fontWeight="extrabold" text="Edit Job" />
      </header>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Title" />
          <Select
            name="title"
            options={jobTitles}
            value={jobData.title}
            onChange={handleChange}
            placeholder="Select Job"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Type" />
          <Select
            name="type"
            options={jobTypes}
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

        <div className="text-right">
          <Button type="submit" variant="primary" text="Edit" />
        </div>
      </form>
    </>
  );
};

export default EditJob;
