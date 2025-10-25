import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "8px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
