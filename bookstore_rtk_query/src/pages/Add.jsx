import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";

const Add = () => {
  return (
    <aside className="max-w-xl bg-white p-8 mx-auto overflow-hidden shadow-xs rounded-md">
      <Heading align="center" text="Add New Book" className="mb-8" />

      <form className="book-form">
        <Input label="Book Name" name="name" required />

        <Input label="Author" name="author" required />

        <Input label="Image Url" name="thumbnail" required />

        <div className="grid grid-cols-2 gap-8 pb-4">
          <Input label="Price" name="price" required />
          <Input
            label="Rating"
            type="number"
            min="1"
            max="5"
            name="rating"
            required
          />
        </div>

        <div className="flex items-center">
          <Checkbox name="featured" checked={true} id="input-Bookfeatured" />
          <Label
            htmlFor="featured"
            text="This is a featured book"
            className="ml-2 text-sm normal-case"
          />
        </div>

        <Button
          type="submit"
          size="md"
          variant="primary"
          id="submit"
          text="Add New Book"
          className="w-full justify-center"
        />
      </form>
    </aside>
  );
};

export default Add;
