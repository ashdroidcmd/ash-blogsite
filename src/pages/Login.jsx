import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await userCredential.user.getIdToken(true);

      navigate("/admin/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 font-[Roboto]">
      <fieldset className="fieldset rounded-box w-full max-w-xs border border-gray-700 bg-zinc-900 p-4">
        <label className="label text-xl text-gray-100">Email</label>
        <input
          type="email"
          className="input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="label mt-4 text-xl text-gray-100">Password</label>
        <input
          type="password"
          className="input mb-4"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="btn bg-zinc-400 font-[Montserrat] text-lg text-black"
        >
          Login
        </button>
      </fieldset>
    </section>
  );
};

export default Login;
