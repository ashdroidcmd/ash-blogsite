import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <>
      {/* add /ash-blogsite if in dev mode */}
      <BrowserRouter basename="/">
        <Analytics />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/add-blog" element={<AddBlog />} />
            <Route path="/projects/:slug" element={<PostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
