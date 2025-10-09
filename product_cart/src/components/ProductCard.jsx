import applePhoto from "@/assets/images/apple_1.avif";
import Button from "@/components/ui/Button";

const ProductCard = () => {
  return (
    <div className="lws-productCard border-border">
      <img className="lws-productImage" src={applePhoto} alt="product" />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">Spring and summershoes</h4>
        <p className="lws-productCategory">Mens shoes</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">400</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">10</span>
          </p>
        </div>
        <Button
          type="submit"
          size="md"
          variant="primary"
          buttonClass="w-full justify-center"
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
