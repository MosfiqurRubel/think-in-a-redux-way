import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      <main
        className={cn(
          "pt-0 pb-3 2xl:px-6 min-h-full mx-auto",
          isScrolled && "pt-16.5"
        )}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
