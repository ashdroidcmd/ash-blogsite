import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <>
      <nav className="z-50 w-full border-b border-b-gray-700 bg-zinc-900 font-[Roboto] shadow-sm">
        <div className="navbar">
          {/* Navbar Start */}
          <div className="navbar-start flex flex-row items-center">
            
            <Link
              to="/"
              target="_blank"
              className="btn btn-ghost px-6 py-8 font-[Montserrat] text-4xl"
            >
              <img src="/logo.png" alt="Logo" className="h-14 w-14" />
              Blog
            </Link>
          </div>

          {/* Navbar End */}
          <div className="navbar-end">
            {/* Toggle button for small screens */}
            <label
              htmlFor="admin-drawer"
              className="btn btn-ghost drawer-button lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </label>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AdminNavbar;
