import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import Wishlist from "@/pages/Wishlist";
import MyCollection from "@/pages/MyCollection";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="mycollection" element={<MyCollection />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
