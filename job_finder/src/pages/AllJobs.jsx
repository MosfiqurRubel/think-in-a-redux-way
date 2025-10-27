import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "@/features/job/jobSlice";
import JobHeader from "@/components/jobs/JobHeader";
import JobList from "@/components/jobs/JobList";
import Loading from "@/components/ui/Loading";

const AllJobs = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  // decide what to render
  let content = null;
  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <Loading loadingText="There was an error occured!" />;
  if (!isLoading && !isError && jobs?.length === 0) {
    content = <Loading loadingText="No jobs found!" />;
  }
  if (!isLoading && !isError && jobs?.length > 0) {
    content = jobs.map((job) => <JobList key={job.id} job={job} />);
  }
  return (
    <>
      <JobHeader />
      <div className="jobs-list space-y-4">{content}</div>
    </>
  );
};

export default AllJobs;
