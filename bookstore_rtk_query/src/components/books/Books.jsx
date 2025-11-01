import Heading from "@/components/ui/Heading";
import FilterButtons from "./FilterButtons";
import Book from "./Book";

const Books = () => {
  return (
    <section className="order-2 xl:-order-1">
      <header className="flex items-center justify-between mb-12">
        <Heading text="Book List" className="text-heading mt-2" />
        <FilterButtons />
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 mx-auto min-h-60">
        <Book />
        <Book />
        <Book />
        <Book />
      </div>
    </section>
  );
};

export default Books;
