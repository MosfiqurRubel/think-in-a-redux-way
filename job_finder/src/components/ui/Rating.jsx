import SvgIcon from "@/components/ui/SvgIcon";

const Rating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex gap-x-0.5">
      {Array(totalStars)
        .fill()
        .map((_, index) => (
          <SvgIcon
            key={index}
            name="star"
            className={`w-4 h-4 ${
              index < rating
                ? "text-yellow-400 hover:text-yellow-500"
                : "text-gray-300"
            }`}
          />
        ))}
    </div>
  );
};

export default Rating;
