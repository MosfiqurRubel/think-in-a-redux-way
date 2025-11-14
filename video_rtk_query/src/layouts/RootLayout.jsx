import { Outlet, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

const RootLayout = () => {
  const location = useLocation();
  const hideNavbarRoutes = ["/", "/register"];
  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <ThemeToggle />
      {!shouldHideNavbar && <Navigation />}
      <main
        className={`${
          shouldHideNavbar ? "pt-0" : "pt-16"
        } container min-h-screen mx-auto`}
      >
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
