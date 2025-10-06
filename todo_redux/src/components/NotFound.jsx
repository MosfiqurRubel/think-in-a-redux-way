import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center">
      <div class="flex items-center mb-5">
        <h1 class="text-5xl font-bold border-e border-gray-300 pe-4">404</h1>
        <span class="text-lg text-gray-500 uppercase ms-4">Not Found</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="bg-sky-500 text-white text-base py-2 px-5 border-none outline-none cursor-pointer rounded-4xl"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default NotFound;
