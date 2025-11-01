import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "@/features/api/apiSlice";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";
import Success from "@/components/ui/Success";
import Error from "@/components/ui/Error";

const Add = () => {
  const navigate = useNavigate();
  const [addBook, { data: book, isLoading, isSuccess, isError }] =
    useAddBookMutation();

  const empty = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };

  const [bookData, setBookData] = useState(empty);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    const payload = {
      ...bookData,
      [name]: type === "checkbox" ? checked : value,
    };
    setBookData(payload);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookData);

    const payload = {
      ...bookData,
      price: Number(bookData.price),
      rating: Number(bookData.rating || 0),
      featured: Boolean(bookData.featured),
    };

    addBook(payload);

    setBookData(empty);
    navigate("/");
  };

  return (
    <aside className="max-w-xl bg-white p-8 mx-auto overflow-hidden shadow-xs rounded-md">
      <Heading align="center" text="Add New Book" className="mb-8" />

      <form onSubmit={handleSubmit} className="book-form">
        <Input
          label="Book Name"
          name="name"
          value={bookData.name}
          onChange={handleChange}
          required
        />

        <Input
          label="Author"
          name="author"
          value={bookData.author}
          onChange={handleChange}
          required
        />

        <Input
          label="Image Url"
          name="thumbnail"
          value={bookData.thumbnail}
          onChange={handleChange}
          required
        />
        <div className="grid grid-cols-2 gap-8 pb-4">
          <Input
            type="number"
            label="Price"
            name="price"
            value={bookData.price}
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            label="Rating"
            min="1"
            max="5"
            name="rating"
            value={bookData.rating}
            onChange={handleChange}
            required
          />
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
          disabled={isLoading}
          size="md"
          variant="primary"
          id="submit"
          text="Add New Book"
          className="w-full justify-center"
        />
      </form>

      {isSuccess && <Success message="Book was added successfully" />}
      {isError && <Error message="There was an error adding book" />}
    </aside>
  );
};

export default Add;
