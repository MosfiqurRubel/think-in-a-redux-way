import Button from "@/components/ui/Button";
import SvgIcon from "@/components/ui/SvgIcon";
import Badge from "@/components/ui/Badge";
import Rating from "@/components/ui/Rating";
import Heading from "@/components/ui/Heading";

const BookCard = ({ book, onEdit, onDelete }) => {
  const { id, name, author, thumbnail, price, rating, featured } = book;

  return (
    <div className="book-card duration-300 hover:scale-[1.03]">
      <img
        className="h-60 w-[170px] object-cover"
        src={thumbnail}
        alt={author}
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center">
          {featured && <Badge text="featured" size="sm" rounded="sm" outline />}
          <div className="grow"></div>
          <div className="text-secondary-500 space-x-3">
            <Button
              onClick={() => onEdit(book)}
              size="icon"
              className="cursor-pointer"
            >
              <SvgIcon
                name="edit"
                className="fill-none hover:text-primary-600"
              />
            </Button>
            <Button
              onClick={() => onDelete(id)}
              size="icon"
              className="cursor-pointer"
            >
              <SvgIcon
                name="delete"
                className="fill-none hover:text-danger-500"
              />
            </Button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <Heading level={5} font text={name} className="mb-2" />
          <p className="lws-author text-black">{author}</p>
          <Rating rating={rating} />
          <p className="lws-price">BDT {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
