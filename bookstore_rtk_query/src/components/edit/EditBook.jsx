import { useParams } from "react-router-dom";
import { useGetBookQuery } from "@/features/api/apiSlice";
import Heading from "@/components/ui/Heading";
import Form from "./Form";
import BookLoader from "@/components/ui/loaders/BookLoader";
import Error from "@/components/ui/Error";

const EditBook = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  // decide what to render
  let content = null;

  if (isLoading) content = <BookLoader />;
  if (!isLoading && isError) content = <Error message="There was an error!" />;
  if (!isLoading && !isError && book?.id) content = <Form book={book} />;
  return (
    <>
      <Heading align="center" text="Edit Book" className="mb-8" />

      {content}
    </>
  );
};

export default EditBook;
