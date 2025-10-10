import { useDispatch } from "react-redux";
import { useState } from "react";
import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { addProduct } from "@/redux/products/actions";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: "",
    category: "",
    image: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        ...data,
        price: Number(data.price),
        quantity: Number(data.quantity),
      })
    );
    console.log(data);
    setData({
      title: "",
      category: "",
      image: "",
      price: "",
      quantity: "",
    });
  };

  return (
    <aside className="formContainer !bg-card text-foreground border-border">
      <h4 className="formTitle">Add New Product</h4>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 text-foreground"
        id="lws-addProductForm"
      >
        <div className="space-y-2">
          <Label htmlFor="lws-inputName" text="Product Name" />
          <Input
            name="title"
            value={data.title}
            onChange={handleChange}
            id="lws-inputName"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lws-inputCategory" text="Category" />
          <Input
            name="category"
            value={data.category}
            onChange={handleChange}
            id="lws-inputCategory"
            required={true}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lws-inputImage" text="Image Url" />
          <Input
            name="image"
            value={data.image}
            onChange={handleChange}
            id="lws-inputImage"
            required={true}
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <Label htmlFor="ws-inputPrice" text="Price" />
            <Input
              name="price"
              value={data.price}
              onChange={handleChange}
              id="lws-inputPrice"
              type="number"
              required={true}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lws-inputQuantity" text="Quantity" />
            <Input
              name="quantity"
              value={data.quantity}
              onChange={handleChange}
              id="lws-inputQuantity"
              type="number"
              required={true}
            />
          </div>
        </div>

        <Button
          type="submit"
          size="md"
          variant="primary"
          id="lws-inputSubmit"
          buttonClass="w-full justify-center"
        >
          Add Product
        </Button>
      </form>
    </aside>
  );
};

export default CreateProduct;
