import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
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
    <>
      <nav className="fixed z-50 w-full border-b border-b-gray-700 bg-zinc-900 font-[Roboto] shadow-sm">
        <div className="navbar mx-auto max-w-7xl">
          <div className="navbar-start flex flex-row items-center">
            <Link
              to="/"
              className="btn btn-ghost px-6 py-8 font-[Montserrat] text-4xl"
            >
              <img src="/logo.png" alt="Logo" className="h-14 w-14" />
              Blog
            </Link>
          </div>

          <div className="navbar-end">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
