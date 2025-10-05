import Navbar from "@/components/Navbar";
import BookingForm from "@/components/BookingForm";
import BookingList from "@/components/BookingList";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <BookingForm />

        <BookingList />
      </section>
    </>
  );
}

export default App;
