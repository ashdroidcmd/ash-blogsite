import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

// Layouts
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

// Utils
import ScrollToTop from "./utils/ScrollToTop";

// Common Pages
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import Login from "./pages/Login";

// Admin Pages
import AdminRoute from "./routes/AdminRoute";
import Dashboard from "./pages/admin/Dashboard";
import AdminPosts from "./pages/admin/AdminPosts";
import CreatPosts from "./pages/admin/CreatPosts";

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
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin-posts" element={<AdminPosts />} />
          <Route path="create-posts" element={<CreatPosts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
