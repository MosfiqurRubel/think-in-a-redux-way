import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

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
          "pt-[142px] pb-16 min-h-full mx-auto",
          isScrolled && "pt-[142px]"
        )}
      >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
