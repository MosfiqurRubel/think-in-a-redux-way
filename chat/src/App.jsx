import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/layouts/RootLayout";
import ProtectedRoute from "@/layouts/ProtectedRoute"; // ✅ import করো

import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Conversation from "@/pages/Conversation";
import Inbox from "@/pages/Inbox";
import NotFound from "@/components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Public Routes */}
          <Route index element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/inbox" element={<Conversation />} />
            <Route path="/inbox/:id" element={<Inbox />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
