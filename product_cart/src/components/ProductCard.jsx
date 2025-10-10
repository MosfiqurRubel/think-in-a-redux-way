import { useDispatch } from "react-redux";
import { addToCart, calculateTotal } from "@/redux/cart/actions";
import { decreaseProductQty } from "@/redux/products/actions";
import Button from "@/components/ui/Button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { title, category, image, price, quantity } = product;

  const handleClick = (product) => {
    console.log("show product--- ", product);
    if (product.quantity > 0) {
      dispatch(addToCart(product));
      dispatch(decreaseProductQty(product.id));
      dispatch(calculateTotal());
    }
  };

  return (
    <div className="lws-productCard border-border">
      <img className="lws-productImage" src={image} alt={title} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <Button
          onClick={() => handleClick(product)}
          disabled={quantity <= 0}
          size="md"
          variant="primary"
          buttonClass="w-full justify-center"
        >
          {quantity <= 0 ? "Out of Stock" : "Add To Cart"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
