import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import useAuth from "../../hooks/useAuth";

const AdminSidebar = ({ collapsed }) => {
  const user = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      alert("Logout failed: " + error.message);
    }
  };

  return (
    <ul
      className={`menu text-base-content min-h-full space-y-2 border-e border-e-gray-700 bg-zinc-900 p-4 text-xl ${
        collapsed ? "w-20" : "w-80"
      }`}
    >
      <li>
        <Link title="Dashboard">
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house-icon lucide-house"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          ) : (
            "Dashboard"
          )}
        </Link>
      </li>

      <li>
        <Link title="Posts">
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-plus-icon lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          ) : (
            "Posts"
          )}
        </Link>
      </li>

      <li>
        <Link title="Analytics">
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-chart-column-icon lucide-chart-column"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16" />
              <path d="M18 17V9" />
              <path d="M13 17V5" />
              <path d="M8 17v-3" />
            </svg>
          ) : (
            "Analyics"
          )}
        </Link>
      </li>

      <li>
        <Link title="Backup">
          {collapsed ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-database-backup-icon lucide-database-backup"
            >
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 12a9 3 0 0 0 5 2.69" />
              <path d="M21 9.3V5" />
              <path d="M3 5v14a9 3 0 0 0 6.47 2.88" />
              <path d="M12 12v4h4" />
              <path d="M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16" />
            </svg>
          ) : (
            "Backups"
          )}
        </Link>
      </li>

      {/* Logout Button */}
      <li>
        {user ? (
          <button
            title="Logout"
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-out"
              >
                <path d="m16 17 5-5-5-5" />
                <path d="M21 12H9" />
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              </svg>
            ) : (
              "Logout"
            )}
          </button>
        ) : (
          <Link title="Login" to="/login">
            {collapsed ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-log-in"
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" x2="3" y1="12" y2="12" />
              </svg>
            ) : (
              "Login"
            )}
          </Link>
        )}
      </li>
    </ul>
  );
};

export default AdminSidebar;
