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
                ? "text-warning-400 hover:text-warning-500"
                : "text-secondary-300"
            }`}
          />
        ))}
    </div>
  );
};

export default Rating;
