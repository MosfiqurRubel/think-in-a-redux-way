import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
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
