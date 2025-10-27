import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="h-full flex-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-5">
          <Heading
            level={1}
            fontWeight="extrabold"
            text="404"
            className="text-5xl border-e border-gray-300 pe-4"
          ></Heading>
          <span className="text-lg text-secondary-400 uppercase ms-4">
            Not Found
          </span>
        </div>

        <Button
          onClick={() => navigate("/")}
          variant="info"
          rounded="full"
          text="Go Back Home"
        />
      </div>
    </section>
  );
};

export default NotFound;
