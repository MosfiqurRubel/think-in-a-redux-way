import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
// import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ThemeToggle />
      <Navbar isScrolled={isScrolled} />
      <main className="container lg:max-w-360 min-h-screen lg:flex mt-6 max-lg:space-y-10">
        <Sidebar />
        <div className="grow">
          <div className="lg:max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
