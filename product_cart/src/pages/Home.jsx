import Products from "@/components/Products";
import CreateProduct from "@/components/CreateProduct";

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <CreateProduct />
    </div>
  );
};

export default Home;
