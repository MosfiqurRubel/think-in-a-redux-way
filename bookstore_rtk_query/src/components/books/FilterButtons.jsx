import Button from "@/components/ui/Button";

const FilterButtons = ({ status, setStatus }) => {
  return (
    <div className="flex items-center space-x-4">
      <Button
        onClick={() => setStatus("all")}
        size="sm"
        variant="primary"
        outline={status === "all" ? false : true}
        rounded="full"
        className="px-6"
      >
        All
      </Button>
      <Button
        onClick={() => setStatus("featured")}
        size="sm"
        variant="primary"
        outline={status === "featured" ? false : true}
        rounded="full"
        className="px-6"
      >
        Featured
      </Button>
    </div>
  );
};

export default FilterButtons;
