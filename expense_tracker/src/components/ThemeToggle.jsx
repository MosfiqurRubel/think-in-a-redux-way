import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={cn(
        "fixed max-sm:hidden bottom-20 right-4 z-[999] inline-flex items-center justify-center gap-2 bg-card text-text p-3 font-medium cursor-pointer rounded-full transition-colors focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
      )}
    >
      {darkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-gray-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
