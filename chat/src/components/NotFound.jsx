import { useNavigate } from "react-router-dom";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex-center flex-col py-24 px-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-5">
          <Heading
            level="1"
            className="md:text-5xl border-e border-gray-300 pe-4"
            text="404"
          />

          <span className="text-lg text-gray-500 uppercase ms-4">
            Not Found
          </span>
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
