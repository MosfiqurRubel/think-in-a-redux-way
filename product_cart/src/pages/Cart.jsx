import CartCard from "@/components/CartCard";
import BillDetailsCard from "@/components/BillDetailsCard";

const Cart = () => {
  return (
    <section className="container 2xl:px-8 px-2 mx-auto">
      <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
      <div className="cartListContainer">
        <div className="space-y-6">
          <CartCard />
        </div>

        <div>
          <BillDetailsCard />
        </div>
      </div>
    </section>
  );
};

export default Cart;
