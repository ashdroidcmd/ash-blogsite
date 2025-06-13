import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminRoute from "./routes/AdminRoute";

function App() {
  return (
    <BrowserRouter basename="/">
      <Analytics />
      <ScrollToTop />
      <Routes>
        {/* Public routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />} />
          <Route path="projects/:slug" element={<PostPage />} />
        </Route>

        {/* Admin routes with AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
