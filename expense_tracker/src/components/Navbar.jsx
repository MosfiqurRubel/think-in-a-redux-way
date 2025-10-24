import Heading from "@/components/ui/Heading";

const Navbar = () => {
  return (
    <nav className="w-full bg-primary text-white py-5">
      <div
        className="flex items-center justify-center
      "
      >
        <Heading level={1} text="Expense Tracker" />
      </div>
    </nav>
  );
};

export default Navbar;
