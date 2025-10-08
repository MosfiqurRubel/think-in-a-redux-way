const ProductForm = () => {
  return (
    <aside>
      <div className="formContainer !bg-card text-foreground">
        <h4 className="formTitle">Add New Product</h4>
        <form className="space-y-4 text-foreground" id="lws-addProductForm">
          {/* product name */}
          <div className="space-y-2">
            <label for="lws-inputName">Product Name</label>
            <input
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          {/* product category */}
          <div className="space-y-2">
            <label for="lws-inputCategory">Category</label>
            <input
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          {/* product image url */}
          <div className="space-y-2">
            <label for="lws-inputImage">Image Url</label>
            <input
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          {/* price & quantity container */}
          <div className="grid grid-cols-2 gap-8 pb-4">
            {/* price */}
            <div className="space-y-2">
              <label for="ws-inputPrice">Price</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            {/* quantity */}
            <div className="space-y-2">
              <label for="lws-inputQuantity">Quantity</label>
              <input
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          {/* submit button */}
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </aside>
  );
};

export default ProductForm;
