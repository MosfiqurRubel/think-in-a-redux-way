const EditJob = () => {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Edit Job</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Updated Job Title"
          className="w-full p-2 border rounded dark:border-gray-700 dark:bg-slate-800"
        />
        <input
          type="text"
          placeholder="Updated Salary"
          className="w-full p-2 border rounded dark:border-gray-700 dark:bg-slate-800"
        />
        <select className="w-full p-2 border rounded dark:border-gray-700 dark:bg-slate-800">
          <option>Full-Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Update Job
        </button>
      </form>
    </section>
  );
};

export default EditJob;
