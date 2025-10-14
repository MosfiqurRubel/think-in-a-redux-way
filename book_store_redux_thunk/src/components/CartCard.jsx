import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  removeFromCart,
  calculateTotal,
  decrementQty,
  incrementQty,
} from "@/redux/cart/actions";
import {
  decreaseProductQty,
  increaseProductQty,
} from "@/redux/products/actions";
import { increaseProductQtyBulk } from "../redux/products/actions";

const CartCard = ({ cartItem }) => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.products);
  const currentProduct = productsList.find((p) => p.id === cartItem.id);
  const currentStock = currentProduct?.quantity || 0;

  const { title, category, image, price, quantity } = cartItem;

  const handleIncrement = (id) => {
    if (currentStock > 0) {
      dispatch(incrementQty(id));
      dispatch(decreaseProductQty(id)); // ✅ stock কমাও
      dispatch(calculateTotal());
    }
  };

  const handleDecrement = (id) => {
    dispatch(decrementQty(id));
    dispatch(increaseProductQty(id)); // ✅ stock ফেরত দাও
    dispatch(calculateTotal());
  };

  const handleRemove = (id, quantity) => {
    dispatch(removeFromCart(id));
    // // ✅ যদি delete করা হয়, তাহলে সেই quantity ফেরত পণ্য stock এ যোগ হবে
    // for (let i = 0; i < quantity; i++) {
    //   dispatch(increaseProductQty(id));
    // }

    dispatch(increaseProductQtyBulk(id, quantity)); // একসাথে quantity ফেরত
    dispatch(calculateTotal());
  };

  return (
    <div className="cartCard !bg-card border-border">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={image} alt={title} />

        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => handleIncrement(cartItem.id)}
            disabled={currentStock <= 0}
            size="sm"
            variant="icon"
            buttonClass="justify-center uppercase"
          >
            <Plus className="hover:stroke-primary/50" />
          </Button>
          <span className="lws-cartQuantity">{quantity}</span>
          <Button
            onClick={() => handleDecrement(cartItem.id)}
            size="sm"
            variant="icon"
            buttonClass="justify-center uppercase"
          >
            <Minus className="hover:stroke-primary/50" />
          </Button>
        </div>

        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{price * quantity}</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <Button
          onClick={() => handleRemove(cartItem.id, quantity)}
          size="sm"
          variant="icon"
          buttonClass="justify-center uppercase"
        >
          <Trash className="stroke-red-400 hover:stroke-red-600" />
        </Button>
      </div>
    </div>
  );
};

export default CartCard;
