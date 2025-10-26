import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";

import AllJobs from "@/pages/AllJobs";
import EditJob from "@/pages/EditJob";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/components/NotFound";
import AddJob from "@/pages/AddJob";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="edit-job/:jobId" element={<EditJob />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
