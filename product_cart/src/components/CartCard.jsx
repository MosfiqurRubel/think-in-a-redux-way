import { Minus, Plus, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import applePhoto from "@/assets/images/apple_1.avif";

const CartCard = () => {
  return (
    <div className="cartCard !bg-card border-border">
      <div className="flex items-center col-span-6 space-x-6">
        <img className="lws-cartImage" src={applePhoto} alt="product" />

        <div className="space-y-2">
          <h4 className="lws-cartName">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptop
          </h4>
          <p className="lws-cartCategory">Men's clothing</p>
          <p>
            BDT <span className="lws-cartPrice">1100</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            variant="icon"
            buttonClass="justify-center uppercase"
          >
            <Plus className="hover:stroke-primary/50" />
          </Button>
          <span className="lws-cartQuantity">2</span>
          <Button
            size="sm"
            variant="icon"
            buttonClass="justify-center uppercase"
          >
            <Minus className="hover:stroke-primary/50" />
          </Button>
        </div>

        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">2200</span>
        </p>
      </div>

      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button className="lws-removeFromCart cursor-pointer">
          <Trash className="stroke-red-400 hover:stroke-red-600" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
