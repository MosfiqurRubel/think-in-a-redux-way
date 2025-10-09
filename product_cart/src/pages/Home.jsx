import Products from "@/components/Products";
// import Header from "@/components/Header";
// import TodoList from "@/components/TodoList";
// import Footer from "@/components/Footer";
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
