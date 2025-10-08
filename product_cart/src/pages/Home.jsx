import Products from "@/components/Products";
// import Header from "@/components/Header";
// import TodoList from "@/components/TodoList";
// import Footer from "@/components/Footer";
import ProductForm from "@/components/ProductForm";

const Home = () => {
  return (
    <div className="productWrapper">
      <Products />
      <ProductForm />
    </div>
  );
};

export default Home;
