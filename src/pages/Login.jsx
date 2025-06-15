import { useForm } from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      );

      await userCredential.user.getIdToken(true);
      navigate("/admin/dashboard");
    } catch (error) {
      alert("Login failed: " + error.message);
    }
  };

  return (
    <>
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 font-[Roboto]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="fieldset rounded-box w-full max-w-xs border border-gray-700 bg-zinc-900 p-4"
        >
          <label className="label text-xl text-gray-100">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
          )}

          <label className="label mt-4 text-xl text-gray-100">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input mb-2"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="mb-2 text-sm text-red-400">
              {errors.password.message}
            </p>
          )}

          <button
            type="submit"
            className="btn mt-2 bg-zinc-400 font-[Montserrat] text-lg text-black"
          >
            Login
          </button>
        </form>
      </section>
    </>
  );
};

export default Login;
