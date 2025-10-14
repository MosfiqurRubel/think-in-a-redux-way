import { useState } from "react";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";

const BookForm = () => {
  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handleChange = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e---", bookData);
    setBookData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <aside className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <Heading text="Add New Book" className="mb-8 text-center" />
      <form className="book-form" onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name" text="Book Name" />
          <Input
            name="name"
            value={bookData.name}
            onChange={handleChange}
            id="input-Bookname"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="author" text="Author" />
          <Input
            name="author"
            value={bookData.author}
            onChange={handleChange}
            id="input-Bookauthor"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="thumbnail" text="Image Url" />
          <Input
            name="thumbnail"
            value={bookData.thumbnail}
            onChange={handleChange}
            id="input-Bookthumbnail"
            required={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <Label htmlFor="price" text="Price" />
            <Input
              name="price"
              value={bookData.price}
              onChange={handleChange}
              id="input-Bookprice"
              type="number"
              required={true}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="rating" text="Rating" />
            <Input
              name="rating"
              value={bookData.rating}
              onChange={handleChange}
              min="1"
              max="5"
              id="input-Bookrating"
              type="number"
              required={true}
            />
          </div>
        </div>

        <div className="flex items-center">
          <Checkbox
            name="featured"
            checked={bookData.featured}
            onChange={handleChange}
            id="input-Bookfeatured"
          />
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

export default BookForm;
