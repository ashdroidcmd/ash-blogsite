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
    <ul className="menu text-base-content min-h-full w-80 border-e border-e-gray-700 bg-zinc-900 p-4">
      <li>
        <a>{collapsed ? "🏠" : "Dashboard"}</a>
      </li>
      <li>
        <a>{collapsed ? "➕" : "Posts"}</a>
      </li>
      <li>
        <a>Analytics </a>
      </li>
      <li>
        <a>Backups</a>
      </li>
      <li>
        {user ? (
          <button
            onClick={handleLogout}
            className="btn bg-red-500 font-[Montserrat] text-lg text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn bg-zinc-400 font-[Montserrat] text-lg text-black">
              Login
            </button>
          </Link>
        )}
      </li>
    </ul>
  );
};

export default AdminSidebar;
