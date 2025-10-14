import Button from "@/components/ui/Button";

const FilterButtons = () => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        size="sm"
        variant="primary"
        rounded="full"
        className="px-6 cursor-pointer"
        id="lws-filterAll"
      >
        All
      </Button>
      <Button
        size="sm"
        variant="primary"
        outline
        rounded="full"
        className="px-6 cursor-pointer"
        id="lws-filterFeatured"
      >
        Featured
      </Button>
    </div>
  );
};

export default FilterButtons;
