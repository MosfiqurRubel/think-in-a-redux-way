import { useSelector } from "react-redux";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const productList = useSelector((state) => state.products.products);
  console.log(productList, "fdfds");

  return (
    <section className="productContainer" id="lws-productContainer">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Products;
