import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-full flex-center">
      <div className="flex flex-col items-center">
        <div class="flex items-center mb-5">
          <h1 class="text-5xl font-bold border-e border-gray-300 pe-4">404</h1>
          <span class="text-lg text-gray-500 uppercase ms-4">Not Found</span>
        </div>
        <Button
          variant="primary"
          rounded="full"
          text="Go Back Home"
          onClick={() => navigate("/")}
        />
      </div>
    </section>
  );
};

export default NotFound;
