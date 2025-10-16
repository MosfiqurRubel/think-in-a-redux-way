import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateBook } from "@/redux/books/actions";
import addBook from "@/redux/books/thunk/addBook";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Checkbox from "@/components/ui/Checkbox";

const BookForm = ({ editBook, setEditBook }) => {
  const dispatch = useDispatch();

  const empty = {
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  };

  const [bookData, setBookData] = useState(empty);

  // ✅ যদি editBook আসে, তাহলে form-এ auto fill হবে
  useEffect(() => {
    setBookData(editBook || empty);
  }, [editBook]);

  // form input গুলোর checkbox handler আলাদা ভাবে কাজ করে — checkbox এর জন্য e.target.checked নিতে হয়, e.target.value না।
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setBookData({
      ...bookData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("e---", bookData);
    const payload = {
      ...bookData,
      price: Number(bookData.price),
      rating: Number(bookData.rating || 0),
      featured: Boolean(bookData.featured),
    };

    if (editBook) {
      dispatch(updateBook(payload));
      setEditBook(null); // Reset edit mode
    } else {
      // dispatch action
      dispatch(addBook(payload));
    }

    console.log("e---", bookData);

    // reset form
    setBookData(empty);
  };

  return (
    <aside className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <Heading
        text={editBook ? "Update Book" : "Add New Book"}
        className="mb-8 text-center"
      />

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
          {editBook ? "Update Book" : "Add New Book"}
        </Button>
      </form>
    </aside>
  );
};

export default BookForm;
