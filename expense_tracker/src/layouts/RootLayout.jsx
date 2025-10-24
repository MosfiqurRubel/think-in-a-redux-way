import { Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ThemeToggle />
      <Navbar />
      <main className="grow flex justify-center">
        <div className="w-full max-w-5xl flex flex-col items-center gap-6 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
