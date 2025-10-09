import Label from "@/components/ui/Label";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const CreateProduct = () => {
  return (
    <aside>
      <div className="formContainer !bg-card text-foreground border-border">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-foreground" id="lws-addProductForm">
          <div className="space-y-2">
            <Label htmlFor="lws-inputName" text="Product Name" />
            <Input id="lws-inputName" required={true} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lws-inputCategory" text="Category" />
            <Input id="lws-inputCategory" required={true} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="lws-inputImage" text="Image Url" />
            <Input id="lws-inputImage" required={true} />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <Label htmlFor="ws-inputPrice" text="Price" />
              <Input id="lws-inputPrice" type="number" required={true} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lws-inputQuantity" text="Quantity" />
              <Input id="lws-inputQuantity" type="number" required={true} />
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
      </div>
    </aside>
  );
};

export default CreateProduct;
