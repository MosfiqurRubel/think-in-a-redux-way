import Heading from "@/components/ui/Heading";
import Input from "@/components/ui/Input";
import Label from "@/components/ui/Label";

const Home = () => {
  return (
    <div className="py-10">
      <Heading level={1} text="Home" />
      <Label text="Name" />
      <Input placeholder="enter" />
    </div>
  );
};

export default Home;
