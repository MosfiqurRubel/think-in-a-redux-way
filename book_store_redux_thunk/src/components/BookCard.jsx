import Button from "@/components/ui/Button";
import SvgIcon from "@/components/ui/SvgIcon";
import Badge from "@/components/ui/Badge";

const BookCard = () => {
  return (
    <div className="book-card">
      <img
        className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
        src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
        alt="book"
      />
      <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
        <div className="flex items-center justify-between">
          <Badge
            text="featured"
            size="sm"
            variant="custom"
            rounded="sm"
            outline
          />
          <div className="text-gray-500 space-x-3">
            <Button size="icon" className="cursor-pointer">
              <SvgIcon name="edit" className="fill-none hover:text-primary" />
            </Button>
            <Button size="icon" className="cursor-pointer">
              <SvgIcon name="delete" className="fill-none hover:text-red-500" />
            </Button>
          </div>
        </div>

        <div className="space-y-2 mt-4 h-full">
          <h4 className="lws-bookName">
            Life Hurts: A Doctor's Personal Journey Through Anorexia
          </h4>
          <p className="lws-author">Dr Elizabeth McNaught</p>
          <div className="lws-stars">
            <SvgIcon
              name="star"
              className="w-4 h-4 text-yellow-400 hover:text-yellow-500"
            />
            <SvgIcon
              name="star"
              className="w-4 h-4 text-yellow-400 hover:text-yellow-500"
            />
            <SvgIcon
              name="star"
              className="w-4 h-4 text-yellow-400 hover:text-yellow-500"
            />
          </div>
          <p className="lws-price">BDT 14</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
