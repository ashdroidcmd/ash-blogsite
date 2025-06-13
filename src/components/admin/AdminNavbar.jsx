import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <nav className="z-50 lg:fixed w-full border-b border-b-gray-700 bg-zinc-900 font-[Roboto] shadow-sm">
        <div className="navbar">
          <div className="navbar-start flex flex-row items-center">
            
            {/* Toggle button for small screens */}
            <label
              htmlFor="admin-drawer"
              className="btn btn-primary drawer-button m-4 lg:hidden"
            >
              Open Sidebar
            </label>
            
            <Link
              to="/"
              target="_blank"
              className="btn btn-ghost px-6 py-8 font-[Montserrat] text-4xl"
            >
              <img src="/logo.png" alt="Logo" className="h-14 w-14" />
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
