import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import Cart from "@/pages/Cart";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
