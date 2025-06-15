import ListPosts from "../../components/admin/ListPosts";
import { Link } from "react-router-dom";

const AdminPosts = () => {
  return (
    <>
      <section className="min-h-dvh bg-zinc-950 font-[Roboto]">
        {/* Introduction */}
        <div className="border-b border-b-gray-700">
          <div className="flex flex-row items-center justify-between p-4">
            <h1 className="my-2 font-[Montserrat] text-xl font-semibold md:text-4xl">
              Posts
            </h1>
            <Link to="/admin/create-posts">
              <button className="btn md:text-4xlfont-semibold my-2 bg-zinc-400 py-6 font-[Montserrat] text-xl text-black">
                Create
              </button>
            </Link>
          </div>
        </div>

        {/* List Posts */}
        <ListPosts />
      </section>
    </>
  );
};

export default AdminPosts;
