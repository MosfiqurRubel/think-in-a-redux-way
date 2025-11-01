import Button from "@/components/ui/Button";
import SvgIcon from "@/components/ui/SvgIcon";
import Badge from "@/components/ui/Badge";
import Rating from "@/components/ui/Rating";
import Heading from "@/components/ui/Heading";

const Book = () => {
  return (
    <div className="book-card duration-300 hover:scale-105">
      <img
        className="h-60 w-[170px] object-cover"
        src="https://m.media-amazon.com/images/I/51Ga5GuElyL._SX331_BO1,204,203,200_.jpg"
        alt=""
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center">
          <Badge text="featured" size="sm" rounded="sm" outline />
          <div className="grow"></div>
          <div className="text-secondary-500 space-x-3">
            <Button size="auto">
              <SvgIcon
                name="edit"
                className="fill-none hover:text-primary-600"
              />
            </Button>
            <Button size="auto">
              <SvgIcon
                name="delete"
                className="fill-none hover:text-danger-500"
              />
            </Button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <Heading
            level={5}
            font
            text="Slow Horses (Deluxe Edition)"
            className="mb-2"
          />
          <p className="lws-author text-black">Mick Herron</p>
          <Rating rating={5} />
          <p className="lws-price">BDT 14</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
