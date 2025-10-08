import applePhoto from "@/assets/images/apple_1.avif";
import windowPhoto from "@/assets/images/windows_1.avif";

const Products = () => {
  return (
    <section className="productContainer" id="lws-productContainer">
      {/* product item */}
      <div className="lws-productCard">
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
          <button className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
      {/* product item ends */}

      {/* product item */}
      <div className="lws-productCard">
        <img className="lws-productImage" src={windowPhoto} alt="product" />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">Women Winter Clothes</h4>
          <p className="lws-productCategory">Tops</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">100</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">30</span>
            </p>
          </div>
          <button className="lws-btnAddToCart">Add To Cart</button>
        </div>
      </div>
      {/* product item ends */}
    </section>
  );
};

export default Products;
