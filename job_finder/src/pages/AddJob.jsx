import { useState } from "react";
import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";

const AddJob = () => {
  const empty = {
    title: "",
    type: "",
    salary: "",
    deadline: "",
  };
  const [data, setJobData] = useState(empty);

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
    const payload = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setJobData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      ...data,
      [e.target.name]: e.target.value,
    };
    setJobData(payload);

    console.log(data);
    setJobData(empty);
  };

  return (
    <>
      <header className="md:flex justify-center mb-10">
        <Heading level={1} fontWeight="extrabold" text="Add New Job" />
      </header>
      <form onClick={handleSubmit} className="space-y-4">
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Title" />
          <Select
            name="title"
            options={jobTitles}
            value={data.title}
            onChange={handleChange}
            placeholder="Select Job"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Job Type" />
          <Select
            name="type"
            options={jobTypes}
            value={data.type}
            onChange={handleChange}
            placeholder="Select Job Type"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Salary" />
          <Input
            name="salary"
            value={data.salary}
            onChange={handleChange}
            placeholder="Salary"
          />
        </div>
        <div className="md:grid md:grid-cols-[200px_minmax(300px,1fr)]">
          <Label text="Deadline" />
          <Input
            type="date"
            name="deadline"
            value={data.deadline}
            onChange={handleChange}
            placeholder="mm/dd/yyyy"
          />
        </div>

        <div className="text-right">
          <Button variant="primary" text="Submit" />
        </div>
      </form>
    </>
  );
};

export default AddJob;
