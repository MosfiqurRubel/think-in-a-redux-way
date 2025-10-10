import { useSelector } from "react-redux";
import CartCard from "@/components/CartCard";
import BillDetailsCard from "@/components/BillDetailsCard";

const Cart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  console.log(totalAmount, "cartItems");

  return (
    <section className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="cartListContainer">
          <div className="space-y-6">
            {cartItems.map((cartItem) => (
              <CartCard key={cartItem.id} cartItem={cartItem} />
            ))}
          </div>

          <div>
            <BillDetailsCard totalAmount={totalAmount} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
