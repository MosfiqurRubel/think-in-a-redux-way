import { useNavigate } from "react-router";
import { Construction } from "lucide-react";
import Heading from "@/components/ui/Heading";

const Wishlist = () => {
  const navigate = useNavigate();

  return (
    <div className="container h-full flex-center">
      <div className="flex flex-col items-center text-center p-6">
        <Construction className="w-20 h-20 text-heading mb-4 animate-bounce" />

        <Heading level={1} text="Page Undergoing Maintenance" />
        <Heading level={2} text="Dashboard Overview" />
        <Heading level={3} text="Recent Updates" />

        <Heading level={3}>
          Hello, <span className="text-primary">Mushfiq</span> 👋
        </Heading>

        <h1 className="text-4xl font-bold mb-3 text-heading">
          Page Undergoing Maintenance
        </h1>

        <p className="text-lg text-heading/60 max-w-md">
          We’re currently working on this page to make it better. Please check
          back soon!
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-sky-500 text-white text-base mt-8 py-2 px-5 border-none outline-none cursor-pointer rounded-4xl"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
