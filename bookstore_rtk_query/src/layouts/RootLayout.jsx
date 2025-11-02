import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RootLayout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

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
      <Navbar isScrolled={isScrolled} search={search} setSearch={setSearch} />
      <main
        className={cn(
          "pt-32 pb-3 container min-h-full mx-auto",
          isScrolled && "pt-[137px]"
        )}
      >
        <Outlet context={{ search }} />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
