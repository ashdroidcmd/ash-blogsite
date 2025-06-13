import { useState } from "react";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminNavbar from "../components/admin/AdminNavbar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`drawer lg:drawer-open min-h-screen`}>
      <input id="admin-drawer" type="checkbox" className="drawer-toggle" />

      {/* Sidebar */}
      <div className={`drawer-side`}>
        <label
          htmlFor="admin-drawer"
          className="drawer-overlay lg:hidden"
        ></label>
        <div
          className={`bg-base-200 min-h-screen transition-all duration-300 ${collapsed ? "w-20" : "w-80"}`}
        >
          {/* Collapse Button */}
          <div className="p-2">
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="btn btn-sm btn-ghost"
            >
              {collapsed ? "➡" : "⬅"}
            </button>
          </div>
          <AdminSidebar collapsed={collapsed} />
        </div>
      </div>

      {/* Main Content */}
      <div className={`drawer-content bg-zinc-950 text-white`}>
        

        <AdminNavbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
