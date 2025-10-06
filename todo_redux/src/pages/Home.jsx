import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/BookingList";
import Header from "@/components/Header";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="grid place-items-center h-screen px-6 font-sans">
      <ThemeToggle />
      <Navbar />
      {/* <BookingForm />
      <BookingList /> */}
      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Header />
        <hr className="mt-4" />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
