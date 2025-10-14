import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";

const AddBookForm = () => {
  return (
    <aside className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <Heading text="Add New Book" className="mb-8 text-center" />
      <form className="book-form">
        <div className="space-y-2">
          <Label htmlFor="name" text="Book Name" />
          <Input name="name" id="input-Bookname" required={true} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author" text="Author" />
          <Input name="author" id="input-Bookauthor" required={true} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="image" text="Image Url" />
          <Input name="author" id="input-Bookthumbnail" required={true} />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <Label htmlFor="price" text="Price" />
            <Input
              name="price"
              id="input-Bookprice"
              type="number"
              required={true}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating" text="Rating" />
            <Input
              name="rating"
              min="1"
              max="5"
              id="input-Bookrating"
              type="number"
              required={true}
            />
          </div>
        </div>

        <div className="flex items-center">
          <Checkbox name="featured" id="input-Bookfeatured" />
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
          className="w-full justify-center"
        >
          Add Book
        </Button>
      </form>
    </aside>
  );
};

export default AddBookForm;
