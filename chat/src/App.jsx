import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";

import Home from "@/pages/Home";
import Add from "@/pages/Add";
// import Edit from "@/pages/Edit";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="add" element={<Add />} />
          {/* <Route path="books/edit/:bookId" element={<Edit />} /> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
