import Heading from "@/components/ui/Heading";

const Balance = () => {
  return (
    <div className="bg-primary text-white p-4 sm:p-6 min-w-[320px] sm:min-w-[400px] rounded-lg">
      <p className="text-gray-300 text-sm mb-1">Your Current Balance</p>
      <h3 className="text-3xl font-bold">
        <span>৳</span>
        <span className="ml-1">10500</span>
      </h3>
    </div>
  );
};

export default Balance;
