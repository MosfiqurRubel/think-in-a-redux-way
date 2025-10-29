import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "@/features/job/jobSlice";
import JobHeader from "@/components/jobs/JobHeader";
import JobList from "@/components/jobs/JobList";
import Loading from "@/components/ui/Loading";

const AllJobs = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError } = useSelector((state) => state.job);
  const { type, search, sort } = useSelector((state) => state.filter);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // 🧮 Filter by type
  let filteredJobs = jobs.filter((job) => {
    if (type === "all") return true;
    return job.type?.toLowerCase() === type.toLowerCase();
  });

  // 🔍 Search by title
  if (search) {
    filteredJobs = filteredJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.type.toLowerCase().includes(search.toLowerCase())
    );
  }

  // 💰 Sort by salary
  if (sort === "asc") {
    filteredJobs = [...filteredJobs].sort((a, b) => a.salary - b.salary);
  } else {
    filteredJobs = [...filteredJobs].sort((a, b) => b.salary - a.salary);
  }

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <Loading loadingText="There was an error occured!" />;
  if (!isLoading && !isError && filteredJobs?.length === 0) {
    content = <Loading loadingText="No jobs found!" />;
  }
  if (!isLoading && !isError && filteredJobs?.length > 0) {
    content = filteredJobs.map((job) => <JobList key={job.id} job={job} />);
  }
  return (
    <>
      <JobHeader sort={sort} />
      <div className="jobs-list space-y-4">{content}</div>
    </>
  );
};

export default AllJobs;
